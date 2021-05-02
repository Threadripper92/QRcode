import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import QRcode from "./QRcode";
import { Input, Button } from "react-native-elements";
import { Keyboard } from "react-native";

export default function App() {
  const [name, setName] = useState();
  const [updatedName, setUpdatedName] = useState([]);
  const handleAddTask = () => {
    if (!name) {
      alert("No value Entered!! Give some input ");
    } else {
      Keyboard.dismiss();
      setUpdatedName([updatedName, name]);
      setName(null);
    }
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#fff",
          fontSize: 30,
          fontWeight: "700",
          marginTop: 50,
          marginLeft: 20,
        }}
      >
        QR Code
      </Text>
      <QRcode task={updatedName} />

      <View style={{ marginTop: 100, alignItems: "center" }}>
        <Input
          containerStyle={{ width: 400 }}
          placeholder="Input Value"
          style={{
            backgroundColor: "#fff",
            borderRadius: 5,
            width: 100,
            padding: 10,
          }}
          value={name}
          onChangeText={(name) => setName(name)}
          onSubmitEditing={() => handleAddTask()}
        />

        <View style={{ alignItems: "center" }}>
          <Button
            style={{ width: 200 }}
            title="Generate"
            onPress={() => handleAddTask()}
          />
        </View>
      </View>

      <StatusBar style="inverted" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
