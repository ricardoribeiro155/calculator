import React from "react";
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native';


const style = StyleSheet.create({

    button: {
        fontSize:35,
        height: Dimensions.get("window").width / 4,
        width: Dimensions.get("window").width / 4,
        padding: 20,
        backgroundColor: "#fff",
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#888",
    },
    operationButoon: {
        fontSize:30,
        color: "#fff",
        backgroundColor: '#fa8231',
    },
    butoonDouble: {
        width: (Dimensions.get("window").width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get("window").width / 4) * 3,
        backgroundColor: '#fa8231'
    }
})

export default props => {

    const styleButoon = [style.button]
    if (props.double) styleButoon.push(style.butoonDouble) 
    if(props.operation ) styleButoon.push(style.operationButoon)
     if(props.triple ) styleButoon.push(style.buttonTriple)

    return(
        <TouchableHighlight onPress = { props.onClick } >
                <Text style={styleButoon} >{props.label}</Text>
        </TouchableHighlight>
    )
}