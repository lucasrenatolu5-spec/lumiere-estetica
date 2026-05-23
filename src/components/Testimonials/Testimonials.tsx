import styles from './Testimonials.module.css'

const testimonials = [
  {
    text: 'A Lumière mudou completamente minha relação com minha própria pele. A Dra. Isabela é incrível — cuidadosa, atenciosa e os resultados são reais. Me sinto outra pessoa.',
    name: 'Aline Figueiredo',
    since: 'Cliente há 3 anos',
    initial: 'A',
  },
  {
    text: 'Fiz a drenagem com a Valentina e foi a melhor experiência da minha vida. O ambiente é luxuoso, o atendimento impecável. Indico para todas as minhas amigas.',
    name: 'Mariana Souza',
    since: 'Cliente há 1 ano',
    initial: 'M',
  },
  {
    text: 'O microagulhamento com a Clélia foi transformador. Minha pele nunca esteve tão luminosa. A clínica tem um cuidado com cada detalhe que é raro de encontrar.',
    name: 'Rafaela Torres',
    since: 'Cliente há 2 anos',
    initial: 'R',
  },
]

export function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.sectionLabel}>
        <span>Depoimentos</span>
      </div>
      <h2 className={styles.sectionTitle}>
        O que nossas clientes <em>dizem</em>
      </h2>
      <div className={styles.testimonialsTrack}>
        {testimonials.map((t, i) => (
          <div
            className={`${styles.testimonialCard} reveal`}
            key={t.name}
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            <span className={styles.quoteMark}>"</span>
            <p className={styles.testimonialText}>{t.text}</p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar}>{t.initial}</div>
              <div className={styles.authorInfo}>
                <strong>{t.name}</strong>
                <small>{t.since}</small>
              </div>
            </div>
            <div className={styles.stars}>★★★★★</div>
          </div>
        ))}
      </div>
    </section>
  )
}
