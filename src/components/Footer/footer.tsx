import Link from "next/link";
import Container from "../container";
import FooterList from "./footerList";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-600 text-white text-sm">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Nvidia Series</h3>
            <Link href="#">GTX Series</Link>
            <Link href="#">RTX 20 Series</Link>
            <Link href="#">RTX 30 Series</Link>
            <Link href="#">RTX 40 Series</Link>
          </FooterList>

          <FooterList>
            <h3 className="text-base font-bold mb-2">AMD Series</h3>
            <Link href="#">RX 5000 Series</Link>
            <Link href="#">RX 6000 Series</Link>
            <Link href="#">RX 7000 Series</Link>
          </FooterList>

          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns & Exchanges</Link>
            <Link href="#">FAQs</Link>
          </FooterList>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              The #1 Graphics Card Store in Indonesia. We are dedicated to
              providing the best quality products and service.
            </p>
            <p>
              &copy; {new Date().getFullYear()} Vanguard Store. All rights
              reserved.
            </p>
          </div>

          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="#">
                <FaFacebook size={24} />
              </Link>
              <Link href="https://github.com/ahmadyusril">
                <FaGithub size={24} />
              </Link>
              <Link href="https://www.instagram.com/yusril_a10/">
                <FaInstagram size={24} />
              </Link>
              <Link href="https://www.linkedin.com/in/ahmad-yusril/">
                <FaLinkedin size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
