import SocialLink from './SocialLink';
import styles from './App.module.css'
import ProfileHeader from './profile_header/ProfileHeader';

function App() {
  return (
    <div className={styles.container}>
      <ProfileHeader />
      <div className={styles.linkContainer}>
        <SocialLink isBadge={false} socialKey="twitter" href='http://twitter.com' />
        <SocialLink isBadge socialKey='github' href='http://github.com' />
      </div>
    </div >
  );
}

export default App
