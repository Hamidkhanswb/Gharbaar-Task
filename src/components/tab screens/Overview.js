import React,{useState,useEffect,useRef} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image, FlatList, ScrollView} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Modal from "react-native-modal";

function Overview(){
    const [selected, setSelected] = useState("Food");
    const [constructsArr, setConstructsArr] = useState([
        {
            id:1,
            date:'June 10, 2021',
            file:require('../../assets/images/construction.png')
        },
        {
            id:2,
            date:'December 10, 2021',
            file:require('../../assets/images/construction.png')
        },
        {
            id:3,
            date:'November 30, 2021',
            file:require('../../assets/images/construction.png')
        },
        {
            id:4,
            date:'December 10, 2021',
            file:require('../../assets/images/construction.png')
        },
        {
            id:5,
            date:'June 10, 2021',
            file:require('../../assets/images/construction.png')
        },
    ]);
    const [projectsArr, setProjectsArr] = useState([
        {
            id:1,
            date:'June 10, 2021',
            file:require('../../assets/images/construction.png')
        },
        {
            id:2,
            date:'December 10, 2021',
            file:require('../../assets/images/construction.png')
        },
        {
            id:3,
            date:'November 30, 2021',
            file:require('../../assets/images/construction.png')
        },
    ]);
    const [CProgress, setCProgress] = useState(0);
    const [PProgress, setPProgress] = useState(0);
    
    function renderConstruct({item, index}){
        return(
            <View style={styles.constructItem}>
                <View>
                    <Image
                        source={require('../../assets/images/construction.png')}
                        style={{height:RFValue(150),width:RFValue(215)}}
                        resizeMode="cover"
                    />
                    <View style={{position:'absolute',top:RFValue(8),left:0, height:RFValue(19),backgroundColor:'#221F1F',justifyContent:'center',alignItems:'center',paddingHorizontal:RFValue(10)}}>
                        <Text style={{fontSize:RFValue(10),fontWeight:'500',color:'white'}}>{item.date}</Text>
                    </View>
                </View>
            </View>
        )
    }
    function renderProject({item, index}){
        return(
            <View style={styles.constructItem}>
                <View>
                    <Image
                        source={require('../../assets/images/construction.png')}
                        style={{height:RFValue(150),width:RFValue(215)}}
                        resizeMode="cover"
                    />
                    <View style={{position:'absolute',top:RFValue(8),left:0, height:RFValue(19),backgroundColor:'#221F1F',justifyContent:'center',alignItems:'center',paddingHorizontal:RFValue(10)}}>
                        <Text style={{fontSize:RFValue(10),fontWeight:'500',color:'white'}}>{item.date}</Text>
                    </View>
                </View>
            </View>
        )
    }
    const cViewableItems = useRef(( {viewableItems, changed} ) =>{
        try{
            let current = changed[0].index + 1;
            let res = (current / constructsArr.length ) * 100
            setCProgress(current);
        }
        catch(error){
            console.log("error in fileViewableItemChanges ")
        }
    });
    const pViewableItems = useRef(( {viewableItems, changed} ) =>{
        try{
            let current = changed[0].index + 1;
            let res = (current / projectsArr.length ) * 100
            setPProgress(current);
        }
        catch(error){
            console.log("error in fileViewableItemChanges ")
        }
    });
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 90 })

    return(
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.priceView}>
                <Text style={styles.titleText}>Price Index</Text>
                <Text style={[styles.unitText,{color:'#969BA0'}]}>41 Food Court Units - <Text style={[styles.unitText,{color:'#221F1F'}]}>4 Units Left</Text></Text>
                <View style={styles.selectionView}>
                    <TouchableOpacity 
                        style={selected == "Food"?[styles.selectedBtn,{marginRight:RFValue(7)}]:[styles.unSelectedBtn,{marginRight:RFValue(7)}]}
                        onPress={()=>{
                            setSelected("Food")
                        }}
                    >
                        <Text style={selected == "Food"?styles.selectedText:styles.unSelectedText}>Food Court Shops</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={selected == "Residential"?[styles.selectedBtn,{marginRight:RFValue(7)}]:[styles.unSelectedBtn,{marginRight:RFValue(7)}]}
                        onPress={()=>{
                            setSelected("Residential")
                        }}
                    >
                        <Text style={selected == "Residential"?styles.selectedText:styles.unSelectedText}>Residential Apartments</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={selected == "Retail"?styles.selectedBtn:styles.unSelectedBtn}
                        onPress={()=>{
                            setSelected("Retail")
                        }}
                    >
                        <Text style={selected == "Retail"?styles.selectedText:styles.unSelectedText}>Retail Shops</Text>
                    </TouchableOpacity>
                </View>
                <Text>Graph and someelse design couldn,t made because of time deficiency. so kindly test rest of design and accepy my design.{'\n'}Thanks</Text>
            </View>
            <>
                <Text style={[styles.titleText,{marginTop:RFValue(25),marginHorizontal:RFValue(14)}]}>Construction Progress</Text>
                <FlatList
                    horizontal={true}
                    data={constructsArr}
                    renderItem={renderConstruct}
                    keyExtractor={(item, index) => index}
                    showsHorizontalScrollIndicator={false}
                    onViewableItemsChanged={cViewableItems.current}
                    viewabilityConfig={viewConfigRef.current}
                    contentContainerStyle={{
                        marginTop:RFValue(15),
                        paddingRight:RFValue(14)
                    }}
                />
                {
                    constructsArr.length > 1?
                    <View style={{flexDirection:'row', alignItems:'center',marginTop:RFValue(8),marginHorizontal:RFValue(14)}}>
                        <Text style={{marginRight:RFValue(8), fontSize:RFValue(12),fontWeight:'500',color:'#221F1F'}}>{CProgress}-{constructsArr.length}</Text>
                        <View style={{flex:1,height:RFValue(5),backgroundColor:'#E5E5E5'}}>
                            <View style={{position:'absolute',height:RFValue(5),width:`${(CProgress/constructsArr.length )*100}%`,maxWidth:'100%',top:0,left:0,backgroundColor:'#075595'}}>
                            </View>
                        </View>
                    </View>
                    :null
                }
                <Text style={[styles.titleText,{marginTop:RFValue(30),marginHorizontal:RFValue(14)}]}>Project Pictures</Text>
                <FlatList
                    horizontal={true}
                    data={projectsArr}
                    renderItem={renderProject}
                    keyExtractor={(item, index) => index}
                    showsHorizontalScrollIndicator={false}
                    onViewableItemsChanged={pViewableItems.current}
                    viewabilityConfig={viewConfigRef.current}
                    contentContainerStyle={{
                        marginTop:RFValue(20),
                        paddingRight:RFValue(14)
                    }}
                />
                {
                    projectsArr.length > 1?
                    <View style={{flexDirection:'row', alignItems:'center',marginVertical:RFValue(10),marginHorizontal:RFValue(14)}}>
                        <Text style={{marginRight:RFValue(8), fontSize:RFValue(12),fontWeight:'500',color:'#221F1F'}}>{PProgress}-{projectsArr.length}</Text>
                        <View style={{flex:1,height:RFValue(5),backgroundColor:'#E5E5E5'}}>
                            <View style={{position:'absolute',height:RFValue(5),width:`${(PProgress/projectsArr.length )*100}%`,maxWidth:'100%',top:0,left:0,backgroundColor:'#075595'}}>
                            </View>
                        </View>
                    </View>
                    :null
                }
            </>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F9F9F9'
    },
    priceView:{
        padding:RFValue(20),
        marginHorizontal:RFValue(14),
        marginTop:RFValue(14),
        marginBottom:RFValue(5),
        backgroundColor:'white',
        elevation:RFValue(5),
        shadowColor:'#E5E5E5'
    },
    titleText:{
        fontSize:RFValue(17),
        fontWeight:'500',
        color:'#221F1F'
    },
    unitText:{
        marginTop:RFValue(3),
        fontSize:RFValue(12),
        fontWeight:'500',
    },
    ///
    selectionView:{
        width:'100%',
        height:RFValue(43),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:RFValue(34),
        marginBottom:RFValue(27),
        paddingHorizontal:RFValue(6),
        paddingVertical:RFValue(4),
        borderRadius:RFValue(6),
        backgroundColor:'#F4F5F9'
    },
    selectedBtn:{
        width:'32%',
        height:'90%',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:RFValue(5),
        borderRadius:RFValue(4),
        backgroundColor:'white',
        elevation:RFValue(4),
        shadowColor:'black'
    },
    unSelectedBtn:{
        width:'32%',
        height:'93%',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:RFValue(11),
    },
    selectedText:{
        fontSize:RFValue(11),
        fontWeight:'500',
        color:'#221F1F',
        textAlign:'center'
    },
    unSelectedText:{
        fontSize:RFValue(11),
        color:'#969BA0',
        textAlign:'center'
    },
    constructItem:{
        height:RFValue(170),
        width:RFValue(235),
        justifyContent:'center',
        alignItems:'center',
        padding:RFValue(10),
        marginLeft:RFValue(14),
        marginBottom:RFValue(5),
        elevation:RFValue(5),
        shadowColor:'#E5E5E5',
        backgroundColor:'white'
    }
});

export default Overview;
