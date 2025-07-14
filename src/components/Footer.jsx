import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1c4c50] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Quick Links */}
<div>
  <h3 className="text-lg font-semibold mb-4">Explore</h3>
  <ul className="space-y-2">
    <li>
      <Link to="/contact" className="hover:underline">
        Contact Us
      </Link>
    </li>
    <li>
      <Link to="/about" className="hover:underline">
        About Us
      </Link>
    </li>
    <li>
      <Link to="/services" className="hover:underline">
        Services
      </Link>
    </li>
  </ul>
</div>


        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <p className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-white" />
            <span>Elitehomecarepartners@gmail.com</span>
          </p>
          <p className="mt-2">+234 (0) 8133634396</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              aria-disabled="true"
              className="pointer-events-none opacity-50"
            >
              <Facebook className="w-5 h-5" />
            </a>

            <a
              href="#"
              aria-label="Twitter"
              aria-disabled="true"
              className="pointer-events-none opacity-50"
            >
              <Twitter className="w-5 h-5" />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-[#66a5ad]"
            >
              <Instagram className="w-5 h-5" />
            </a>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-white/30 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Elite Homecare Partners. All rights reserved.
      </div>
    </footer>
  );
}
