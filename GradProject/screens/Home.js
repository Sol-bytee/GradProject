import { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import HallList from "../components/common/HallList";


function Home({navigation, route}){
    const [enteredHall, setEnteredHall] = useState([{id: 1, title: 'Al WOROD', price: 20000, guests: 20},{id: 2, title: 'Al ZOMRD', price: 22000, guests: 35}]);
    let sort = false
    function sortHandler(){
        navigation.navigate('HomeSort',{sort});
    }
    function FilterHandler(){
        navigation.navigate('HomeFilter');
    }
    function DateHandler(){
        navigation.navigate('HomeDate');
    }
    useEffect(() => {
        if (route.params?.highPrice) {
            setEnteredHall([{id: 2, title: 'Al ZOMRD', price: 22000, guests: 35},{id: 1, title: 'Al WOROD', price: 20000, guests: 20}]);
        }
        else if (route.params?.lowPrice) {
            setEnteredHall([{id: 1, title: 'Al WOROD', price: 20000, guests: 20},{id: 2, title: 'Al ZOMRD', price: 22000, guests: 35}]);
            console.log('hi');
        }

        if (route.params?.highGuest) {
            setEnteredHall([{id: 2, title: 'Al ZOMRD', price: 22000, guests: 35},{id: 1, title: 'Al WOROD', price: 20000, guests: 20}]);
        }
        else if (route.params?.lowGuest) {
            setEnteredHall([{id: 1, title: 'Al WOROD', price: 20000, guests: 20},{id: 2, title: 'Al ZOMRD', price: 22000, guests: 35}]);
        }
    }, [route.params?.highPrice, route.params?.highGuest]);
    

    

    return(
        <View style={styles.container}>

            <View style={styles.searchBar}>

                <View style={styles.searchBar1}>
                    <TextInput style={styles.search}/>
                    <Ionicons style={styles.map} name="map" size='30' color='#6A2B81' />
                </View>

                <View style={styles.searchBar2}>
                    <Pressable 
                        style={({pressed}) => (pressed ? styles.button : null)} 
                        onPress={sortHandler}
                    >
                        <View style={styles.icon}>
                            <MaterialCommunityIcons name="sort" size={30} color="#6A2B81" />
                            <Text>sort</Text>
                        </View>
                    </Pressable>
                    <Pressable 
                        style={({pressed}) => (pressed ? styles.button : null)}
                        onPress={FilterHandler} 
                    >
                        <View style={styles.icon}>
                            <MaterialCommunityIcons name="filter" size={30} color="#6A2B81" />
                            <Text>Filter</Text>
                        </View>
                    </Pressable>
                    <Pressable 
                        style={({pressed}) => (pressed ? styles.button : null)}
                        onPress={DateHandler} 
                    >                        
                        <View style={styles.icon}>
                            <Fontisto name="date" size={30} color="#6A2B81" />
                            <Text> Date</Text>
                        </View>
                    </Pressable>
                </View>

            </View>

            <View style={styles.hallContainer}>
                <HallList Halls={enteredHall}/>
            </View>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    searchBar:{
      flex: 1,
      margin: 12,
    },
    searchBar1:{
        backgroundColor:'#E8E8E8',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        flex: 1,
        flexDirection: 'row',
    },
    search:{
        flex: 6,
        borderWidth: 1,
        borderRadius: 8,
        margin: 12,
        shadowColor: 'black',
        shadowOffset:{width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    map:{
        flex: 1,
        marginTop: 14,
    },
    searchBar2:{
        backgroundColor: '#ECECEC',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 6,
    },
    button:{
        opacity: 0.6,
    },
    icon:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    hallContainer:{
        flex: 3,
        alignItems: 'center',
      },
  });
  