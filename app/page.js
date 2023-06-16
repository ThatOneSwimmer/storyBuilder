import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className="topnav">
          <a href="#space">The Space</a>
          <a href="#menu">Menu & Pastries</a>
          <a href="#contact">Contact</a>
          <a href="#about">About Us</a>
          <button type="submit" className="button">Order Online</button>
        </div>
        <img src="https://assets.cntraveller.in/photos/618e82491af22a472dbf4f9e/4:3/w_1792,h_1344,c_limit/Cafe%20Duco%20Interiors-10.jpg" alt="restaurant image" class="cafe"></img>
      </div>
    </main>
  )
}
