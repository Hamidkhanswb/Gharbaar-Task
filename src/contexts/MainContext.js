import React,{useState,useEffect,useRef} from 'react'
import NetInfo from "@react-native-community/netinfo";

const initialState = {
    connected:false,
    setConnected:()=>{},
}
const MainContext = React.createContext(initialState);

function MainProvider ({children}){  
    const [connected,setConnected] = useState(false);
    let mountedRef = useRef(true);

    useEffect(()=>{
        const unsubscribe = NetInfo.addEventListener(state => {
            if (!mountedRef.current) return null
            setConnected(state.isConnected)
        });
        return unsubscribe;
    },[]);

    return (
        <MainContext.Provider value = {{connected, setConnected}}>  
            {children}
        </MainContext.Provider>
    )
} 
export {MainContext, MainProvider};