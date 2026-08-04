"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';

function PlaceholderServicePage() {
  const { serviceId } = useParams();
  
  const title = serviceId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="page-content service-details-page animate-fade-in-up" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container text-center">
        <h1>{title}</h1>
        <p className="lead" style={{ margin: '2rem 0' }}>
          Detailed content for {title} will be added here soon.
        </p>
        <Link href="/apply" className="btn btn-primary">Check Eligibility Now</Link>
      </div>
    </div>
  );
}

export default PlaceholderServicePage;
