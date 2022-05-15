import React from 'react';
import {Text,View,StyleSheet,LogBox} from 'react-native';

import Index from './src/navigations/Index';
import {MainProvider} from './src/contexts/MainContext';

LogBox.ignoreLogs(['Reanimated 2']);
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications


const App = ()=>{
    return(
        <MainProvider>
            <Index />
        </MainProvider>
        
    )
}

const styles = StyleSheet.create({
});

export default App;

