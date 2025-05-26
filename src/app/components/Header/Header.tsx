'use client'
// import Image from 'next/image'
import Link from 'next/link';
import styles from './Header.module.scss';

import { FaInstagram } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';
import { useState } from 'react';

const Header = () => {

    const [navMenuOpen, setNavMenuOpen] = useState(false);

    const handleNavMenuClick = () => {
        navMenuOpen ? setNavMenuOpen(false) : setNavMenuOpen(true);
    }

    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <div className={styles.header__nav_container}>
                    <div className={styles.header__nav_container_logo}>
                        <h1 className={`h2`}>Caterina Giordo</h1>
                    </div>
                    <nav className={styles.header__nav_container_menu}>
                        <ul className={`${styles.header__nav_menu} list-no-style`}>
                            <li className={`${styles.header__nav_menu_item} p`}><Link className={`link-effect-load`} href="/" >Home</Link></li>
                            <li className={`${styles.header__nav_menu_item} p`}><Link className={`link-effect-load`} href="/" >Home</Link></li>
                            <li className={`${styles.header__nav_menu_item} p`}><Link className={`link-effect-load`} href="/" >Home</Link></li>
                            <li className={`${styles.header__nav_menu_item} p`}><Link className={`link-effect-load`} href="/" >Home</Link></li>
                        </ul>
                    </nav>
                    <nav className={styles.header__nav_container_social}>
                        <ul className={`list-no-style`}>
                            <li className={styles.header__nav_menu_icon}><a className={`link-no-style`} href="https://www.instagram.com/catgiordo/" target="_blank"><FaInstagram /></a></li>
                            <li className={styles.header__nav_menu_icon}><a className={`link-no-style`} href="mailto:caterina.giordo@gmail.com"><TfiEmail /></a></li>
                        </ul>
                    </nav>
                    <div className={styles.header__nav_menu_lines} onClick={handleNavMenuClick}>
                        <span className={`${styles.header__nav_menu_line} ${styles.header__nav_menu_line__one}  ${navMenuOpen ? `${styles.header__nav_menu_line__one_open}` : ''}`}></span>
                        <span className={`${styles.header__nav_menu_line} ${styles.header__nav_menu_line__two} ${navMenuOpen ? `${styles.header__nav_menu_line__two_open}` : ''}`}></span>
                        <span className={`${styles.header__nav_menu_line} ${styles.header__nav_menu_line__three} ${navMenuOpen ? `${styles.header__nav_menu_line__three_open}` : ''}`}></span>
                    </div>
                </div>
                {
                    navMenuOpen
                    &&
                    <div className={styles.header__nav_menu_mobile}>
                        <nav>
                            <ul className={`list-no-style`}>
                                <li><Link className={`link-no-style`} href="/" >Home</Link></li>
                                <li><Link className={`link-no-style`} href="/" >Home</Link></li>
                                <li><Link className={`link-no-style`} href="/" >Home</Link></li>
                                <li><Link className={`link-no-style`} href="/" >Home</Link></li>
                            </ul>
                        </nav>
                        <nav>
                            <ul className={`list-no-style`}>
                                <li className={styles.header__nav_menu_icon}><a className={`link-no-style`} href="https://www.instagram.com/catgiordo/" target="_blank"><FaInstagram /></a></li>
                                <li className={styles.header__nav_menu_icon}><a className={`link-no-style`} href="mailto:caterina.giordo@gmail.com"><TfiEmail /></a></li>
                            </ul>
                        </nav>
                    </div>
                }
            </div>
            {/* <Image
                src="/images/yoga-placeholder-four.webp"
                alt="Picture of the yoga teacher Caterina Giordo"
                className="bg-img"
                fill={true}
            /> */}
        </header>
    )
}

export default Header;