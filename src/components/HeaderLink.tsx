import Link from "next/link";

type HeaderLinkProps = { text: string; href: string };

const HeaderLink: React.FC<HeaderLinkProps> = ({ text, href }) => {
  return (
    <Link href={href} className="flex justify-center items-center text-xl">
      <span className="hover:text-grey-500 focus:outline-none">{text}</span>
    </Link>
  );
};

export default HeaderLink;
