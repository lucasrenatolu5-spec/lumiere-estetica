import styles from './CTA.module.css'

export function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.sectionLabel}>
        <span>Pronta para começar?</span>
      </div>
      <h2 className={styles.ctaTitle}>
        Agende sua consulta <em>hoje mesmo</em>
      </h2>
      <p className={styles.ctaText}>
        Dê o primeiro passo para a sua melhor versão. Nossa equipe está pronta
        para criar um protocolo exclusivo para você.
      </p>
      <div className={styles.ctaButtons}>
        <a
          href="https://wa.me/5581897285l4"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnWhatsapp}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 0C4.477 0 0 4.477 0 10c0 1.76.456 3.418 1.26 4.864L0 20l5.29-1.238A9.953 9.953 0 0010 20c5.523 0 10-4.477 10-10S15.523 0 10 0zm5.07 14.414c-.21.59-1.24 1.13-1.706 1.197-.43.062-.98.088-1.583-.1-.366-.114-.836-.267-1.43-.523-2.51-1.084-4.15-3.6-4.277-3.77-.127-.17-1.04-1.38-1.04-2.632 0-1.25.656-1.866.888-2.12.232-.254.507-.317.676-.317h.486c.155 0 .366-.058.572.437.21.508.71 1.758.774 1.885.062.127.104.275.02.444-.082.17-.123.275-.246.423-.123.148-.26.33-.37.444-.124.127-.253.265-.11.52.145.254.643 1.06 1.38 1.718.95.843 1.75 1.103 2 1.23.25.127.396.106.542-.063.148-.17.63-.73.797-.98.168-.25.337-.21.57-.126.232.084 1.476.697 1.73.824.254.127.423.19.486.296.062.105.062.607-.148 1.197z"/>
          </svg>
          Agendar via WhatsApp
        </a>
        <a href="tel:+558189728514" className={styles.btnPrimary}>
          <span>Ligar Agora</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  )
}
