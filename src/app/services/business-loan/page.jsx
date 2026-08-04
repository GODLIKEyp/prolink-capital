export const metadata = { title: "Business Loan Services", description: "Fuel your business growth." };
import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import {
  IconBriefcase,
  IconWallet,
  IconTrendingUp,
  IconLayers,
  IconFileText,
  IconClock,
} from '@/components/Icons';

const features = [
  {
    icon: <IconBriefcase />,
    title: 'Term Loans',
    description: 'Fixed-term financing for planned business investments and capital expenditures.',
  },
  {
    icon: <IconWallet />,
    title: 'Working Capital Loans',
    description: 'Maintain smooth daily operations with short-term working capital support.',
  },
  {
    icon: <IconTrendingUp />,
    title: 'Business Expansion Loans',
    description: 'Scale your operations, open new branches, or enter new markets.',
  },
  {
    icon: <IconLayers />,
    title: 'Equipment Financing',
    description: 'Acquire essential machinery and equipment without depleting cash reserves.',
  },
  {
    icon: <IconFileText />,
    title: 'Invoice Financing & Bill Discounting',
    description: 'Unlock cash tied up in unpaid invoices for immediate liquidity.',
  },
  {
    icon: <IconClock />,
    title: 'Machinery Loans',
    description: 'Specialized loans for purchasing industrial machinery and production equipment.',
  },
];

const tabs = [
  {
    id: 'individual',
    label: 'Individuals & MSMEs',
    eligibility: [
      'Age: 21 to 65 years',
      'Business vintage: Min. 1 year or above',
      'Business location to remain same',
      'Credit score: 700 or above preferred',
      'Annual turnover as defined by Bank/NBFC',
      'Indian citizens only',
      'Must own residence, office, shop, or Godown',
    ],
    documents: [
      'ITR for the past 2-3 years',
      'Current Bank Account Statement (last 12 months)',
      'PAN Card photocopy',
      'Address Proof (Voter Card, Passport, Aadhaar)',
      'Business Address Proof (Telephone/Electricity Bill)',
      'Last FY provisional financials & future projections',
      'Company business profile on letterhead',
      'GST registration & returns (last 2 years)',
    ],
  },
  {
    id: 'company',
    label: 'Companies & Partnerships',
    eligibility: [
      'Eligible: Sole Proprietorships, Partnership Firms, Pvt/Public Ltd Companies, LLPs',
      'Business vintage: Min. 1 year or above',
      'Credit score: 700 or above preferred',
      'Stable cash flow demonstrated through bank statements',
      'Collateral may be required for secured loans',
      'Must operate in services, trading, or manufacturing sectors',
    ],
    documents: [
      'Company PAN Card, Certificate of Incorporation, MOA, AOA',
      'List of Directors & Shareholding pattern (Pvt Ltd)',
      'Partnership Deed & Company PAN (Partnerships)',
      'Sanction letter & repayment schedule of existing loans',
      'D-Vat/Sales tax registration copy',
      'Udhayam Aadhaar registration certificate',
      'Rent agreement of factory & residence (if rented)',
      'Business Continuity proof (3 years ITR/Company registration)',
      '2 photographs of promoters and property owners',
    ],
  },
];

const feesData = [
  { particular: 'Loan Processing Fees', charge: '1.5% to 5% of Loan Amount' },
  { particular: 'Loan Cancellation', charge: 'Usually 0 to 5% of Loan Amount' },
  { particular: 'Stamp Duty Charges', charge: '60/- to 600/-' },
  { particular: 'Legal Fees', charge: 'Nil' },
  { particular: 'Penal Charges', charge: 'Nil' },
  { particular: 'EMI / Cheque Bounce Charges', charge: 'Approx 499/- to 599/-' },
];

const feesNote =
  'Other fees and charges that lenders may levy on your business loan include documentation charges, verification charges, duplicate statement charges, NOC certificate charges and swap.';

function BusinessLoanPage() {
  return (
    <ServiceDetailLayout
      title="Business Loan Services"
      subtitle="Fuel your business growth with flexible financing options. From working capital to expansion, we help you find the right loan for your enterprise."
      features={features}
      loanType="business"
      emiDescription="Using a business loan EMI calculator can help you estimate your monthly loan repayment amount. Plan effectively before committing."
      tabs={tabs}
      feesData={feesData}
      feesNote={feesNote}
    />
  );
}

export default BusinessLoanPage;
