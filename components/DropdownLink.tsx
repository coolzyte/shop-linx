import Link from 'next/link';

interface DropdownLinkProps {
  href: string;
  children: React.ReactNode;
  className: string;
}

export default function DropdownLink(props: DropdownLinkProps) {
  const { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <span {...rest}>{children}</span>
    </Link>
  );
}
