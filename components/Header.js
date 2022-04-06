import styles from '../styles/Header.module.css'
import Logo from './Logo';

const Header = () => {
    
    return ( 
        <div className={styles.header}>
            <h1 className={styles.title} >
                <span></span>
                <Logo />
            </h1>
        </div>
     );
}
 
export default Header;