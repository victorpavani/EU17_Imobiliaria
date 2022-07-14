import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {
    Container,
    Header,
    BackIcon, BackBtn,
    Title,
    Form,
    InputView,
    Description,
    TitleTab,
    Footer,
    TextBTN,
    AndamentoBTN,
    TitleAndamento,
    TitleCancelada,
    CanceladaBTN,
    NovaProposta
} from './style';
import CardProposta from '../Card Proposta/CardProposta';

export default function Propostas({ navigation }) {

    const [Filtro, setFiltro] = useState(false);


    return (
        <Container>
            <Header>
                <BackBtn onPress={() => navigation.goBack()}>
                    <BackIcon
                        source={require('../../assets/Icons/arrow-left.png')}
                    />
                </BackBtn>

                <Title>Propostas</Title>

                <AndamentoBTN onPress={() => setFiltro(!Filtro)} style={{
                    borderBottomWidth: Filtro ? 2 : 0,
                }}>
                    <TitleAndamento style={{ color: Filtro ? '#193A6F' : 'grey', }}>Em andamento</TitleAndamento>
                </AndamentoBTN>

                <CanceladaBTN onPress={() => setFiltro(!Filtro)} style={{
                    borderBottomWidth: Filtro ? 0 : 2,
                }}>
                    <TitleCancelada style={{ color: Filtro ? 'grey' : '#193A6F', }}>Canceladas</TitleCancelada>
                </CanceladaBTN>

            </Header>


            <Form>
                <ScrollView style={styles.scrollView} /* contentContainerStyle={styles.contentContainer} */
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                >
                    <InputView>

                        <TitleTab>{Filtro ? 'Nenhuma proposta em andamento (ainda)' : 'Você não tem propostas canceladas'}</TitleTab>
                        <Description>
                            {Filtro ? 'Assim que enviar, elas serão listadas por aqui para que você possa acompanhar a evolução delas :)' : 'Gostou de um imóvel que visitou? Inicie a negociação direto com o proprietário fazendo uma proposta.'}
                        </Description>

                    </InputView>

                    <CardProposta />

                </ScrollView>

            </Form>

            <Footer>
                <NovaProposta>
                    <TextBTN>+ Nova Proposta</TextBTN>
                </NovaProposta>
            </Footer>

        </Container>

    );
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
    scrollView: {
        flex: 0.5,
        backgroundColor: '#F9FBFF',
    },
});