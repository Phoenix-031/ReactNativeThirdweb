import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import { ConnectWallet,useAddress,useConnect,metamaskWallet,useDisconnect } from '@thirdweb-dev/react-native';

import { Pressable } from 'react-native';

const metamaskConfig = metamaskWallet();

const Home = () => {

    const connect = useConnect();
    const disconnect = useDisconnect();
    const address = useAddress();

    if(address){
        
    }
    
  return (
    <View style={styles.view}>
      {/* <ConnectWallet /> */}
      <Pressable onPress={() => connect(metamaskConfig)}>
        {
            address ? (
                <Text style={styles.connectbtn}>Wallet connected</Text>
            ) : (
        <Text style={styles.connectbtn}>Connect to wallet
        </Text>
            )
        }
    </Pressable>
    <Pressable onPress={disconnect}>
        <Text style={styles.connectbtn}>Disconnect</Text>
    </Pressable>
    </View>
  );
}

export default Home

const styles = StyleSheet.create({
  view: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  textStyles:{
    color : "black"
  },
  connectbtn:{
    color:"black",
    fontFamily:"sans-serif",
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
  }
});