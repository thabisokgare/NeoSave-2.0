import { Text, View } from "react-native";

export default function Settings() {
  return (
    <View className="flex-1 bg-background px-6 pt-16">
      <Text className="text-3xl font-bold text-foreground">Settings</Text>
      <Text className="mt-2 text-base text-muted-foreground">
        Profile and preferences will be added as you progress through the tutorial.
      </Text>
    </View>
  );
}