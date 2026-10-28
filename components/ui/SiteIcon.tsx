import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faCalendarDays,
  faCamera,
  faChampagneGlasses,
  faChurch,
  faEnvelope,
  faGem,
  faGlobe,
  faGraduationCap,
  faHandHoldingHeart,
  faHandshake,
  faHeart,
  faLock,
  faMasksTheater,
  faSchool,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const icons = {
  bullseye: faBullseye,
  calendar: faCalendarDays,
  camera: faCamera,
  celebration: faChampagneGlasses,
  church: faChurch,
  email: faEnvelope,
  facebook: faFacebook,
  gem: faGem,
  globe: faGlobe,
  graduation: faGraduationCap,
  heart: faHeart,
  instagram: faInstagram,
  lock: faLock,
  masks: faMasksTheater,
  school: faSchool,
  handHoldingHeart: faHandHoldingHeart,
  handshake: faHandshake,
  star: faStar,
  xTwitter: faXTwitter,
};

export type SiteIconName = keyof typeof icons;

export default function SiteIcon({ name }: { name: SiteIconName }) {
  return (
    <FontAwesomeIcon
      icon={icons[name]}
      className={`site-icon site-icon-${name}`}
      aria-hidden="true"
    />
  );
}
