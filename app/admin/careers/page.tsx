import CareersListClient from './CareersListClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers Management',
  description: 'Manage job vacancies and open career opportunities at NAVNEET TOPTECH',
};

export default function CareersAdminPage() {
  return <CareersListClient />;
}
