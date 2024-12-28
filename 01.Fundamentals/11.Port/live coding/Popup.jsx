import {createPortal} from "react-dom"

const Popup = ({copyStatus}) => {

  return createPortal(<div>{copyStatus && <div style={{position:"absolute",bottom :"3rem"}}> copied to clipboard</div>}</div>,
  document.getElementById("popup"))
}
export default Popup



// return createPortal(jsx,select element)