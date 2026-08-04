export const metadata = { title: "Home Loan Services", description: "Get the best home loan rates from 30+ partner banks with zero consultancy fees." };
import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import { IconHome, IconBuilding, IconKey, IconGlobe } from '@/components/Icons';

const HomeLoanPage = () => {
  const features = [
    {
      icon: <IconHome />,
      title: 'Home Construction Loan',
      description: 'If you have a plot of land and lack financial support to construct a home, you may choose a house construction loan.',
    },
    {
      icon: <IconBuilding />,
      title: 'Home Extension Loan',
      description: 'Need to extend your building, add an annexe, or build another floor? Home Extension Loan finances such needs.',
    },
    {
      icon: <IconKey />,
      title: 'Home Improvement Loan',
      description: 'From old furniture and fixtures to faulty systems, Home Improvement Loan funds all your upgrade plans.',
    },
    {
      icon: <IconGlobe />,
      title: 'NRI Home Loan',
      description: 'Non-Resident Indians who wish to own residential property in India can leverage NRI Home Loan options.',
    },
  ];

  const tabs = [
    {
      id: 'salaried',
      label: 'Salaried Individuals',
      eligibility: [
        'Age: 21 to 58 years',
        'Minimum income: Rs. 10,000 per month',
        'Minimum 2-3 years of experience in MNC or Private/Public Limited Company',
        'Credit score of 750 or above recommended',
      ],
      documents: [
        'Form 16',
        'Employee Identity Card',
        '3 Months Salary Slip',
        '6 Month Bank Account Statement',
        'Duration of Employment Evidence',
      ],
    },
    {
      id: 'self-employed',
      label: 'Self-Employed',
      eligibility: [
        'Age: 25 to 65 years',
        'Minimum income: Rs. 2,00,000 per year',
        'Minimum 3 years of experience in current field',
        'Credit score of 750 or above recommended',
      ],
      documents: [
        'PAN, Trade License, Partnership Deed',
        'Article of Association, Memorandum of Association',
        'Financial Statement Audited by CA',
        'Profit & Loss Account Statement, Balance Sheet',
        '6 Months Bank Account Statement',
        'Professional Practice License (Doctors, Consultants, etc.)',
        'Business Address Proof',
      ],
    },
    {
      id: 'nri',
      label: 'NRIs',
      eligibility: [
        'Must be a Non-Resident Indian with valid documentation',
        'Must have overseas employment or business proof',
        'Credit history in India or abroad',
        'Property must be in India',
      ],
      documents: [
        'Income Proof Documents for NRI',
        'Property Documents & Sale Deed',
        'Stamped Agreement of Sale & Allotment Letter',
        'NOC from Housing Society / Builder',
        'Possession & Occupancy Certificate',
        'Land Tax Receipt & Construction Cost Estimate',
        'Payment Receipts to Seller or Builder',
      ],
    },
  ];

  const feesData = [
    { particular: 'Loan Processing Fees', charge: '0.25% to 2% of Loan Amount' },
    { particular: 'Loan Cancellation', charge: 'Nill - 5% (according to Bank/NBFC)' },
    { particular: 'Stamp Duty Charges', charge: 'As per the Value of the Property and State Tax' },
    { particular: 'Legal Fees', charge: 'As per actual' },
    { particular: 'Penal Charges', charge: 'Usually 2% per month' },
    { particular: 'EMI / Cheque Bounce Charges', charge: 'Approx 500/-' },
  ];

  return (
    <ServiceDetailLayout
      title="Home Loan Services"
      subtitle="A vast array of institutions offer you the best home loan rates at the most competitive rates and affordable EMIs. We help you find the perfect home financing solution."
      features={features}
      loanType="home"
      emiDescription="The monthly part-payment that you make to repay your Home Loan is known as an Equated Monthly Instalment (EMI). Use our calculator to plan your finances better."
      tabs={tabs}
      feesData={feesData}
      feesNote="Other fees and charges that lenders may levy on your home loan include documentation charges, verification charges, duplicate statement charges, NOC certificate charges and swap."
    />
  );
};

export default HomeLoanPage;
