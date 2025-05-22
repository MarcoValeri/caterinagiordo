import Image from 'next/image'
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <div className={styles.header__nav_container}>
                    <h1>Caterina Giordo</h1>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                        </ul>
                    </nav>
                    <nav>
                        <ul>
                            <li>Instagram</li>
                            <li>Email</li>
                        </ul>
                    </nav>
                </div>
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