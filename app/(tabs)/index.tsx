import { plannedSections } from "@/constants/sections";
import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";


export default function App() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="px-6 pb-32 pt-14">
      <Text className="text-sm font-semibold uppercase text-success">NeoSave</Text>
      <Text className="mt-2 text-3xl font-bold text-foreground">Dashboard</Text>

      <View className="mt-6 rounded-2xl bg-brand-dark p-5">
        <Text className="text-base font-semibold text-white">Balance overview</Text>
        <Text className="mt-2 text-sm text-white/80">Your account balance will appear here.</Text>
      </View>

      <View className="mt-4 flex-row gap-3">
        <View className="flex-1 rounded-xl border border-border bg-card p-4">
          <Text className="text-sm font-semibold text-primary">Budget</Text>
          <Text className="mt-2 text-sm text-muted-foreground">Not set up</Text>
        </View>
        <View className="flex-1 rounded-xl border border-border bg-card p-4">
          <Text className="text-sm font-semibold text-primary">Savings goals</Text>
          <Text className="mt-2 text-sm text-muted-foreground">Not set up</Text>
        </View>
      </View>

      <View className="mt-8 flex-row items-center justify-between">
        <Text className="text-xl font-bold text-primary">Sections</Text>
        <Link href="/onboarding" className="text-sm font-semibold text-success">
          Onboarding
        </Link>
      </View>
      <View className="mt-3 gap-3">
        {plannedSections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="rounded-xl border border-border bg-card px-4 py-4"
          >
            <Text className="text-base font-semibold text-primary">{section.title}</Text>
            <Text className="mt-1 text-sm text-muted-foreground">{section.description}</Text>
          </Link>
        ))}
      </View>

      <View className="mt-8 gap-2">
        <Text className="text-base font-semibold text-primary">Tutorial links</Text>
        <Link href="/subscriptions/spotify" className="text-sm text-success">Spotify subscription</Link>
        <Link href="/subscriptions/netflix" className="text-sm text-success">Netflix subscription</Link>
      </View>
    </ScrollView>
  );
}