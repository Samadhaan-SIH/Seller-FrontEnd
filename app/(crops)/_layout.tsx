import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="addcrop" options={{ headerShown: false }}  />
      <Stack.Screen name="[id]"  options={{ headerShown: false }} />
      {/* <Stack.Screen name="[cropId]" options={{ headerShown: false }}  />  */}
    </Stack>
  );
}
