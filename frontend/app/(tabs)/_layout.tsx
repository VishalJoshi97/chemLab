import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="vsepr" options={{ title: "VSEPR" }} />
      <Tabs.Screen name="mot" options={{ title: "MOT" }} />
      <Tabs.Screen name="saved" options={{ title: "Saved" }} />
    </Tabs>
  );
}
