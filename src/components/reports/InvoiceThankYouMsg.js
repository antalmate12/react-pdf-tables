import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    marginTop: 12,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  reportTitle: {
    fontSize: 12,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

const InvoiceThankYouMsg = () => (
  <View debug={true} style={styles.titleContainer}>
    <Text style={styles.reportTitle}>Thank you for your business</Text>
  </View>
);

export default InvoiceThankYouMsg;
