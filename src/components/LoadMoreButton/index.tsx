import styles from '@/styles/LoadMoreButton.module.css'

interface LoadMoreButtonProps {
  onClick: () => void
  label?: string
}

export const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
  onClick,
  label = 'Ver mais'
}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.icon}>+</span>
      <span>{label}</span>
    </button>
  )
}
