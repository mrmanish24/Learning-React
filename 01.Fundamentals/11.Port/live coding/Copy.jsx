import { useState } from "react"
import Popup from "./Popup"

const Copy = () => {

const [inputValue,setInputValue] = useState("")
const [copied,setCopied] = useState(false)


function handleChange(){
    navigator.clipboard.writeText(inputValue)
    setCopied(true)
    setTimeout(() => {
        setCopied(false)
    }, 2000);

}
  return (
    <section>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleChange}>Copy📝</button>
      <Popup copyStatus={copied} />
    </section>
  );
}
export default Copy