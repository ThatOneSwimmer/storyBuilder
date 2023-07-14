import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { ReferenceDataContext } from "../ReferenceDataContext";
const { Configuration, OpenAIApi } = require("openai");

const Result = () => {
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
      });
    
    const openai = new OpenAIApi(configuration);
    const { animal, setAnimal }= useContext(ReferenceDataContext);
    const { name, setName } = useContext(ReferenceDataContext);
    const { readinglvl, setReadingLvl } = useContext(ReferenceDataContext);

    const [apiResponse, setApiResponse] = useState(`Reading Level: ${readinglvl}   Animal: ${animal}   Name: ${name}`);
    
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [notShowing, setNotShowing] = useState(true);

    const response = async() => {
        try {
            const result = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: "Write a " + readinglvl + " grade reading level story about a " + animal + 
                      " named " + name + " using a childish writing style have the prompt be about 4 short sentences.",
              temperature: 0.5,
              max_tokens: 4000,
            });
            setApiResponse(result.data.choices[0].text);
          } catch (e) {
            setApiResponse("Something is going wrong, Please try again.");
          }
    }

    const showResponse = (e) => {
        setLoading(true);
        response();
        setNotShowing(false);
        setReadingLvl("Kindergarten");
        setAnimal("");
        setName("");
        setLoading(false);
    }
    
    return (
        <>
        <main class="main">
        <div class="main">
          <div class="display-page">
            <section class="left-side">
              <div class="chat">
                <h3>Chat</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
              </div>
            </section>
            <section class="play">
              <div class="info">
                <h3>Now Playing...</h3>
                <p>
                {apiResponse}
                </p>
                <div class="display-buttons">
                  <a href="/" button type="button" class="display-b">Home</a>
                  <button type="button" class="display-b">Redo</button>
                  <a href="/" button type="button" class="display-b">Start New</a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

            {notShowing ? 
                <button 
                    onClick={() => showResponse()}
                >
                    {loading ? "Generating..." : "Show Response"}
                </button>
            :
                <button
                    onClick={() => navigate('/')}
                >
                    {loading ? "Generating..." : "Generate Another"}
                </button>
            }
            
        </>
    )
}

export default Result;