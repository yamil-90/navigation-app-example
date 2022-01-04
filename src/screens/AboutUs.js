import React, {useState} from 'react'
import { StyleSheet, Text, View, Pressable, Animated } from 'react-native'

import { pressBtn, releaseBtn } from '../animations'

const AboutUs = ({navigation, route}) => {

    const { name, amount} = route.params

    const [animationValue] = useState(new Animated.Value(1))

    const animationStyle = {
        transform: [{ scale: animationValue }]
      }

    const goToHome = ()=>{
        setTimeout(()=>{navigation.navigate('home')},500)
    }

    return (
        <View style={styles.container}>
            <Text>about us</Text>
            <Text>Information passed:</Text>
            <Text>name: {' '}
            <Text>{name}</Text>
            </Text>
            <Text>amount: {' '}
            <Text>{amount}</Text>
            </Text>
            <Pressable
            onPress={()=>goToHome()}
            onPressIn={()=>{
                pressBtn(animationValue)}
            }
            onPressOut={()=>{
                releaseBtn(animationValue)
            }}
            
            >
                <Animated.View style={[styles.btn, animationStyle]}>

                <Text >go to Home</Text>
                </Animated.View>
                
                 
            </Pressable>
        </View>
    )
}

export default AboutUs

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
