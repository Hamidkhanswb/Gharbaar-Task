import React,{useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';
// components
import Overview from '../components/tab screens/Overview';
import Inquiries from '../components/tab screens/Inquiries';
import My_unit_details from '../components/tab screens/My_unit_details';
import Project_updates from '../components/tab screens/Project_updates';
// SVGs
import LogoSVG from '../assets/images/header_logo.svg';
import NotifySVG from '../assets/images/header_notify.svg';
import ProfileSVG from '../assets/images/header_profile.svg';
// constants
const Colors = {
    background:'#F9F9F9',
    active:'#075595',
    grey:'#959595'
}

const Tab = createBottomTabNavigator();

const BottomNavigator = () =>{

    return ( 
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{}}>
                    <LogoSVG
                        width={RFValue(32)}
                        height={RFValue(32)}
                    />
                </View>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity 
                        style={{height:RFValue(32), width:RFValue(32), justifyContent:'center', alignItems:'center', marginRight:RFValue(22), borderRadius:RFValue(5), backgroundColor:'#E9ECFF'}}
                        onPress={()=>console.log("notify pressed")}
                    >
                        <NotifySVG
                            width={RFValue(17)}
                            height={RFValue(17)}
                        />
                        <View style={{position:'absolute', top:RFValue(-6),right:RFValue(-6), height:RFValue(16), width:RFValue(16), justifyContent:'center', alignItems:'center', borderRadius:RFValue(30), backgroundColor:'#C80000',}}>
                            <Text style={{fontSize:RFValue(9), fontWeight:'bold', color:'white'}}>12</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{height:RFValue(32), width:RFValue(32),}}>
                        <ProfileSVG
                            width={RFValue(32)}
                            height={RFValue(32)}
                        />
                    </View>
                </View>
            </View>
            <Tab.Navigator
                initialRouteName="Overview"
                backBehavior="order"
                screenOptions={{
                    headerShown:false,
                    tabBarStyle:{
                        backgroundColor:'white',
                        borderTopWidth:RFValue(1),
                        height:RFValue(58)
                    },
                }}      
            >
                <Tab.Screen 
                    name="Overview" 
                    component={Overview} 
                    options={{
                        tabBarLabel:({focused })=>{ 
                            return(
                                focused?
                                <Text style={[styles.labelStyle,{color:Colors.active}]}>Overview</Text>
                                :
                                <Text style={[styles.labelStyle,{color:Colors.grey}]}>Overview</Text>
                            )
                        },
                        tabBarIcon:({focused })=>{
                            return(
                                <Image 
                                    source={require('../assets/images/tab_overview.png')}
                                    style={[styles.tabBarIcon,{tintColor:focused?Colors.active:Colors.grey}]}
                                />
                                
                            )
                        }
                    }}
                />
                <Tab.Screen 
                    name="Project_updates" 
                    component={Project_updates} 
                    options={{
                        tabBarLabel:({focused })=>{ 
                            return(
                                focused?
                                <Text style={[styles.labelStyle,{color:Colors.active}]}>Project Updates</Text>
                                :
                                <Text style={[styles.labelStyle,{color:Colors.grey}]}>Project Updates</Text>
                            )
                        },
                        tabBarIcon:({focused })=>{
                            return(
                                <Image 
                                    source={require('../assets/images/tab_projectsupdates.png')}
                                    style={[styles.tabBarIcon,{tintColor:focused?Colors.active:Colors.grey}]}
                                />
                                
                            )
                        }
                    }}
                />
                <Tab.Screen 
                    name="My_unit_details" 
                    component={My_unit_details} 
                    options={{
                        tabBarLabel:({focused })=>{ 
                            return(
                                focused?
                                <Text style={[styles.labelStyle,{color:Colors.active}]}>My Unit Details</Text>
                                :
                                <Text style={[styles.labelStyle,{color:Colors.grey}]}>My Unit Details</Text>
                            )
                        },
                        tabBarIcon:({focused })=>{
                            return(
                                <Image 
                                    source={require('../assets/images/tab_myunitsdetails.png')}
                                    style={[styles.tabBarIcon,{tintColor:focused?Colors.active:Colors.grey}]}
                                />
                                
                            )
                        }
                    }}
                />
                <Tab.Screen 
                    name="Inquiries" 
                    component={Inquiries} 
                    options={{
                        tabBarLabel:({focused })=>{ 
                            return(
                                focused?
                                <Text style={[styles.labelStyle,{color:Colors.active}]}>Inquiries</Text>
                                :
                                <Text style={[styles.labelStyle,{color:Colors.grey}]}>Inquiries</Text>
                            )
                        },
                        tabBarIcon:({focused })=>{
                            return(
                                <Image 
                                    source={require('../assets/images/tab_inquiries.png')}
                                    style={[styles.tabBarIcon,{tintColor:focused?Colors.active:Colors.grey}]}
                                />
                            )
                        }
                    }}
                />
            </Tab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F9F9F9'
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:RFValue(13),
        paddingHorizontal:RFValue(9),     // screen padding items
        borderBottomWidth:RFValue(1),
        borderBottomColor:'#E4E4E4'
    },
    myTabBar:{
        flexDirection:'row',
        height:'100%',
        borderTopLeftRadius:RFValue(10),
        borderTopRightRadius:RFValue(10),
        overflow:'hidden',
        backgroundColor:'white',
    },
    btn:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        position:'relative'
    },
    iconView:{
        position:'absolute',
    },
    tabBarIcon:{
        width:RFValue(20),
        height:RFValue(20),
    },
    icon:{
        width:RFValue(17),
        height:RFValue(17),
    },
    labelStyle:{
        fontSize:RFValue(11),
        marginBottom:RFValue(8),
    },
    maskStyle:{
        flex:1,
    },
    badge:{
        position:'absolute',
        height:RFValue(16),
        width:RFValue(16),
        top:-RFValue(13),
        right:-RFValue(5),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
        borderRadius:RFValue(20)
    }
})

export default BottomNavigator;