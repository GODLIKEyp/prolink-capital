import fs from 'fs';
import path from 'path';

const SRC = '/Users/godlike/.gemini/antigravity/scratch/prolink-capital/src';
const DEST = '/Users/godlike/.gemini/antigravity/scratch/prolink-capital-next/src';

// Ensure dir exists
function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// 1. Home
const homeSource = fs.readFileSync(path.join(SRC, 'pages/Home.jsx'), 'utf-8');
let homeClient = `"use client";\n` + homeSource
  .replace(/import React[^;]*;\n?/, '')
  .replace(/import '\.\/Home\.css';/, "import '@/app/Home.css';")
  .replace(/\.\.\/components/g, '@/components');
fs.writeFileSync(path.join(DEST, 'components/HomeClient.jsx'), homeClient);

const homePage = `import HomeClient from '@/components/HomeClient';\nexport default function HomePage() { return <HomeClient />; }`;
fs.writeFileSync(path.join(DEST, 'app/page.jsx'), homePage);

// 2. Services
const servicesPage = `import Services from '@/components/Services';
export const metadata = { title: 'Our Services' };
export default function ServicesPage() { 
  return <div className="section section-bg-light page-content animate-fade-in-up"><div className="container"><Services /></div></div>; 
}`;
ensureDir(path.join(DEST, 'app/services'));
fs.writeFileSync(path.join(DEST, 'app/services/page.jsx'), servicesPage);

// 3. Loan Pages
const loanPages = [
  { src: 'HomeLoanPage.jsx', dest: 'home-loan', title: 'Home Loan Services', desc: 'Get the best home loan rates from 30+ partner banks with zero consultancy fees.' },
  { src: 'PersonalLoanPage.jsx', dest: 'personal-loan', title: 'Personal Loan Services', desc: 'Flexible personal loans.' },
  { src: 'BusinessLoanPage.jsx', dest: 'business-loan', title: 'Business Loan Services', desc: 'Fuel your business growth.' },
  { src: 'LoanAgainstPropertyPage.jsx', dest: 'loan-against-property', title: 'Loan Against Property', desc: 'Unlock the value of your property.' },
  { src: 'CarLoanPage.jsx', dest: 'car-loan', title: 'Car Loan Services', desc: 'Drive your dream car.' },
  { src: 'EducationLoanPage.jsx', dest: 'education-loan', title: 'Education Loan Services', desc: 'Invest in your education.' },
  { src: 'GoldLoanPage.jsx', dest: 'gold-loan', title: 'Gold Loan Services', desc: 'Quick gold loans.' }
];

for (const lp of loanPages) {
  let content = fs.readFileSync(path.join(SRC, `pages/${lp.src}`), 'utf-8');
  content = content
    .replace(/import React[^;]*;\n?/, '')
    .replace(/\.\.\/components/g, '@/components');
  
  // export default function
  const meta = `export const metadata = { title: "${lp.title}", description: "${lp.desc}" };\n`;
  ensureDir(path.join(DEST, `app/services/${lp.dest}`));
  fs.writeFileSync(path.join(DEST, `app/services/${lp.dest}/page.jsx`), meta + content);
}

// 4. Placeholder
const placeholder = `import PlaceholderServicePage from '@/components/PlaceholderServicePage';
export default function PlaceholderPage() { return <PlaceholderServicePage />; }`;
ensureDir(path.join(DEST, 'app/services/[serviceId]'));
fs.writeFileSync(path.join(DEST, 'app/services/[serviceId]/page.jsx'), placeholder);

// 5. About Us
let aboutUs = fs.readFileSync(path.join(SRC, 'pages/AboutUs.jsx'), 'utf-8');
aboutUs = aboutUs.replace(/import React[^;]*;\n?/, '').replace(/import '\.\/AboutUs\.css';/, "import './AboutUs.css';");
ensureDir(path.join(DEST, 'app/about-us'));
fs.writeFileSync(path.join(DEST, 'app/about-us/page.jsx'), `export const metadata = { title: 'About Us' };\n` + aboutUs);

// 6. Location
let location = fs.readFileSync(path.join(SRC, 'pages/Location.jsx'), 'utf-8');
location = location.replace(/import React[^;]*;\n?/, '').replace(/import '\.\/Location\.css';/, "import './Location.css';");
ensureDir(path.join(DEST, 'app/location'));
fs.writeFileSync(path.join(DEST, 'app/location/page.jsx'), `export const metadata = { title: 'Our Location' };\n` + location);

// 7. Contact Us
let contactUs = fs.readFileSync(path.join(SRC, 'pages/ContactUs.jsx'), 'utf-8');
contactUs = contactUs.replace(/import React[^;]*;\n?/, '').replace(/\.\.\/components/g, '@/components');
ensureDir(path.join(DEST, 'app/contact-us'));
fs.writeFileSync(path.join(DEST, 'app/contact-us/page.jsx'), `export const metadata = { title: 'Contact Us' };\n` + contactUs);

// 8. Apply
let applyForm = fs.readFileSync(path.join(SRC, 'pages/ApplyForLoan.jsx'), 'utf-8');
applyForm = `"use client";\n` + applyForm
  .replace(/import React, { useState } from 'react';/, "import { useState } from 'react';")
  .replace(/import '\.\/ApplyForLoan\.css';/, "import '@/app/apply/ApplyForLoan.css';")
  .replace(/import { supabase } from '\.\.\/supabaseClient';/, "import { supabase } from '@/lib/supabase';");
fs.writeFileSync(path.join(DEST, 'components/ApplyForLoanForm.jsx'), applyForm);

const applyPage = `import ApplyForLoanForm from '@/components/ApplyForLoanForm';
export const metadata = { title: 'Apply for a Loan' };
export default function ApplyPage() { return <ApplyForLoanForm />; }`;
ensureDir(path.join(DEST, 'app/apply'));
fs.writeFileSync(path.join(DEST, 'app/apply/page.jsx'), applyPage);

// 9. Privacy Policy
let privacy = fs.readFileSync(path.join(SRC, 'pages/PrivacyPolicy.jsx'), 'utf-8');
privacy = privacy.replace(/import React[^;]*;\n?/, '').replace(/import '\.\/LegalPage\.css';/, "import '@/app/LegalPage.css';");
ensureDir(path.join(DEST, 'app/privacy-policy'));
fs.writeFileSync(path.join(DEST, 'app/privacy-policy/page.jsx'), `export const metadata = { title: 'Privacy Policy' };\n` + privacy);

// 10. Terms
let terms = fs.readFileSync(path.join(SRC, 'pages/TermsOfService.jsx'), 'utf-8');
terms = terms.replace(/import React[^;]*;\n?/, '').replace(/import '\.\/LegalPage\.css';/, "import '@/app/LegalPage.css';");
ensureDir(path.join(DEST, 'app/terms-of-service'));
fs.writeFileSync(path.join(DEST, 'app/terms-of-service/page.jsx'), `export const metadata = { title: 'Terms of Service' };\n` + terms);

console.log("Pages migrated successfully!");
