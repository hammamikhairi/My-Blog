import { toast } from 'react-toastify';



const uuseCopy = ({icon, message, mode}) => {

  navigator.clipboard.writeText(message)

  console.log("Copied: ", message)

  toast.info('Incorrect credentials', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });

}

export default uuseCopy;

