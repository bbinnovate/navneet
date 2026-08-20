'use client';

import { useAuth } from '@/lib/firebase/auth';

export default function SettingsPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900 font-montserrat">Account Settings</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 space-y-6">
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-medium text-gray-900">Profile Information</h3>
            <p className="mt-1 text-sm text-gray-500">
              Details about your administrator account.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <div className="mt-2 text-sm text-gray-900 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
                {user?.email}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Account ID</label>
              <div className="mt-2 text-sm text-gray-500 font-mono bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
                {user?.uid}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                Super Admin
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
