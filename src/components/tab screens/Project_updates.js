import React,{useState,useEffect,useRef} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
// components
import UpdateItem from '../UpdateItem';
import MemberItem from '../MemberItem';

function Project_updates(){
    const [selected, setSelected] = useState('Updates');
    const [members, setMembers] = useState([
        {
            profile:require('../../assets/images/member_profile.png'),
            name:'Hamid khan',
            status:'online'
        },
        {
            profile:require('../../assets/images/member_profile.png'),
            name:'aftab khan',
            status:'online'
        },
        {
            profile:require('../../assets/images/member_profile.png'),
            name:'Jaml khan',
            status:'online'
        },
        {
            profile:require('../../assets/images/member_profile.png'),
            name:'Nouman Ahmad',
            status:'offline'
        },
        {
            profile:require('../../assets/images/member_profile.png'),
            name:'Waseem Abbas',
            status:'online'
        },
        {
            profile:require('../../assets/images/member_profile.png'),
            name:'Farman khan',
            status:'offline'
        },
        {
            profile:require('../../assets/images/member_profile.png'),
            name:'Zubair Arshid',
            status:'online'
        },
        {
            profile:require('../../assets/images/member_profile.png'),
            name:'Nasir Saleem Abbas Son Of Ikram Mubarik',
            status:'online'
        },

    ])
    const [updates, setUpdates] = useState([
        {
            update_profile:'',
            name:'Waseem Usafzai',
            update_date:'September 20, 2021',
            update_image:'',
            update_title:'Eid-Ul-Azha Greetings!',
            update_description:'Aoa Everyone!\nThe management would be to extend',
            likes:10,
            comments:14
        },
        {
            update_profile:'',
            name:'Jaml Ud Din',
            update_date:'September 20, 2021',
            update_image:'',
            update_title:'Eid-Ul-Azha Greetings!',
            update_description:'Aoa Everyone!\nThe management would be to extend',
            likes:50,
            comments:300
        },
        {
            update_profile:'',
            name:'Attab Ufaq',
            update_date:'September 20, 2021',
            update_image:'',
            update_title:'Eid-Ul-Azha Greetings!',
            update_description:'Aoa Everyone!\nThe management would be to extend',
            likes:70,
            comments:140
        },
    ]);

    function renderUpdateItem({item, index}){
        return(
            <UpdateItem
                item={item}
                index={index}
                updates = {updates}
                setUpdates ={setUpdates}
            />
        )
    }
    function renderMemberItem({item, index}){
        return(
            <MemberItem
                item={item}
                index={index}
            />
        )
    }
    function renderHeaderItem(){
        return(
            <View>
                <Text style={styles.memberTitle}>Members</Text>
                <Text style={[styles.memberSubHeading,{color:'#969BA0'}]}>80 Members - <Text style={[styles.memberSubHeading,{color:'#8CC540'}]}>40 Actives</Text></Text>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <View style={styles.selectionView}>
                <TouchableOpacity 
                    style={selected == "Updates"?[styles.selectedBtn,{marginRight:RFValue(13)}]:[styles.unSelectedBtn,{marginRight:RFValue(13)}]}
                    onPress={()=>{
                        setSelected("Updates")
                    }}
                >
                    <Text style={selected == "Updates"?styles.selectedText:styles.unSelectedText}>Updates</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={selected == "Members"?styles.selectedBtn:styles.unSelectedBtn}
                    onPress={()=>{
                        setSelected("Members")
                    }}
                >
                    <Text style={selected == "Members"?styles.selectedText:styles.unSelectedText}>Members</Text>
                </TouchableOpacity>
            </View>
            {
                selected == "Updates"?
                <FlatList
                    data={updates}
                    renderItem={renderUpdateItem}
                    keyExtractor={(item, index) => index}
                    showsVerticalScrollIndicator={false}
                />
                :
                <View style={{flex:1, paddingHorizontal:RFValue(21)}}>
                    <FlatList
                        data={members}
                        renderItem={renderMemberItem}
                        ListHeaderComponent={renderHeaderItem}
                        keyExtractor={(item, index) => index}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:RFValue(9),
        backgroundColor:'#F9F9F9'
    },
    selectionView:{
        alignSelf:'flex-start',
        height:RFValue(43),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:RFValue(13),
        paddingVertical:RFValue(4),
        paddingHorizontal:RFValue(6),
        borderRadius:RFValue(6),
        backgroundColor:'#F4F5F9'
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
    // members
    memberTitle:{
        fontSize:RFValue(26),
        fontWeight:'500',
        color:'#221F1F'
    },
    memberSubHeading:{
        marginTop:RFValue(2),
        marginBottom:RFValue(16),
        fontSize:RFValue(14),
        fontWeight:'400',
    }
});

export default Project_updates;