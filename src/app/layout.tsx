import type { Metadata, Viewport } from 'next';
import { Instrument_Serif, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';
import ImagePrewarmer from '@/components/ImagePrewarmer';
import { PROFILE, PROJECTS } from '@/data/portfolio';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
  preload: true,
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  preload: true,
});

const siteUrl = 'https://www.darshanpatelqa.com';
const seoTitle = 'Darshan Patel — QA Lead & Analyst | Software Quality Assurance Portfolio';
const seoDescription =
  'Darshan Patel is a Senior QA Lead & Analyst with 8+ years of experience directing software quality assurance, test automation, and release governance across 30+ web and mobile projects based in Ahmedabad, India.';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0d0c0b' },
    { media: '(prefers-color-scheme: light)', color: '#f9f7f3' },
  ],
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoTitle,
    template: `%s — Darshan Patel | QA Lead & Analyst`,
  },
  description: seoDescription,
  applicationName: 'Darshan Patel QA Portfolio',
  keywords: [
    'Darshan Patel',
    'Darshan Patel QA',
    'Darshan Patel QA Lead',
    'Darshan Patel Portfolio',
    'Darshan Patel Ahmedabad',
    'QA Lead & Analyst',
    'Senior QA Engineer',
    'Software Quality Assurance Lead',
    'QA Automation Specialist',
    'Web & Mobile QA Testing',
    'Selenium WebDriver',
    'Katalon Studio',
    'Playwright Testing',
    'Postman API Testing',
    'Jira Defect Triage',
    'Test Strategy Governance',
    'Ahmedabad QA Engineer',
    'Gujarat India QA Lead',
    'End-to-End Testing',
    'Regression Testing',
  ],
  authors: [{ name: PROFILE.name, url: siteUrl }],
  creator: PROFILE.name,
  publisher: PROFILE.name,
  category: 'technology',
  classification: 'Software Quality Assurance & Testing Portfolio',
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-US': siteUrl,
      'en-IN': siteUrl,
    },
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    alternateLocale: ['en_IN', 'en_GB'],
    url: siteUrl,
    siteName: 'Darshan Patel — QA Lead & Analyst Portfolio',
    title: seoTitle,
    description: seoDescription,
    images: [
      {
        url: `${siteUrl}/darshan-patel-qa-lead.png`,
        width: 1000,
        height: 1250,
        alt: 'Darshan Patel — Senior QA Lead & Analyst Official Portrait',
        type: 'image/png',
      },
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Darshan Patel — QA Lead & Analyst Portfolio Summary Card',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PROFILE.name} — ${PROFILE.role}`,
    description: seoDescription,
    images: [`${siteUrl}/darshan-patel-qa-lead.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'IN-GJ',
    'geo.placename': 'Ahmedabad',
    'geo.position': '23.0225;72.5714',
    ICBM: '23.0225, 72.5714',
    'revisit-after': '7 days',
    rating: 'general',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: PROFILE.name,
        alternateName: ['Darshan Patel QA', 'Darshan Patel QA Lead', 'DP'],
        givenName: 'Darshan',
        familyName: 'Patel',
        jobTitle: PROFILE.role,
        gender: 'https://schema.org/Male',
        nationality: {
          '@type': 'Country',
          name: 'India',
        },
        url: siteUrl,
        image: {
          '@type': 'ImageObject',
          '@id': `${siteUrl}/#portrait`,
          url: `${siteUrl}/darshan-patel-qa-lead.png`,
          contentUrl: `${siteUrl}/darshan-patel-qa-lead.png`,
          caption: 'Darshan Patel — Senior QA Lead & Analyst Portrait',
          description:
            'Official portrait of Darshan Patel, QA Lead and Quality Assurance Analyst with 8+ years experience based in Ahmedabad, Gujarat, India.',
          width: '1000',
          height: '1250',
          encodingFormat: 'image/png',
          representativeOfPage: true,
          creator: {
            '@type': 'Person',
            name: PROFILE.name,
          },
          creditText: PROFILE.name,
          copyrightNotice: `© ${new Date().getFullYear()} ${PROFILE.name}`,
        },
        description:
          'Darshan Patel is a Senior QA Lead & Analyst with 8+ years of experience leading quality strategy, test automation, and release governance across 30+ web and mobile software projects.',
        email: `mailto:${PROFILE.email}`,
        telephone: PROFILE.phone,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Ahmedabad',
          addressRegion: 'Gujarat',
          addressCountry: 'IN',
        },
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Universal College of Engineering & Technology (GTU)',
        },
        worksFor: {
          '@type': 'Organization',
          name: 'Rayo Innovations',
          jobTitle: PROFILE.role,
        },
        sameAs: [
          'https://github.com/darshan7409-hub',
          'https://www.linkedin.com/in/darshan-patel-619901106',
          'https://wa.me/919687940988',
        ],
        knowsAbout: [
          'Software Quality Assurance',
          'QA Leadership',
          'Test Strategy & Planning',
          'Automated Testing',
          'Manual Testing',
          'Selenium WebDriver',
          'Katalon Studio',
          'Playwright',
          'Postman API Testing',
          'Jira Defect Triage',
          'Regression Testing',
          'Mobile Game & App QA',
          'Smoke & Sanity Gates',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Darshan Patel — QA Lead & Analyst Portfolio',
        alternateName: 'Darshan Patel QA',
        description: seoDescription,
        publisher: {
          '@id': `${siteUrl}/#person`,
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'ProfilePage',
        '@id': `${siteUrl}/#webpage`,
        url: siteUrl,
        name: seoTitle,
        description: seoDescription,
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
        about: {
          '@id': `${siteUrl}/#person`,
        },
        mainEntity: {
          '@id': `${siteUrl}/#person`,
        },
        primaryImageOfPage: {
          '@id': `${siteUrl}/#portrait`,
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: siteUrl,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Featured Projects',
              item: `${siteUrl}/#work`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Career Timeline',
              item: `${siteUrl}/#experience`,
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'Capabilities Matrix',
              item: `${siteUrl}/#skills`,
            },
            {
              '@type': 'ListItem',
              position: 5,
              name: 'Philosophy',
              item: `${siteUrl}/#about`,
            },
            {
              '@type': 'ListItem',
              position: 6,
              name: 'Contact',
              item: `${siteUrl}/#contact`,
            },
          ],
        },
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/#projects`,
        name: 'Featured QA Projects by Darshan Patel',
        description:
          'Selection of enterprise web and mobile software projects tested and verified by Darshan Patel.',
        itemListElement: PROJECTS.map((proj, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          item: {
            '@type': 'CreativeWork',
            name: proj.title,
            headline: `${proj.title} — QA Case Study`,
            description: proj.longDescription,
            url: proj.demoLink || `${siteUrl}/#work`,
            image: `${siteUrl}${proj.imageSrc}`,
            author: {
              '@id': `${siteUrl}/#person`,
            },
            keywords: proj.techStack.join(', '),
          },
        })),
      },
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-[100dvh] antialiased flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <div aria-hidden="true" className="film-grain" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <ImagePrewarmer />
            <Navbar />
            <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
              {children}
            </main>
            <Footer />
            <BackToTop />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
