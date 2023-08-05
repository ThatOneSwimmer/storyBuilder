import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { ReferenceDataContext } from "../ReferenceDataContext";
import flowerGirl from '../images/flower-girl.png';
import boy from '../images/boy.png';

const ReadingLevel = () => {
    const { readinglvl, setReadingLvl } = useContext(ReferenceDataContext);
    const navigate = useNavigate();

    const update = (e) => {
        setReadingLvl(e.target.value);
    }

    if (readinglvl == undefined) {
        setReadingLvl('kindergarten');
    }

    return (
        <>
            <div className = "animal-page">
                <div className = "title-container">
                    <h3>
                        what's your grade level?
                    </h3> 
                </div>
            <section className = "kids-container"> 
            <img src={flowerGirl} className = "gradelvl-img" />
            <img src={boy} className = "gradelvl-img" />
            </section>
            <section className = "grade-dropdown-container">
                <select value={readinglvl} onChange={update} defaultValue="kindergarten">
                    <option value="kindergarten">Kindergarten</option>
                    <option value="first">First Grade</option>
                    <option value="second">Second Grade</option>
                    <option value="third">Third Grade</option>
                    <option value="fourth">Fourth Grade</option>
                    <option value="fifth">Fifth Grade</option>
                </select>
                <div className ="next-button">
                    <button onClick={() => navigate('/result')} className="b">
                        Next Step
                    </button>
                </div>
            </section>
            </div>
            {/* <div
                style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: '30vh',
                }}
            >
                <strong>What grade are you in?</strong>
                <select value={readinglvl} onChange={update}>
                <option value="kindergarten">Kindergarten</option>
                <option value="first">First Grade</option>
                <option value="second">Second Grade</option>
                <option value="third">Third Grade</option>
                </select>
            </div>
            <div
                style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: '30vh',
                }}
            >
                <button onClick={() => navigate('/result')}>
                    Next
                </button>      
            </div> */}
        </>
    )
}

export default ReadingLevel;