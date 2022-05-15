import React,{useState,useEffect,useRef} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image, FlatList} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
// SVGs
import ProfileSVG from '../assets/images/update_profile.svg';
import UpdateImageSVg from '../assets/images/update_image.svg';
// vector icons
import Entypo from 'react-native-vector-icons/Entypo'
function UpdateItem(props){
    const {item, index, updates, setUpdates} = props;
    const [liked, setLiked] = useState(false);

    function onPressLike(){
        if(liked){
            let arr = updates
            let updatedArr = arr.map((item) => {
                return {
                    ...item,
                    likes:item.likes - 1
                }
            })
            setUpdates(updatedArr)
            setLiked(false)
        }
        else{
            let arr = updates
            let updatedArr = arr.map((item) => {
                return {
                    ...item,
                    likes:item.likes + 1
                }
            })
            setUpdates(updatedArr)
            setLiked(true)
        }
    }
    function onPressComment(){
        let arr = updates
        let updatedArr = arr.map((item) => {
            return {
                ...item,
                comments:item.comments + 1
            }
        })
        setUpdates(updatedArr)
    }

    return(
        <View style={styles.item}>
            <View style={styles.itemUpperView}>
                <View style={{borderRadius:RFValue(100)}}>
                    <ProfileSVG
                        width={RFValue(50)}
                        height={RFValue(50)}
                    />
                </View>
                <View style={{flex:1, justifyContent:'space-between', paddingHorizontal:RFValue(15), paddingVertical:RFValue(3)}}>
                    <Text style={styles.itemName} numberOfLines={1}>{item.name}</Text>
                    <Text style={styles.itemUpdateDate} numberOfLines={1}>{item.update_date}</Text>
                </View>
                <TouchableOpacity 
                    style={{width:RFValue(35), height:'65%', justifyContent:'center', alignItems:'center'}}
                    onPress={()=>console.log("Update option pressed")}
                >
                    <Entypo
                        name='dots-three-horizontal'
                        size={RFValue(19)}
                        color={'black'}
                    />
                </TouchableOpacity>
            </View>
            <View style={{height:RFValue(200), marginBottom:RFValue(18)}}>
                <UpdateImageSVg
                    width={'100%'}
                    height={RFValue(200)}
                />
            </View>
            <Text style={styles.itemUpdateTitle}>{item.update_title}</Text>
            <Text style={styles.itemUpdateDescription}>{item.update_description}</Text>
            <Text style={styles.itemLikesComments}>{item.likes} Likes    {item.comments} comments</Text>
            <View style={styles.itemFooterView}>
                <TouchableOpacity 
                    style={styles.itemFooterBtn}
                    onPress={()=>onPressLike()}
                >
                    <Image
                        source={require('../assets/images/update_like.png')}
                        style={[styles.itemFooterBtnImage,{tintColor:liked?'#075595':'#6E6E6E'}]}
                        resizeMode="contain"
                    />
                    <Text style={[styles.itemFooterBtnText,{color:liked?'#075595':'#6E6E6E'}]} >Like</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.itemFooterBtn,{marginLeft:RFValue(30)}]}
                    onPress={()=>onPressComment()}
                >
                    <Image
                        source={require('../assets/images/update_comment.png')}
                        style={[styles.itemFooterBtnImage,{tintColor:'#6E6E6E'}]}
                        resizeMode="contain"
                    />
                    <Text style={[styles.itemFooterBtnText,{color:'#6E6E6E'}]} >Comment</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    item:{
        padding:RFValue(20),
        paddingBottom:RFValue(13),
        marginBottom:RFValue(30),
        borderWidth:RFValue(1),
        borderColor:'#E4E4E4',
        backgroundColor:'white',
    },
    itemUpperView:{
        height:RFValue(50),
        flexDirection:'row',
        marginBottom:RFValue(18),
    },
    itemName:{
        fontSize:RFValue(16),
        fontWeight:'500',
        color:'#221F1F'
    },
    itemUpdateDate:{
        fontSize:RFValue(12),
        color:'#959595'
    },
    itemUpdateTitle:{
        fontSize:RFValue(16),
        fontWeight:'500',
        marginBottom:RFValue(2),
        color:'black'
    },
    itemUpdateDescription:{
        fontSize:RFValue(14),
        fontWeight:'400',
        marginBottom:RFValue(6),
        color:'black'
    },
    itemLikesComments:{
        paddingVertical:RFValue(6),
        fontSize:RFValue(12),
        fontWeight:'400',
        borderBottomWidth:RFValue(1),
        borderBottomColor:'#E4E4E4',
        textAlign:'right',
        color:'#075595'
    },
    itemFooterView:{
        flexDirection:'row',
    },
    itemFooterBtn:{
        flexDirection:'row',
        paddingVertical:RFValue(12),
    },
    itemFooterBtnImage:{
        height:RFValue(18),
        width:RFValue(18)
    },
    itemFooterBtnText:{
        fontSize:RFValue(14),
        fontWeight:'400',
        marginLeft:RFValue(10),
    }
});

export default UpdateItem;