import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import {
    Header,
    MapaImage,
    TipoImovel,
    Localizacao,
    Endereco,
    Infos,
    Aluguel,
    ValorTotal,
    ImovelType,
    FavBtn,
    FavIcon,
    Originals,
    OriginalsView
} from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function CardImovel({ navigation }) {

    const [Favorito, setFavorito] = useState(false);

    return (
        <Header>
            <MapaImage
                source={require('../../assets/apartamentoSP.jpeg')}
            />

            <ImovelType>
                <TipoImovel>Kitnet/Studio</TipoImovel>
                <OriginalsView>
                    <Originals>Originals</Originals>
                </OriginalsView>
            </ImovelType>


            <Endereco>
                <Localizacao>Avenida Senador Queiros, Centro, São Paulo</Localizacao>
                <Infos>35 m² - 1 Quarto</Infos>
                <Aluguel>Aluguel R$1.400</Aluguel>
                <ValorTotal>Total R$1.887</ValorTotal>
            </Endereco>

            <FavBtn onPress={() => setFavorito(!Favorito)}>
                <FavIcon
                    source={
                        Favorito
                            ? require('../../assets/Icons/favoriteCircleFill.png')
                            : require('../../assets/Icons/favoriteCircle.png')
                    }
                />
            </FavBtn>

        </Header>

    )
}

const styles = StyleSheet.create({
    inputFocused: {
        borderWidth: 1,
        borderColor: 'grey',
    },
    input: {
        borderWidth: 1,
        borderColor: '#0571ff'
    },
    background: {
        flex: 1,

    },
});