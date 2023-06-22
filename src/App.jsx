import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("html-to-markdown.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <>
    <div className="post">
      <ReactMarkdown children={content} />
    </div>
      
    </>
  )
}

export default App
