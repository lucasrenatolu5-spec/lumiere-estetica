import styles from './Team.module.css'

const team = [
  {
    name: 'Dra. Isabela Nunes',
    role: 'Diretora Clínica',
    desc: 'Especialista em dermatologia estética com 12 anos de experiência. Formada pela USP com pós-graduação em Paris.',
    badge: 'Fundadora',
    gradient: 'linear-gradient(160deg, #e8d0d0, #c9a0a0)',
    initial: 'I',
  },
  {
    name: 'Valentina Reis',
    role: 'Biomédica Esteta',
    desc: 'Especializada em tratamentos corporais e drenagem linfática. Certificada em técnicas internacionais.',
    badge: 'Especialista',
    gradient: 'linear-gradient(160deg, #d0dde8, #a0b8c9)',
    initial: 'V',
  },
  {
    name: 'Clélia Monteiro',
    role: 'Esteta Facial',
    desc: 'Referência em microagulhamento e peelings. Atende há 7 anos com foco em peles sensíveis e maduras.',
    badge: 'Senior',
    gradient: 'linear-gradient(160deg, #e8e0d0, #c9b8a0)',
    initial: 'C',
  },
]

export function Team() {
  return (
    <section className={styles.team} id="equipe">
      <div className={styles.teamHeader}>
        <div className={styles.sectionLabel}>
          <span>Nossa Equipe</span>
        </div>
        <h2 className={styles.sectionTitle}>
          Especialistas que <em>cuidam de você</em>
        </h2>
      </div>

      <div className={styles.teamGrid}>
        {team.map((member, i) => (
          <div className={`${styles.teamCard} reveal`} key={member.name} style={{ transitionDelay: `${i * 0.12}s` }}>
            <div className={styles.teamPhoto}>
              <div className={styles.teamPhotoBg} style={{ background: member.gradient }} />
              <div className={styles.teamPhotoArt}>{member.initial}</div>
              <div className={styles.teamPhotoPattern} />
              <div className={styles.teamPhotoOverlay}>
                <div className={styles.teamSocial}>
                  <a href="#" aria-label="Instagram">IG</a>
                  <a href="#" aria-label="LinkedIn">IN</a>
                </div>
              </div>
              <div className={styles.teamBadge}>{member.badge}</div>
            </div>
            <div className={styles.teamInfo}>
              <h3>{member.name}</h3>
              <div className={styles.role}>{member.role}</div>
              <p>{member.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
