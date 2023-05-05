import { Store, IState } from '@/utils/Store';
import Head from 'next/head';
import Link from 'next/link';
import { useContext } from 'react';

interface ILayoutContext extends IState {}

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  const { cart } = useContext<ILayoutContext>(Store);
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
              <Link href="/cart">
                Cart
                {cart.cartItems.length > 0 && (
                  <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </span>
                )}
              </Link>
              <Link href="/login">Login</Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>&copy; {new Date().getFullYear()} Shoplinx</p>
        </footer>
      </div>
    </>
  );
}
