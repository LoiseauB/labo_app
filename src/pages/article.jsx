import { ReactMarkdown } from "react-markdown/lib/react-markdown"

function Article({content}) {
  console.log(content)
  return(
    <>
      <ReactMarkdown children={content}/>
    </>
  )
}

export default Article