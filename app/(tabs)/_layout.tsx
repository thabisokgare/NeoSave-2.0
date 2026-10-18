import * as Haptics from "expo-haptics";
import { Tabs } from "expo-router";
import { useEffect } from "react";
import { Image, ImageSourcePropType, View } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { tabs } from "../../constants/data";
import { colors } from "../../constants/theme";

const TabIcon = ({ focused, icon }: { focused: boolean; icon: ImageSourcePropType }) => {
    const progress = useSharedValue(focused ? 1 : 0);

    useEffect(() => {
        progress.value = withSpring(focused ? 1 : 0, { damping: 8, stiffness: 200, mass: 0.6 });
    }, [focused, progress]);

    const pillStyle = useAnimatedStyle(() => ({
        opacity: progress.value,
        transform: [{ scale: 0.5 + 0.5 * progress.value }],
    }));

    const glyphStyle = useAnimatedStyle(() => ({
        transform: [
            { translateY: -2 * progress.value },
            { scale: 1 + 0.15 * progress.value },
            { rotate: `${-10 * (1 - progress.value)}deg` },
        ],
    }));

    return (
        <View style={{ width: 48, height: 32, alignItems: "center", justifyContent: "center" }}>
            <Animated.View
                pointerEvents="none"
                style={[
                    {
                        position: "absolute",
                        width: 48,
                        height: 32,
                        borderRadius: 16,
                        backgroundColor: colors.accent,
                    },
                    pillStyle,
                ]}
            />
            <Animated.View style={glyphStyle}>
                <Image
                    source={icon}
                    resizeMode="contain"
                    style={{
                        width: 22,
                        height: 22,
                        tintColor: focused ? "#FFFFFF" : "#94A3B8",
                    }}
                />
            </Animated.View>
        </View>
    );
};

const TabsLayout = () => {
    const insets = useSafeAreaInsets();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: "#FFFFFF",
                tabBarInactiveTintColor: "#94A3B8",
                tabBarLabelStyle: { fontSize: 11, fontWeight: "600", marginTop: 4 },
                tabBarStyle: {
                    position: "absolute",
                    left: 32,
                    right: 32,
                    bottom: insets.bottom + 12,
                    height: 72,
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingHorizontal: 8,
                    borderTopWidth: 0,
                    borderRadius: 24,
                    backgroundColor: colors.primary,
                    shadowColor: "#000",
                    shadowOpacity: 0.3,
                    shadowRadius: 18,
                    shadowOffset: { width: 0, height: 8 },
                    elevation: 12,
                },
                tabBarItemStyle: { justifyContent: "center" },
            }}
        >
            {tabs.map((tab) => (
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    listeners={{ tabPress: () => Haptics.selectionAsync() }}
                    options={{
                        title: tab.title,
                        tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={tab.icon} />,
                    }}
                />
            ))}
            <Tabs.Screen name="settings" options={{ href: null }} />
            <Tabs.Screen name="subscriptions" options={{ href: null }} />
            <Tabs.Screen name="insights" options={{ href: null }} />
        </Tabs>
    );
};

export default TabsLayout;