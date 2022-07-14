import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { StyleSheet, Text, View, Switch, ScrollView, SectionList } from 'react-native';
import {
    Container,
    Header,
    BackIcon, BackBtn,
    Title,
    Form,
    InputView,
    Description,
    HistBTN, TitleHist, AgendaBTN, TitleAgenda, IconTabs,
    TitleTab,
    ProcurarImovel,
    Footer,
    TextBTN
} from './style';

export default function Visitas({ navigation }) {

    const [Filtro, setFiltro] = useState(false);


    return (
        <Container>
            <Header>
                <BackBtn onPress={() => navigation.goBack()}>
                    <BackIcon
                        source={require('../../assets/Icons/arrow-left.png')}
                    />
                </BackBtn>

                <Title>Visitas</Title>

                <HistBTN onPress={() => setFiltro(!Filtro)} style={{
                    borderBottomWidth: Filtro ? 2 : 0,
                }}>
                    <TitleHist style={{ color: Filtro ? '#193A6F' : 'grey', }}>Histórico</TitleHist>
                </HistBTN>

                <AgendaBTN onPress={() => setFiltro(!Filtro)} style={{
                    borderBottomWidth: Filtro ? 0 : 2,
                }}>
                    <TitleAgenda style={{ color: Filtro ? 'grey' : '#193A6F', }}>Agendadas</TitleAgenda>
                </AgendaBTN>
            </Header>


            <Form>
                <ScrollView style={styles.scrollView} /* contentContainerStyle={styles.contentContainer} */
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                >
                    <InputView>

                        <IconTabs
                            source={
                                Filtro
                                    ? require('../../assets/Icons/time.png')
                                    : require('../../assets/Perfil/calendar.png')
                            }
                        />

                        <TitleTab>{Filtro ? 'Você não tem histórico de visitas' : 'Você não tem visitas agendadas'}</TitleTab>
                        <Description>{Filtro ? 'Após visitar um imóvel seu histórico de visitas aparecerá aqui' : 'Ao agendar uma visita, todas as informações estarão aqui'}</Description>
                    </InputView>

                </ScrollView>

            </Form>

            <Footer>
                <ProcurarImovel>
                    <TextBTN>Procurar imóveis</TextBTN>
                </ProcurarImovel>
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