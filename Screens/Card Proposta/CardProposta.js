import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import {
    Header,
    Localizacao,
    Endereco,
    Aluguel,
    ValorTotal,
    Barra,
    Check,
    ProgressBar,
    LineBlue
} from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import HeaderMain from '../Header Main/HeaderMain';

export default function CardProposta({ navigation }) {

    const [Favorito, setFavorito] = useState(false);

    return (
        <Header>
            <HeaderMain />

            <Endereco>
                <Localizacao>Avenida Senador Queiros, Centro, São Paulo</Localizacao>
                <Aluguel>Aluguel R$1.400</Aluguel>
                <ValorTotal>Total R$1.887</ValorTotal>
                <Barra />
            </Endereco>

            <ProgressBar>
                <Check
                    source={require('../../assets/ProgressBar/checked.png')}
                />
                <LineBlue
                    source={require('../../assets/ProgressBar/linha_azul.png')}
                />

                {/* <Check
                    source={require('../../assets/ProgressBar/checked.png')}
                />
                <Check
                    source={require('../../assets/ProgressBar/checked.png')}
                />
                <Check
                    source={require('../../assets/ProgressBar/checked.png')}
                /> */}

            </ProgressBar>

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