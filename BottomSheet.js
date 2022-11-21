import { View } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
const BottomSheet1 =()=>{
    return(
        <View style={styles.bottom1}></View>
    )
}
const styles = StyleSheet.create({
    bottom1:{height: 500, width: '100%', backgroundColor: 'green'}
})
export default BottomSheet1;