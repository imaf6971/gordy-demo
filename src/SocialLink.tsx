import styles from './SocialLink.module.css'
import { ReactComponent as GitHub } from "./assets/gh.svg"
import { ReactComponent as Twitter } from './assets/twitter.svg';
import { ReactComponent as Badge } from './assets/badge.svg';

type SocialKeys = "twitter" | "github";

type SocialLinkProps = {
  isBadge: boolean
  socialKey: SocialKeys
  href: string
}

type SocialIconsMap = Record<SocialKeys, JSX.Element>

const socialIcons: SocialIconsMap = {
  'github': <GitHub />,
  'twitter': <Twitter />
}

const socialTitles: Record<SocialKeys, string> = {
  'github': "GitHub",
  'twitter': "Twitter"
}

export default function SocialLink({ isBadge, socialKey, href }: SocialLinkProps) {
  const social = socialIcons[socialKey];
  const socialTitle = socialTitles[socialKey];

  return (
    <a className={styles.container} href={href} >
      {social}
      <span className={styles.socialTitle}>
        {socialTitle}
      </span>
      {isBadge && <Badge />}
    </a>
  );
}
