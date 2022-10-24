import { View, FlatList, StyleSheet } from 'react-native';

import HallView from "./HallView";

function HallList({Halls}){
    
    //كل اكله لها عنصر
    function renderHallInfo(itemData){
 
        const item = itemData.item;
        const hallInfoProps ={
            id: item.id, //هذا عشان نعرف ايدي الاكله اللي بننتقل لها بعدين
            title: item.title,
            price: item.price,
            guests: item.guests
        };
        return (
            <HallView {...hallInfoProps}/>
        );
    }

    return( 
        //الاكل الموجود بكل تصنيف
        <View style={styles.view1}>
            <FlatList
                style={styles.flat1}
                data={Halls}
                keyExtractor={(item) => item.id}
                renderItem={renderHallInfo}
            />
        </View>
    );
}

export default HallList;

const styles = StyleSheet.create({
    view1:{
        flex: 1,
    },
  });