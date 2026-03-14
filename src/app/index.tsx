import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";

export default function Tab() {
  return (
    <>
      <SafeAreaView className="bg-green-500 h-full w-full">
        <View className="flex justify-center text-center">
          <Text className="justify-center text-center">Tab [Home|Settgs]</Text>
        </View>
      </SafeAreaView>
    </>
  );
}
