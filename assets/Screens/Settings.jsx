import { View, Text,ImageBackground } from 'react-native'
import React from 'react'
import sty from "../Screens/Settingscss"
export default function Settings() {
  return (
    <ImageBackground
      source={require("../Photos/download.jpg")}
      style={sty.img}
    >
    <View style = {sty.setting}>
        <Text style = {sty.settingtext}>Settings</Text>
    </View>
    <View style = {sty.main}>
        <Text style = {sty.temp}>Temprature</Text>
        <View style = {sty.mainin}>
            <View style = {sty.mainleft}>
                <Text>{"\xB0C"}</Text>
            </View>
            <View style = {sty.mainright}>
                <Text>{"\xB0F"}</Text>
            </View>
        </View>
    </View>
    <View style = {sty.main}>
        <Text style = {sty.temp}>Wind speed</Text>
        <View style = {sty.mainin3}>
            <View style = {sty.mainleft3}>
                <Text>m/s</Text>
            </View>
            <View style = {sty.mainright3}>
                <Text>km/h</Text>
            </View>
            <View style = {sty.mainend}>
                <Text>mi/h</Text>
            </View>
        </View>
    </View>
    <View style = {sty.main}>
        <Text style = {sty.temp}>Pressure</Text>
        <View style = {sty.mainin}>
            <View style = {sty.mainleft}>
                <Text>hPa</Text>
            </View>
            <View style = {sty.mainright}>
                <Text>inHg</Text>
            </View>
        </View>
    </View>
    <View style = {sty.main}>
        <Text style = {sty.temp}>Precipitation</Text>
        <View style = {sty.mainin}>
            <View style = {sty.mainleft}>
                <Text>mm</Text>
            </View>
            <View style = {sty.mainright}>
                <Text>in</Text>
            </View>
        </View>
    </View>
    <View style = {sty.main}>
        <Text style = {sty.temp}>Distance</Text>
        <View style = {sty.mainin}>
            <View style = {sty.mainleft}>
                <Text>km</Text>
            </View>
            <View style = {sty.mainright}>
                <Text>mi</Text>
            </View>
        </View>
    </View>
    <View style = {sty.main}>
        <Text style = {sty.temp}>Time format</Text>
        <View style = {sty.mainin}>
            <View style = {sty.mainleft}>
                <Text>24</Text>
            </View>
            <View style = {sty.mainright}>
                <Text>12</Text>
            </View>
        </View>
    </View>
    </ImageBackground>
  )
}