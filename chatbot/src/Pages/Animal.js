import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { ReferenceDataContext } from "../ReferenceDataContext";
import seal from '../images/seal-no-outline.png';
import unicorn from '../images/unicorn.png';
import bear from '../images/polar-bear.png';
import dog from '../images/walking-the-dog.png';
import cat from '../images/cat.png';

const Animal = () => {
    const { animal, setAnimal } = useContext(ReferenceDataContext);
    const navigate = useNavigate();
    const handleSealClick = () => {
        setAnimal("seal");
    };

    const handleUnicornClick = () => {
        setAnimal("unicorn");
    };

    const handleBearClick = () => {
        setAnimal("bear");
    };

    const handleDogClick = () => {
        setAnimal("dog");
    };

    const handleCatClick = () => {
        setAnimal("cat");
    };

    return (
        <div className = "animal-page">
            <div className = "title-container">
                <h3>
                    CHOOSE YOUR CHARACTER
                </h3> 
            </div>
            <section className = "animals-container"> 
                <img src={seal} alt="seal img" className = "seal-img" onClick = {handleSealClick} />
                <img src={unicorn} alt="unicorn img" className = "unicorn-img" onClick = {handleUnicornClick}/>
                <img src={bear} alt="bear img" className = "bear-img" onClick = {handleBearClick}/>
                <img src={dog} alt="dog img" className = "dog-img" onClick = {handleDogClick}/>
                <img src={cat} alt="cat img" className = "cat-img" onClick = {handleCatClick}/>
            </section>

            <button onClick={() => navigate('/name')} class= "b"> Next Step</button>
            
            {/* Lilyan's code*/}
            {/* <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: '50vh',
                }}
            >
                <strong>What's your favorite animal?   </strong>
                <textarea
                    type="text"
                    value={animal}
                    placeholder="type animal here"
                    onChange={(e) => setAnimal(e.target.value)}
                ></textarea>
            </div>
            <div
                style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: '30vh',
                }}
            >
                <button onClick={() => navigate('/name')}>
                    Next
                </button>
            </div> */}
    </div>
    )
}

export default Animal;