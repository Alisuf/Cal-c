import React from 'react'
import {Image, StyleSheet, View } from 'react-native'
import logo from '../assets/Calculator.png'

const IntroScreen = () => {
  return (
<View style={styles.container}>
    <View style={styles.logoscreen}>
    <Image source={logo} style={styles.logo}/>
    </View>
</View>
    )
}
const styles=StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'teal'
    },
    logoscreen:{
        width:100,
        height:100,
        backgroundColor:'inherit'
    },
    logo:{
        width:100,
        height:100
    }

})


export default IntroScreen