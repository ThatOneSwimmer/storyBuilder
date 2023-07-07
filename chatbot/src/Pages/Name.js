import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { ReferenceDataContext } from "../ReferenceDataContext";

const Name = () => {
    const { name, setName } = useContext(ReferenceDataContext);
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
                <strong>What's your name?   </strong>
                <textarea
                    type="text"
                    value={name}
                    placeholder="type name here"
                    onChange={(e) => setName(e.target.value)}
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
                <button onClick={() => navigate('/result')}>
                    Next
                </button>
            </div>
        </>
    )
}

export default Name;