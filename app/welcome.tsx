import { icons } from "@/constants/icons";
import { router } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function WelcomeScreen() {
    const insets = useSafeAreaInsets();

    return (
        <ScrollView
            className="flex-1 bg-background"
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View
                className="flex-1 bg-brand-dark px-6 pb-8"
                style={{ paddingTop: insets.top + 20 }}
            >
                <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center gap-3">
                        <View className="h-11 w-11 items-center justify-center rounded-2xl bg-brand-light">
                            <Image
                                source={icons.wallet}
                                resizeMode="contain"
                                style={{ width: 23, height: 23, tintColor: "#064E3B" }}
                            />
                        </View>
                        <Text className="text-xl font-bold text-white">NeoSave</Text>
                    </View>
                    <Text className="rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white/80">
                        MONEY, IN FOCUS
                    </Text>
                </View>

                <View className="mt-10">
                    <Text className="text-4xl font-extrabold leading-[46px] text-white">
                        A clearer view of your money.
                    </Text>
                    <Text className="mt-4 max-w-sm text-base leading-6 text-white/75">
                        Keep the parts of your financial life that matter, all in one calm place.
                    </Text>
                </View>

                <View className="mt-8 overflow-hidden rounded-3xl bg-brand-soft p-5">
                    <View className="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-brand-light" />
                    <Text className="text-xs font-bold text-success">YOUR FINANCIAL LIFE</Text>
                    <Text className="mt-2 max-w-[240px] text-2xl font-bold leading-8 text-foreground">
                        See what matters. Plan what is next.
                    </Text>
                    <View className="mt-5 flex-row gap-3">
                        <View className="min-h-24 flex-1 justify-between rounded-2xl border border-border bg-white p-4">
                            <Image
                                source={icons.wallet}
                                resizeMode="contain"
                                style={{ width: 22, height: 22, tintColor: "#059669" }}
                            />
                            <Text className="text-sm font-semibold text-primary">Your accounts</Text>
                        </View>
                        <View className="min-h-24 flex-1 justify-between rounded-2xl border border-border bg-white p-4">
                            <Image
                                source={icons.activity}
                                resizeMode="contain"
                                style={{ width: 22, height: 22, tintColor: "#059669" }}
                            />
                            <Text className="text-sm font-semibold text-primary">Your activity</Text>
                        </View>
                    </View>
                    <View className="mt-3 h-2 flex-row gap-2">
                        <View className="flex-1 rounded-full bg-accent" />
                        <View className="flex-1 rounded-full bg-brand-light" />
                        <View className="flex-1 rounded-full bg-brand-light" />
                    </View>
                </View>
            </View>

            <View className="px-6 pb-8 pt-6" style={{ paddingBottom: insets.bottom + 24 }}>
                <Text className="text-base leading-6 text-muted-foreground">
                    Start with a simple overview, then explore the tools that fit your goals.
                </Text>
                <Pressable
                    accessibilityRole="button"
                    accessibilityLabel="Open NeoSave home"
                    onPress={() => router.replace("/")}
                    className="mt-5 h-14 items-center justify-center rounded-2xl bg-primary active:opacity-80"
                >
                    <Text className="text-base font-bold text-white">Open NeoSave</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}