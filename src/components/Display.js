import React from "react";
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
   display: {
      flexGrow:1,
      padding: 20,
      justifyContent: "center",
      alignItems: "flex-end",
      backgroundColor: "#A9A9A9",

   },
   displayValue: {
      fontSize: 60,
      color: "#fff"
   }

})

export default props => {
   return (
      <View style={styles.display}>
         <Text
            style={styles.displayValue} >{props.value}</Text>
      </View>
   )

}