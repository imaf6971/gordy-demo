import ProfileBadge from "./ProfileBadge"
import style from "./ProfileHeader.module.css"
import ProfilePicture from "./ProfilePicture"


export default function ProfileHeader() {

  return (
    <div className={style.container}>
      <div className={style.bgImage} />
      <div className={style.picBadgeContainer}>
        <ProfilePicture />
        <ProfileBadge title="Crypto native" lvl={1} />
      </div>
    </div>
  )
}
