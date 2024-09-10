import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyle}>Another Text!</Text>
      </View>
      <Text style={styles.textStyle}>Hello World!</Text>
      <Button title="Tap me!"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    margin: 16, 
    borderWidth: 2, 
    borderColor: "blue", 
    padding: 16
  }
});
