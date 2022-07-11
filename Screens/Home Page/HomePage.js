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

    const [Filtro, setFiltro] = useState(false);

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];
    return (
        <Container>
            <Header>
                <SearchBTN>
                    <SearchIcon
                        source={require('../../assets/Icons/search.png')}
                    />
                    <Placeholder>São Paulo, SP, Brasil </Placeholder>

                </SearchBTN>

                <MapBtn onPress={() => setFiltro(!Filtro)}>
                    <MapIcon
                        source={
                            Filtro
                                ? require('../../assets/Icons/list.png')
                                : require('../../assets/Icons/maps.png')
                        }
                    />
                    <TitleMap>{Filtro ? 'Ver Lista' : 'Ver Mapa'}</TitleMap>
                </MapBtn>

                <FilterBtn>
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
        marginTop: 0,
        paddingTop: 0,
        overflow: 'visible',
    },
});