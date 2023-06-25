import { useState } from "react"
const { Configuration, OpenAIApi } = require("openai");

const ChatbotApp = () => {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  const [prompt, setPrompt] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [readinglvl, setReadingLvl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Write a " + readinglvl + " grade reading level story about " + prompt + " using a childish writing style",
        temperature: 0.5,
        max_tokens: 4000,
      });
      setApiResponse(result.data.choices[0].text);
    } catch (e) {
      setApiResponse("Something is going wrong, Please try again.");
    }
    setLoading(false);
  };

  const grade = (e) => {
    setReadingLvl(e.target.readinglvl)
  }


  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: '10vh',
        }}
      >
        <strong>What grade are you in?</strong>
        <select value={readinglvl} onChange={grade}>
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
          height: '50vh',
        }}
      >
        <strong>Write me a story about...   </strong>
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            value={prompt}
            placeholder="insert prompt"
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>
          <button
            disabled={loading || prompt.length === 0}
            type="submit"
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </form>
      </div>
      {apiResponse && (
        <div
          style={{
            display: "flex",
            flexWrap: 'wrap',
            justifyContent: "center",
          }}
        >
          <strong>API response:</strong>
          {apiResponse}
        </div>
      )}
    </>
  );
};


export default ChatbotApp;
