export const metadata = { title: "Gold Loan Services", description: "Quick gold loans." };
import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import { IconShield, IconZap, IconWallet, IconCoins, IconPercent, IconLayers } from '@/components/Icons';

const GoldLoanPage = () => {
  const features = [
    {
      icon: <IconShield />,
      title: 'Secured Loan',
      description: 'Backed by gold collateral, reducing lender risk and leading to lower interest rates.',
    },
    {
      icon: <IconZap />,
      title: 'Quick Processing',
      description: 'Fast approval and disbursement - get funds when you need them most.',
    },
    {
      icon: <IconWallet />,
      title: 'Flexible Loan Amount',
      description: 'Loan amount determined based on the value of your pledged gold.',
    },
    {
      icon: <IconCoins />,
      title: 'Instant Liquidity',
      description: 'Access funds quickly without the need to sell your precious gold.',
    },
    {
      icon: <IconPercent />,
      title: 'Lower Interest Rates',
      description: 'Secured nature of the loan leads to competitive interest rates.',
    },
    {
      icon: <IconLayers />,
      title: 'Versatile Use',
      description: 'No restrictions on how loan funds are used - complete financial flexibility.',
    },
  ];

  const tabs = [
    {
      id: 'general',
      label: 'General Eligibility',
      eligibility: [
        'Age: 18 years or older',
        'Must own the gold being pledged',
        'Gold should meet lender purity standards',
        'Valid government-issued ID for verification',
      ],
      documents: [
        'Identity & Signature Proof (Voter ID, Passport, Aadhaar, DL, PAN)',
        'Employee Identity Card (government employees)',
        'Address Proof (Rent Agreement, Bank Statement, Voter ID, Utility Bills)',
        'Two post-dated cheques for security purposes',
        'Passport-size photographs',
      ],
    },
  ];

  const feesData = [
    { particular: 'Loan Processing Fees', charge: '0.2% to 0.6% of loan amount' },
    { particular: 'Loan Cancellation', charge: '1%' },
    { particular: 'Stamp Duty Charges', charge: 'As per actuals' },
    { particular: 'Legal Fees', charge: 'Nil' },
    { particular: 'Penal Charges', charge: 'Nil' },
  ];

  return (
    <ServiceDetailLayout
      title="Gold Loan Services"
      subtitle="Access instant liquidity by pledging your gold without selling it. Enjoy lower interest rates and quick processing with our gold loan services."
      features={features}
      loanType="gold"
      emiDescription="A Gold Loan EMI calculator helps you estimate monthly installments based on the principal amount, interest rate, and tenure."
      tabs={tabs}
      feesData={feesData}
      feesNote="Other fees and charges that lenders may levy on your gold loan include documentation charges, verification charges, duplicate statement charges, NOC certificate charges and swap."
    />
  );
};

export default GoldLoanPage;
