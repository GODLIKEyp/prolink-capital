export const metadata = { title: "Loan Against Property", description: "Unlock the value of your property." };
import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import {
  IconShield,
  IconWallet,
  IconClock,
  IconLayers,
  IconTrendingUp,
} from '@/components/Icons';

const features = [
  {
    icon: <IconShield />,
    title: 'Secured Loan',
    description:
      'Backed by property collateral reducing lender risk, leading to lower interest rates compared to unsecured loans.',
  },
  {
    icon: <IconWallet />,
    title: 'Higher Loan Amount',
    description:
      'Get a higher loan amount compared to personal loans, determined by the value of your pledged property.',
  },
  {
    icon: <IconClock />,
    title: 'Flexible Tenure',
    description:
      'Repayment period ranging from 5 to 20 years allows for lower monthly installments.',
  },
  {
    icon: <IconLayers />,
    title: 'Multipurpose Use',
    description:
      'No restrictions on how loan funds are used - address various financial needs with flexibility.',
  },
  {
    icon: <IconTrendingUp />,
    title: 'Improves Credit Score',
    description:
      'Successfully repaying demonstrates responsible borrowing behavior and boosts your credit score.',
  },
];

const tabs = [
  {
    id: 'general',
    label: 'General Eligibility',
    eligibility: [
      'Must be a Citizen of India with valid documentation',
      'Stable occupation and income to prove creditworthiness',
      'Good three-digit Credit Score (track record of repayment)',
      'Healthy banking relationship with the lender',
      'Market value of property must exceed loan amount',
      'Must be current owner of the property with clear title',
      'Property must not be mortgaged with another institution',
    ],
    documents: [
      'Proof of identity/residence',
      'Proof of income',
      'Property-related documents',
      'Proof of Business (for self-employed)',
      'Account statement for the last 6 months',
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
  { particular: 'Foreclosure', charge: 'Nill to 4% (According to bank/NBFC)' },
];

const feesNote =
  'Other fees and charges that lenders may levy on your loan against property include documentation charges, verification charges, duplicate statement charges, NOC certificate charges and swap.';

function LoanAgainstPropertyPage() {
  return (
    <ServiceDetailLayout
      title="Loan Against Property"
      subtitle="Unlock the value of your property with competitive interest rates and flexible repayment options. A secured loan that works for all your financial needs."
      features={features}
      loanType="property"
      emiDescription="A mortgage loan calculator calculates the financial implications of your Loan Against Property based on eligibility criteria to enable approval."
      tabs={tabs}
      feesData={feesData}
      feesNote={feesNote}
    />
  );
}

export default LoanAgainstPropertyPage;
