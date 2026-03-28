/**
 * MadeBy — Portfolio signature badge
 * Usage: <MadeBy /> — pastki o'ng burchakka qo'shiladi
 *
 * Props:
 *   position?: 'bottom-right' | 'bottom-left'  (default: 'bottom-right')
 *   theme?:    'dark' | 'light'                 (default: 'dark')
 */

import styles from './MadeBy.module.css'

interface Props {
  position?: 'bottom-right' | 'bottom-left'
  theme?: 'dark' | 'light'
}

export default function MadeBy({ position = 'bottom-right', theme = 'dark' }: Props) {
  return (
    <a
      href="https://bnutfilloyev.uz"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.badge} ${styles[position]} ${styles[theme]}`}
      aria-label="Made by Bekhruz Nutfilloev"
    >
      <span className={styles.dot} aria-hidden="true" />
      <span className={styles.text}>Made by <strong>B.N.</strong></span>
    </a>
  )
}
