'use client';

import { useState } from 'react';

interface ContentEditorProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

export default function ContentEditor({ value, onChange, placeholder }: ContentEditorProps) {
  // We use a simple textarea for now as a fallback if rich text editor isn't available.
  // In production, you would drop in a library like react-quill or tiptap here.
  return (
    <div className="w-full">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || 'Write your content here (supports Markdown/HTML depending on frontend renderer)...'}
        className="w-full min-h-[300px] p-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none resize-y"
      />
      <p className="text-xs text-gray-500 mt-2">
        Note: The content area currently uses a basic text editor. For rich text features, integrate a library like React Quill.
      </p>
    </div>
  );
}
