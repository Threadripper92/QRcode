import React from "react";
import { StyleSheet, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

const QRcode = (props) => {
  const { task } = props;
  return (
    <View>
      <View style={{ marginTop: 100, alignItems: "center" }}>
        <QRCode value={task} color="#fff" backgroundColor="#000" size={150} />
      </View>
    </View>
  );
};

export default QRcode;

const styles = StyleSheet.create({});
