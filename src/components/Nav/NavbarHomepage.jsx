import React, { useState, useEffect } from 'react';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';
import { IoIosMenu } from 'react-icons/io';

//Iconos
import Icon from "../../../src/assets/logo/icon_bw.png"
import IconWide from "../../../src/assets/logo/wide_white.png";

const NavbarHomepage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <section className={`py-4 px-4 md:py-0 md:px-0 ${scrolling ? 'bg-transparent' : ''}`}>
      <nav className={`flex justify-between rounded-2xl md:rounded-2xl md:mx-9 md:my-3 px-8 py-4 md:px-[3rem] md:py-5 list-none ${scrolling ? 'bg-neutral md:bg-neutral' : 'bg-neutral md:bg-transparent'}`}>
        <Link to="/">
          <img src={Icon} className="block md:hidden h-12 cursor-pointer my-auto" />
          <img src={IconWide} className="hidden md:block h-12 cursor-pointer my-auto" />
        </Link>
        <div className={`md:flex hidden items-center gap-10 text-white md:my-0 my-7 ${scrolling ? 'text-white' : 'text-white'}`}>
          <NavLinks />
        </div>
        <IoIosMenu className="md:hidden text-white text-4xl cursor-pointer my-2 list-none" onClick={handleMenuClick} />
      </nav>
      {showMenu && (
        <div className={`md:hidden flex flex-col items-center justify-center gap-5 py-3 my-1 text-white list-none ${scrolling ? 'bg-neutral' : 'bg-neutral'} 0 rounded-t-lg rounded-2xl animate-fade-down animate-duration-300 animate-ease-in-out`}>
          <NavLinks />
        </div>
      )}
    </section>
  );
};

export default NavbarHomepage;
