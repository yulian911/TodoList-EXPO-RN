import * as React from 'react'
import {Text,Box,Center,VStack,useColorModeValue, Pressable} from 'native-base'
import ThemeToogle from '../components/theme-toogle'
import AnimatedCheckbox from 'react-native-checkbox-reanimated'
import { StyleSheet } from 'react-native'
import TaskItem from '../components/task-item'



const MainScreen = () => {
    const [checked, setChecked] = React.useState<boolean>(false)

    const handleCheckboxPress = () => {
        setChecked(prev => {
          return !prev
        })
      }
  return (
    <Center 
        _dark={{bg:'blue.900'}}
        _light={{bg:'blue.50'}} 
        px={4} 
        flex={1}>
        <VStack space={5}alignItems='center' >
            <TaskItem isDone={checked} onToggleCheckbox={handleCheckboxPress}/>

            <Box p={10} bg={useColorModeValue('red.500','yellow.500')}>
                <Text>
                    Hello
                </Text>
            </Box>
            <ThemeToogle/>
        </VStack>
        
    </Center>
  )
}

export default MainScreen

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center'
//     },
//     checkbox: {
//       width: 64,
//       height: 64
//     }
//   })