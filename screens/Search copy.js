import React from "react";
import { ScrollView,ImageBackground, View, Image, StyleSheet, Text, Dimensions } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigate } from "react-router-native";

const Search =()=>{
  let navigate=useNavigate();
    return (
      <ImageBackground style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height, backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row', backgroundColor: 'lightgray', shadowColor: 'gray', shadowOpacity: 1, shadowOffset: {width: 1, height: 2}, width: Dimensions.get('window').width-20, marginLeft: 10, height: 42, marginTop:54, borderRadius: 50}}>
          <TextInput placeholder="Search" style={{height: 35, width: Dimensions.get('window').width-100, marginLeft:20,    fontSize: 16, fontWeight: 'bold', marginTop: 3 }}/>
          <Image source={require('../assets/search/search1.png')} style={{width: 26, height: 26, left: 5, marginTop: 9, tintColor: 'black'}} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',marginTop: 20, marginLeft: 20, marginRight: 20}}>
          <TouchableOpacity style={{ borderRadius: 15, backgroundColor: 'rgba(4,157,217,1)', padding: 5, flexDirection: 'row'}}>
            <Text style={{fontSize: 13, fontWeight: 'bold', justifyContent: 'center', alignSelf: 'center', color: 'white',   paddingLeft: 7, paddingRight: 7}}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderRadius: 15, backgroundColor: 'rgba(4,157,217,0.4)', padding: 5, flexDirection: 'row'}}>
            <Text style={{fontSize: 13, fontWeight: 'bold', justifyContent: 'center', alignSelf: 'center', color: 'white',   paddingLeft: 7, paddingRight: 7}}>Meditating</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderRadius: 15, backgroundColor: 'rgba(4,157,217,0.4)', padding: 5, flexDirection: 'row'}}>
            <Text style={{fontSize: 13, fontWeight: 'bold', justifyContent: 'center', alignSelf: 'center', color: 'white',   paddingLeft: 7, paddingRight: 7}}>Focus</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderRadius: 15, backgroundColor: 'rgba(4,157,217,0.4)', padding: 5, flexDirection: 'row'}}>
            <Text style={{fontSize: 13, fontWeight: 'bold', justifyContent: 'center', alignSelf: 'center', color: 'white',   paddingLeft: 7, paddingRight: 7}}>Anxiety</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderRadius: 15, backgroundColor: 'rgba(4,157,217,0.4)', padding: 5, flexDirection: 'row'}}>
            <Text style={{fontSize: 13, fontWeight: 'bold', justifyContent: 'center', alignSelf: 'center', color: 'white',   paddingLeft: 7, paddingRight: 7}}>Stress</Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={{width: Dimensions.get('window').width-40,marginLeft: 20,height: 90, marginTop: 20, }}>
            <ImageBackground source={require('../assets//search/bgsearch1.png')} imageStyle={{borderRadius: 10}} style={{width: Dimensions.get('window').width-40, height: 90, }}>
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
              <Text style={{fontSize: 23, fontWeight: 'bold',  color: 'white' , marginLeft: 25, marginTop: 30}}>Anxiety</Text>
              <Image source={require('../assets/subs/bgsub6.png')} style={{width: 80, height: 80, marginRight: 20, marginTop: 5}}/>
            </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={{width: Dimensions.get('window').width-40,marginLeft: 20,height: 90, marginTop: 20, }}>
            <ImageBackground source={require('../assets/search/bgsearch2.png')} imageStyle={{borderRadius: 10}} style={{width: Dimensions.get('window').width-40, height: 90, }}>
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
              <Text style={{fontSize: 23, fontWeight: 'bold',  color: 'white' , marginLeft: 25, marginTop: 30}}>Good Sleep</Text>
              <Image source={require('../assets/subs/bgsub9.png')} style={{width: 80, height: 80, marginRight: 20, marginTop: 5}}/>
            </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={{width: Dimensions.get('window').width-40,marginLeft: 20,height: 90, marginTop: 20, }}>
            <ImageBackground source={require('../assets/search/bgsearch3.png')} imageStyle={{borderRadius: 10}} style={{width: Dimensions.get('window').width-40, height: 90, }}>
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
              <Text style={{fontSize: 23, fontWeight: 'bold',  color: 'white' , marginLeft: 25, marginTop: 30}}>Self Love</Text>
              <Image source={require('../assets/subs/bgsub8.png')} style={{width: 80, height: 80, marginRight: 20, marginTop: 5}}/>
            </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={{width: Dimensions.get('window').width-40,marginLeft: 20,height: 90, marginTop: 20, }}>
            <ImageBackground source={require('../assets/search/bgsearch4.png')} imageStyle={{borderRadius: 10}} style={{width: Dimensions.get('window').width-40, height: 90, }}>
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
              <Text style={{fontSize: 23, fontWeight: 'bold',  color: 'white' , marginLeft: 25, marginTop: 30}}>Study</Text>
              <Image source={require('../assets/subs/bgsub7.png')} style={{width: 80, height: 80, marginRight: 20, marginTop: 5}}/>
            </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={{width: Dimensions.get('window').width-40,marginLeft: 20,height: 90, marginTop: 20, }}>
            <ImageBackground source={require('../assets//search/bgsearch5.png')} imageStyle={{borderRadius: 10}} style={{width: Dimensions.get('window').width-40, height: 90, }}>
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
              <Text style={{fontSize: 23, fontWeight: 'bold',  color: 'white' , marginLeft: 25, marginTop: 30}}>In love</Text>
              <Image source={require('../assets/subs/bgsub6.png')} style={{width: 80, height: 80, marginRight: 20, marginTop: 5}}/>
            </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={{width: Dimensions.get('window').width-40,marginLeft: 20,height: 90, marginTop: 20, }}>
            <ImageBackground source={require('../assets//search/bgsearch1.png')} imageStyle={{borderRadius: 10}} style={{width: Dimensions.get('window').width-40, height: 90, }}>
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
              <Text style={{fontSize: 23, fontWeight: 'bold',  color: 'white' , marginLeft: 25, marginTop: 30}}>Anxiety</Text>
              <Image source={require('../assets/subs/bgsub6.png')} style={{width: 80, height: 80, marginRight: 20, marginTop: 5}}/>
            </View>
            </ImageBackground>
          </TouchableOpacity>
        </ScrollView>
        <View style={{position: 'absolute', bottom: 90, alignSelf: 'center', height: 75, width: 200, backgroundColor: 'rgba(67,156,212,.7)', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 15, fontWeight: 'bold',   color: 'white', marginBottom: 5}}>Subliminal 2</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={{borderRadius: 20, borderColor: 'white', borderWidth: 2, height: 30, width: 30, backgroundColor: 'rgba(67,156,212,.7)',justifyContent: 'center', alignItems: 'center', marginRight: 30}}>
              <Image source={require('../assets//search/next.png')} style={{height: 20, width: 20}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{borderRadius: 20, borderColor: 'white', borderWidth: 2, height: 40, width: 40, backgroundColor: 'rgba(67,156,212,.7)',justifyContent: 'center', alignItems: 'center', marginRight: 30}}>
              <Image source={require('../assets//search/next.png')} style={{height: 20, width: 20}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{borderRadius: 20, borderColor: 'white', borderWidth: 2, height: 30, width: 30, backgroundColor: 'rgba(67,156,212,.7)',justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('../assets//search/prev.png')} style={{height: 20, width: 20}}/>
            </TouchableOpacity>
          </View>
        </View>
        
      </ImageBackground>
    )
}
export default Search;