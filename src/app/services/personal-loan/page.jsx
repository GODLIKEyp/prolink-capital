export const metadata = { title: "Personal Loan Services", description: "Flexible personal loans." };
import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import { IconWallet, IconHome, IconShield, IconZap } from '@/components/Icons';

const PersonalLoanPage = () => {
  const features = [
    {
      icon: <IconWallet />,
      title: 'Debt Consolidation',
      description: 'Combine multiple debts into a single loan with a lower interest rate to save money on interest payments.',
    },
    {
      icon: <IconHome />,
      title: 'Home Renovation',
      description: 'Fund home renovation projects to increase the value of your home and improve living conditions.',
    },
    {
      icon: <IconShield />,
      title: 'Medical Expenses',
      description: 'Cover unexpected medical expenses such as emergency surgery or hospitalization.',
    },
    {
      icon: <IconZap />,
      title: 'Emergency Expenses',
      description: 'Cover unexpected expenses like medical emergencies or car repairs to avoid financial hardship.',
    },
  ];

  const tabs = [
    {
      id: 'salaried',
      label: 'Salaried Individuals',
      eligibility: [
        'Age: 21 to 60 years',
        'Net monthly income should be Rs. 15,000 or above',
        'Credit score must be above 650',
        'Clear repayment history',
        'Employment stability with current employer',
        'Must be a Resident Citizen of India',
      ],
      documents: [
        'Passport, Voter ID, Driving License, PAN Card, or Aadhaar Card (Identity Proof)',
        'Address Proof - Passport, Voter ID, Electricity Bill, Ration Card',
        'Age Proof - Passport, Voter ID, Driving License',
        '1 year Bank statement',
        '3 months Salary Slips',
        'Employment Certificate & Office address proof',
        'Passport-size photographs',
      ],
    },
    {
      id: 'self-employed',
      label: 'Self-Employed',
      eligibility: [
        'Age: 21 to 60 years',
        'Yearly transactions should be a minimum of 20 lakhs',
        'Credit score must be above 650',
        'Maintained a good credit score',
        'Healthy debt-to-income ratio',
        'Must be a Resident Citizen of India',
      ],
      documents: [
        'PAN Card & Aadhaar Card',
        'GST or VAT Registration',
        'Business registration documents (partnership deed, MOA, AOA)',
        'Income tax returns - past 2-3 years',
        '1 year Bank statement',
        'Business proof documents',
        'Passport-size photographs',
      ],
    },
  ];

  const feesData = [
    { particular: 'Loan Processing Fees', charge: '2999/- to 5% of Loan Amount' },
    { particular: 'Loan Cancellation', charge: 'Usually 3000 to 5% of Loan Amount' },
    { particular: 'Stamp Duty Charges', charge: '150/- to 300/-' },
    { particular: 'Legal Fees', charge: 'As per actuals' },
    { particular: 'Penal Charges', charge: 'Usually 2% per month' },
    { particular: 'EMI / Cheque Bounce Charges', charge: 'Approx 499/- to 599/-' },
  ];

  return (
    <ServiceDetailLayout
      title="Personal Loan Services"
      subtitle="A personal loan is an unsecured loan that is not backed by collateral or security. This makes it a flexible financing option with no limitations on its use."
      features={features}
      loanType="personal"
      emiDescription="An EMI calculator helps you estimate the monthly installments you will have to pay towards your personal loan. Plan your finances better with our calculator."
      tabs={tabs}
      feesData={feesData}
      feesNote="Other fees and charges that lenders may levy on your personal loan include documentation charges, verification charges, duplicate statement charges, NOC certificate charges and swap."
    />
  );
};

export default PersonalLoanPage;
