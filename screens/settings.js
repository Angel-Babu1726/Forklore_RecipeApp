import React, { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";

const SettingsScreen = () => {
  const [dietarySwitch, setDietarySwitch] = useState(false);
  const [notificationSwitch, setNotificationSwitch] = useState(false);

  const toggleDietarySwitch = () => setDietarySwitch(previousState => !previousState);
  const toggleNotificationSwitch = () => setNotificationSwitch(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Settings</Text>
      
      <Text style={styles.subheadings}>General</Text>
      <View style={styles.switchRow}>
        <Text style={styles.dietary}>Dietary Restrictions</Text>
        <Switch
          trackColor={{ false: "white", true: "crimson" }}
          thumbColor={dietarySwitch ? "white" : "white"}
          ios_backgroundColor="grey"
          onValueChange={toggleDietarySwitch}
          value={dietarySwitch}
          style={styles.switch}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.dietary}>Notifications</Text>
        <Switch
          trackColor={{ false: "white", true: "crimson" }}
          thumbColor={notificationSwitch ? "white" : "white"}
          ios_backgroundColor="grey"
          onValueChange={toggleNotificationSwitch}
          value={notificationSwitch}
          style={styles.switch}
        />
      </View>
      
      <Text style={styles.subheadings}>Feedback</Text>
      <Text style={styles.normal}>Email us</Text>

      <Text style={styles.account}>Account</Text>
      <Text style={styles.normal}>Log Out</Text>

      <Text style={styles.delete}>Delete Account</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  head: {
    color: "black",
    textAlign: "left",
    paddingLeft: 20,
    fontWeight: '200',
    fontSize: 30,
    marginBottom: 20,
    marginTop: 40
  },
  subheadings: {
    color: "black",
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 30,
    paddingTop: 20,
    paddingBottom: 30
  },
  account: {
    color: "black",
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 30,
    paddingTop: 10,
    paddingBottom: 40
  },
  normal: {
    fontSize: 16,
    fontWeight: '200',
    paddingLeft: 40,
    paddingBottom: 35
  },
  dietary: {
    fontSize: 16,
    fontWeight: '200',
    paddingLeft: 20,
    paddingBottom: 35
  },
  delete: {
    fontSize: 16,
    fontWeight: '200',
    paddingLeft: 40,
    color:'crimson',
    paddingBottom: 35
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  switch:{
    shadowOpacity:0.8
  }
});

export default SettingsScreen;
