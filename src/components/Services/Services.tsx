import styles from './Services.module.css'

const services = [
  {
    num: '01',
    icon: '✨',
    title: 'Skincare & Pele',
    desc: 'Protocolos avançados para transformar a saúde e aparência da sua pele.',
    items: ['Limpeza de Pele Profunda', 'Hidratação Intensiva', 'Tratamento Anti-idade', 'Controle de Oleosidade'],
  },
  {
    num: '02',
    icon: '💆',
    title: 'Harmonização Facial',
    desc: 'Realce seus traços com procedimentos precisos e resultados naturais.',
    items: ['Bioestimuladores', 'Preenchimento Labial', 'Lifting Facial', 'Toxina Botulínica'],
  },
  {
    num: '03',
    icon: '🌸',
    title: 'Microagulhamento',
    desc: 'Estimule a produção de colágeno e renove sua pele de dentro para fora.',
    items: ['Microagulhamento Clássico', 'Com Vitamina C', 'Com Ácido Hialurônico', 'Radiofrequência'],
  },
  {
    num: '04',
    icon: '🧪',
    title: 'Peeling Químico',
    desc: 'Renovação celular com ácidos selecionados para cada tipo de pele.',
    items: ['Peeling de Glicólico', 'Peeling de Mandélico', 'Peeling de TCA', 'Peeling de Salicílico'],
  },
  {
    num: '05',
    icon: '💆‍♀️',
    title: 'Tratamentos Corporais',
    desc: 'Cuide do seu corpo com procedimentos que aliam estética e bem-estar.',
    items: ['Drenagem Linfática', 'Modelagem Corporal', 'Redução de Gordura', 'Tratamento Anticelulite'],
  },
  {
    num: '06',
    icon: '🌙',
    title: 'Protocolos Exclusivos',
    desc: 'Combinações únicas de tratamentos criadas especialmente para você.',
    items: ['Protocolo Noiva', 'Protocolo Anti-stress', 'Protocolo Luminosidade', 'Ritual Lumière'],
  },
]

export function Services() {
  return (
    <section className={styles.services} id="servicos">
      <div className={styles.servicesHeader}>
        <div>
          <div className={styles.sectionLabel}>
            <span>O que oferecemos</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Nossos <em>serviços</em>
          </h2>
        </div>
        <p>
          Cada tratamento é personalizado para potencializar sua beleza natural com
          segurança e resultados duradouros.
        </p>
      </div>

      <div className={styles.servicesGrid}>
        {services.map((s, i) => (
          <div className={`${styles.serviceCard} reveal`} key={s.num} style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className={styles.serviceNum}>{s.num}</div>
            <div className={styles.serviceIcon}>{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <ul className={styles.serviceItems}>
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.serviceArrow}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
