import UsersClient from './UsersClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User Management',
  description: 'Manage admin portal user accounts, roles, and authorization privileges',
};

export default function UsersPage() {
  return <UsersClient />;
}
