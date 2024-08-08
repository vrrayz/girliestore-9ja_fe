"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  ConfettiBadge,
  ConfettiDot,
  ConfettiSquare,
  ConfettiTriangle,
  ConfettiArch,
  ConfettiRibbon,
  ConfettiCircle,
} from "./ConfettiIcons/ConfettiIcons";

export const LandingPage = () => {
  return (
    <div className="body-wrapper">
      <section className="coming-soon-container">
        <div className="logo">
          <Image src="/assets/logo.png" width={75} height={75} alt="Logo" />
          <span>Girliestore9ja</span>
        </div>

        <div className="launch-text">
          <h2>We are coming soon!!</h2>
          <p>Stay tuned for something amazing</p>
        </div>

        <Image
          src="/assets/on_the_way.png"
          width={769}
          height={321}
          alt="Delivery"
        />

        <div className="subscribe-container">
          <form action="#">
            <label htmlFor="email">
              Subscribe to our mailing list to get latest updates
            </label>
            <div className="form-group-append my-4">
              <input type="text" className="append-form input" />
              <input
                type="submit"
                value="Subscribe"
                className="append-btn styled-button gradient-coral"
              />
            </div>
          </form>
        </div>

        <div className="footer-container">
          <div className="socials">
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
            {/* <a href="#">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a> */}
          </div>
          <div className="copyright">
            &copy; Copyrights Girliestore9ja | All Rights Reserved
          </div>
        </div>
      </section>
      <ConfettiBadge top={28} left={6} />
      <ConfettiTriangle top={6} left={6} />
      <ConfettiDot top={28} left={24} />
      <ConfettiSquare top={83} left={12} />
      <ConfettiArch top={17.2} left={78} />
      <ConfettiRibbon top={40} left={84.4} />
      <ConfettiCircle top={88} left={92} />
    </div>
  );
};
// w == 1440
// h == 1024
