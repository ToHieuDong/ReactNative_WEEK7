import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";





export default function Screen3() {
    const navigation = useNavigation()
    var [data, setData] = useState([])
  
    useEffect(()=> {
        fetch('https://653f4b2b9e8bd3be29e02e7b.mockapi.io/drink')
        .then(response => response.json())
        .then(json => setData(json))
    }, [])

    const Item = ({item}) => (
        <View style={{flex: 1, flexDirection: "row", alignItems: 'center'}}>
            <Image style={{height:20, width: 20, resizeMode:"contain", padding:20, margin:10}} source={{uri: item.img}}/>
            <View style={{flex:3, justifyContent:"space-around"}}>
                <Text>{item.name}</Text>
                <Text>${item.price}</Text>
            </View>
            <TouchableOpacity style={{padding:10, margin:10}}>
                <Image style={{height: 20, width: 20, resizeMode:"contain"}} source={{uri: 'https://res.cloudinary.com/du73a0oen/image/upload/v1698646557/Week6/icon/mute_jrtlgn.png'}}/>                                               
            </TouchableOpacity>
            <TouchableOpacity style={{padding:10, margin:10}}>
                <Image style={{height: 20, width: 20, resizeMode:"contain"}} source={{uri: 'https://res.cloudinary.com/du73a0oen/image/upload/v1698646559/Week6/icon/sum_ecp4mp.png'}}/>
            </TouchableOpacity>
        </View>
    )

    return (
        <View style={styles.container}>
            <View style={{flex:1, width:'100%'}}>
                <FlatList
                data={data}
                renderItem = {({item})=><Item item={item}/>} 
                />

            </View>

            <TouchableOpacity style={{backgroundColor: '#eba157', width: '100%', padding:20, alignItems:"center", borderRadius: 10,}}>
                <Text style={{color:'#FFF'}}>GO TO CART</Text>
            </TouchableOpacity>
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
