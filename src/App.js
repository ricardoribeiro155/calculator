import React, { Component, useState } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native"
import Button from "./components/Button";
import Display from "./components/Display";
import { StatusBar } from "expo-status-bar";


export default expos => {

  const [valor, setValor] = useState(0)
 
  addDigito = n => setValor(n) 

  setOperation = oparation => {}

  clearMemory = () =>  setValor(0)
  

    return (
      <View style={style.container}>
        <StatusBar backgroundColor="white" />
        <Display value={valor} />
        <View style={style.Button}>
          <Button label="AC" triple onClick={clearMemory}/>
          <Button label="/" operation onClick={setOperation("/")}/>
          <Button label="7" onClick={()=>addDigito(7)} />
          <Button label="8" onClick={() =>addDigito(8)} />
          <Button label="9" onClick={() =>addDigito(9)} />
          <Button label="*" operation onClick={setOperation("*")} />
          <Button label="4" onClick={() =>addDigito(4)} />
          <Button label="5" onClick={() =>addDigito(5)} />
          <Button label="6" onClick={() =>addDigito(6)} />
          <Button label="-" operation onClick={setOperation("-")}/>
          <Button label="2" onClick={() =>addDigito(2)} />
          <Button label="3" onClick={() =>addDigito(3)} />
          <Button label="1" onClick={() =>addDigito(1)} />
          <Button label="+" operation onClick={setOperation("+")}/>
          <Button label="0" double onClick={() => addDigito(0)} />
          <Button label="." onClick={() => addDigito(".")} />
          <Button label="=" operation onClick={setOperation("=")}/>
        </View>
      </View>
    )
  }


style = StyleSheet.create({

  Button: {
    flexGrow: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-end",
  },
  container: {
    backgroundColor: "white",
    height: "100%",
    flexWrap: "wrap",
    

  }
})

