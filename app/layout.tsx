import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Nexion - AI Powered DApp Builder for Solana',
  description: "Discover Nexion , cutting edge AI platform that revolutionizes DApp building in Solana. Join the waitlist for early access.Made with ❤️ by Nexion Labs @ 2025",
  keywords: ['AI platform', 'integration', 'technology', 'Nexion', 'artificial intelligence', 'automation'],
  authors: [{ name: 'Nexion Team' }],
  creator: 'Nexion',
  publisher: 'Nexion',
  icons: {
    icon: '/nexion-icon.jpg',
  },
  openGraph: {
    title: 'Nexion - AI Powered DApp Builder for Solana',
    description: "Discover Nexion , cutting edge AI platform that revolutionizes DApp building in Solana. Join the waitlist for early access.Made with ❤️ by Nexion Labs @ 2025",
    url: 'https://nexion.fun',
    siteName: 'Nexion',
    images: [
      {
        url: '/nexion-icon.jpg',
        width: 1200,
        height: 630,
        alt: 'Nexion Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexion - AI-Powered Platform for Seamless Integration',
    description: 'Discover Nexion, the cutting-edge AI platform that revolutionizes how you connect and integrate technologies. Join the waiting list for early access.',
    images: ['/nexion-icon.jpg'],
    creator: '@nexion',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Nexion",
    "description": "AI-powered platform for seamless technology integration",
    "url": "https://nexion.fun",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nexion",
    },
  }

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <ThemeProvider defaultTheme="dark" attribute="class">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}