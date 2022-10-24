import { View, Text, Image, Pressable, StyleSheet } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { GlobalStyles } from "../../constants/styles";


function HallView({id, title, price, guests}){
    return(
        <View style={styles.container}>
            <Pressable style={({pressed}) => (pressed ? styles.button : null)} >
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image1} 
                        source={require('../../assets/images/hall.jpg')}
                    />
                </View>

                <View style={styles.infoContainer}>

                    <View style={styles.info}>
                        <View>
                            <Text style={styles.boldName}>{title}</Text>
                        </View>
                        <View style={styles.info}>
                            <Ionicons style={styles.map} name="star" size='15' color='#bfba22' />
                            <Ionicons style={styles.map} name="star" size='15' color='#bfba22' />
                            <Ionicons style={styles.map} name="star" size='15' color='#bfba22' />
                            <Ionicons style={styles.map} name="star" size='15' color='#bfba22' />
                        </View>
                    </View>

                    <View style={styles.info}>
                        <View>
                            <Text style={styles.normalName}>Riyadh, alnada</Text>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.boldName}>{price}</Text>
                            <Text style={styles.normalName}>SR</Text>
                        </View>
                    </View>

                    <View style={styles.info2}>
                        <View>
                            <MaterialCommunityIcons 
                                name="account-group" 
                                size={30} color= 
                                {GlobalStyles.colors.primary10} 
                            />
                        </View>
                        <View style={styles.info3}>
                            <Text style={styles.boldName}>{guests}, </Text>
                            <Text style={styles.normalName}>Guests</Text>
                        </View>
                    </View>

                </View>
            </Pressable>
        </View>
    );
}

export default HallView;

const styles = StyleSheet.create({
    container:{
        margin: 8,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset:{width: 0, height: 2},
        shadowRadius: 8,
        shadowOpacity: 0.05,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    button:{
        opacity: 0.8,
    },
    imageContainer:{
        flex: 3,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        overflow: 'hidden',
    },
    image1:{
        width: 349,
        height: 282
    },
    infoContainer:{
        flex: 1,
        justifyContent: 'space-between',
        margin: 2,
    },
    info:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    info2:{
        flexDirection: 'row',
    },
    info3:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        marginLeft: 4,
    },
    boldName:{
        fontSize: 12,
        fontWeight: 'bold',
    },
    normalName:{
        fontSize: 12,
    },
});