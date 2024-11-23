import styles from './MyBotton.module.css';

export default function MyButton({children, ...props}) {
  return (
    <button {...props} className={styles.myBtn}>
    {children}
    </button>)
}