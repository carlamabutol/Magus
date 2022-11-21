import React, { useState, useEffect } from "react";
import { FlatList, View, TouchableOpacity, Image, Text, Dimensions} from "react-native";
const width = Dimensions.get('window').width
const Continue = ()=>{
  const [data5, setData5]= useState()
  const fetchData5 = async (ID) => {
    const resp5 = await fetch("https://dev.magusaudio.com/api/v1/audio/history/"+ID);
    const data5 = await resp5.json();
    //console.log(data5.track_history.length)
    const unique = [
      ...new Map(data5.track_history.map((item) => [item["track_title"], item])).values(),
  ];
    //console.log(unique)
    setData5(unique)
  };
  useEffect(()=>{
    fetchData5()
  }, []);

  return(
    <View style={{ height: 230, marginRight: 20,}}>
          <FlatList
              data={data5}
              renderItem={({ item }) => (
                
      <View style={{backgroundColor: 'white', width: Dimensions.get('window').width/2-25, marginRight: -10, marginLeft: 20, marginBottom: 10, flexDirection: 'row', shadowOpacity: 0.5, shadowOffset: {width: .5, height: .5}, shadowColor: 'rgba(4,157,217,.8)', borderRadius: 10}}>
        <TouchableOpacity onPress={()=> play(item)}  style={{ width: Dimensions.get('window').width/2-25,borderRadius: 10, }}>
          <Image source={{uri: item.cover}} style={{width: Dimensions.get('window').width/2-25, height: 170, borderTopLeftRadius: 10, borderTopRightRadius: 10}}/>
          <View style={{width: Dimensions.get('window').width/2-25, height: 50, marginTop: -50, backgroundColor: '#049DD9', opacity: 0.63, borderBottomRightRadius: 20, borderBottomLeftRadius: 20}}>
          </View>
          <View style={{marginTop:-53}}>
            <Text numberOfLines={1} style={{marginTop: 8, paddingLeft: 10, paddingRight: 10,color: '#0D0D0D', fontWeight: 'bold', fontFamily: 'Helvetica Neue', fontSize: 15,}}>{item.track_title}</Text>
          </View>
          <View style={{width: Dimensions.get('window').width/2-25,justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text style={{marginTop: 3, paddingLeft: 10, color: 'black', fontFamily: 'Helvetica Neue', fontSize: 11, }}>ddsl</Text>
            
          </View>
          <View style={{}}>
            <Text numberOfLines={1} style={{marginTop: 8, paddingLeft: 5, color: '#0D0D0D', fontWeight: 'bold', fontFamily: 'Helvetica Neue', fontSize: 15, }}>{item.track_title}</Text>
          </View>
          
          
          <View style={{width: Dimensions.get('window').width/2-25,justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text style={{marginTop: 2, paddingLeft: 5, color: 'black', fontFamily: 'Helvetica Neue', fontSize: 10, }}>Last Played: {Moment(item.created_at).format('MMM DD, hh:mm a')}</Text>
          </View>
          
        </TouchableOpacity>
      </View>
              )}
              keyExtractor={(item) => item.track_title}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
            />
          </View>
  )
}
export default Continue;