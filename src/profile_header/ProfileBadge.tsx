import style from './ProfileBadge.module.css'
import { ReactComponent as AnonimBadge } from '../assets/anonimBadge.svg'

type ProfileBadgeProps = {
  title: string;
  lvl: number;
}

export default function ProfileBadge({ title, lvl }: ProfileBadgeProps) {
  return (
    <div className={style.container}>
      <AnonimBadge />
      <div className={style.lvlContainer}>
        <div className={style.flexJustifyBetween}>
          <div className={style.titleText}>{title}</div>
          <div className={style.lvlText}>Lvl {lvl}</div>
        </div>
        <div className={style.progressBar}>
          <div className={style.progress} />
        </div>
      </div>
    </div >
  );
}
