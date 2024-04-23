import Link from 'next/link'
import { AiOutlineSwapLeft } from 'react-icons/ai'

const GoBack = () =>
  <>
    { window.innerWidth > 768 &&
      <Link href="/" className="go-back">
      {/* <div className="go-back" > */}
        <AiOutlineSwapLeft  />
      {/* </div> */}
      </Link>
    }
  </>


export default  GoBack