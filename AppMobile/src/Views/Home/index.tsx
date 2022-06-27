import React from "react";
import { Image, ImageBackground, ImageProps, SafeAreaView, StyleSheet, Text } from "react-native";
import bg from '../../assets/img/bg-turipocos.jpg';
import logo from '../../assets/img/Logo-turipocos.png';
import { CustomButton } from "../../components/CustomButton";
import { CustomText } from "../../components/CustomText";

//type Props = ImageProps & {
//    image?: HTMLImageElement;
//}
//const image: HTMLImageElement = new Image(logo);

export function HomeView() {
    return (
    <ImageBackground source={bg} style={styles.background}>
        <SafeAreaView style={styles.view}>
           <Image source={logo}  alt="Turipoços" width={266} height={70} />
            <CustomText  bold style={styles.tittle}>Faça login e escolha as corridas que for fazer.</CustomText>
            <CustomButton variant="success" size="lg" >Fazer login</CustomButton>
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
        
    }
})