import type { Metadata } from 'next';
import './globals.css';

const title =
  'Object-Centric 3D Scene Reconstruction from Monocular Video with Observation-Grounded Mesh Optimisation';
const description =
  'A training-free pipeline for grounding and deforming generated object meshes using partial multi-view observations in a shared metric world frame.';
const basePath = (process.env.BASE_PATH ?? '').replace(/\/$/, '');

function resolveSiteOrigin() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL).origin;
  }

  const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
  if (owner && repository) {
    return `https://${owner}.github.io`;
  }

  return 'http://localhost:3000';
}

export const metadata: Metadata = {
  metadataBase: new URL(resolveSiteOrigin()),
  title,
  description,
  alternates: {
    canonical: `${basePath}/`,
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
  },
  openGraph: {
    title,
    description,
    type: 'website',
    url: `${basePath}/`,
    images: [
      {
        url: `${basePath}/og.png`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${basePath}/og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
