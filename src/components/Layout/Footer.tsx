import { Link } from "wouter";
import { NAV_LINKS } from "../../utils/constants";
import "./Footer.css";
import {
  FacebookLogo,
  TwitterLogo,
  LinkedinLogo,
  Envelope,
  Phone,
  MapPin,
} from "@phosphor-icons/react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <ul className="footer__nav">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <Link to={link.path} className="footer__link">
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact-us" className="footer__link">
              Contact
            </Link>
          </li>
        </ul>
        <div className="socials footer__socials">
          <p className="socials__text">Stay Connected</p>
          <div className="socials__item">
            <span className="socials__icon">
              <FacebookLogo size={26} color="#9eff00" weight="fill" />
            </span>
            <span className="socials__icon">
              <TwitterLogo size={26} color="#9eff00" weight="fill" />
            </span>
            <span className="socials__icon">
              <LinkedinLogo size={26} color="#9eff00" weight="fill" />
            </span>
          </div>
        </div>
      </div>
      <div className="footer__contact">
        <div className="footer__contact-details">
          <div className="footer__contact-item">
            <Envelope size={26} color="#9eff00" weight="fill" />
            hello@skandanexus.com
          </div>
          <div className="footer__contact-item">
            <Phone size={26} color="#9eff00" weight="fill" />
            +91 1234567890
          </div>
          <div className="footer__contact-item">
            <MapPin size={26} color="#9eff00" weight="fill" />
            Somewhere in the world
          </div>
        </div>
        <div className="footer__copyright">
          <p className="footer__copyright-text">
            © 2025 Skanda Nexus Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
