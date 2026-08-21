import CareerFormClient from './CareerFormClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career Opportunity Editor',
  description: 'Create, edit, and configure career job openings and vacancies',
};

export default function CareerFormPage() {
  return <CareerFormClient />;
}
