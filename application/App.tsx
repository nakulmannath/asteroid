import { StatusBar } from "expo-status-bar";
import RootNav from "./src/navigrations/RootNav";
import { ToastProvider } from "react-native-toast-notifications";
import React from "react";

function App() {
  return (
    <>
      <ToastProvider>
        <RootNav />
        <StatusBar style="auto" />
      </ToastProvider>
    </>
  );
}

export default App;
