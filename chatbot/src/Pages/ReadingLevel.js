import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { ReferenceDataContext } from "../ReferenceDataContext";

const ReadingLevel = () => {
    const { readinglvl, setReadingLvl } = useContext(ReferenceDataContext);
    const navigate = useNavigate();

    const update = (e) => {
        setReadingLvl(e.target.readinglvl);
    }

    return (
        <>
            <div
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
            </div>
        </>
    )
}

export default ReadingLevel;