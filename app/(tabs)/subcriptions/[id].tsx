import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function SubcriptionDetail() {
    const { id } = useLocalSearchParams<{ id: string }>();

    return (
        <View className="flex-1 items-center justify-center bg-background">
            <Text className="text-xl font-bold text-success">
                Subcription Detail Page : {id}
                <Link href="/" className="text-blue-500">
                    Go Back
                </Link>
            </Text>
        </View>
    );
}