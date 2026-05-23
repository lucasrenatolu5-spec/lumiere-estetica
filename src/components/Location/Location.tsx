import styles from './Location.module.css'

export function Location() {
  return (
    <section className={styles.location} id="localizacao">
      <div className={`${styles.locationInfo} reveal-left`}>
        <div className={styles.sectionLabel}>
          <span>Nos Encontre</span>
        </div>
        <h2 className={styles.sectionTitle}>
          Venha nos <em>visitar</em>
        </h2>
        <div className={styles.locationAddress}>
          <div className={styles.locationItem}>
            <div className={styles.locationIcon}>📍</div>
            <div className={styles.locationItemText}>
              <strong>Endereço</strong>
              <span>Rua das Flores, 320 — Boa Viagem<br />Recife, PE — CEP 51020-010</span>
            </div>
          </div>
          <div className={styles.locationItem}>
            <div className={styles.locationIcon}>🕐</div>
            <div className={styles.locationItemText}>
              <strong>Horário de Atendimento</strong>
              <span>Seg–Sex: 08h às 20h<br />Sáb: 09h às 17h</span>
            </div>
          </div>
          <div className={styles.locationItem}>
            <div className={styles.locationIcon}>📱</div>
            <div className={styles.locationItemText}>
              <strong>WhatsApp</strong>
              <a href="https://wa.me/5581897285l4" target="_blank" rel="noopener noreferrer">
                (81) 8972-8514
              </a>
            </div>
          </div>
          <div className={styles.locationItem}>
            <div className={styles.locationIcon}>📸</div>
            <div className={styles.locationItemText}>
              <strong>Instagram</strong>
              <a href="#" target="_blank" rel="noopener noreferrer">@lumiere.estetica</a>
            </div>
          </div>
        </div>
        <a
          href="https://maps.google.com/maps?q=Boa+Viagem+Recife+PE"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mapBtn}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 1.5C6.51 1.5 4.5 3.51 4.5 6c0 3.75 4.5 10.5 4.5 10.5S13.5 9.75 13.5 6c0-2.49-2.01-4.5-4.5-4.5zm0 6.75a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z" fill="currentColor"/>
          </svg>
          <span>Ver no Google Maps</span>
        </a>
      </div>

      <div className={`${styles.mapFrame} reveal-right`}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.4!2d-34.9!3d-8.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18f6cddd8a4b%3A0x2b52faef29a72e04!2sBoa%20Viagem%2C%20Recife%20-%20PE!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Lumière Estética"
        />
        <div className={styles.mapOverlay} />
      </div>
    </section>
  )
}
