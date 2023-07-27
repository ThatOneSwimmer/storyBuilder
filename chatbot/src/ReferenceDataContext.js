import { createContext, useState } from "react";

const ReferenceDataContext = createContext({ 
    prompt: "", 
    setPrompt: () => {},
    readinglvl: "",
    setReadingLvl: () => {},
    animal: "",
    setAnimal: () => {},
    name: "",
    setName: () => {},
 });

const ReferenceDataContextProvider = ({ children }) => {
    const [prompt, setPrompt] = useState(undefined);
    const [readinglvl, setReadingLvl] = useState(undefined);
    const [animal,setAnimal] = useState(undefined);
    const [name, setName] = useState(undefined);

    return (
        <ReferenceDataContext.Provider value ={{prompt, 
                                                setPrompt, 
                                                readinglvl, 
                                                setReadingLvl,
                                                animal,
                                                setAnimal,
                                                name,
                                                setName,
                                               }}>
            {children}
        </ReferenceDataContext.Provider>
    );
};

export { ReferenceDataContext, ReferenceDataContextProvider };