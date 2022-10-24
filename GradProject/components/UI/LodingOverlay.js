import { View, ActivityIndicator, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";

function LodingOverlay(){
    return(
        <View style={styles.view1}>
            <ActivityIndicator size="large" color="white"/>
        </View>
    );
}

export default LodingOverlay;

const styles = StyleSheet.create({
    view1:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
    },
});