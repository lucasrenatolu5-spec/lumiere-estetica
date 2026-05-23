import styles from './Numbers.module.css'

const numbers = [
  { val: '500', suffix: '+', label: 'Clientes Satisfeitas' },
  { val: '8', suffix: '+', label: 'Anos de Experiência' },
  { val: '18', suffix: '+', label: 'Tratamentos Exclusivos' },
  { val: '98', suffix: '%', label: 'Taxa de Satisfação' },
]

export function Numbers() {
  return (
    <div className={styles.numbers}>
      <div className={styles.numbersGrid}>
        {numbers.map((n, i) => (
          <div
            className={`${styles.numberItem} reveal`}
            key={n.label}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className={styles.numberVal}>
              {n.val}<span>{n.suffix}</span>
            </div>
            <div className={styles.numberLabel}>{n.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
