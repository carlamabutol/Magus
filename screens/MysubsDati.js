import React from "react";
import { ScrollView,ImageBackground, View, Image, StyleSheet, Text, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigate } from "react-router-native";

const Mysubs =()=>{
  let navigate=useNavigate();
    return (
      <ImageBackground style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height, backgroundColor: 'white'}}>
        <TouchableOpacity onPress={()=> navigate("/home1")} >
        </TouchableOpacity>
        <Text style={{  fontSize: 25, color: '#0D0D0D', fontWeight: 'bold', left: 20, marginTop: 48}} >My Sub</Text>
        
        <ScrollView  style={{marginTop: 15}}>
          
          <View style={{ height: 195, marginRight: 30, marginLeft: 30, flexDirection: 'row'}}>
            <View style={{width: '50%'}}>
              <View style={{ marginRight: 5, backgroundColor: 'white', borderRadius: 10}}>
                <Image source={require('../assets/subs/bgsub1.png')} style={{width: '100%', height: 110, borderRadius: 10}}/>
                <Text style={{marginTop: 8, paddingLeft: 5, color: '#0D0D0D', fontWeight: 'bold',   fontSize: 1, }}>Subliminal 1</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{marginTop: 2, paddingLeft: 5, color: 'gray',   fontSize: 11, marginBottom: 10 }}>MEDITATION</Text>
                  <Text style={{marginTop: 2, paddingRight: 5, color: 'gray',   fontSize: 11, marginBottom: 10 }}>3-10 MIN</Text>
                </View>
              </View>
              <View style={{marginTop: 12, marginRight: 5, backgroundColor: '#F2ACFF', borderRadius: 10}}>
                <Image source={require('../assets/subs/bgsub6.png')} style={{width: '80%', height: 108, marginLeft: 35}}/>
                <Text style={{marginTop: 4, paddingLeft: 5, color: '#0D0D0D', fontWeight: 'bold',   fontSize: 15, }}>Subliminal 1</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{marginTop: 2, paddingLeft: 5, color: '#0D0D0D',   fontSize: 10, marginBottom: 10 }}>MEDITATION</Text>
                  <Text style={{marginTop: 2, paddingRight: 13, color: '#0D0D0D',   fontSize: 10, marginBottom: 10 }}>3-10 MIN</Text>
                </View>
              </View>
              <View style={{marginTop: 12, marginRight: 5, backgroundColor: '#4A6DAF', borderRadius: 10}}>
                <Image source={require('../assets/subs/bgsub8.png')} style={{width: '70%', height: 108, marginLeft: 35}}/>
                <Text style={{marginTop: 4, paddingLeft: 5, color: '#F2f2f2', fontWeight: 'bold',   fontSize: 15, }}>Subliminal 1</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{marginTop: 2, paddingLeft: 5, color: '#F2f2f2',   fontSize: 10, marginBottom: 10 }}>MEDITATION</Text>
                  <Text style={{marginTop: 2, paddingRight: 13, color: '#F2f2f2',   fontSize: 10, marginBottom: 10 }}>3-10 MIN</Text>
                </View>
              </View>
              <View style={{marginTop: 12, marginRight: 5, backgroundColor: '#42839B', borderRadius: 10}}>
                <Image source={require('../assets/subs/bgsub9.png')} style={{width: '80%', height: 108, marginLeft: 35}}/>
                <Text style={{marginTop: 4, paddingLeft: 5, color: '#0D0D0D', fontWeight: 'bold',   fontSize: 15, }}>Subliminal 1</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{marginTop: 2, paddingLeft: 5, color: '#F2f2f2',   fontSize: 10, marginBottom: 10 }}>MEDITATION</Text>
                  <Text style={{marginTop: 2, paddingRight: 13, color: '#F2f2f2',   fontSize: 10, marginBottom: 10 }}>3-10 MIN</Text>
                </View>
              </View>
              <View style={{marginTop: 12, marginRight: 5, backgroundColor: '#CFF5FA', borderRadius: 10}}>
                <Image source={require('../assets/subs/bgsub7.png')} style={{width: '80%', height: 108, marginLeft: 35}}/>
                <Text style={{marginTop: 4, paddingLeft: 5, color: '#0D0D0D', fontWeight: 'bold',   fontSize: 15, }}>Subliminal 1</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{marginTop: 2, paddingLeft: 5, color: 'gray',   fontSize: 10, marginBottom: 10 }}>MEDITATION</Text>
                  <Text style={{marginTop: 2, paddingRight: 13, color: 'gray',   fontSize: 10, marginBottom: 10 }}>3-10 MIN</Text>
                </View>
              </View>
            </View>


          <View style={{width: '50%'}}>
            <View style={{ marginLeft: 5, backgroundColor: '#F2ACFF', borderRadius: 10}}>
              <Image source={require('../assets/subs/bgsub6.png')} style={{width: '80%', height: 108, marginLeft: 35}}/>
              <Text style={{marginTop: 4, paddingLeft: 15, color: '#0D0D0D', fontWeight: 'bold',   fontSize: 15, }}>Subliminal 1</Text>
              <Text style={{marginTop: 4, paddingLeft: 15, color: '#0D0D0D',   fontSize: 12, marginBottom: 15 }}>MEDITATION</Text>
              <Text style={{marginTop: 2, paddingLeft: 15, color: '#0D0D0D',   fontSize: 10, marginBottom: 20 }}>3-10 MIN</Text>
            </View>
            <View style={{marginTop: 12, marginLeft: 5, backgroundColor: '#CFF5FA', borderRadius: 10}}>
              <Image source={require('../assets/subs/bgsub7.png')} style={{width: '80%', height: 108, marginLeft: 35}}/>
              <Text style={{marginTop: 4, paddingLeft: 5, color: '#0D0D0D', fontWeight: 'bold',   fontSize: 15, }}>Subliminal 1</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{marginTop: 2, paddingLeft: 5, color: 'gray',   fontSize: 10, marginBottom: 10 }}>MEDITATION</Text>
                <Text style={{marginTop: 2, paddingRight: 13, color: 'gray',   fontSize: 10, marginBottom: 10 }}>3-10 MIN</Text>
              </View>
            </View>
            <View style={{ marginTop: 12, marginLeft: 5, backgroundColor: '#4A6DAF', borderRadius: 10}}>
              <Image source={require('../assets/subs/bgsub8.png')} style={{width: '70%', height: 108, marginLeft: 35}}/>
              <Text style={{marginTop: 4, paddingLeft: 15, color: '#F2F2F2', fontWeight: 'bold',   fontSize: 15, }}>Subliminal 1</Text>
              <Text style={{marginTop: 4, paddingLeft: 15, color: '#F2F2F2',   fontSize: 12, marginBottom: 15 }}>MEDITATION</Text>
              <Text style={{marginTop: 2, paddingLeft: 15, color: '#F2F2F2',   fontSize: 10, marginBottom: 20 }}>3-10 MIN</Text>
            </View>
            <View style={{marginTop: 12, marginLeft: 5, backgroundColor: '#F2ACFF', borderRadius: 10}}>
              <Image source={require('../assets/subs/bgsub6.png')} style={{width: '80%', height: 108, marginLeft: 35}}/>
              <Text style={{marginTop: 4, paddingLeft: 5, color: '#0D0D0D', fontWeight: 'bold',   fontSize: 15, }}>Subliminal 1</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{marginTop: 2, paddingLeft: 5, color: '#0D0D0D',   fontSize: 10, marginBottom: 10 }}>MEDITATION</Text>
                <Text style={{marginTop: 2, paddingRight: 13, color: '#0D0D0D',   fontSize: 10, marginBottom: 10 }}>3-10 MIN</Text>
              </View>
            </View>
          </View>



        </View>
          
          
        </ScrollView>
        
      </ImageBackground>
    )
}
export default Mysubs;