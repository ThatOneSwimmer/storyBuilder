import { useNavigate } from 'react-router-dom';
import image1 from '../images/1.jpg';

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
    <section className="about-navbar">
        <a href="/">Home</a>
        <a href="/achievements">Achievements</a>
        <a href="/help">Help/FAQ</a>
        <a href="/about">About Us</a>
    </section>
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
        <a href="/display" class="b">Get started!</a>
    </section>
    <img src={image1} alt="playground img" className = "playground-img" />
</div>
  );
};

export default Main;