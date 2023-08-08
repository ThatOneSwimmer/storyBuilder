import { useNavigate } from 'react-router-dom';
import image1 from '../images/1.jpg';

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
    <section className = "description-container" >
        <h3>The Storybuilder</h3>
        <span> an online playground </span>
        <hr>
        </hr>
        <p>
        A fun app for kids that lets you create your own special story about your favorite animal! 
        Become the storyteller and choose which animal will be the star of your adventure. 
        </p>
        <a href="/animal" class="b">Get started!</a>
    </section>
    <img src={image1} alt="playground img" className = "playground-img" />
</div>
  );
};

export default Main;