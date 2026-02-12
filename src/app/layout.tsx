import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';
import Home from '@/app/page';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Serhii Surzhykov — Links',
  description: 'Personal links and social profiles'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Home />
        </ThemeProvider>
      </body>
    </html>
  );
}
