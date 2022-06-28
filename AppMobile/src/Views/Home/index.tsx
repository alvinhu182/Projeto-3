import { NativeStackScreenProps } from '@react-navigation/native-stack'
import {useNavigation} from '@react-navigation/native'
import React from "react";
import { Image, ImageBackground, ImageProps, SafeAreaView, StyleSheet, Text } from "react-native";
import bg from '../../assets/img/bg-turipocos.jpg';
import logo from '../../assets/img/Logo-turipocos.png';
import { CustomButton } from "../../components/CustomButton";
import { CustomText } from "../../components/CustomText";
import { RootStackParamList } from '../../routes';


type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

export function HomeView({navigation}: Props) {
    const handlePressLogin = () => {
        navigation.navigate('Login')
    }
    
    return (
    <ImageBackground source={bg} style={styles.background}>
        <SafeAreaView style={styles.view}>
           <Image  source={logo} style={styles.image}  />
            <CustomText  bold style={styles.tittle}>Faça login e escolha as corridas que for fazer.</CustomText>
            <CustomButton variant="success" size="lg" onPress={handlePressLogin}>Fazer login</CustomButton>
         </SafeAreaView>
    </ImageBackground>
    
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
       
    },
    view: {
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical: 16,
        flex: 1,
    },
    tittle: {
        fontSize: 36,
        textAlign: 'center',
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {width: 0, height: 4},
        textShadowRadius: 4,
        
    },
    image: {
        width: 60,
        height: 60,
        
    }
})