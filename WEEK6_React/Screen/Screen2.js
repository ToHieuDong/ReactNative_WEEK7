
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Screen2() {
  const navigation = useNavigation()
  var [data, setData] = useState([])

    useEffect(()=> {
      fetch('https://653f4b2b9e8bd3be29e02e7b.mockapi.io/Shop')
      .then(response => response.json())
      .then(json => setData(json))
    }, [])

    const Item = ({item}) => (
        <View style={{flex: 1, width:'100%', alignItems:'center', padding:10}}>
            <TouchableOpacity onPress={() => {navigation.navigate('Screen3')}} style={{borderRadius: 5, backgroundColor: '#c2c1c0', padding:5}}>
                <Image style={{height:150, width:300, resizeMode:'contain'}} source={{uri:item.img}}/>  
                <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                  <View style={{backgroundColor: '#e8e7e6', width: '50 %', padding:2, flexDirection:'row', borderRadius:5}}>
                    <Image style={{height:20, width: 20,}} source={{uri: 'https://res.cloudinary.com/du73a0oen/image/upload/v1698646556/Week6/icon/lock_hefzud.png'}}/>
                    <Text style={{color: '#1DD75B'}}>{item.status}</Text>
                  </View>
                  <View style={{backgroundColor: '#e8e7e6', width: '50 %', padding:2, flexDirection:'row', borderRadius:5}}>
                    <Image style={{height:20, width: 20,}} source={{uri: 'https://res.cloudinary.com/du73a0oen/image/upload/v1698646556/Week6/icon/lock_hefzud.png'}}/>
                    <Text style={{color: '#DE3B40'}}>{item.timeShip}</Text>
                  </View>
                  <Image style={{height:20, width: 20, resizeMode:'contain'}} source={{uri: 'https://res.cloudinary.com/du73a0oen/image/upload/v1698646556/Week6/icon/location_idjbpm.png'}}/>
                </View>
                <Text style={{fontSize:18, fontWeight:'bold'}}>{item.name}</Text>
                <Text style={{fontSize:16, fontWeight:'400'}}>{item.location}</Text>
            </TouchableOpacity>
        </View>
    )


  return (
    <View style={styles.container}>
      <View style={{flex:1}}>
        <FlatList
        data={data}
        renderItem = {({item})=><Item item={item}/>} 
        />

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
  },
});
