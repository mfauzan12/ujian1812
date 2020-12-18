import React, { Component } from 'react';
import { StyleSheet,FlatList, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import database from '@react-native-firebase/database';


class Home extends Component {

    state ={
        listData: [],
    }
  
    componentDidMount() {

    database()
    .ref('daftar/')
    .once('value')
    .then(snapshot => {
    console.log('items: ', snapshot.val());
    });

    }

    render() {

        return (
        
            <View style={styles.container}>
                <View style={{
                    paddingBottom: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    }}>
                    <View><Text>0 items</Text></View>
                    <View></View>
                    <View><Button title="Add Item" onPress={() => this.props.navigation.navigate('AddItem')}/></View> 
                    </View>
                    <Text style={styles.row}>
                        nama : 
                        {"\n"}
                        gender : 
                        {"\n"}
                        umur : 
                        {"\n"}
                        status : 
                        {"\n"} 
                    </Text>
                </View>

        );
        
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    row: {
        padding: 4,
        borderTopColor:"red",
        borderTopWidth:StyleSheet.hairlineWidth,
        borderBottomColor: "red",
        borderBottomWidth: StyleSheet.hairlineWidth
      }
  });


export default Home;