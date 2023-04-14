import styles from './ProfilePicture.module.css'


export default function ProfilePicture() {

  return (
    <div className={styles.container}>
      <img width={100} className={styles.avatar} src="/public/avatar.png" />
    </div>
  )
}
