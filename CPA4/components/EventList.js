import React from 'react';
import { SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import events from '../assets/events'
import ScreenTemplate from '../containers/ScreenTemplate'
import ThreePartRow from '../containers/ThreePartRow'
const eventLists = events()


const Header = () => {
    return (
    <ThreePartRow
        content = {<Text style={{fontSize:40, backgroundColor: '#20b2aa'}}> FIND YOUR COMMUNITY </Text>}
    />
  )}



const DATA = eventLists.map((x) => {
  x.id = x.href
  return(x)
})


const Item = ({ title, date, description}) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title.trim()}</Text>
        <Text style ={styles.subtitles}>{date}</Text>
        <Text  style ={styles.subtitles}> {description} </Text>
      </View>
);

const EventList = () => {
  const renderItem = ({ item }) => (
    <View>
      <Item
          title={item.title}
          date={item.date}
          description={item.description}/>
    </View>
  );

  return (
        <ScreenTemplate
        header={<Header />}
        footer={<Text  style={{fontSize:12}}> App created by Tenzin Dasel, CS 153a Prof Hickey, BRANDEIS UNIVERSITY </Text>}
        >
    <SafeAreaView style={styles.container}>
        <view style ={{backgroundColor: '#8fbc8f'}}>

      
      <Text style={{fontSize:32,
                     
                    alignItems: 'center'}}>
         Upcoming Event Lists
      </Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.href}
      />
        </view>
    </SafeAreaView>
    </ScreenTemplate>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex:4,
    backgroundColor: '#add8e6',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  subtitles: {
    fontSize: 15,
    backgroundColor: 'pink'
  },
});

export default EventList;