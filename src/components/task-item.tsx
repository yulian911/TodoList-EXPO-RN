import React ,{useCallback} from "react";
import {
    Pressable,
    Box,
    HStack,
    useColorModeValue,
    Icon,
    Input,
    useToken,
    Text
  } from 'native-base'
import AnimatedCheckbox from "react-native-checkbox-reanimated";
import AnimatedTaskLabel from "./animated-task-label";


interface Props{
    isDone:boolean,
    onToggleCheckbox:()=>void
}

const TaskItem =(props:Props)=>{
    const {isDone,onToggleCheckbox} =props
    
    const highlightColor = useToken(
        'colors',
        useColorModeValue('blue.500', 'blue.400')
      )
      const boxStroke = useToken(
        'colors',
        useColorModeValue('muted.300', 'muted.500')
      )
    
      const checkmarkColor = useToken('colors', useColorModeValue('white', 'white'))
    
      const activeTextColor = useToken(
        'colors',
        useColorModeValue('darkText', 'lightText')
      )
      const doneTextColor = useToken(
        'colors',
        useColorModeValue('muted.400', 'muted.600')
      )

    return(
        <HStack alignItems='center' w='full' px={4} py={2} bg={useColorModeValue("warmGray.50",'primary.900')}>
            <Box width={30} height={30} mr={2}>
                <Pressable onPress={onToggleCheckbox}>
                    <AnimatedCheckbox
                    highlightColor={highlightColor}
                    checkmarkColor={checkmarkColor}
                    boxOutlineColor={boxStroke}
                    checked={isDone}
                    />
                </Pressable>
            </Box>
            <AnimatedTaskLabel 
            textColor={activeTextColor} 
            inactiveTextColor={doneTextColor}
            strikethrough={isDone}
            >
                Task Item
            </AnimatedTaskLabel>
            
        </HStack>
    )
}

export default TaskItem