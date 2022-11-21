import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, ImageBackground, Image, View, Dimensions, StyleSheet, TouchableOpacity, Button, Text } from "react-native";
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormContainer from "../../app/components/FormContainer";
import FormInput from "../../app/components/FormInput";
import FormSubmitBtn from "../FormSubmitBtn";
import { useNavigate } from "react-router-native";
import moment from 'moment'
import { useRoute } from "@react-navigation/native";
const validationSchema = Yup.object({
  newpassword: Yup.string().trim().min(8, 'Password is too short').required('Password is required!'),
  confirm: Yup.string().equals([Yup.ref('newpassword'), null], 'Does not match!')
   
})
const isValidObjField =(obj) =>{
  return Object.values(obj).every(value => value.trim())
}
const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(()=>{
    stateUpdater('')
  }, 2500);
}

const ChangePass =({navigation}) =>{
  const route = useRoute();


  
  const userInfo={
     newpassword: '', confirm: ''
  };
  const {newpassword, confirm} =userInfo;
  const [error, setError] = useState('');
  const handleOnChangeText = (value, fieldName) =>{
    setUserInfo({...userInfo, [fieldName]: value})
  };
  const isValidForm =()=>{
    if(!isValidObjField(userInfo)) return updateError('Required', setError);
    if(newpassword.length<8) return updateError('Invalid pass', setError);
    return true;
  }
  let today = moment().format('YYYY-MM-DD hh:mm:ss');
  
  let resetpass = (newpassword, confirm)=>{
    fetch(`http://localhost:8000/api/v1/user/change/password`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: route.params.email, current_password: route.params.password, 
        new_password: newpassword, confirm_new_password: confirm
      })
      
    })
    .then(res =>{
      return res.json();
    })
    .then((result) =>{
      console.log(result.success);
      if(result.success==true){
        let first_name=result.user.info.first_name;
        let email=result.user.email;
        let name=result.user.info.first_name+ ' ' +result.user.info.last_name;
          AsyncStorage.setItem('first_name', first_name);
          AsyncStorage.setItem('name', name);
          AsyncStorage.setItem('email', email);
          navigation.navigate('Home');
      }
    })
  };


    return( 
      <>
        <ImageBackground source={require('../../assets/login/bg4.png')}  style={{height: Dimensions.get('window').height, width: Dimensions.get('window').width, paddingHorizontal: 10}}>
          <FormContainer>
          <Image source={require('../../assets/login/emaillogin.png')} style={{width: '100%', height: '50%' }}/>
          <Text style={{  fontSize: 30, fontWeight: 'bold', marginTop: -15}}>Hello Again!</Text>
          <Text style={{  fontSize: 11,  marginTop: 10, marginBottom: 40}}>Welcome back, you've been missed!</Text>
          <Text style={{  fontSize: 35, fontWeight: 'bold', marginTop: 417}}>Reset</Text>
            <Text style={{  fontSize: 35, fontWeight: 'bold', marginTop: -11, marginBottom: 20}}>Password</Text>
            <Text style={{  fontSize: 12,  marginTop: -10, marginBottom: 11}}>Resetting your Password for security purposes</Text>
            <Formik initialValues={userInfo} validationSchema={validationSchema} onSubmit={(values, {resetForm}) =>resetpass(values.newpassword, values.confirm, resetForm({values: ''}))}>
              {({values,errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit })=>{  
                const {newpassword, confirm} = values
                return <> 
                  <FormInput error={touched.newpassword && errors.newpassword} onBlur={handleBlur('newpassword')} value={newpassword} onChangeText={handleChange('newpassword')} autoCapitalize='none' secureTextEntry title='Password' placeholder='New Password'/>
                  <FormInput error={touched.confirm && errors.confirm} onBlur={handleBlur('confirm')} value={confirm} onChangeText={handleChange('confirm')} autoCapitalize='none' secureTextEntry title='Confirm Password' placeholder='Confirm Password'/>
                  <FormSubmitBtn submitting={isSubmitting} onPress={handleSubmit} title='Submit'/>
                
                </>
              }}
            </Formik>
          </FormContainer>
        </ImageBackground> 
      </>
    )
}
const styles = StyleSheet.create({
  btn: {
    width: '100%',
    borderColor: "black",
    borderWidth: 0.5,
    height: 38,
    width: 270,
    backgroundColor: '#0F52BA',
    elevation:2,
    marginTop: 30,
    borderRadius: 5,
  },
})

export default ChangePass;

