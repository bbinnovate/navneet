'use client';

import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '@/lib/firebase/config';
import { Image as ImageIcon, Loader2, X } from 'lucide-react';
import toast from 'react-hot-toast';

interface ImageUploaderProps {
  onUpload: (url: string) => void;
  defaultImage?: string;
  folder?: string;
}

export default function ImageUploader({ onUpload, defaultImage, folder = 'uploads' }: ImageUploaderProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(defaultImage || null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB');
      return;
    }

    const storageRef = ref(storage, `${folder}/${Date.now()}_${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    setUploading(true);
    setProgress(0);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const p = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(p);
      },
      (error) => {
        console.error(error);
        toast.error('Failed to upload image');
        setUploading(false);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setImageUrl(downloadURL);
        onUpload(downloadURL);
        setUploading(false);
        toast.success('Image uploaded successfully');
      }
    );
  };

  const removeImage = () => {
    setImageUrl(null);
    onUpload('');
  };

  return (
    <div className="w-full">
      {imageUrl ? (
        <div className="relative inline-block">
          <img 
            src={imageUrl} 
            alt="Uploaded preview" 
            className="h-48 w-auto rounded-lg object-cover border border-gray-200"
          />
          <button
            type="button"
            onClick={removeImage}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 shadow-sm"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 relative">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            {uploading ? (
              <>
                <Loader2 className="w-8 h-8 text-blue-500 animate-spin mb-2" />
                <p className="text-sm text-gray-500">Uploading... {Math.round(progress)}%</p>
              </>
            ) : (
              <>
                <ImageIcon className="w-8 h-8 text-gray-400 mb-2" />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 5MB)</p>
              </>
            )}
          </div>
          <input 
            type="file" 
            className="hidden" 
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
          />
        </label>
      )}
    </div>
  );
}
