import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
    document.body.style.overflow = !menuOpen ? 'hidden' : ''
  }

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} id="nav">
        <a href="#" className={styles.logo}>
          Lumière <span>Estética</span>
        </a>
        <ul className={styles.links}>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#equipe">Equipe</a></li>
          <li><a href="#localizacao">Localização</a></li>
          <li>
            <a href="https://wa.me/5581897285l4" target="_blank" className={styles.cta}>
              Agendar
            </a>
          </li>
        </ul>
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`${styles.mobileNav} ${menuOpen ? styles.mobileOpen : ''}`}>
        <a href="#sobre" onClick={closeMenu}>Sobre</a>
        <a href="#servicos" onClick={closeMenu}>Serviços</a>
        <a href="#equipe" onClick={closeMenu}>Equipe</a>
        <a href="#localizacao" onClick={closeMenu}>Localização</a>
        <a href="https://wa.me/5581897285l4" target="_blank" onClick={closeMenu}>Agendar</a>
      </div>
    </>
  )
}
