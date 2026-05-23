import { useCursor } from '../../hooks/useCursor'
import styles from './Cursor.module.css'

export function Cursor() {
  const { cursorRef, ringRef } = useCursor()

  return (
    <>
      <div ref={cursorRef as React.RefObject<HTMLDivElement>} className={styles.cursor} id="cursor" />
      <div ref={ringRef as React.RefObject<HTMLDivElement>} className={styles.cursorRing} id="cursorRing" />
    </>
  )
}
