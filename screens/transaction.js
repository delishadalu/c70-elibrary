
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Permissions from 'expo-permissions'
import {BarCodeScanner} from 'expo-barcode-scanner'

export default class Transaction extends React.Component {

    constructor(){
        super()
        this.state={
            hasCameraPermission:false,
            buttonState:"normal",
            scannedData:''
        }
    }



getCameraPermission=async()=>{
 const {status}= await Permissions.askAsync(Permissions.CAMERA)
 console.log(status)

 this.setState({
     hasCameraPermission:status === "granted",
     buttonState:"clicked"
 })
}

handleBarCodeScanner= async({type,data})=>{

    this.setState({
        buttonState:'normal',
        scannedData:data
    })

}

    render() {

        if(this.state.buttonState === "clicked"){
            return(
            <BarCodeScanner style={StyleSheet.absoluteFillObject} onBarCodeScanned={this.handleBarCodeScanner}/>
       ) }
        
        return (
            <View style={{ backgroundColor:'teal',flex:1}}>

                <Text style={{ alignSelf:'center',marginTop:100}}>{this.state.hasCameraPermission ? this.state.scannedData : "request for camera permission"}</Text>
            <TouchableOpacity onPress={this.getCameraPermission}>
                    <Text style={{ backgroundColor:'red',marginTop: 200, alignSelf: "center" }}> scan the qr code</Text>
            </TouchableOpacity>
                

            </View>
        );
    }
}
