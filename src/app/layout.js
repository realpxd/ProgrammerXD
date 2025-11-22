import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import { ReactQueryClientProvider } from './components/ReactQueryClientProvider';
import GameButton from './components/GameButton';

// import Head from 'next/head';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata = {
  title: 'Naman Saini / ProgrammerXD',
  description: "Discover how Naman Saini's ProgrammerXD is shaping the future of coding and development.",
  image: '/logo.png',
  icon: '/logo.png',
  url: 'https://realpxd.github.io/ProgrammerXD',
  keywords: 'PXD , pxd , Programmer , developer , designer , web developer, Naman, Saini, NamanSaini, Naman Saini, ProgrammerXD, programmerxd, Programmer XD, software engineer , engineer , freelancer',

  instagram: 'https://www.instagram.com/ProgrammerXD',
  linkedin: 'https://www.linkedin.com/in/ProgrammerXD',
  github: 'https://github.com/realpxd',
  verification: {
    google: "K2TfwH5xHppC47C6GbkJhJVQuQG130gn8y8X3gTncwo"
  }
}

export default function RootLayout({ children }) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        {/*       
      <Head>
        <title>{metadata.title}</title>
        <link rel="shortcut icon" href="/logo.png" />
        
        <script src="https://kit.fontawesome.com/e20sdfsd9.js" crossOrigin="anonymous"></script>
        {/* X-icon */}
        {/* <link rel="icon" href="/logo.png" sizes="any" type="image/png" />
        <link rel="icon" href="/logo.png" type="image/x-icon" /> */}

        {/* Meta tags */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="keywords" content="PXD , pxd , Programmer , developer , designer , web developer, Naman, Saini, NamanSaini, Naman Saini, ProgrammerXD, programmerxd, Programmer XD, software engineer , engineer , freelancer" />
        <meta name="author" content="ProgrammerXD / Naman Saini" />
        <meta name="title" content="Naman Saini: Revolutionizing Programming with PXD" />
        <meta name="description" content="Discover how Naman Saini's ProgrammerXD is shaping the future of coding and development." />
        <meta property="og:image" content="./assets/img/logo.png" />
        <meta property="og:title" content="Naman Saini: Revolutionizing Programming with PXD" />
        <meta property="og:url" content="https://realpxd.github.io/ProgrammerXD" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Discover how Naman Saini's ProgrammerXD is shaping the future of coding and development." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="https://realpxd.github.io/ProgrammerXD" />
        <meta name="twitter:title" content="Naman Saini: Revolutionizing Programming with PXD" />
        <meta name="twitter:description" content="Discover how Naman Saini's ProgrammerXD is shaping the future of coding and development." />
        <meta name="twitter:url" content="https://realpxd.github.io/ProgrammerXD" />
        <meta name="twitter:image" content="./assets/img/logo.png" />
        <meta id="themeH" name="theme-color" content="#000" />
        <meta name="revised" content="ProgrammerXD, 24/10/2023" /> */}
        {/* </Head> */}
        <SpeedInsights />
        <body className={`${inter.variable} ${playfair.variable}`}>
          {children}
          {/* <GameButton /> */}
          <Analytics />
        </body>
      </html>
    </ReactQueryClientProvider>
  )
}
