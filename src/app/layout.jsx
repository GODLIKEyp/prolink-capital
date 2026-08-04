import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: {
    default: 'ProLink Capital — Free Loan Consultancy in Lucknow',
    template: '%s | ProLink Capital',
  },
  description:
    'ProLink Capital is an independent loan consultancy in Lucknow offering free expert guidance on Home, Business, Personal, Car, Education & Gold Loans.',
  keywords: [
    'loan consultancy',
    'home loan',
    'business loan',
    'personal loan',
    'car loan',
    'education loan',
    'gold loan',
    'Lucknow',
    'ProLink Capital',
    'free loan advice',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://prolinkcapital.com',
    siteName: 'ProLink Capital',
    title: 'ProLink Capital — Free Loan Consultancy in Lucknow',
    description:
      'Get expert loan guidance at zero cost. We connect you with 30+ partner banks for the best rates on Home, Business, Personal & more.',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'ProLink Capital Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProLink Capital — Free Loan Consultancy',
    description:
      'Expert loan guidance at zero cost. 30+ partner banks. Best rates guaranteed.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - var(--nav-height) - 300px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
