import styles from './Hero.module.scss'

import { ArrowRight } from 'react-feather'

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            <span className={styles.tagline}>👋🏻 Hi, my name is</span>
            <strong>Kariston Stefane.</strong>
            I'm a UI/UX Designer and Developer.
          </h1>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aperiam odit vel dolorem, eveniet, sequi possimus aut quidem delectus numquam facilis rerum quae perspiciatis sit a aspernatur eligendi recusandae placeat?</p>
          <a href="#about" className={styles.btn} title="Let's Talk">Let's Talk <ArrowRight size={20} /></a>
        </div>
      </section>
    </>
  )
}