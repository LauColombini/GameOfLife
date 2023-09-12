import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Dimensions,
  Keyboard,
} from "react-native";

const Options = (props: {
  onOptionsChange: (arg0: number, arg1: number, arg2: number) => void;
  onClear: () => void;
  onUpdate: () => void;
  onPlay: () => void;
  playing: any;
}) => {
  const [width, setWidth] = useState("12");
  const [height, setHeight] = useState("12");
  const [speed, setSpeed] = useState("5");

  const validate = (numberText: string) => {
    if (numberText && parseInt(numberText)) {
      return true;
    } else if (numberText.match(/[^\d]/)) {
      Alert.alert(
        "Invalid input",
        "Please insert a valid numeric number greater than zero",
        [
          {
            text: "OK",
            style: "cancel",
          },
        ]
      );
    }
    return false;
  };

  const onUpdateWidthHandler = (newValue: string) => {
    if (validate(newValue)) {
      props.onOptionsChange(
        parseInt(newValue),
        parseInt(height),
        parseInt(speed)
      );
    }
    setWidth(newValue);
  };

  const onUpdateHeightHandler = (newValue: string) => {
    if (validate(newValue)) {
      props.onOptionsChange(
        parseInt(width),
        parseInt(newValue),
        parseInt(speed)
      );
    }
    setHeight(newValue);
  };

  const onUpdateSpeedHandler = (newValue: string) => {
    if (validate(newValue)) {
      props.onOptionsChange(
        parseInt(width),
        parseInt(height),
        parseInt(newValue)
      );
    }
    setSpeed(newValue);
  };

  const clearButtonHandler = () => {
    props.onClear();
    Keyboard.dismiss();
  };

  const onUpdateHanlder = () => {
    props.onUpdate();
    Keyboard.dismiss();
  };

  const onPlayHandler = () => {
    props.onPlay();
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <View style={styles.gridOptionsContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Grid</Text>
          </View>

          <View style={styles.axisContainer}>
            <View style={styles.input}>
              <TextInput
                onChangeText={onUpdateWidthHandler}
                value={width}
                autoComplete="off"
                autoCorrect={false}
                autoFocus={false}
                keyboardType="number-pad"
                maxLength={2}
                textAlignVertical="center"
                textAlign="center"
              />
            </View>
            <View style={styles.separator}>
              <Text>X</Text>
            </View>
            <View style={styles.input}>
              <TextInput
                onChangeText={onUpdateHeightHandler}
                value={height}
                autoComplete="off"
                autoCorrect={false}
                autoFocus={false}
                keyboardType="number-pad"
                maxLength={2}
                textAlignVertical="center"
                textAlign="center"
              />
            </View>
          </View>
        </View>
        <View style={styles.gridSpeedContainer}>
          <View style={{ ...styles.textContainer }}>
            <Text style={styles.text}>Speed</Text>
          </View>

          <View style={styles.input}>
            <TextInput
              onChangeText={onUpdateSpeedHandler}
              value={speed}
              autoComplete="off"
              autoCorrect={false}
              autoFocus={false}
              keyboardType="number-pad"
              maxLength={2}
              textAlignVertical="center"
              textAlign="center"
            />
          </View>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="CLEAR"
              onPress={clearButtonHandler}
              color="#706C61"
            />
          </View>
          <View style={!props.playing ? styles.buttonStart : styles.buttonStop}>
            <Button
              title={props.playing ? "STOP" : "START"}
              color="#000"
              onPress={onPlayHandler}
            />
          </View>
          <View style={styles.button}>
            <Button title="SPEED+" onPress={onUpdateHanlder} color="#FF8966" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 155,
    width: Dimensions.get("window").width,
    marginBottom: 20,
  },
  gridOptionsContainer: {
    width: "60%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "rgba(41,39,61,0.8)",
    padding: 10,
    borderColor: "#000",
    borderWidth: 2,
  },
  gridSpeedContainer: {
    width: "35%",
    marginLeft: 10,
    height: 70,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 10,
    backgroundColor: "rgba(41,39,61,0.8)",
    padding: 10,
    borderColor: "#000",
    borderWidth: 2,
  },
  axisContainer: {
    flexDirection: "row",
  },
  inputRow: {
    flexDirection: "row",
    marginVertical: 15,
    alignItems: "center",
    marginHorizontal: 10,
    width: "85%",
    minWidth: 300,
  },
  textContainer: {
    flex: 3,
  },
  text: {
    color: "#000",
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
  },
  separator: {
    flex: 3,
    alignItems: "center",
  },
  input: {
    flex: 3,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    minWidth: 30,
    justifyContent: "center",
    alignItems: "center",
    height: 25,
  },
  buttonRow: {
    flexDirection: "row",
    width: "80%",
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "30%",
  },
  buttonStart: {
    width: "30%",
    backgroundColor: "#29763D",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#093310",
  },
  buttonStop: {
    width: "30%",
    backgroundColor: "#8A0F10",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#350F10",
  },
});
