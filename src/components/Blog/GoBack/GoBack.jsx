import { AiOutlineSwapLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './goBack.sass'
const GoBack = () =>
  <>
    { window.innerWidth > 768 &&
      <Link to="/" className="go-back">
      {/* <div className="go-back" > */}
        <AiOutlineSwapLeft  />
      {/* </div> */}
      </Link>
    }
  </>


export default  GoBack