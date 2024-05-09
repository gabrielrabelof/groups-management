import { StatusBar } from "react-native";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { ThemeProvider } from "styled-components/native";

import theme from "src/theme";

import { Groups } from "@screens/Groups";
import { NewGroup } from "@screens/NewGroup";
import { Teams } from "@screens/Teams";

import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
        { fontsLoaded ? <Teams /> : <Loading /> }
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </ThemeProvider>
  )
}
