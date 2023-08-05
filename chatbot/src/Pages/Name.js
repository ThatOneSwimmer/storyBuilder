import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { ReferenceDataContext } from "../ReferenceDataContext";
import seal from '../images/seal-no-outline.png';
import unicorn from '../images/unicorn.png';
import bear from '../images/polar-bear.png';
import dog from '../images/walking-the-dog.png';
import cat from '../images/cat.png';

// use a map to have the img src to access the img paths
// before img src = {animal} only took in a string of the animal
// the key is animal that was stored inside the context and the value is from the import statements

const animalImages = {
    seal: seal,
    unicorn: unicorn,
    bear: bear,
    dog: dog,
    cat: cat,
  };


const Name = () => {
    const { name, setName, animal } = useContext(ReferenceDataContext);
    const navigate = useNavigate();

    return (
        <>
            <div className = "animal-page">
                <div className = "title-container">
                    <h3>
                        what's your name?
                    </h3> 
                </div>
                <section className = "animals-container"> 
                    <img src={animalImages[animal]} alt={animal} className = "seal-img" />
                </section>
                <div class="search-bar">
                    <form class="form">
                        <input type="text" class="form__field" 
                        placeholder="Enter your name.." 
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>
                        <button onClick={() => navigate('/readinglvl')} className = "search-button" type = "submit">
                        <svg viewBox="0 0 1024 1024"><path class="path1" d="M384 64l512 448-512 448-96-96 352-352-352-352z"></path></svg>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Name;