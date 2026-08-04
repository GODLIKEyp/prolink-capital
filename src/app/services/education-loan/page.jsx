export const metadata = { title: "Education Loan Services", description: "Invest in your education." };
import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import { IconClock, IconUser, IconPercent, IconGlobe, IconShield } from '@/components/Icons';

const EducationLoanPage = () => {
  const features = [
    {
      icon: <IconClock />,
      title: 'Moratorium Period',
      description: 'Repayment typically starts after the completion of the course, providing students time to secure employment.',
    },
    {
      icon: <IconUser />,
      title: 'Co-borrower Option',
      description: 'Parents or guardians can be co-borrowers to enhance eligibility and improve approval chances.',
    },
    {
      icon: <IconPercent />,
      title: 'Tax Benefits',
      description: 'Repayment interest is eligible for tax deductions under Section 80E of the Income Tax Act.',
    },
    {
      icon: <IconGlobe />,
      title: 'Multiple Courses & Institutions',
      description: 'Loans available for various courses, from school education to higher studies, in India and abroad.',
    },
    {
      icon: <IconShield />,
      title: 'Collateral & Non-Collateral',
      description: 'Depending on the loan amount, some may require collateral while smaller loans may not need security.',
    },
  ];

  const tabs = [
    {
      id: 'student',
      label: 'Student Applicant',
      eligibility: [
        'Must be 18 years or older',
        'Proof of admission to an eligible educational institution',
        'Academic performance may be considered',
        'Co-borrower or guarantor may be required',
        'Credit history of student and co-borrower assessed',
        'Collateral may be needed for larger amounts',
      ],
      documents: [
        'Student-Applicant identity documents',
        'Proof of admission / offer letter',
        'Academic mark sheets and certificates',
        'Passport (for studies abroad)',
        'Cost of study documentation',
      ],
    },
    {
      id: 'guarantor',
      label: 'Co-applicant / Guarantor',
      eligibility: [
        'Valid identity and address proof',
        'Stable income (salaried or self-employed)',
        'Good credit score and repayment history',
        'Willingness to co-sign the loan agreement',
      ],
      documents: [
        'Co-applicant/Guarantor identity documents',
        'Income Proof - Salary slips or ITR (Salaried)',
        'Income Proof - Business financials, ITR (Self-employed)',
        'Bank account statements (last 6 months)',
        'Address proof',
      ],
    },
  ];

  const feesData = [
    { particular: 'Loan Processing Fees', charge: '0.5% to 2% of Loan Amount' },
    { particular: 'Loan Cancellation', charge: '0' },
    { particular: 'Stamp Duty Charges', charge: 'As per actuals' },
    { particular: 'Legal Fees', charge: 'As per actuals' },
    { particular: 'Penal Charges', charge: 'Usually @ 2% per month; 24% p.a.' },
    { particular: 'EMI / Cheque Bounce Charges', charge: 'Around Rs 590 per bounce' },
  ];

  return (
    <ServiceDetailLayout
      title="Education Loan Services"
      subtitle="Invest in your future with education loans designed for students pursuing higher studies in India and abroad. Flexible repayment starts after course completion."
      features={features}
      loanType="education"
      emiDescription="Using an Education Loan EMI calculator can help you estimate your monthly loan repayment amount. Plan your finances before applying."
      tabs={tabs}
      feesData={feesData}
      feesNote="Other fees and charges that lenders may levy on your education loan include documentation charges, verification charges, duplicate statement charges, NOC certificate charges and swap."
    />
  );
};

export default EducationLoanPage;
