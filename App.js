import "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import Router from "./src/routes";
import { OrdersProvider } from "./src/context/OrdersContext";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: "#C8FF00",
    text: "#FFF",
    placeholder: "#383838",
    background: "#151515",
  },
};

export default function App() {
  return (
    <OrdersProvider>
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <Router />
        </View>
      </PaperProvider>
    </OrdersProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151515",
  },
});
