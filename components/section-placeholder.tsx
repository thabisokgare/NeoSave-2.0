import { Link } from "expo-router";
import { Text, View } from "react-native";

interface SectionPlaceholderProps {
    title: string;
    description: string;
}

export function SectionPlaceholder({ title, description }: SectionPlaceholderProps) {
    return (
        <View className="flex-1 bg-background px-6 pt-16">
            <Link
                href="/"
                className="mb-8 self-start rounded-lg border border-border bg-card px-4 py-2 text-primary"
            >
                Home
            </Link>
            <Text className="text-3xl font-bold text-foreground">{title}</Text>
            <Text className="mt-2 text-base text-muted-foreground">{description}</Text>
            <View className="mt-8 rounded-2xl border border-border bg-card p-5">
                <Text className="text-base font-semibold text-primary">Planned section</Text>
                <Text className="mt-2 text-sm leading-5 text-muted-foreground">
                    This screen is a placeholder. Build it as you progress through the tutorial.
                </Text>
            </View>
        </View>
    );
}