import { showNotification } from '@mantine/notifications';
import { BiLink } from 'react-icons/bi';



const uuseCopy = ({message, mode}) => {

  navigator.clipboard.writeText(message)
  showNotification({
    autoClose: 5000,
    message: mode + ' Copied!!',
    icon: <BiLink />,
    className: 'my-notification-class',
  });
}

export default uuseCopy;

