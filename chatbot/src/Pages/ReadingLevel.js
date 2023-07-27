import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { ReferenceDataContext } from "../ReferenceDataContext";

const ReadingLevel = () => {
    const { readinglvl, setReadingLvl } = useContext(ReferenceDataContext);
    const navigate = useNavigate();


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
                <select value={readinglvl} onChange={e => setReadingLvl(e.target.value)}>
                <option value="Undefined">Select One...</option>
                <option value="Kindergarten">Kindergarten</option>
                <option value="First">First Grade</option>
                <option value="Second">Second Grade</option>
                <option value="Third">Third Grade</option>
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
                <button onClick={() => navigate('/animal')}>
                    Next
                </button>      
            </div>
        </>
    )
}

export default ReadingLevel;