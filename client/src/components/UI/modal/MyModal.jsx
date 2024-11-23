import styles from './MyModal.module.css';

export default function MyModal({children, visibility, setVisibility}) {
  const classes = [styles.myModal];

  const closeModal = () => {

  }

  if (visibility) {
    classes.push(styles.active);
  }

  return (
    <div className={classes.join(" ")} onClick={() => setVisibility(false)}>
      <div 
       onClick={(e) => e.stopPropagation()}
       className={styles.myModalContent}>
        {children}
      </div>
    </div>
  )
}