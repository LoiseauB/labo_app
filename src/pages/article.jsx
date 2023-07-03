import { ReactMarkdown } from "react-markdown/lib/react-markdown"

function Article({content}) {
  const reguex = /^(-{3}(?:\n|\r)(?<yaml>[\w\W]+?)(?:\n|\r)-{3})?(?<article>[\w\W]*)*/g
  for (const matches of content.matchAll(reguex)){
    const yamlStr = `{ ${matches.groups.yaml} }`;
    const yaml = JSON.parse(yamlStr)
    console.log(yaml)
  }
  return(
    <>
      <ReactMarkdown children={content.replace(/^(-{3}(?:\n|\r)([\w\W]+?)(?:\n|\r)-{3})/gm, '')}/>
    </>
  )
}

export default Article