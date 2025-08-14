import Link from "next/link";
import Button from "../common/Button";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { CountContext } from "@/context/CountContext";

const Header: React.FC = () => {
  const pathname = usePathname();
  const { count } = useContext(CountContext);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        <Link
          href="/"
          className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight"
        >
          Splash App
        </Link>

        <div className="flex gap-4">
          {pathname !== "/counter-app" ? (
            <>
              <Button buttonLabel="Sign In" buttonBackgroundColor="red" />
              <Button buttonLabel="Sign Up" buttonBackgroundColor="blue" />
            </>
          ) : (
            <p className="font-semibold text-lg text-black">
              Current count : {count}
            </p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
