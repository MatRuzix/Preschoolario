import Logo from "@/src/icons/Logo";
import Link from "next/link";

const PublicHeader = () => {
  return (
    <div className="flex w-full h-1/20 px-10 bg-gradient-to-r from-schoolarioOrange from-20% to-gray-800 to-40% justify-between">
      <Link href="/landing" className="flex">
        <Logo />
      </Link>
      <div className="flex space-x-16">
        <Link
          href="aboutUs"
          className="flex text-white justify-center items-center"
        >
          O nas
        </Link>
        <Link
          href="news"
          className="flex text-white justify-center items-center"
        >
          Aktualności
        </Link>
        <Link
          href="contactUs"
          className="flex text-white justify-center items-center"
        >
          Kontakt
        </Link>
        <Link
          href="signin"
          className="flex text-white justify-center items-center"
        >
          Zaloguj się
        </Link>
        <Link
          href="register"
          className="flex text-white justify-center items-center"
        >
          Zarejestruj się
        </Link>
      </div>
    </div>
  );
};

export default PublicHeader;
