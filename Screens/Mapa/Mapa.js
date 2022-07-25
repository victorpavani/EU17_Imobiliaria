import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import {
    Container,
    Header,
    FilterIcon, FilterBtn,
    TitleFilter,
    MapBtn,
    MapIcon,
    TitleMap,
    SearchBTN,
    SearchIcon,
    Placeholder,
    Maps,
    MapaImage
} from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Mapa({ navigation }) {

    const [Filtro, setFiltro] = useState(false)

    const [isInputFocused, setInputFocused] = useState({
        input1: false, input2: false, input3: false
    });

    return (
        <Container>
            <Header>
                <SearchBTN>
                    <SearchIcon
                        source={require('../../assets/Icons/search.png')}
                    />
                    <Placeholder>São Paulo, SP, Brasil </Placeholder>

                </SearchBTN>

                <MapBtn onPress={() => navigation.navigate('HomePage')}>
                    <MapIcon
                        source={require('../../assets/Icons/list.png')}
                    />
                    <TitleMap>Ver Lista</TitleMap>
                </MapBtn>

                <FilterBtn>
                    <FilterIcon
                        source={require('../../assets/Icons/settings.png')}
                    />
                    <TitleFilter>Filtrar</TitleFilter>
                </FilterBtn>
            </Header>

            <Maps>
                <MapaImage
                    source={require('../../assets/MapaSP.png')}
                />
            </Maps>
        </Container>

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