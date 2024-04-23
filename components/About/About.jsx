


import { Button, Group } from '@mantine/core';
import { showNotification } from '@mantine/notifications';



const  About = () =>  {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() => {
          Array(10)
            .fill(0)
            .forEach((_, index) => {
              showNotification({
                title: `Notification ${index + 1}`,
                message: 'Most notifications are added to queue',
                autoClose: false,
              });
            });
        }}
      >
        Show 10 notifications
      </Button>
    </Group>
  );
}
export default About;