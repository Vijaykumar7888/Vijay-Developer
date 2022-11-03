import { View,Text,ImageBackground,Image,TextInput } from 'react-native'
import React from 'react';
import st from "../Screens/ManageCitycss"
export default function ManageCity() {
  return (
    <ImageBackground source={require("../Photos/download.jpg")} style = {st.ImageBackground}>
      <View style = {st.Main1}>
        <Text style = {st.TextManage}>Manage Cities</Text>
      </View>
      <View style = {st.Main2}>
        <View style = {st.searchbar}>
          <View style = {st.searchbarin}>
          <TextInput placeholder='Enter City Name' style = {st.TextInput} placeholderTextColor = "white"></TextInput>
          <Image source = {require("../Photos/icons8-search-32.png")}></Image>
          </View>
          
        </View>
        <View style = {st.data}>
          {/* <View style = {st.datain}> */}
          <View style = {st.Name}>
            <Text style = {st.Namecity}>Chandigarh</Text>
          </View>
          <View style = {st.Namebot}>
            <View style = {st.left}>
              <Image source = {require("../Photos/icons8-smiling-sun-48.png")}></Image>
              <Text style = {st.clear}>Clear</Text>
            </View>
            <View style = {st.Right}>
              <Text style = {st.Temp}>36{"\xB0F"} / 35{"\xB0F"}</Text>
            </View>
          {/* </View>  */}
          </View>
        </View>
        <View style = {st.data1}>
        <View style = {st.Name1}>
            <Text style = {st.Namecity}>Mohali</Text>
            <Image source={require("../Photos/icons8-smiling-sun-48.png")}></Image>
          </View>
          <View style = {st.Namebot}>
            <View style = {st.left}>
              <Image source = {require("../Photos/icons8-smiling-sun-48.png")}></Image>
              <Text style = {st.clear}>Clear</Text>
            </View>
            <View style = {st.Right}>
              <Text style = {st.Temp}>36{"\xB0F"} / 35{"\xB0F"}</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}