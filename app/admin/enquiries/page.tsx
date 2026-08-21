import EnquiriesClient from './EnquiriesClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Enquiries',
  description: 'View and manage website contact form submissions and school demo inquiries',
};

export default function EnquiriesPage() {
  return <EnquiriesClient />;
}
