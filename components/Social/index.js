import styles from './Social.module.scss'
import { Instagram, Linkedin, GitHub, Codepen, Send } from 'react-feather'

export default function Social() {
  return (
    <>
      <ul className={styles.socialLinks}>
        <li><a href="#" title="GitHub" target="_blank"><GitHub size={20} /></a></li>
        <li><a href="#" title="Linkedin" target="_blank"><Linkedin size={20} /></a></li>
        <li><a href="#" title="Instagram" target="_blank"><Instagram size={20} /></a></li>
        <li><a href="#" title="Codepen" target="_blank"><Codepen size={20} /></a></li>
        <li><a href="#" title="WhatsApp" target="_blank"><Send size={20} /></a></li>
      </ul>
      <ul className={styles.contactLink}>
        <li><a href="#">hi@kariston.dev</a></li>
      </ul>
    </>
  )
}