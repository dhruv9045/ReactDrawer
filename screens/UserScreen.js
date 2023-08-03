import { StyleSheet, Text, View } from "react-native";

function UserScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is <Text style={styles.text}>"User"</Text> Screen!
      </Text>
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: {
    color: "purple",
  },
});
