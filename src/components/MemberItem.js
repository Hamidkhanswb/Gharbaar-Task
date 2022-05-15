import React,{useState,useEffect,useRef} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image, FlatList} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

function MemberItem({item, index}){

    return(
        <View style={styles.item}>
            <View style={{}}>
                <Image
                    source={item.profile}
                    style={styles.itemImage}
                    resizeMode="contain"
                />
                <View style={[styles.itemStatus,{backgroundColor:item.status == "online"?"#8CC540":'#FB2A2A'}]}>
                </View>
            </View>
            <Text style={styles.itemText} numberOfLines={1}>{item.name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:RFValue(15),
    },
    itemImage:{
        height:RFValue(55),
        width:RFValue(55)
    },
    itemText:{
        flex:1,
        paddingHorizontal:RFValue(15),
        fontSize:RFValue(16),
        fontWeight:'400',
        color:'#221F1F'
    },
    itemStatus:{
        position:'absolute',
        bottom:RFValue(2),
        right:RFValue(1),
        height:RFValue(14),
        width:RFValue(14),
        borderRadius:RFValue(14),
        borderWidth:RFValue(2),
        borderColor:'white',
    }
});
 
export default MemberItem;