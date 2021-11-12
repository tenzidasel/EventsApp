import React, { useState } from "react";
import {View,Button, Text,TextInput} from 'react-native';
import {useValue} from './ValueContext';

const Login = () => {
   const [eAdd,setEAdd] = useState("");
   const [pass,setPass] = useState("");
   const [login,setLogin] = useState(false);
  
   return(
      <View style = {{backgroundColor: "pink"}}>
          <Text style ={{fontSize:30}}> ENTER EMAIL ADDRESS : </Text>
         <TextInput style={{
                width: "90%",
                height: 50,
                borderColor: 'black',
                borderWidth: 2
          }}
              placeholder="email "
              onChangeText={text =>{ setEAdd(text)}}
         />
        
       

        <View>
        <Text style ={{fontSize:30}}> ENTER PASSWORD : </Text>
        <TextInput secureTextEntry={true} style={{
                width: "90%",
                height: 50,
                borderColor: 'black',
                borderWidth: 2
          }}
              placeholder="password "
              onChangeText={text =>{ setPass(text)}}

         />
        </View>

        <Button
            color='red' title='LOGIN'
            onPress = {() =>
              setLogin(true)}
        />
        
      </View>
   )
}


export default Login