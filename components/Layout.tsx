import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto w-full max-w-5xl px-5">
      <Header />
      <main>{children}</main>
    </div>
  );
}
