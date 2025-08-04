import { useEffect, useState } from "react";
function App() {
  const [jobData, setJobData] = useState({ title: "", company: "", link: "" });
  useEffect(() => {
    //we will connect content.js later on
    setJobData({
      title: "Loading...",
      company: "Loading...",
      link: "Loading...",
    });
  }, []);
  const handleSave = () => {
    console.log("Save job clicked!");
  };
  return (
    <div>
      <h1>LinkedIn Job Assistant</h1>
      <p>Title: {jobData.title}</p>
      <p>Company: {jobData.company} </p>
      <p>Link: {jobData.link}</p>
      <button onClick={handleSave}>Save Job</button>
    </div>
  );
}

export default App;
