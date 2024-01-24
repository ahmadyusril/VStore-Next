import Link from "next/link";
import Container from "../container";
import { Rubik_Glitch } from "next/font/google";
import CartCount from "./cartCount";
import UserMenu from "./userMenu";
import { getCurrentUser } from "../../actions/getCurrentUser";

const RubikGlitch = Rubik_Glitch({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div
      className="
        sticky
        top-0
        w-full
        bg-gradient-to-b from-sky-500 to-sky-700
        z-30
        shadow-sm
        "
    >
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md-gap-0">
            <Link
              href="/"
              className={`${RubikGlitch.className} font-bold text-2xl`}
            >
              Vanguard Store
            </Link>
            <div className="hidden md:block">Search</div>
            <div className="flex items-center gap-8 md-gap-12">
              <CartCount />
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
