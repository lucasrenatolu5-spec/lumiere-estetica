import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <div className={styles.heroBadge}>
          <span>Clínica de Estética Avançada</span>
        </div>
        <h1 className={styles.heroTitle}>
          Revele sua
          <em>beleza natural</em>
          com ciência
        </h1>
        <p className={styles.heroDesc}>
          Tratamentos personalizados com tecnologia de ponta e o toque humano
          que você merece. Em Recife, PE.
        </p>
        <div className={styles.heroActions}>
          <a href="https://wa.me/5581897285l4" target="_blank" className={styles.btnPrimary}>
            <span>Agendar Consulta</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#sobre" className={styles.btnGhost}>
            Conheça a Clínica
          </a>
        </div>
        <div className={styles.heroScroll}>
          <div className={styles.scrollLine} />
          <span>Scroll</span>
        </div>
      </div>

      <div className={styles.heroRight}>
        <div className={styles.heroImgWrap}>
          <div className={styles.heroImgBg} />
          <div className={styles.heroShapes}>
            <div className={`${styles.shapeCircle} ${styles.shape1}`} />
            <div className={`${styles.shapeCircle} ${styles.shape2}`} />
            <div className={`${styles.shapeCircle} ${styles.shape3}`} />
          </div>
          <div className={styles.heroImgOverlay} />
        </div>
        <div className={styles.heroTag}>
          <strong>8+</strong>
          <small>Anos de Experiência</small>
        </div>
      </div>
    </section>
  )
}
