import {
  View,
  Text,
  Button,
  TextInput,
  ImageBackground,
  ActivityIndicator,
  Image,
  TouchableOpacity
} from "react-native";
import styles from "./HomeScreencss";
import React, { useState,useEffect } from "react";
("30.741482");
export default function HomeScreens({navigation}) {
  const [input, setinput] = useState("");
  const [first, setfirst] = useState([]);
  const [loading, setloading] = useState(false);
  const api = {
    key: "f0a0cfec472531411bcebe903822ce8d",
    lat: "Chandigarh",
    lon: 76.768066,
  };
  useEffect(()=>{
    const fetchhandling = async () => {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${api.lat}&appid=${api.key}`
      )
        .then((res) => res.json())
        .then((data) => setfirst(data))
        .catch((error) => error)
        .finally(setloading(false));
    };
    fetchhandling()
  },[api.lat,""])
  // const fetchhandling = async () => {
  //   await fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${api.lat}&appid=${api.key}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setfirst(data))
  //     .catch((error) => error)
  //     .finally(setloading(false));
  // };

  const fToC = (fahrenheit) => {
    var fTemp = fahrenheit;
    // var fToCel = (fTemp - 32) * 5 / 9;
    return (
      <View style={styles.degreess}>
        <Text style={styles.degg}>{fTemp}</Text>
        <Text style={styles.degrees}>{"\xB0F"}</Text>
      </View>
    );
  };
  
  const date = new Date();

  const data = [
    {
      Time: "Now",
      sun: require("../Photos/icons8-smiling-sun-50.png"),
      Temp: 35,
      km:first.wind?.speed
    },
    {
      Time: "Now",
      sun: require("../Photos/icons8-smiling-sun-50.png"),
      Temp: 36,
      km:first.wind?.speed
    },
    {
      Time: "Now",
      sun: require("../Photos/icons8-smiling-sun-48.png"),
      Temp: 36,
      km:first.wind?.speed
    },
    {
      Time: "Now",
      sun: require("../Photos/icons8-smiling-sun-50.png"),
      Temp: 36,
      km:first.wind?.speed
    },
    {
      Time: "Now",
      sun: require("../Photos/icons8-smiling-sun-50.png"),
      Temp: 36,
      km:first.wind?.speed
    },
  ];
  return (
    // <View>
    <ImageBackground
      source={require("../Photos/download.jpg")}
      style={styles.image}
    >
      {/* <TextInput placeholder='Enter the data' value = {input} onChangeText={text=>setinput(text)}></TextInput> */}
      {/* {loading && (<ActivityIndicator size={"large"} color={"red"}></ActivityIndicator>)} */}
      <View style={styles.Name}>
        <View style={styles.Nameleft}>
          <View style={styles.Back}>
            <TouchableOpacity onPress = {()=>navigation.navigate("Manage")}>
            <Image source={require("../Photos/icons8-plus-math-30.png")}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Namemiddle}>
          <Text style={styles.NameText}>{first.name}</Text>
        </View>
        <View style={styles.NameRight}>
          <View style={styles.Back}>
          <TouchableOpacity title = "li" onPress = {()=>navigation.navigate("Setting")}>
          <Image source={require("../Photos/icons8-slider-48.png")}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.main}>
        <Image
          source={require("../Photos/icons8-smiling-sun-50.png")}
          style={styles.Sun}
        ></Image>
        <Text style={styles.Sunny}>Sunny</Text>
        <Text style={styles.temp}>{fToC(first.main?.temp)}</Text>
        <Text>
          Feels like 36 <Text style={{ fontSize: 12 }}>{"\xB0F"}</Text>
        </Text>
      </View>
      <View style={styles.flatlist}>
        <View style={styles.mapout}>
          {data.map((item, index) => {
            return (
              <View key={index} style={styles.map}>
                <Text>{item.Time}</Text>
                <Image source={item.sun}></Image>
                <Text>{item.Temp} {"\xB0C"}</Text>
                <Text>{item.km}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <View style = {styles.Main3}>
        <View style = {styles.Main3top}>
          <View style = {styles.Main3in}>
            <View style = {styles.inleft}>
            <Image source={require("../Photos/icons8-smiling-sun-48.png")}></Image>
            <Text style = {styles.tom}>Tomorrow-Clear</Text>
            </View>
            <View style = {styles.inRight}>
              <Text style = {styles.tempin}>36{"\xB0C"} / 35{"\xB0C"}</Text>
            </View>
          </View>
          <View style = {styles.Main3in1}>
          <View style = {styles.inleft}>
            <Image source={require("../Photos/icons8-smiling-sun-48.png")}></Image>
            <Text style = {styles.tom}>Tomorrow-Clear</Text>
            </View>
            <View style = {styles.inRight}>
              <Text style = {styles.tempin}>36{"\xB0C"} / 35{"\xB0C"}</Text>
            </View>
          </View>
        </View>
        <View style = {styles.Main3bot}>
          <View style = {styles.Main3bottop}>
            <View style = {styles.main3left}>
              <Text style = {styles.wind}>Wind</Text>
              <Text style = {styles.km}>2.1 km/h</Text>
            </View>
            <View style = {styles.main3right}>
            <Text style = {styles.wind}>Humidity</Text>
              <Text style = {styles.km}>89%</Text>
            </View>
          </View>
          <View style = {styles.Main3botbot}>
          <View style = {styles.main3left}>
          <Text style = {styles.wind}>UV Index</Text>
              <Text style = {styles.km}>0.18</Text>
          </View>
            <View style = {styles.main3right}>
            <Text style = {styles.wind}>Visibilty</Text>
              <Text style = {styles.km}>10.3km</Text>
            </View>
          </View>
        </View>
      </View>
      {/* <Text>Country : {first.sys?.country}</Text>
      
      <Text>Humidity : {first.main?.humidity}%</Text>
      <Text>Speed : {first.wind?.speed} km/h</Text> */}
      {/* <View style = {styles.Main2}>
        <View style = {styles.top}>
        <Text style = {styles.temp}>{fToC(first.main?.temp)}</Text>
        <Text style = {styles.time}>{date.getDate()} {date.getMonth()}  {date.getFullYear()}  {date.getHours()-12}:{date.getMinutes()}:{date.getSeconds()}</Text>
        </View>
        <View style = {styles.bot}>

        </View>
      </View> */}
      <View style = {styles.Butto}>
        <TouchableOpacity  style = {styles.btn}>
          <Text style={styles.btnin}>5-day forecast</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    // </View>
  );
    }