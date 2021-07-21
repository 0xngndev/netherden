import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo.svg"
        alt="Logo"
        height={72}
        width={72}
        layout="fixed"
      />
    </Link>
  );
};

export default Logo;
