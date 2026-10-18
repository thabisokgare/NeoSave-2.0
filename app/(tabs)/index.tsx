import { Text, View } from "react-native";
import { Link } from "expo-router";


export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className='mt-4 rounded bg-primary text-white px-4 '>Go to Onboarding</Link>
      <Link href="/(Auth)/sign-in" className='mt-4 rounded bg-primary text-white px-4 '>Go to Sign In</Link>
      <Link href="/(Auth)/sign-up" className='mt-4 rounded bg-primary text-white px-4 '>Go to Sign Up</Link>



      <Link href = "/(tabs)/subcriptions/spotify">Spotify Subcription</Link>
      <Link href = "/(tabs)/subcriptions/netflix">Netflix Subcription</Link>

    </View>
  );
}