import Head from 'next/head';
import Link from 'next/link';

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Shoplinx' : 'Shoplinx'}</title>
        <meta name="description" content="E-commerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 justify-between items-center p-4 shadow-md">
            <Link href="/">
              <span className="text-lg font-bold">shoplinx</span>
            </Link>
            <div className="space-x-2">
              <Link href="/cart">Cart</Link>
              <Link href="/login">Login</Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright © 2023 Shoplinx</p>
        </footer>
      </div>
    </>
  );
}
