import React, { useState, useEffect, useRef } from 'react';
import { Modal,FlatList, SafeAreaView, View, BottomSheet, Text, ImageBackground, Image, StyleSheet, TouchableOpacity, Animated, Dimensions, PanResponder } from 'react-native';
import { LogBox } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import FormInput from '../../app/components/FormInput';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger,} from 'react-native-popup-menu';
import Swipeable from 'react-native-gesture-handler/Swipeable';
  const max= Dimensions.get('window').height*0.8
  const min= Dimensions.get('window').height*0.1
  
  const width = Dimensions.get('window').width;

const Playlist = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [values, setValues] = useState('');
  const [play, setPlay] = useState('');
  const [ID, setID] = useState('');
  const [withPlaylist, setWithPlaylist] = useState(false);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [playID, setPlayID] = useState('');
  return(
    <View></View>
  )
  /*const updateError = (error, stateUpdater) => {
    stateUpdater(error);
    setTimeout(()=>{
      stateUpdater('')
    }, 2500);
  }
  const addPlaylist = async (title)=>{
    if(title==''){
      console.log("ALA")
      return updateError("Playlist name is empty", setError);
    }else{
    await fetch(`https://dev.magusaudio.com/api/v1/own/playlist/add`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title: title,
        user_id: ID
      })
    })
    .then(res =>{
      return res.json();
    })
    .then((result) =>{
      // If user does exist
      console.log("OK")   
      setText('')
      setWithPlaylist(false)
      fetchData();
      setModalVisible(false)
      return updateError('Playlist Successfully Save', setError);
    })
    }
  };
  const fetchData= async()=>{
    const resp = await fetch("https://dev.magusaudio.com/api/v1/own/playlist/"+ID);
    const data = await resp.json();
    console.log(data)
    setData(data)
    if(data.length==0){
      console.log("NO DATA")
      setWithPlaylist(true)
    }
  }
  const leftSwipe=(progress, dragX)=>{

    const scale = dragX.interpolate({
      inputRange: [0, 60],
      outputRange:[0, 1],
      extrapolate: 'clamp'
    });
    if(scale>60){
      console.log("delet")
    }
    return(
      <TouchableOpacity onPress={()=> adding()} style={{color: 'white', width: 60, alignItems: 'center', justifyContent: 'center', height: 60}}>
        <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/1828/1828926.png"}} style={{width: 35, height: 35, tintColor: 'rgba(4,157,217,1)'}}/>
        
      </TouchableOpacity>
    )
  }
  const searching = async(search)=>{
    await fetch(`https://dev.magusaudio.com/api/v1/playlist/search`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({search: search,
        user_id: ID
      })
    })
    .then(res =>{
      return res.json();
    })
    .then((result) =>{

      console.log(result[0])
      setData1(result[0])
    })
  }
  const deleting = async(playID)=>{
    console.log("playID delete")
    console.log(playID)
    await fetch(`https://dev.magusaudio.com/api/v1/own/playlist/delete/`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({playlist_id: playID,
        user_id: ID
      })
    })
    .then(res =>{
      return res.json();
    })
    .then((result) =>{
      // If user does exist
      setText('')
      fetchData();
      return updateError('Playlist Successfully Deleted', setError);
    })
  }
  const adding = async(playID)=>{
    setPlay(playID)
    console.log(play)
    setModalVisible1(true)
    
  }
  const addingSub = async(featured, title)=>{
    await fetch(`https://dev.magusaudio.com/api/v1/own/playlist-info/add`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({playlist_id: play,
        user_id: ID, featured_id: featured, title: title
      })
    })
    .then(res =>{
      return res.json();
    })
    .then((result) =>{
      // If user does exist
      setText('')
      fetchData();
      return updateError('Subliminal Successfully Added', setError);
    })
  }
  const view = () =>{
    if(withPlaylist==true){
      return(
        <View style={{}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: -15}}>
            <TouchableOpacity onPress={() => navigation.navigate("MeFree1")} style={{width: 40, height: 40, left: 15,marginTop: 48}} >
              <Image source={require('../../assets/pageback.png')} style={{width: 26, height: 26}} />
            </TouchableOpacity>
            {error ? (<Text style={{color: 'red',fontFamily: 'Helvetica Neue', fontSize: 16, marginBottom: 10, marginTop:55,textAlign: 'center'}}>{error}</Text>): null}
            <TouchableOpacity onPress={()=> setModalVisible(true)} style={{marginTop: 5, width: 38, right: 20}} >
            
          </TouchableOpacity>
          </View>
          <View style={{marginTop: 5, justifyContent: 'center', height: 600, width: Dimensions.get('window').width, alignItems: 'center'}} >
            <TouchableOpacity onPress={()=> setModalVisible(true)} style={{marginTop: 38,width: Dimensions.get('window').width-100, height: 50, borderColor: 'rgba(4,157,217,1)', borderRadius: 30, borderWidth: 1.5 , flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('../../assets/playing/plus.png')} style={{width: 24, height: 24, marginTop: 0, marginLeft: 6, tintColor: 'rgba(4,157,217,1)'}} />
              <Text style={{fontFamily: 'Helvetica Neue', fontSize: 20, color: 'rgba(4,157,217,1)', marginLeft: 10, fontWeight: 'bold' }} >Create New Playlist</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
    else{
      return(
      <View style={{}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: -15}}>
          <TouchableOpacity onPress={() => navigation.navigate("MeFree1")} style={{width: 40, height: 40, left: 15,marginTop: 48}} >
            <Image source={require('../../assets/pageback.png')} style={{width: 26, height: 26}} />
          </TouchableOpacity>
        {error ? (<Text style={{color: 'rgba(4,157,217,1)',fontFamily: 'Helvetica Neue', fontSize: 16, marginBottom: 10, marginTop:55,textAlign: 'center'}}>{error}</Text>): null}
          <TouchableOpacity onPress={()=> setModalVisible(true)} style={{marginTop: 5}} >
            <View style={{marginTop: 38,width: 38, height: 38, right: 20, borderColor: 'rgba(4,157,217,1)', borderRadius: 30, borderWidth: 1.5 }}>
              <Image source={require('../../assets/playing/add_playlist.png')} style={{width: 24, height: 20, marginTop: 8, marginLeft: 6, tintColor: 'rgba(4,157,217,1)'}} />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={{fontFamily: 'Helvetica Neue', fontSize: 25, color: '#0D0D0D', fontWeight: 'bold', left: 20, marginTop: 8}} >My Playlist</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => (
          
          
            <TouchableOpacity style={{ width: Dimensions.get('window').width-40,borderRadius: 10, backgroundColor: 'white', flexDirection: 'row', marginBottom: 20, shadowColor: 'gray',  borderColor: 'gray', borderWidth: 0.5}}>
              <Image source={{uri: item.cover}} style={{width: 60, height: 60, borderTopLeftRadius: 10, borderBottomLeftRadius: 10}}/>
              <View style={{ width: Dimensions.get('window').width-110, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text numberOfLines={1}style={{ marginLeft: 10, color: '#0D0D0D', fontWeight: 'bold', fontFamily: 'Helvetica Neue', fontSize: 15, }}>{item.title}</Text>
                <View style={{width: 100, flexDirection: 'row',  justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={()=> adding(item.playlist_id)}>
                  <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/1828/1828926.png"}} style={{width: 30, marginLeft: 10, height: 30, marginRight: 10, tintColor: 'rgba(4,157,217,1)'}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> deleting(item.playlist_id)}>
                  <Image source={require('../../assets/me/delete.png')} style={{width: 30, height: 30, marginRight: 10, tintColor: 'red'}}/>
                </TouchableOpacity>
                </View>
              </View>
              
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.playlist_id}
          style={{eight: 70, marginTop: 20, marginHorizontal: 20, marginBottom: 30}}
          showsHorizontalScrollIndicator={false}
        />
        
      </View>
      )
    }
  }
  const getData =async ()=>{
    try{
      const resp = await fetch("https://dev.magusaudio.com/api/v1/own/playlist/" + global.id);
      const data = await resp.json();
      if(data.length==0){
        setWithPlaylist(true)
      }else{
        setData(data)
      }
    } catch (error){
      console.log(error);
    }
    
  }

  useEffect(() => {
    getData();
   }, []);
   
  return(
    <ImageBackground  style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height,}}>
      
      
        {view()}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
      <TouchableOpacity style={{height: Dimensions.get('window').height,}}>
        <ImageBackground imageStyle={{ borderTopLeftRadius: 30, borderTopRightRadius: 30}} source={require('../../assets/playing/playbg.png')} style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height/2.2, marginTop: Dimensions.get('window').height/1.5, shadowColor: 'gray', shadowOpacity: 1, shadowRadius:2}}>
          <SafeAreaView style={styles.container}>
                
          <Text style={{fontFamily: 'Helvetica Neue', fontSize: 25, color: 'rgba(4,157,217,1)', fontWeight: 'bold', marginTop: -130 }} >Playlist Name</Text>
          <View style={{width: Dimensions.get('window').width-100, justifyContent: 'center', alignItems: 'center', height: 40, borderBottomColor: 'black', borderBottomWidth: 0.5, paddingBottom: -15, borderRadius: 10, marginTop: 20}}>
            <TextInput placeholder='Enter Playlist Name' name='playlist' onChangeText={newText => setText(newText)} defaultValue={text} style={{fontFamily: 'Helvetica Neue', fontSize: 20, color: 'black',}}/>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 30,width: Dimensions.get('window').width-100,}}>
            <TouchableOpacity onPress={()=> [setModalVisible(false), setText('')]}  style={{borderColor: 'black', borderWidth:0.5, marginRight: 10, borderRadius: 10, height: 50, justifyContent: 'center', alignItems:'center', width: 140}}>
              <Text style={{fontFamily: 'Helvetica Neue', fontSize: 17}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addPlaylist(text)}   style={{borderColor: 'rgba(4,157,217,0.4)', backgroundColor: 'rgba(4,157,217,0.4)', borderWidth:2, borderRadius: 10, height: 50, justifyContent: 'center', alignItems:'center', width: 140}}>
              <Text style={{fontFamily: 'Helvetica Neue', fontSize: 17}}>OK</Text>
            </TouchableOpacity>
          </View>
          </SafeAreaView>
        </ImageBackground>
      </TouchableOpacity>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}>
      <View  style={{height: Dimensions.get('window').height,}}>
        <ImageBackground imageStyle={{ borderTopLeftRadius: 30, borderTopRightRadius: 30}} source={require('../../assets/playing/playbg.png')} style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height/1.7, marginTop: Dimensions.get('window').height/2.2, shadowColor: 'gray', shadowOpacity: 1, shadowRadius:2}}>
          <SafeAreaView style={styles.container}>
          <View style={{ marginTop: -130 , flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center', width: Dimensions.get('window').width-20}}>
            <TouchableOpacity onPress={()=> [setModalVisible1(false), searching(''), setText('')]} >
              <Image source={require('../../assets/me/exit.png')}  style={{width: 20, height: 20, tintColor: 'red', marginLeft: 20}}/>
            </TouchableOpacity>
            <Text style={{fontFamily: 'Helvetica Neue', fontSize: 22, color: 'black', fontWeight: 'bold', marginRight: 50}} >Add Subliminal To Playlist</Text>
                
          </View>
          <View style={{width: Dimensions.get('window').width-60, justifyContent: 'center', alignItems: 'center', height: 40, borderBottomColor: 'black', borderBottomWidth: 0.5, paddingBottom: -15, borderRadius: 10, marginTop: 10}}>
            <TextInput  placeholder='Search Subliminal' name='playlist' onChangeText={newText => searching(newText)} defaultValue={text} style={{fontFamily: 'Helvetica Neue', fontSize: 20, color: 'black',}}/>

          </View>
          
          <View style={{height: Dimensions.get('window').height/3.,  marginBottom: -100, marginTop: 20, width: Dimensions.get('window').width-60}}>
          <SafeAreaView>
          
        <FlatList
        data={data1}
        renderItem={({ item }) => (
          
          <View style={{ width: Dimensions.get('window').width-60,borderRadius: 10, backgroundColor: 'white', flexDirection: 'row', marginBottom: 20, shadowColor: 'gray',  borderColor: 'gray', borderWidth: 0.5}}>
            <View style={{ width: Dimensions.get('window').width-110, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text numberOfLines={1}style={{ width: Dimensions.get('window').width-200, marginLeft: 10, color: '#0D0D0D', fontWeight: 'bold', fontFamily: 'Helvetica Neue', fontSize: 15, }}>{item.title}</Text>
              <View style={{width: 80, flexDirection: 'row',  justifyContent: 'space-between'}}>
              <TouchableOpacity onPress={()=> addingSub(item.featured_id, item.title)}>
                <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/1828/1828926.png"}} style={{width: 30, marginLeft: 10, height: 30, marginRight: -10, tintColor: 'rgba(4,157,217,1)'}}/>
              </TouchableOpacity>
              
              </View>
            </View>
            
          </View>
        )}
        keyExtractor={(item) => item.featured_id}
        style={{marginTop: 1, marginBottom: -20}}
        showsVerticalScrollIndicator={false}
      />
        </SafeAreaView>
          </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
      </Modal>
        

    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSheet: {
    position: 'absolute',
    bottom: min-max,
    left: 0,
    right: 0,
    height: max,
    width: '100%', borderTopLeftRadius: 32, borderTopRightRadius: 32
  },
  area:{
    width: 100, height: 20, alignSelf: 'center', justifyContent: 'center'
  },
  handle:{
    width: 100, height: 4, backgroundColor: 'gray', borderRadius: 10
  }
});
*/
}
export default Playlist;
