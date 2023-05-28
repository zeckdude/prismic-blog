import Link from 'next/link';

export function Header() {
  return (
    <header className="flex justify-between py-12">
      <Link href="/" className="font-bold text-current">
        My Blog
      </Link>

      <div className="flex gap-4 [&>a]:text-current [&>a]:underline">
        <Link href="/about">About</Link>
        <Link href="/archives">Archives</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </header>
  );
}
