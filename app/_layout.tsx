import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"  options={{ headerShown: false }} />
      <Stack.Screen name="addcrop" options={{ headerShown: false }}  />
      <Stack.Screen name="crop" options={{ headerShown: false }}  />
    </Stack>
  );
}
