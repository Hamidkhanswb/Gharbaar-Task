import React,{useState,useEffect,useRef} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image, FlatList} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

function InquiryItem(props){
    const {item, index} = props;

    return(
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.desc}>{item.description}</Text>
            <Text style={styles.status}>Status: <Text style={[styles.subStatus,{color:item.status =="Pending"?'#fc853a':'#0eb302'}]}>{item.status}</Text></Text>
        </View>
    )
};

const styles = StyleSheet.create({
    item:{
        marginBottom:RFValue(20)
    },
    title:{
        marginBottom:RFValue(5),
        fontSize:RFValue(14),
        fontWeight:'400',
        color:'#005FFF'
    },
    date:{
        marginBottom:RFValue(5),
        fontSize:RFValue(12),
        fontWeight:'500',
        color:'#075595'
    },
    desc:{
        marginBottom:RFValue(5),
        fontSize:RFValue(16),
        fontWeight:'500',
        color:'#221F1F'
    },
    status:{
        marginBottom:RFValue(5),
        fontSize:RFValue(14),
        fontWeight:'400',
        color:'#221F1F'
    },
    subStatus:{
        fontSize:RFValue(14),
        fontWeight:'400',
    }
});

export default InquiryItem;