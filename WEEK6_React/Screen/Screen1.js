
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export default function Screen1() {
    const navigation = useNavigation()
    var [data, setData] = useState([])

    useEffect(()=> {
        fetch('https://653f4b2b9e8bd3be29e02e7b.mockapi.io/Shop')
      .then(response => response.json())
      .then(json => setData(json))
    }, [])

    const Item = ({item}) => (
        <View style={{flex: 1, height:100, width:'100%', alignItems:'center', gap:10}}>
            <Image style={{height:150, width:300, resizeMode:'contain'}} source={{uri:item.img}}/>
        </View>
    )

  return (
    <View style={styles.container}>
        <View style={{flex:1, }}>
            <Text style={{fontSize:20, fontWeight:500 }}>Welcome to Cafe world</Text>
        </View>
        <View style={{flex:5, }}>
            <FlatList
            data={data}
            renderItem = {({item})=><Item item={item}/>} 
            />
        </View>
        <View style={{flex:1, width:'100%', alignItems:'center', justifyContent:'center'}}>
            <TouchableOpacity onPress={()=> {navigation.navigate('Screen2')}} style={{backgroundColor:'blue', width:300, alignItems:'center', borderRadius:15}}>
                <Text style={{color:'white', fontSize:20, padding:20}}>Get Start</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
});
