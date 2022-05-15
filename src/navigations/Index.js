import React,{useEffect,useContext,useRef} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
// screens
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
// constants
const Stack = createNativeStackNavigator();

const StackScreens  = () => {
    return(      
        <Stack.Navigator    
            initialRouteName="Home"
            screenOptions={{
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight:'normal',
                    fontSize:20,
                },
            }}
        >
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{headerShown:false}} 
            />
            <Stack.Screen 
                name="Notifications" 
                component={Notifications} 
                options={{headerShown:false}} 
            />
            
        </Stack.Navigator>
    )
};

const Index = () =>{  
    return ( 
        <NavigationContainer>
            <StackScreens />
        </NavigationContainer>
    );
};

export default Index;