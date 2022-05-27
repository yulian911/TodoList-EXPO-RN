import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {NativeBaseProvider} from 'native-base'
import theme from '../theme'
import { AllProvider, useAll } from '../Context/allContext'


type Props ={
    children:React.ReactNode
}


export default function AppContainer(props:Props){
    const {authIsReady} =useAll()
    return(
      
            <NavigationContainer>
                {authIsReady && <NativeBaseProvider theme={theme}>{props.children}</NativeBaseProvider>}
                
            </NavigationContainer>
   
        
    )
}