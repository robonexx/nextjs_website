import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import NavMobile from './NavMobile';
import styles from '../styles/nav.module.css';

export const Nav = () => {
  const [active, setActive] = useState(false);
  const navbar = useRef(null);
  useEffect(()=>{
    window.addEventListener("scroll", () => {
      if(navbar.current!==null){
        if (window.scrollY > navbar.current.offsetHeight + 100) {
          navbar.current.classList.add(`${styles.hide}`);
        } else if (window.scrollY < navbar.current.offsetHeight -5) {
          navbar.current.classList.remove(`${styles.hide}`);
        }
      }
    });
  },[]);
  /* const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(true);
      } else {
        // if scroll up show the navbar
        setShow(false);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]); */

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className={styles.nav} ref={navbar}>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <span className='text-xl text-white font-bold uppercase tracking-wide'>
              Creative Minds . Life
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-black rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <NavMobile />
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }  w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-end  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white '>
                Home
              </a>
            </Link>
            <Link href='/services'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-pink-600 hover:text-white'>
                Services
              </a>
            </Link>
            <Link href='/about'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-lime-600 hover:text-white'>
                About
              </a>
            </Link>
            <Link href='/contact'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-600 hover:text-white'>
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
