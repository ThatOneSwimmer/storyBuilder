import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { ReferenceDataContext } from "../ReferenceDataContext";

const Animal = () => {
    const { animal, setAnimal } = useContext(ReferenceDataContext);
    const navigate = useNavigate();

    return (
        <>
            <div
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
            </div>
        </>
    )
}

export default Animal;