import React,{useState,useEffect,useRef} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image, FlatList, ScrollView, TextInput, Alert} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Modal from "react-native-modal";
// components
import InquiryItem from '../InquiryItem';
// constants
import {Colors, Constants, Fonts} from '../../styles/Index';
// vector icons

function Inquiries(){
    const [imageChoosed, setImageChoosed] = useState('');
    const [selected, setSelected] = useState('Inquiries');
    const [selected2, setSelected2] = useState('Accounts');
    const [inquiries, setInquiries] = useState([
        {
            title:'SP_M_112',
            date:'Dec 16, 2020 1:00 PM',
            description:'I need payment extensions for my commercial shop unit.',
            status:'Pending'
        },
        {
            title:'SP_M_112',
            date:'Dec 16, 2020 1:00 PM',
            description:'I need payment extensions for my commercial shop unit.',
            status:'Pending'
        },
        {
            title:'SP_M_112',
            date:'Dec 16, 2020 1:00 PM',
            description:'I need payment extensions for my commercial shop unit.',
            status:'Resolved'
        },
        {
            title:'SP_M_112',
            date:'Dec 16, 2020 1:00 PM',
            description:'I need payment extensions for my commercial shop unit.',
            status:'Resolved'
        },
        {
            title:'SP_M_112',
            date:'Dec 16, 2020 1:00 PM',
            description:'I need payment extensions for my commercial shop unit.',
            status:'Pending'
        },
        {
            title:'SP_M_112',
            date:'Dec 16, 2020 1:00 PM',
            description:'I need payment extensions for my commercial shop unit.',
            status:'Resolved'
        },

    ]);
    const [text, setText] = useState("");
    const [textDesc, setTextDesc] = useState("");

    function renderInquiry({item, index}){
        return(
            <InquiryItem 
                item={item}
                index={index}
            />
        )
    }
    return(
        <View style={styles.container}>
            <View style={styles.selectionView}>
                <TouchableOpacity 
                    style={selected == "Inquiries"?styles.selectedBtn:styles.unSelectedBtn}
                    onPress={()=>{
                        setSelected("Inquiries")
                    }}
                >
                    <Text style={selected == "Inquiries"?styles.selectedText:styles.unSelectedText}>Previous Inquiries</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={selected == "New Inquiry"?styles.selectedBtn:styles.unSelectedBtn}
                    onPress={()=>{
                        setSelected("New Inquiry")
                    }}
                >
                    <Text style={selected == "New Inquiry"?styles.selectedText:styles.unSelectedText}>Make New Inquiry</Text>
                </TouchableOpacity>
            </View>
            {
                selected =="Inquiries"?
                <FlatList
                    data={inquiries}
                    renderItem={renderInquiry}
                    keyExtractor={(item, index) => index}
                    showsVerticalScrollIndicator={false}
                    style={{flex:1}}
                    contentContainerStyle={{
                        flexGrow:0,
                        marginHorizontal:RFValue(16),
                        marginTop:RFValue(10),
                        marginBottom:RFValue(5)
                    }}
                />
                :
                <ScrollView style={{marginHorizontal:RFValue(9)}} showsVerticalScrollIndicator={false}>
                    <Text style={styles.nexInquiryText}>Inquiry Subject</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text)=>setText(text)}
                        value={text}
                        placeholder={"Enter subject here"}
                        multiline={true}
                    />
                    <View style={[styles.selectionView,{backgroundColor:'#F4F5F9',marginTop:RFValue(32)}]}>
                        <TouchableOpacity 
                            style={selected2 == "Accounts"?styles.selectedBtn2:styles.unSelectedBtn2}
                            onPress={()=>{
                                setSelected2("Accounts")
                            }}
                        >
                            <Text style={selected2 == "Accounts"?styles.selectedText2:styles.unSelectedText2}>Accounts and Billing</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={selected2 == "General Inquiry"?styles.selectedBtn2:styles.unSelectedBtn2}
                            onPress={()=>{
                                setSelected2("General Inquiry")
                            }}
                        >
                            <Text style={selected2 == "General Inquiry"?styles.selectedText2:styles.unSelectedText2}>General Inquiry</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        selected2 =="Accounts"?
                        <View>
                            <Text style={[styles.nexInquiryText,{marginTop:RFValue(20)}]}>Description</Text>
                            <TextInput
                                style={styles.inputDesc}
                                onChangeText={(text)=>setTextDesc(text)}
                                value={textDesc}
                                placeholder={"Enter description here"}
                                multiline={true}
                            />
                            <Text style={[styles.nexInquiryText,{marginTop:RFValue(25)}]}>Attachment</Text>
                            <View style={{flexDirection:'row',alignItems:'center',marginTop:RFValue(17)}}>
                                <TouchableOpacity style={{alignSelf:'flex-start',paddingHorizontal:RFValue(10), height:RFValue(36),justifyContent:'center',alignItems:'center',backgroundColor:'#221F1F'}}>
                                    <Text style={{fontSize:RFValue(14),fontWeight:'500',color:'white'}}>Choose File</Text>
                                </TouchableOpacity>
                                {
                                    imageChoosed ==""?
                                    <Text style={{marginLeft:RFValue(12), fontSize:RFValue(14),fontWeight:'400',color:'#6F6F6F'}}>No File Choosen</Text>
                                    :null
                                }
                            </View>
                            <View style={styles.footerView}>
                                <TouchableOpacity 
                                    style={[styles.footerViewBtn,{backgroundColor:'#221F1F'}]}
                                    onPress={()=>{
                                        setText("");
                                        setTextDesc("")
                                        setImageChoosed("")
                                        Alert.alert("Reset Sucessfully","The given design does not have flow for it")
                                    }}
                                >
                                    <Text style={styles.footerBtnText}>Reset</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={[styles.footerViewBtn,{backgroundColor:'#075595',marginLeft:RFValue(20),marginRight:RFValue(17)}]}
                                    onPress={()=>{
                                        setText("");
                                        setTextDesc("")
                                        setImageChoosed("")
                                        Alert.alert("Saved Sucessfully","The given design does not have flow for it")
                                    }}
                                >
                                    <Text style={styles.footerBtnText}>Save Details</Text>
                                </TouchableOpacity>
                            </View>
                        </View>:
                        <Text>The given design does not have flow for it.</Text>
                    }
                </ScrollView>
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    ///
    selectionView:{
       // width:RFValue(210),
        flexGrow:0,
        height:RFValue(43),
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'flex-start',
        justifyContent:'space-between',
        marginVertical:RFValue(13),
        paddingVertical:RFValue(4),
        paddingHorizontal:RFValue(6),
        borderRadius:RFValue(6),
        backgroundColor:'#FDFCFC'
    },
    selectedBtn:{
        paddingVertical:RFValue(5),
        paddingHorizontal:RFValue(11),
        borderRadius:RFValue(4),
        backgroundColor:'white',
        elevation:RFValue(4),
        shadowColor:'black'
    },
    unSelectedBtn:{
        paddingVertical:RFValue(5),
        paddingHorizontal:RFValue(11),
    },
    selectedText:{
        fontSize:RFValue(15),
        fontWeight:'bold',
        color:'#221F1F'
    },
    unSelectedText:{
        fontSize:RFValue(15),
        color:'#969BA0',
        fontSize:RFValue(15),
    },
    // second
    selectedBtn2:{
        paddingVertical:RFValue(8),
        paddingHorizontal:RFValue(14),
        borderRadius:RFValue(4),
        backgroundColor:'#E9ECFF',
    },
    unSelectedBtn2:{
        paddingVertical:RFValue(8),
        paddingHorizontal:RFValue(14),
    },
    selectedText2:{
        fontSize:RFValue(12),
        fontWeight:'500',
        color:'#075595'
    },
    unSelectedText2:{
        fontSize:RFValue(12),
        color:'#969BA0'
    },
    //
    nexInquiryText:{
        fontSize:RFValue(16),
        fontWeight:'400',
        color:'#221F1F'
    },
    input: {
        width:'100%',
        height: RFValue(42),
        borderWidth:RFValue(1),
        borderColor:'#B9B9B9',
        borderRadius:RFValue(5),
        backgroundColor:'#F8F8F8',
        marginTop:RFValue(16),
        paddingLeft:RFValue(13)
    },
    inputDesc: {
        width:'100%',
        minHeight: RFValue(140),
        borderWidth:RFValue(1),
        borderColor:'#B9B9B9',
        borderRadius:RFValue(5),
        backgroundColor:'#F8F8F8',
        marginTop:RFValue(16),
        padding:RFValue(13),
        textAlignVertical:'top'
    },
    footerView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        marginTop:RFValue(30),
        marginBottom:RFValue(10),
    },
    footerViewBtn:{
        paddingHorizontal:RFValue(10),
        height:RFValue(36),
        justifyContent:'center',
        alignItems:'center',
    },
    footerBtnText:{
        fontSize:RFValue(14),
        fontWeight:'500',
        color:'white'
    }
});

export default Inquiries;