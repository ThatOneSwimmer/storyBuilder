export function About() {
    return (
        <div className="about-page">
            <div className="contact-navbar">
                <a href="/">Home</a>
                <a href="/achievements">Achievements</a>
                <a href="/help">Help/FAQ</a>
                <a href="/about">About Us</a>
            </div>
            <section className = "description-container" >
                <h3>The Storybuilder</h3>
                <span> an online playground </span>
                <hr>
                </hr>
                <p>
                    write a brief description of the app here lol 
                    I want to go pet capybaras again :U 
                    also I love ducks they're my second favorite animal and I draw them on whiteboards at plu :O
                </p>
                <button type="button" class = "b">Get started! </button>
            </section>
            <img src="../images/1.jpg" alt="playground img"></img>
        </div>
    );
  }