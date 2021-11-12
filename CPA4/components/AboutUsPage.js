import React from "react";
import { Button, Image, TextInput,View, Text, StyleSheet} from 'react-native'
import ScreenTemplate from '../containers/ScreenTemplate'
import ThreePartRow from '../containers/ThreePartRow'



const Header = () => {
  return (
  <ThreePartRow
       
    content = {<Text style={{fontSize:40, backgroundColor: '#20b2aa'}}> FIND YOUR COMMUNITY </Text>}
  />
)}


const ScreenDemo = () => {
  return (
    <ScreenTemplate
        header={<Header />}
        footer={<Text  style={{fontSize:12}}> Tenzin Dasel, CS 153a Prof Hickey, BRANDEIS UNIVERSITY</Text>}
    >
    
    
    <View style={styles.contain}>
    
        <Text style={styles.text}>
        <h1>ABOUT US</h1>
            
        
            <Text style={{fontSize:20}}>
            This app is created with the intent for individuals to find a home away from home: A community around where 
                    they are. Find out what exiciting events are taking place around you with people of the same interest! 
                    With Find your community, you are never homesick! 
            </Text>
        

        
                       

            <View style={{flex:4, flexDirection:'column'}}>
                <Image style={{flex:1, width:'100', height:'100'}} source={{uri:'https://s3.amazonaws.com/omiweb/wp-content/uploads/2017/08/01122818/community.jpg'}} />
                
                
                <View style={{flex:1}}>
                    <Text style={{fontSize:22}}>
                            <p> CONTACT US </p>
                    </Text>
                    <TextInput style={{fontSize:12,backgroundColor:'yellow'}}
                                placeholder="NAME:" />
                    <TextInput style={{fontSize:12,backgroundColor:'yellow'}}
                                placeholder="EMAIL:" />
                    <TextInput style={{fontSize:12,backgroundColor:'yellow'}}
                                placeholder="MESSAGE: " />
                    <Button style={{fontSize:32}} title="submit" color="red" />
                </View>
                </View>


                </Text>   

            </View>
        
    </ScreenTemplate>
  )
}

const styles=StyleSheet.create({
  centeredElt:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  banner:{
    flexDirection:'row',
    justifyContent:'space-between'
  },

  container: {
    flex: 1,
  },
  contain: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'space-around',
    border: "thick solid red",
    margin:"10px",
    padding:"20px",
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },

  text: {
    color: "white",
    lineHeight: 24,
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
})

export default ScreenDemo