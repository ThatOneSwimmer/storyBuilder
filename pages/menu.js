import './menu.css'

export default function TheMenu() {
  return (
    <main className ="main">
      <div className="topnav"> 
        <a href="/thespace">The Space</a>
        <a href="/menu">Menu & Pastries</a>
        <a href="/contact">Contact</a>
        <a href="/about">About Us</a>
        <button type="submit" className="button">Order Online</button>
      </div>
    </main>
)
}

