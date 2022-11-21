import React, { useState, useEffect } from "react";
import { FlatList, View, TouchableOpacity, Image, Text, Dimensions} from "react-native";
const width = Dimensions.get('window').width
async function Featured2 (){
  const resp = await fetch("https://dev.magusaudio.com/api/v1/playlist/featured");
    const datapp = await resp.json();
    return datapp;
  //const [data2, setData2]= useState()
  
}
export default Featured2;