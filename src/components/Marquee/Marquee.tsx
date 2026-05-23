import styles from './Marquee.module.css'

const items = [
  'Skincare Avançado',
  'Harmonização Facial',
  'Microagulhamento',
  'Peeling Químico',
  'Drenagem Linfática',
  'Tratamentos Corporais',
]

export function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className={styles.marqueeWrap}>
      <div className={styles.marquee}>
        {doubled.map((item, i) => (
          <span key={i}>
            {item}
            <span className={styles.dot}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
