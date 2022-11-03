import {ImageBackground,StyleSheet,Image } from 'react-native'
import React from 'react'

export default function LogoScreen() {
  return (
    <ImageBackground 
    source={require("../Photos/download.jpg")}
    style={styles.image}>
        <Image source={require("../Photos/weather.png")}></Image>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
    }
})