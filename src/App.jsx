import ReactMarkdown from "react-markdown";

import './App.css'
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Article from "./pages/article";

const modules = import.meta.glob('./assets/articles/*.md', {eager: true, as: 'raw'})
const article = []
console.log(modules)

for (const path in modules) {
  article.push({slug: path.split('/').pop().replace('.md', ''), content: modules[path]})
}

function App() {
  
  return (
    <Router>
      {article.map(({slug}) => (
      <div key={slug}>
        <Link to={`/${slug}`}>{slug}</Link>
      </div>))}

      <Routes>
      {article.map(({slug, content}) => (
        <Route key={slug} path={`/${slug}`} element={<Article content={content}/>} />
      ))}
      </Routes>
    </Router>
    
    
    
    
    
    
    // <>
    // <hr/>
    // {article.map(({slug, content}) => (
    //   <div key={slug}>
    //     <h1>{slug}</h1><br/>
    //     <ReactMarkdown children={content} />
    //     <hr/>
    //   </div>
      

      
    // )
    
    // )}
    
    // </>
  )
}

export default App
