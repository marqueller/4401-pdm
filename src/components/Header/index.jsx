import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <span>CedupFlix</span>
            <nav>
                <a href="/">Home</a>
                <a href="/assistir">Assistir</a>
                <a href="/acesso">Login</a>
            </nav>
        </header>
    )
}

export default Header;
