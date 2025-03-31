import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#articles", label: "Articles" },
    { href: "#skills", label: "Skills" },
    { href: "#work", label: "work" },
  ];

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <a href="#" className={css.name}>OGUNTOYE</a>

        {/* Navigation Menu */}
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
        
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpened(false)}>
                {link.label}
              </a>
            </li>
          ))}

          <li className={`flexCenter ${css.phone}`}>            
            <a href="tel:+2347018500411" aria-label="Call Farouq Oguntoye">
              <p>+234 701 850 0411</p>
              <BiPhoneCall size={"40px"} />
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
          aria-label={menuOpened ? "Close menu" : "Open menu"}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setMenuOpened((prev) => !prev); }}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
