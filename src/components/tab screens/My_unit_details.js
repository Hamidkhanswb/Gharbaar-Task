import React,{useState,useEffect,useRef} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image, FlatList, ScrollView} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Modal from "react-native-modal";
// constants
import {Colors, Constants, Fonts} from '../../styles/Index';
// vector icons

function My_unit_details(){ 
    const paymentArr = [
        {
            payment_details:'Down Payment',
            payment_date:'February 3, 2021',
            payment:3050000
        },
        {
            payment_details:'1st Installment',
            payment_date:'May 3, 2021',
            payment:761750
        },
        {
            payment_details:'2nd Installment',
            payment_date:'August 3, 2021',
            payment:232830
        },
        {
            payment_details:'3nd Installment',
            payment_date:'January 3, 2021',
            payment:3490200
        },
        {
            payment_details:'Down Payment',
            payment_date:'February 3, 2021',
            payment:3050000
        },
        {
            payment_details:'1st Installment',
            payment_date:'May 3, 2021',
            payment:761750
        },
        {
            payment_details:'2nd Installment',
            payment_date:'August 3, 2021',
            payment:232830
        },
        {
            payment_details:'3nd Installment',
            payment_date:'January 3, 2021',
            payment:3490200
        },
        {
            payment_details:'Down Payment',
            payment_date:'February 3, 2021',
            payment:3050000
        },
        {
            payment_details:'1st Installment',
            payment_date:'May 3, 2021',
            payment:761750
        },
        {
            payment_details:'2nd Installment',
            payment_date:'August 3, 2021',
            payment:232830
        },
        {
            payment_details:'3nd Installment',
            payment_date:'January 3, 2021',
            payment:3490200
        },
    ];
    const InstallmentsArr = [
        {
            payment_details:'Down Payment',
            payment_date:'February 3, 2021',
            payment:3050000
        },
        {
            payment_details:'1st Installment',
            payment_date:'May 3, 2021',
            payment:761750
        },
        {
            payment_details:'2nd Installment',
            payment_date:'August 3, 2021',
            payment:232830
        },
    ];
    const files_docs = [
        {
            id:1,
            file:require('../../assets/images/file1.png')
        },
        {
            id:2,
            file:require('../../assets/images/file1.png')
        },
        {
            id:3,
            file:require('../../assets/images/file1.png')
        },
        {
            id:4,
            file:require('../../assets/images/file1.png')
        },
        {
            id:1,
            file:require('../../assets/images/file1.png')
        },
        {
            id:2,
            file:require('../../assets/images/file1.png')
        },
        {
            id:3,
            file:require('../../assets/images/file1.png')
        },
        {
            id:4,
            file:require('../../assets/images/file1.png')
        },
    ]
    const files_reciepts = [
        {
            id:1,
            file:require('../../assets/images/file1.png')
        }
    ]
    const [fileProgress, setFileProgress] = useState(0);
    const [fProgressIndex, setFProgressIndex] = useState(1);
    const [selected, setSelected] = useState('Payment');
    const [paymentPlanModal, setPaymentPlanModal] = useState(false);
    const [InstallmentsModal, setInstallmentsModal] = useState(false);

    function renderPayment({item, index}){
        return(
            <View style={{ height:RFValue(56),flexDirection:'row',alignItems:'center',justifyContent:'space-between',backgroundColor:index % 2 == 0?'#F4F4FC':'white',}}>
                <Text style={{paddingLeft:RFValue(6),width:'32%', fontSize:RFValue(14),fontWeight:'400',color:'#6F6F6F'}} numberOfLines={1}>{item.payment_details}</Text>
                <Text style={{paddingLeft:RFValue(6),width:'38%', fontSize:RFValue(14),fontWeight:'400',color:'#6F6F6F'}} numberOfLines={1}>{item.payment_date}</Text>
                <Text style={{paddingLeft:RFValue(6),width:'30%', fontSize:RFValue(14),fontWeight:'400',color:'#6F6F6F'}} numberOfLines={1}>{item.payment}</Text>
            </View>
        )
    }
    function renderPHeader(){
        return(
            <View style={{ height:RFValue(26),borderRadius:RFValue(6),flexDirection:'row',alignItems:'center',justifyContent:'space-between',backgroundColor:'#075595',}}>
                <Text style={{paddingLeft:RFValue(6),width:'32%', fontSize:RFValue(14),fontWeight:'500',color:'white'}} numberOfLines={1}>Payment Details</Text>
                <Text style={{paddingLeft:RFValue(6),width:'38%', fontSize:RFValue(14),fontWeight:'500',color:'white'}} numberOfLines={1}>Due Date</Text>
                <Text style={{paddingLeft:RFValue(6),width:'30%', fontSize:RFValue(14),fontWeight:'500',color:'white'}} numberOfLines={1}>Payment</Text>
            </View>
        )       
    }
    function renderInstallment({item, index}){
        return(
            <View style={{ height:RFValue(56),flexDirection:'row',alignItems:'center',justifyContent:'space-between',backgroundColor:index % 2 == 0?'#F4F4FC':'white',}}>
                <Text style={{paddingLeft:RFValue(6),width:'32%', fontSize:RFValue(14),fontWeight:'400',color:'#6F6F6F'}} numberOfLines={1}>{item.payment_details}</Text>
                <Text style={{paddingLeft:RFValue(6),width:'38%', fontSize:RFValue(14),fontWeight:'400',color:'#6F6F6F'}} numberOfLines={1}>{item.payment_date}</Text>
                <Text style={{paddingLeft:RFValue(6),width:'30%', fontSize:RFValue(14),fontWeight:'400',color:'#6F6F6F'}} numberOfLines={1}>{item.payment}</Text>
            </View>
        )
    }
    function renderInstallHeader(){
        return(
            <View style={{ height:RFValue(26),borderRadius:RFValue(6),flexDirection:'row',alignItems:'center',justifyContent:'space-between',backgroundColor:'#075595',}}>
                <Text style={{paddingLeft:RFValue(6),width:'32%', fontSize:RFValue(14),fontWeight:'500',color:'white'}} numberOfLines={1} >Payment Details</Text>
                <Text style={{paddingLeft:RFValue(6),width:'38%', fontSize:RFValue(14),fontWeight:'500',color:'white'}} numberOfLines={1}>Due Date</Text>
                <Text style={{paddingLeft:RFValue(6),width:'30%', fontSize:RFValue(14),fontWeight:'500',color:'white'}} numberOfLines={1}>Payment</Text>
            </View>
        )       
    }
    function render_file_doc({item, index}){
        return(
            <View style={{width:RFValue(220),height:RFValue(180),marginRight:RFValue(25),justifyContent:'center',alignItems:'center'}}>
                <Image
                    source={item.file}
                    style={{width:RFValue(230),height:RFValue(160)}}
                    resizeMode={"contain"}
                />
            </View>
        )
    }
    const fileViewableItemChanges = useRef(( {viewableItems, changed} ) =>{
           try{
            let current = changed[0].index + 1;
            let res = (current / files_docs.length ) * 100
            setFProgressIndex(current);
            setFileProgress(res)
           }
           catch(error){
               console.log("error in fileViewableItemChanges ")
           }
        }
    )
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 90 })
    function render_file_reciept({item, index}){
        return(
            <View style={{width:RFValue(220),height:RFValue(180),marginRight:RFValue(25),justifyContent:'center',alignItems:'center'}}>
                <Image
                    source={item.file}
                    style={{width:RFValue(220),height:RFValue(230)}}
                    resizeMode={"contain"}
                />
            </View>
        )
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.unitDetailsView}>
                <Text style={styles.unitDetailsText}>Unit Details</Text>
                <View style={{ marginTop:RFValue(7)}}>
                    <View style={styles.unitRow}>
                        <View style={styles.leftTextsView}>
                            <Text style={styles.unitText1}>Floor:</Text>
                            <Text style={styles.unitText2} numberOfLines={1}>7th Floor</Text>
                        </View>
                        <View style={styles.rightTextsView}>
                            <Text style={styles.unitText11}>Unit No:</Text>
                            <Text style={styles.unitText22} numberOfLines={1}>FC - 335</Text>
                        </View>
                    </View>
                    <View style={styles.unitRow}>
                        <View style={styles.leftTextsView}>
                            <Text style={styles.unitText1}>Size:</Text>
                            <Text style={styles.unitText2} numberOfLines={1}>1020 sq. ft.</Text>
                        </View>
                        <View style={styles.rightTextsView}>
                            <Text style={styles.unitText11}>Purchase Rate:</Text>
                            <Text style={styles.unitText22} numberOfLines={1}>9000 sq. ft.</Text>
                        </View>
                    </View>
                    <View style={styles.unitRow}>
                    <View style={styles.leftTextsView}>
                            <Text style={styles.unitText1}>Price:</Text>
                            <Text style={styles.unitText2} numberOfLines={1}>193320 PKR</Text>
                        </View>
                        <View style={styles.rightTextsView}>
                            <Text style={styles.unitText11}>Sold Date::</Text>
                            <Text style={styles.unitText22} numberOfLines={1}>09/12/2021</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.selectionView}>
                <TouchableOpacity 
                    style={selected == "Payment"?[styles.selectedBtn,{marginRight:RFValue(16)}]:[styles.unSelectedBtn,{marginRight:RFValue(16)}]}
                    onPress={()=>{
                        setSelected("Payment")
                    }}
                >
                    <Text style={selected == "Payment"?styles.selectedText:styles.unSelectedText}>Payment Details</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={selected == "Files"?styles.selectedBtn:styles.unSelectedBtn}
                    onPress={()=>{
                        setSelected("Files")
                    }}
                >
                    <Text style={selected == "Files"?styles.selectedText:styles.unSelectedText}>Files</Text>
                </TouchableOpacity>
            </View>
            {
                selected == "Payment"?
                <View>
                    <View style={styles.paymentRow}>
                        <Text style={styles.paymentLeftText}>Total Amount:</Text>
                        <Text style={styles.paymentRightText}>1 crore, 1 lac and 60 thousand rupees.</Text>
                    </View>
                    <View style={styles.paymentRow}>
                        <Text style={styles.paymentLeftText}>Amount Paid:</Text>
                        <Text style={styles.paymentRightText}>38 lac, 11 thousand, 7 hundred and 50 rupees.</Text>
                    </View>
                    <View style={styles.paymentRow}>
                        <Text style={styles.paymentLeftText}>Total Left:</Text>
                        <Text style={styles.paymentRightText}>63 lac, 48 thousand, 2 hundred and 50 rupees.</Text>
                    </View>
                    {/*  */}
                    <View style={{height:RFValue(44), width:Constants.dw*0.8,marginTop:RFValue(20),marginBottom:RFValue(15),flexDirection:'row'}}>
                        <View style={{width:'38%', justifyContent:'center', backgroundColor:'#8CC540'}}>
                            <Text style={{fontWeight:'500',paddingLeft:RFValue(20), fontSize:RFValue(13), color:'white'}}>38% Paid</Text>
                        </View>
                        <View style={{width:'62%', justifyContent:'center', backgroundColor:'#00A79D'}}>
                            <Text style={{fontWeight:'500',paddingLeft:RFValue(20), fontSize:RFValue(13), color:'#221F1F'}}>62% Paid</Text>
                        </View>
                    </View>
                    <TouchableOpacity 
                        style={styles.modelOpenBtn}
                        onPress={()=>setPaymentPlanModal(true)}
                    >
                        <Text style={styles.modelOpenBtnText}>View Payment Plan</Text>
                        <Image
                            source={require('../../assets/images/arrow_right.png')}
                            style={[{height:RFValue(14), width:RFValue(25),marginLeft:RFValue(10), tintColor:'#6E6E6E'}]}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.modelOpenBtn}
                        onPress={()=>setInstallmentsModal(true)}
                    >
                        <Text style={styles.modelOpenBtnText}>View Paid Installments</Text>
                        <Image
                            source={require('../../assets/images/arrow_right.png')}
                            style={[{height:RFValue(14), width:RFValue(25),marginLeft:RFValue(10), tintColor:'#6E6E6E'}]}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
                :
                <View>
                    <View>
                        <View style={{flexDirection:'row',marginTop:RFValue(10)}}>
                            <Image
                                source={require('../../assets/images/folder.png')}
                                style={{height:RFValue(18),width:RFValue(24),tintColor:'#FCD462'}}
                                resizeMode="contain"
                            />
                            <Text style={{marginLeft:RFValue(12), fontSize:RFValue(14),fontWeight:'400',color:'#221F1F'}}>Documents</Text>
                        </View>
                        <FlatList
                            horizontal={true}
                            data={files_docs}
                            renderItem={render_file_doc}
                            keyExtractor={(item, index) => index}
                            onViewableItemsChanged={fileViewableItemChanges.current}
                            viewabilityConfig={viewConfigRef.current}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                marginTop:RFValue(10)
                            }}
                        />
                        {
                            files_docs.length > 1?
                            <View style={{flexDirection:'row', alignItems:'center',marginTop:RFValue(20)}}>
                                <Text style={{marginRight:RFValue(8), fontSize:RFValue(12),fontWeight:'500',color:'#221F1F'}}>{fProgressIndex}-{files_docs.length}</Text>
                                <View style={{flex:1,height:RFValue(5),backgroundColor:'#E5E5E5'}}>
                                    <View style={{position:'absolute',height:RFValue(5),width:`${fileProgress}%`,maxWidth:'100%',top:0,left:0,backgroundColor:'#075595'}}>
                                    </View>
                                </View>
                            </View>
                            :null
                        }
                    </View>
                    <View>
                        <View style={{flexDirection:'row',marginTop:RFValue(27)}}>
                            <Image
                                source={require('../../assets/images/folder.png')}
                                style={{height:RFValue(18),width:RFValue(24),tintColor:'#FCD462'}}
                                resizeMode="contain"
                            />
                            <Text style={{marginLeft:RFValue(12), fontSize:RFValue(14),fontWeight:'400',color:'#221F1F'}}>Given Receipts</Text>
                        </View>
                        <FlatList
                            horizontal={true}
                            data={files_reciepts}
                            renderItem={render_file_reciept}
                            keyExtractor={(item, index) => index}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                marginTop:RFValue(10),
                                marginBottom:RFValue(5)
                            }}
                        />
                    </View>
                </View>
            }
            {/* models */}
            {/* payment modals */}
            <Modal
                isVisible={paymentPlanModal}
                onBackdropPress={() => {
                    setPaymentPlanModal(false)
                }}
                onBackButtonPress={()=>{
                    setPaymentPlanModal(false)
                }}
                animationIn="slideInLeft"
                animationOut="slideOutRight"
                animationInTiming={400}
                animationOutTiming={400}
                useNativeDriver={true}
                width={Constants.dw}
                height={Constants.dh}
                style={{flex:1,alignSelf:'center',alignItems:'center',justifyContent:'center',padding:0,margin:0}}
            >
                <View style={{flex: 0.8, width:'100%',backgroundColor:'white' }}>
                    <TouchableOpacity 
                        style={{flexDirection:'row',marginBottom:RFValue(10), width:RFValue(75),height:RFValue(25),alignSelf:'flex-end',alignItems:'center',justifyContent:'flex-end'}}
                        onPress={()=>setPaymentPlanModal(false)}
                    >
                        <Text style={{fontWeight:'500',color:'black'}}>Close</Text>
                        <Image
                            source={require('../../assets/images/cross_modal.png')}
                            style={[{height:RFValue(20), width:RFValue(20), marginLeft:RFValue(6), tintColor:'#6E6E6E'}]}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <FlatList
                        data={paymentArr}
                        renderItem={renderPayment}
                        ListHeaderComponent={renderPHeader}
                        keyExtractor={(item, index) => index}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            flexGrow:0,
                            marginHorizontal:RFValue(6),
                            backgroundColor:'#E5E5E5',
                            borderRadius:RFValue(6),
                            borderWidth:RFValue(1),
                            borderColor:'#E5E5E5',
                            marginBottom:RFValue(10)
                        }}
                    />
                </View>
            </Modal>
            {/* installment paid */}
            <Modal
                isVisible={InstallmentsModal}
                onBackdropPress={() => {
                    setInstallmentsModal(false)
                }}
                onBackButtonPress={()=>{
                    setInstallmentsModal(false)
                }}
                animationIn="slideInLeft"
                animationOut="slideOutRight"
                animationInTiming={400}
                animationOutTiming={400}
                useNativeDriver={true}
                width={Constants.dw}
                height={Constants.dh}
                style={{flex:1,alignSelf:'center',alignItems:'center',justifyContent:'center',padding:0,margin:0}}
            >
                <View style={{flexWrap:'wrap', width:'100%',backgroundColor:'white' }}>
                    <TouchableOpacity 
                        style={{flexDirection:'row',marginBottom:RFValue(10), width:RFValue(75),height:RFValue(25),alignSelf:'flex-end',alignItems:'center',justifyContent:'flex-end'}}
                        onPress={()=>setInstallmentsModal(false)}
                    >
                        <Text style={{fontWeight:'500',color:'black'}}>Close</Text>
                        <Image
                            source={require('../../assets/images/cross_modal.png')}
                            style={[{height:RFValue(20), width:RFValue(20), marginLeft:RFValue(6), tintColor:'#6E6E6E'}]}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <FlatList
                        data={InstallmentsArr}
                        renderItem={renderInstallment}
                        ListHeaderComponent={renderInstallHeader}
                        keyExtractor={(item, index) => index}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            flexGrow:0,
                            marginHorizontal:RFValue(6),
                            backgroundColor:'#E5E5E5',
                            borderRadius:RFValue(6),
                            borderWidth:RFValue(1),
                            borderColor:'#E5E5E5',
                            marginBottom:RFValue(10)
                        }}
                    />
                </View>
            </Modal>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:RFValue(9),
        backgroundColor:'white'
    },
    unitDetailsView:{
        padding:RFValue(17),
        marginTop:RFValue(14),
        backgroundColor:'#F9F9F9',
        backgroundColor:'#F9F9F9',
        borderRadius:RFValue(6),
        elevation:RFValue(5),
        shadowColor:'#F4F5F9;'
    },
    unitDetailsText:{
        fontSize:RFValue(16),
        fontWeight:'500',
        color:'#221F1F'
    },
    unitRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:RFValue(13)
    },
    leftTextsView:{
        flexDirection:'row',
        width:'48%',
        paddingRight:RFValue(3),
    },
    unitText1:{
        width:'30%',
        marginRight:RFValue(8),
        fontSize:RFValue(13),
        fontWeight:'400',
        color:'#221F1F'
    },
    unitText2:{
        fontSize:RFValue(13),
        fontWeight:'400',
        color:'#6F6F6F'
    },
    rightTextsView:{
        flexDirection:'row',
        width:'48%',
        paddingRight:RFValue(3),
    },
    unitText11:{
        width:'50%',
        marginRight:RFValue(12),
        fontSize:RFValue(13),
        fontWeight:'400',
        color:'#221F1F'
    },
    unitText22:{
        width:'50%',
        fontSize:RFValue(13),
        fontWeight:'400',
        color:'#6F6F6F',
    },
    ///
    selectionView:{
        alignSelf:'flex-start',
        height:RFValue(43),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:RFValue(22),
        marginBottom:RFValue(27),
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
    //
    paymentRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:RFValue(15),
    },
    paymentLeftText:{
        width:'30%',
        fontSize:RFValue(13),
        fontWeight:'500',
        color:'#221F1F'
    },
    paymentRightText:{
        width:'65%',
        fontSize:RFValue(13),
        fontWeight:'400',
        color:'#6F6F6F'
    },
    modelOpenBtn:{
        flexDirection:'row',
        height:RFValue(42),
        marginTop:RFValue(10),
        marginBottom:RFValue(12),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        elevation:RFValue(5),
        shadowColor:'grey'
    }
});

export default My_unit_details;