import React, {useState} from 'react'
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native'


import { pressBtn, releaseBtn } from '../animations'

const Home = ({navigation}) => {
    
    const [animationValue] = useState(new Animated.Value(1))
    const information = {
        data1:'first data',
        amount: 300,
        name: 'namert'
    }
    
    const animationStyle = {
        transform: [{ scale: animationValue }]
      }

    const goToAboutUs = ()=>{
        setTimeout(()=>{navigation.navigate('aboutUs', information)},500)
    }
    return (
        <View style={styles.container}>
            <Text>home</Text>
            <Pressable
            onPress={()=>goToAboutUs()}
            onPressIn={()=>{
                pressBtn(animationValue)}
            }
            onPressOut={()=>{
                releaseBtn(animationValue)
            }}
            
            >
                <Animated.View style={[styles.btn, animationStyle]}>

                <Text >go to About us</Text>
                </Animated.View>
                
                 
            </Pressable>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    btn:{
        borderRadius:10,
        backgroundColor:'cornflowerblue',
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        marginTop: 10
    }
})
