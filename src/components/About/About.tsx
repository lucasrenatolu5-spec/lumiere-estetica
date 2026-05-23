import styles from './About.module.css'

const pillars = [
  { icon: '🌿', title: 'Natural', desc: 'Resultados que realçam sua beleza sem artificialidades.' },
  { icon: '🔬', title: 'Científico', desc: 'Protocolos baseados em evidências e tecnologia.' },
  { icon: '💎', title: 'Exclusivo', desc: 'Cada tratamento é único, feito para você.' },
  { icon: '🤍', title: 'Humano', desc: 'Cuidado com empatia, escuta e dedicação.' },
]

export function About() {
  return (
    <section className={styles.about} id="sobre">
      <div className={`${styles.aboutVisual} reveal-left`}>
        <div className={styles.aboutCard}>
          <div className={styles.aboutCardInner} />
          <div className={styles.aboutPattern} />
        </div>
        <div className={styles.aboutFloat}>
          <strong>500+</strong>
          <p>Clientes Satisfeitas</p>
        </div>
        <div className={styles.aboutLine} />
      </div>

      <div className={`${styles.aboutContent} reveal-right`}>
        <div className={styles.sectionLabel}>
          <span>Sobre Nós</span>
        </div>
        <h2 className={styles.sectionTitle}>
          Onde a ciência encontra
          <em> a beleza</em>
        </h2>
        <p className={styles.aboutText}>
          A Lumière Estética nasceu do desejo de oferecer tratamentos que respeitam
          a individualidade de cada cliente. Com mais de 8 anos de experiência, nossa
          equipe de especialistas combina tecnologia de ponta com um atendimento
          genuinamente humano.
        </p>
        <p className={styles.aboutText}>
          Acreditamos que a beleza não é uma máscara, mas uma expressão autêntica
          de quem você é. Por isso, cada protocolo é desenvolvido de forma personalizada,
          pensando nos seus objetivos e na saúde da sua pele.
        </p>
        <div className={styles.pillars}>
          {pillars.map((p) => (
            <div className={styles.pillar} key={p.title}>
              <div className={styles.pillarIcon}>{p.icon}</div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
