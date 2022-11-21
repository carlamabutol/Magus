import React, { useState, useEffect } from "react";
import { FlatList, View, TouchableOpacity, Image, Text, Dimensions} from "react-native";
const width = Dimensions.get('window').width
const Discover = ({navigation})=>{
  const [data2, setData2]= useState()
  const fetchData2 = async () => {
    const resp2 = await fetch("https://dev.magusaudio.com/api/v1/playlist/discover");
    const data2 = await resp2.json();
      setData2(data2);
       // setLoading(false);
    };
  useEffect(()=>{
    fetchData2()
  }, []);
  function getDifference(array1, array2) {
    return array1.filter(object1 => {
      return array2.some(object2 => {
        return object2=== object1.subliminal_id ;
      });
    });
  }
  const ao=(data)=>{
    const a=getDifference(global.data,data)
    console.log(a.length)
    if(a.length!=0)
    {
      return
    }  
  }
  return(
    <FlatList
      data={data2}
      renderItem={({ item }) => (
                
      <View style={{backgroundColor: 'white',height: 165, width: Dimensions.get('window').width/2-30, marginHorizontal: 20, marginRight: 0, marginBottom: 10, shadowOpacity: 0.5, shadowOffset: {width: .5, height: .5}, shadowColor: 'rgba(4,157,217,.8)', borderRadius: 20, marginTop: 20, flexDirection: 'row'}}>
        <TouchableOpacity onPress={()=> navigation.navigate("Discover")}  style={{ height: 165,width: Dimensions.get('window').width/2-25,borderRadius: 20, }}>
          <Image source={{uri: item.cover}} style={{width: Dimensions.get('window').width/2-30, height: 165, borderRadius:20}}/>
          <View style={{width: Dimensions.get('window').width/2-30, height: 40, marginTop: -40, backgroundColor: '#049DD9', opacity: 0.63, borderBottomRightRadius: 20, borderBottomLeftRadius: 20}}>
          </View>
          <View style={{marginTop:-35}}>
            <Text numberOfLines={1} style={{marginTop: 8, paddingLeft: 10, paddingRight: 10,color: '#0D0D0D', textAlign: 'center', fontWeight: 'bold', fontFamily: 'Helvetica Neue', fontSize: 15}}>{item.title}</Text>
          </View>
          
        </TouchableOpacity>
      </View>
      )}
      keyExtractor={(item) => item.featured_id}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    />
  )
}
export default Discover;