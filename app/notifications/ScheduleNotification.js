import React, { useEffect } from 'react';
import Notifications from 'expo-notifications';
import { Button } from 'react-native';

const ScheduleNotification = () => {
  const schedulePushNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Reminder!",
        body: "It's time to contact your customer!",
      },
      trigger: { seconds: 60 }, // Triggers after 60 seconds
    });
  };

  useEffect(() => {
    // Handle notification received in foreground
    const subscription = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification);
    });

    return () => subscription.remove();
  }, []);

  return (
    <Button title="Schedule Reminder" onPress={schedulePushNotification} />
  );
};

export default ScheduleNotification;
