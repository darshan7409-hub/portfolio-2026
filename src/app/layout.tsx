import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import SmoothScrollClient from '@/components/SmoothScrollProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PROFILE } from '@/data/portfolio';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || PROFILE.siteUrl;
const seoDescription =
  'Senior QA Analyst in Ahmedabad specializing in QA automation, test strategy, Selenium, Katalon, and Postman API validation for reliable production releases.';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
    { media: '(prefers-color-scheme: light)', color: '#fafafc' },
  ],
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${PROFILE.name} — ${PROFILE.role}`,
    template: `%s — ${PROFILE.name} | QA Engineer`,
  },
  description: seoDescription,
  keywords: [
    'Darshan Patel',
    'Senior QA Analyst',
    'QA Automation Specialist',
    'Software Quality Assurance',
    'Test Strategy',
    'Selenium',
    'Katalon Studio',
    'Postman API Testing',
    'Ahmedabad QA Engineer',
  ],
  authors: [{ name: PROFILE.name }],
  creator: PROFILE.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: `${PROFILE.name} — Portfolio 2026`,
    title: `${PROFILE.name} — ${PROFILE.role}`,
    description: seoDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PROFILE.name} — ${PROFILE.role}`,
    description: seoDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const profileJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: siteUrl,
    name: `${PROFILE.name} — ${PROFILE.role}`,
    mainEntity: {
      '@type': 'Person',
      name: PROFILE.name,
      jobTitle: PROFILE.role,
      url: siteUrl,
      email: PROFILE.email,
      telephone: PROFILE.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ahmedabad',
        addressRegion: 'Gujarat',
        addressCountry: 'IN',
      },
      sameAs: [...PROFILE.socials.map((s) => s.href), PROFILE.whatsappHref],
    },
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-[100dvh] antialiased flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <div aria-hidden="true" className="film-grain" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
        />

        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollClient />
          <Navbar />
          <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
