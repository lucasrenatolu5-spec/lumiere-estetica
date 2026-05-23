import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerBrand}>
          <a href="#" className={styles.logo}>
            Lumière <span>Estética</span>
          </a>
          <p>
            Clínica de Estética Avançada em Recife, PE. Onde a ciência e a arte
            se encontram para revelar a sua beleza natural.
          </p>
          <div className={styles.footerSocial}>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">📸</a>
            <a href="https://wa.me/5581897285l4" className={styles.socialIcon} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">📱</a>
          </div>
        </div>

        <div className={styles.footerCol}>
          <h4>Serviços</h4>
          <ul className={styles.footerLinks}>
            <li><a href="#servicos">Skincare & Pele</a></li>
            <li><a href="#servicos">Harmonização Facial</a></li>
            <li><a href="#servicos">Tratamentos Corporais</a></li>
            <li><a href="#servicos">Microagulhamento</a></li>
            <li><a href="#servicos">Peeling Químico</a></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Clínica</h4>
          <ul className={styles.footerLinks}>
            <li><a href="#sobre">Sobre Nós</a></li>
            <li><a href="#equipe">Nossa Equipe</a></li>
            <li><a href="#localizacao">Localização</a></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Contato</h4>
          <ul className={styles.footerLinks}>
            <li><a href="https://wa.me/5581897285l4" target="_blank" rel="noopener noreferrer">(81) 8972-8514</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">@lumiere.estetica</a></li>
            <li><a href="#">Boa Viagem, Recife</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2025 Lumière Estética · Todos os direitos reservados</p>
        <p>Feito com <span className={styles.heart}>♥</span> para mulheres que se amam</p>
      </div>
    </footer>
  )
}
