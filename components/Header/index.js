import styles from './Header.module.scss'

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <a className={styles.brand} href="/">
          <svg width="42" height="48" viewBox="0 0 42 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.3046 31.9857H16.6846V26.9393L19.0425 24.6475L24.5297 31.9857H27.5046L20.7173 23.0168L27.3724 16.56H24.2432L16.6846 24.1186V16.56H14.3046V31.9857Z" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7846 0L41.5692 12V36L20.7846 48L0 36V12L20.7846 0ZM20.7846 2.88L39.0751 13.44V34.56L20.7846 45.12L2.49416 34.56V13.44L20.7846 2.88Z" />
          </svg>
          kariston.dev
        </a>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#" title="Resume" className={styles.btn}>Resume</a>
        </nav>
      </header>
    </>
  )
}