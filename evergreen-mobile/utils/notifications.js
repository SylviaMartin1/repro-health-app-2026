import * as Notifications from "expo-notifications";

export async function enableDailyReminder() {

  const permission = await Notifications.requestPermissionsAsync();

  if (!permission.granted) {
    alert("Notification permission denied");
    return;
  }

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Health Reminder 💚",
      body: "Don't forget to log today's health data."
    },

    //For actual app

    /* trigger: {
      hour: 20,
      minute: 0,
      repeats: true
    } */

    //For demo purposes
     trigger: {
      type: "timeInterval",
      seconds: 10,   
      repeats: false
    }
  });

  alert("Daily reminder enabled!");
}