import { View, Text,KeyboardAvoidingView ,TextInput,StyleSheet,Image} from 'react-native'
import React,{useState} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'


import {
    heightPercentToDp as hp,
    widthPercentToDp as wp,
  } from '../utils/sizeUtils';
import {auth} from '../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { COLORS, FONTS, SIZES } from '../constants';




const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
//   Logowanie 
    const handleLogin = async () => {
      await signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Logged in with', user.email);
        })
        .catch(error => alert(error.message));
    };
  

    // Rejestracja
    // const handleSignUp = async () => {
    //   await createUserWithEmailAndPassword(auth, email, password)
    //     .then(userCredentials => {
    //       const user = userCredentials.user;
    //       console.log('Register', user.email);
    //     })
    //     .catch(error => alert(error.message));
    // };
  return (
   
        <KeyboardAvoidingView
        style={styles.container}
        >
        
            {/* <Image source={UMT}/> */}
            <View style={{flex:1,alignItems:'center',justifyContent:'center',width:'100%',backgroundColor:COLORS.primary,borderTopLeftRadius:wp(20)}}>
            <View style={styles.inputContainer}>
                <TextInput
                placeholder='Email'
                value={email}
                onChangeText={(text)=>{setEmail(text)}}
                style={styles.input}
                />
                   <TextInput
                placeholder='Hasło'
                value={password}
                onChangeText={(text)=>{setPassword(text)}}
                style={styles.input}
                secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={handleLogin}
                style={[styles.button]}
                >
                    <Text style={styles.buttonText}>Zaloguj</Text>
                </TouchableOpacity>

            </View>

            </View>
       
            
           
         </KeyboardAvoidingView>

    

  )
}

export default Login

const styles=StyleSheet.create({
    container:{
        flex:1,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:COLORS.white,
       
    },
    inputContainer:{
        width:"80%",
    },
    input:{
        
        backgroundColor:COLORS.white,
        paddingHorizontal:SIZES.medium,
        paddingVertical:SIZES.small,
        borderRadius:SIZES.small,
        marginTop:SIZES.base,
    },
    buttonContainer:{
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
    },
    button:{
        backgroundColor:COLORS.secondary,
        width:"100%",
        padding:SIZES.medium,
        borderRadius:SIZES.small,
        
        
       

    },
    buttonText:{
        color:COLORS.white,
        fontFamily:FONTS.bold
    }
})