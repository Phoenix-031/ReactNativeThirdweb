import {
  localWallet,
  metamaskWallet,
  rainbowWallet,
  ThirdwebProvider,
} from "@thirdweb-dev/react-native";
import React from "react";

import Home from "./src/screens/Home";

import { useNavigation } from "@react-navigation/native";

const App = () => {
  return (
    <ThirdwebProvider
      activeChain="mumbai"
      supportedWallets={[metamaskWallet(), rainbowWallet(), localWallet()]}
    >
      <Home />
    </ThirdwebProvider>
  );
};


export default App;
