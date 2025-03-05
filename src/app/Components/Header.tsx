import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-col gap-8 items-center sm:items-start">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
    </div>
  );
};

export default Header;
