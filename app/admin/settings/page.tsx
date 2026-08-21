import SettingsClient from './SettingsClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Settings',
  description: 'Manage admin portal preferences, profile configurations, and portal security options',
};

export default function SettingsPage() {
  return <SettingsClient />;
}
