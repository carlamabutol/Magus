import React, { useState, useEffect } from "react";
import { FlatList, View, TouchableOpacity, Image, Text, Dimensions} from "react-native";
const width = Dimensions.get('window').width
const Featured = ({navigation})=>{
  const [ID, setID] = global.id;
  const [data5, setData5]= useState()
  const fetchData5= async () => {
    const resp = await fetch("https://dev.magusaudio.com/api/v1/playlist/featured");
    const data = await resp.json();
      setData5(data);
  };
  const play22 = (item)=>{
    navigation.navigate('Featured_Track',{
      item: item,
      ID: ID
    })
  };
  useEffect(()=>{
    fetchData5()
  }, []);
  const renderItem= ({ item }) => {
    return (
     
      <View style={{backgroundColor: 'white', height: 165, width: Dimensions.get('window').width/2-25, marginRight: -10, marginLeft: 20, marginBottom: 10, flexDirection: 'row', shadowOpacity: 0.5, shadowOffset: {width: .5, height: .5}, shadowColor: 'rgba(4,157,217,.8)', borderRadius: 20}}>
        <TouchableOpacity onPress={()=> play(item.featured_id)}  style={{ height: 165,width: Dimensions.get('window').width/2-25,borderRadius: 20, marginBottom: 10}}>
          <Image source={{uri: item.cover}} style={{width: Dimensions.get('window').width/2-25, height: 165, borderRadius: 20}}/>
          <View style={{width: Dimensions.get('window').width/2-25, height: 40, marginTop: -40, backgroundColor: '#049DD9', opacity: 0.63, borderBottomRightRadius: 20, borderBottomLeftRadius: 20}}>
          </View>
          <View style={{marginTop:-35}}>
            <Text numberOfLines={1} style={{marginTop: 8, paddingLeft: 10, paddingRight: 10,color: '#0D0D0D', textAlign: 'center', fontWeight: 'bold', fontFamily: 'Helvetica Neue', fontSize: 15}}>{item.title}</Text>
          </View>
          
          
        </TouchableOpacity>
      </View>
    );
  };
  return(
    <FlatList
      data={data5}
      renderItem={({ item }) => (
                
      <View style={{backgroundColor: 'white', width: Dimensions.get('window').width-40, marginHorizontal: 20, marginBottom: 10, shadowOpacity: 0.5, shadowOffset: {width: .5, height: .5}, shadowColor: 'rgba(4,157,217,.8)', borderRadius: 10, marginTop: 20, flexDirection: 'row'}}>
        <TouchableOpacity onPress={()=> navigation.navigate("Featured")} style={{ width: Dimensions.get('window').width/2-25,borderRadius: 10, flexDirection: 'row' }}>
          <Image source={{uri: item.cover}} style={{width: 140, height: 140, borderTopLeftRadius: 10, }}/>
          <View style={{paddingLeft: 10, }}>
            <Text numberOfLines={1} style={{width:width-200, marginTop: 5, color: '#0D0D0D', fontWeight: 'bold', fontFamily: 'Helvetica Neue', fontSize: 15, marginBottom: 5 }}>{item.title}</Text>
            <Text numberOfLines={2} style={{width:width-200, lineHeight: 20, color: '#0D0D0D', fontFamily: 'Helvetica Neue', fontSize: 12, marginBottom:15 }}>{item.description}</Text>
                        
            <View style={{flexDirection: 'row', paddingTop: 2, justifyContent: 'space-around'}}>
              <TouchableOpacity   style={{}}>
                <Image source={require('../../assets/playing/play_circle.png')} style={{marginTop:3, width: 35, height: 35, tintColor: 'rgba(4,157,217,1)', marginLeft: 30 }} />
              </TouchableOpacity>
              <TouchableOpacity   style={{}}>
                <Image source={require('../../assets/playing/add_playlist.png')} style={{width: 40, height: 40, tintColor: 'rgba(4,157,217,1)', marginRight: 30 }} />
              </TouchableOpacity>
            </View>
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
export default Featured;