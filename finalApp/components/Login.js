import React, { useState } from "react";
import {View,Button, Text,TextInput} from 'react-native';
import {useValue} from './ValueContext';
import LOGO from './LOGO.png';
import ThreePartRow from '../containers/ThreePartRow'



const Login = () => {
   const [eAdd,setEAdd] = useState("");
   const [pass,setPass] = useState("");
   const [login,setLogin] = useState(false);
 
  
   return(
     
    <View style={{flex:1, backgroundColor: '#20b2aa'}}>


      
      <View style ={{backgroundColor:'white', alignContent:'center'}}>
          <img 
              style={{width: 150, height: 150, }}
              src={LOGO} />
        </View>
          <View style = {{backgroundColor: "light-gray"}}>
            <Text style ={{fontSize:30}}> ENTER EMAIL ADDRESS : </Text>
              <TextInput style={{
                width: "30%",
                height: 50,
                borderColor: 'black',
                backgroundColor: '#ffffe0',
                borderWidth: 2
                }}
              placeholder="email "
              onChangeText={text =>{ setEAdd(text)}}
            />
         
        <View>
        <Text style ={{fontSize:30}}> ENTER PASSWORD : </Text>
        <TextInput secureTextEntry={true} style={{
                width: "30%",
                height: 50,
                borderColor: 'black',
                backgroundColor: '#ffffe0',
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
        
        <Text> Welcome {eAdd}</Text>
        
      </View>
      
      </View>
      
   )
}


export default Login;