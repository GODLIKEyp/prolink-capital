export const metadata = { title: "Car Loan Services", description: "Drive your dream car." };
import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import { IconZap, IconClock, IconPercent, IconCar, IconKey } from '@/components/Icons';

const CarLoanPage = () => {
  const features = [
    {
      icon: <IconZap />,
      title: 'Immediate Funds',
      description: 'Access funds quickly with fast processing and minimal documentation.',
    },
    {
      icon: <IconClock />,
      title: 'Flexible Tenures',
      description: 'Choose loan tenures that fit your repayment capacity and budget.',
    },
    {
      icon: <IconPercent />,
      title: 'Fixed Interest Rates',
      description: 'Lock in competitive fixed interest rates for predictable monthly payments.',
    },
    {
      icon: <IconCar />,
      title: 'New & Used Cars',
      description: 'Financing available for both brand-new vehicles and pre-owned cars.',
    },
    {
      icon: <IconKey />,
      title: 'Ownership from Day One',
      description: 'The car is yours from the moment of purchase - no waiting period.',
    },
  ];

  const tabs = [
    {
      id: 'salaried',
      label: 'Salaried Individuals',
      eligibility: [
        'Age: 21 to 60 years at end of loan tenure',
        'Minimum 2 years work experience',
        'At least 1 year with current employer',
        'Minimum earning of Rs. 3,00,000 per year (including spouse/co-applicant)',
        'Good credit score (650 or above)',
      ],
      documents: [
        'KYC documents (Valid Photo ID Proofs)',
        'PAN Card',
        'Last 2 years ITR as proof of income',
        'Salary Slip (latest 3 months)',
        'Salary account statement (latest 6 months)',
        'Signature Verification Proof',
      ],
    },
    {
      id: 'self-employed',
      label: 'Self-Employed',
      eligibility: [
        'Age: 21 to 65 years at end of loan tenure',
        'Minimum 2 years in business',
        'Minimum earning of Rs. 3,000,000 per year',
        'Good credit score (650 or above)',
        'Stable business income',
      ],
      documents: [
        'KYC documents (Valid Photo ID Proofs)',
        'PAN Card',
        'Last 2 years ITR',
        'Business proof documents',
        'Bank account statement (latest 6 months)',
        'Signature Verification Proof',
      ],
    },
  ];

  const feesData = [
    { particular: 'Loan Processing Fees', charge: '1.5% to 4% of loan amount' },
    { particular: 'Loan Cancellation', charge: 'Usually around Rs 5,000' },
    { particular: 'Stamp Duty Charges', charge: 'As per actuals' },
    { particular: 'Legal Fees', charge: 'As per actuals' },
    { particular: 'Penal Charges', charge: 'Usually @ 2% per month; 24% p.a.' },
    { particular: 'EMI / Cheque Bounce Charges', charge: 'Around Rs 400 per bounce' },
  ];

  return (
    <ServiceDetailLayout
      title="Car Loan Services"
      subtitle="Drive your dream car with quick approvals and flexible repayment options. We help you find the best car financing for new and used vehicles."
      features={features}
      loanType="car"
      emiDescription="An EMI calculator helps you estimate the monthly installments for your Car Loan. Plan your finances better before finalizing."
      tabs={tabs}
      feesData={feesData}
      feesNote="Other fees and charges that lenders may levy on your car loan include documentation charges, verification charges, duplicate statement charges, NOC certificate charges and swap."
    />
  );
};

export default CarLoanPage;
