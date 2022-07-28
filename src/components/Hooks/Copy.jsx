import { showNotification } from '@mantine/notifications';
import { BiLink } from 'react-icons/bi';



const uuseCopy = ({icon, message, mode}) => {

  navigator.clipboard.writeText(message)
  showNotification({
    autoClose: 5000,
    message: mode + ' Copied!!',
    icon: icon,
    className: 'my-notification-class',
  });
}

export default uuseCopy;

