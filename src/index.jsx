import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './screens/main-screen'

import Sidebar from './components/sidebar'
import AboutScreen from './screens/about-screen'
import Login from './screens/Login'
import { createStackNavigator } from '@react-navigation/stack'
import { useAll } from './Context/allContext'

const Drawer = createDrawerNavigator()
const HomeStack=createStackNavigator()


const HomeScreen = () => {
 

  return (
    <HomeStack.Navigator screenOptions={{headerShown:false}} initialRouteName="Home">
      <HomeStack.Screen name="Main"
       component={MainScreen}
  
       />
      <HomeStack.Screen name="About"
       component={AboutScreen}
  
       />
  
    </HomeStack.Navigator>
  );
};



const App = () => {
  const {user} =useAll()
  return (
  
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={props => <Sidebar {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        overlayColor: '#00000000'
      }}
    >
     {user?
      (<Drawer.Screen name="HomeScreen" component={HomeScreen}/>):
      ( <Drawer.Screen name="Login" component={Login}/>)
      }
    </Drawer.Navigator>
  
  )
}

export default App