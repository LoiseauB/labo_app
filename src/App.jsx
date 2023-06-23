import ReactMarkdown from "react-markdown";

import './App.css'

const modules = import.meta.glob('./assets/articles/*.md', {eager: true, as: 'raw'})
const article = []
console.log(modules)

for (const path in modules) {
  article.push({slug: path.split('/').pop().replace('.md', ''), content: modules[path]})
}

function App() {
  
  return (
    <>
    <hr/>
    {article.map(({slug, content}) => (
      <div key={slug}>
        <h1>{slug}</h1><br/>
        <ReactMarkdown children={content} />
        <hr/>
      </div>
      

      
    )
    
    )}
    
    </>
  )
}

export default App
