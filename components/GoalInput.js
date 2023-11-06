import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }


  return (
    <Modal visible={props.visible} animationType="slide">
      <LinearGradient
        colors={['wheat', 'blue']}
        style={styles.inputContainer}
      >
        <View>
          <Image
            style={styles.image}
            source={require("../assets/images/goal.png")}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Your course goal!"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
            </View>
            <View style={styles.button}>
              <Button
                title="Add Goal"
                onPress={addGoalHandler}
                color="#8d58d3"
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderBottomColor: "#cccccc",
    
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: '#120438',
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
