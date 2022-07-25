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
    Cidade,
    InfoPesquisa,
    NumImoveis,
    Ordenar,
    OrdenarText,
    OrdenarBTNText,
} from './style';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import CardImovel from '../Card Movel/CardImovel';


export default function HomePage({ navigation }) {


    return (
        <Container>
            <Header>
                <SearchBTN>
                    <SearchIcon
                        source={require('../../assets/Icons/search.png')}
                    />
                    <Placeholder>São Paulo, SP, Brasil </Placeholder>

                </SearchBTN>

                <MapBtn onPress={() => navigation.navigate('Mapa')}>
                    <MapIcon
                        source={require('../../assets/Icons/maps.png')}
                    />
                    <TitleMap>Ver Mapa</TitleMap>
                </MapBtn>

                <FilterBtn onPress={() => navigation.navigate('Perfil')}>
                    <FilterIcon
                        source={require('../../assets/Icons/settings.png')}
                    />
                    <TitleFilter>Filtrar</TitleFilter>
                </FilterBtn>
            </Header>

            {/* <FlatList
                data={DATA}
                renderItem={({ item }) => (
                    <CardImovel
                        dados={item}
                    />
                )}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
            /> */}

            <InfoPesquisa>

                <Cidade>Alugar em São Paulo, SP, Brasil</Cidade>
                <NumImoveis>5.500 imóveis na região e arredores</NumImoveis>
                <Ordenar>
                    <OrdenarText>Ordenar por</OrdenarText>
                    <OrdenarBTNText>Mais Relevantes</OrdenarBTNText>
                </Ordenar>
            </InfoPesquisa>


            <ScrollView style={styles.ScrollView}>
                <CardImovel />
                <CardImovel />
                <CardImovel />
            </ScrollView>
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

    ScrollView: {
        flex: 1,
        backgroundColor: '#F9FBFF',
        height: 100,
        width: 380,

        overflow: 'hidden',
    },
});