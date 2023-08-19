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
    const [funFact, setFunFact] = useState(`Reading Level: ${readinglvl}   Animal: ${animal}   Name: ${name}`);
    // const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [notShowing, setNotShowing] = useState(true);

    const setTemperature = () => {
      if (readinglvl === 'fifth') {
        return 1.0;
      }

      if (readinglvl === 'fourth') {
        return 0.8;
      }

      if (readinglvl === 'third') {
        return 0.5;
      }

      else {
        return 0.0;
      }
    }
    
    const getFunFact = async () => {
      try {
        const fact = await openai.createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: [{ role: "system", content: "generate a fun fact about and this fun fact must be real. " + animal + 
          " make it have a childish reading style with some emojis and keep it three sentences."}],
        });
        setFunFact(fact.data.choices[0].message.content);
      } catch (e) {
        setFunFact("Something is going wrong, Please try again.");
        }
    }

    const response = async() => {
         try {
            const result = await openai.createChatCompletion({
              model: 'gpt-3.5-turbo',
              messages: [
              {role: "system", content: "you are an author writing a story for elementary students in the USA to be able to read."},
              {role: "system", content: "The purpose is to teach kids to learn how to read without it being too difficult, so the story must match their reading level."},
              {role: "system", content: "If they are at a low reading level like kindergarten, first, or second use more familar words."},
              {role: "user", content: "Write a " + readinglvl + " grade reading level story about a " + animal + 
                       " named " + name + " using a childish writing style. Have it be 6 sentences."}],
                       temperature: setTemperature(),
          
              // model: "text-davinci-003",
              // prompt: "Write a " + readinglvl + " grade reading level story about a " + animal + 
              //         " named " + name + " using a childish writing style have the prompt be about 4 short sentences.",
              // messages: [{role: "user", content: "you are an author writing a story for a specific grade level."},],
              // {"role": "user", "content": "Write a grade reading level story about a named using a childish writing style have the prompt be about 4 short sentences."},],
              // temperature: 0.5,
              // max_tokens: 4000,
            });
            setApiResponse(result.data.choices[0].message.content);
          } catch (e) {
            setApiResponse("Something is going wrong, Please try again.");
          }
    }

    const showResponse = (e) => {
        setLoading(true);
        response();
        getFunFact();
        setNotShowing(false);
        setLoading(false);
    }
    
    return (
        <>
        <div class="main">
          <div class="display-page">
            <section class="chat">
              <div class="info">
                <h3>Fun Fact!</h3>
                <p>{funFact}</p>
              </div>
            </section>
            <section class="play">
              <div class="info">
                <h3>Now Playing...</h3>
                <p>{apiResponse}</p>
              </div>
            </section>
          </div>
        </div>
        <div class="display-buttons">
          <a href="/storyBuilder" button type="button" class="display-b">Home</a>
          <button type="button" class="display-b" onClick={() => showResponse()} >Show Response</button>
          <a href="/animal" button type="button" class="display-b">Start New</a>
        </div>


      {/* {notShowing ? 
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
      } */}
            
        </>
    )
}

export default Result;