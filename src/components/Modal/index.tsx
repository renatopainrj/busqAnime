import styles from '@/styles/Modal.module.css'

interface ModalProps {
  isOpen: boolean // Define se o modal está visível
  onClose: () => void // Função para fechar o modal
  title?: string // Título opcional do modal
  children: React.ReactNode // Conteúdo do modal
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null // Não renderiza o modal se ele estiver fechado

  // Evita que o clique no modal (conteúdo) feche o modal
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose() // Fecha o modal se o clique for no overlay
    }
  }

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <button onClick={onClose} className={styles.closeButton}>
            &times;
          </button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  )
}

export default Modal
