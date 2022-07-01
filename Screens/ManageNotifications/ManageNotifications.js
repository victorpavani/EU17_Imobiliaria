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
    NameView,
    Description,
    Options,
    DescOption,
    OptionTitle,
    MensagensInformativas,
    GeneralOptions,
    SMS,
    Email,
    Napp,
    MensagensPromocionais,
    Pesquisas,
    ComunicacoesEspeciais,
} from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function ManageNotifications({ navigation }) {

    const [isInputFocused, setInputFocused] = useState({
        input1: false, input2: false, input3: false
    });

    const name = useRef();

    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const [isEnabled4, setIsEnabled4] = useState(false);
    const [isEnabled5, setIsEnabled5] = useState(false);
    const [isEnabled6, setIsEnabled6] = useState(false);
    const [isEnabled7, setIsEnabled7] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState2 => !previousState2);
    const toggleSwitch3 = () => setIsEnabled3(previousState3 => !previousState3);
    const toggleSwitch4 = () => setIsEnabled4(previousState4 => !previousState4);
    const toggleSwitch5 = () => setIsEnabled5(previousState5 => !previousState5);
    const toggleSwitch6 = () => setIsEnabled6(previousState6 => !previousState6);
    const toggleSwitch7 = () => setIsEnabled7(previousState7 => !previousState7);

    return (
        <Container>
            <Header>
                <BackBtn onPress={() => navigation.goBack()}>
                    <BackIcon
                        source={require('../../assets/Icons/arrow-left.png')}
                    />
                </BackBtn>

                <Title>Notificações</Title>
            </Header>


            <Form>
                <ScrollView style={styles.scrollView} /* contentContainerStyle={styles.contentContainer} */
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                >
                    <InputView>



                        <Description>Escolha quais comunicações você quer receber da 17imóveis</Description>
                        {/* <Options> Aplicar para todos os produtos</Options>
                        <DescOption>Inquilino, Proprietário e Indica Aí</DescOption> */}

                        <MensagensInformativas>
                            <OptionTitle>Mensagens informativas</OptionTitle>
                            <DescOption>Dicas e lembretes para garantir uma boa experiência</DescOption>

                            <SMS>
                                <GeneralOptions>SMS</GeneralOptions>
                                <Switch
                                    trackColor={{ false: "grey", true: "#073167" }}
                                    thumbColor={isEnabled ? "white" : "white"}
                                    ios_backgroundColor="grey"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                    style={{ marginLeft: '69%' }}
                                />
                            </SMS>

                            <Email>
                                <GeneralOptions>E-mail</GeneralOptions>
                                <Switch
                                    trackColor={{ false: "grey", true: "#073167" }}
                                    thumbColor={isEnabled2 ? "white" : "white"}
                                    ios_backgroundColor="grey"
                                    onValueChange={toggleSwitch2}
                                    value={isEnabled2}
                                    style={{ marginLeft: '66%' }}
                                />
                            </Email>

                            <Napp>
                                <GeneralOptions>Notificações do aplicativo</GeneralOptions>
                                <Switch
                                    trackColor={{ false: "grey", true: "#073167" }}
                                    thumbColor={isEnabled3 ? "white" : "white"}
                                    ios_backgroundColor="grey"
                                    onValueChange={toggleSwitch3}
                                    value={isEnabled3}
                                    style={{ marginLeft: '23%' }}
                                />
                            </Napp>

                        </MensagensInformativas>

                        <MensagensPromocionais>
                            <OptionTitle>Mensagens Promocionais</OptionTitle>
                            <DescOption>Novos Produtos, funcionalidades ou promoções</DescOption>
                            <SMS>
                                <GeneralOptions>SMS</GeneralOptions>
                                <Switch
                                    trackColor={{ false: "grey", true: "#073167" }}
                                    thumbColor={isEnabled4 ? "white" : "white"}
                                    ios_backgroundColor="grey"
                                    onValueChange={toggleSwitch4}
                                    value={isEnabled4}
                                    style={{ marginLeft: '70%' }}
                                />
                            </SMS>

                            <Email>
                                <GeneralOptions>E-mail</GeneralOptions>
                                <Switch
                                    trackColor={{ false: "grey", true: "#073167" }}
                                    thumbColor={isEnabled5 ? "white" : "white"}
                                    ios_backgroundColor="grey"
                                    onValueChange={toggleSwitch5}
                                    value={isEnabled5}
                                    style={{ marginLeft: '66%' }}
                                />
                            </Email>

                            <Napp>
                                <GeneralOptions>Notificações do aplicativo</GeneralOptions>
                                <Switch
                                    trackColor={{ false: "grey", true: "#073167" }}
                                    thumbColor={isEnabled6 ? "white" : "white"}
                                    ios_backgroundColor="grey"
                                    onValueChange={toggleSwitch6}
                                    value={isEnabled6}
                                    style={{ marginLeft: '23%' }}
                                />
                            </Napp>
                        </MensagensPromocionais>

                        <Pesquisas>
                            <OptionTitle>Pesquisas</OptionTitle>
                            <DescOption>Convites para participar de pesquisas</DescOption>
                            <SMS>
                                <GeneralOptions>E-mail</GeneralOptions>
                                <Switch
                                    trackColor={{ false: "grey", true: "#073167" }}
                                    thumbColor={isEnabled7 ? "white" : "white"}
                                    ios_backgroundColor="grey"
                                    onValueChange={toggleSwitch7}
                                    value={isEnabled7}
                                    style={{ marginLeft: '66%' }}
                                />
                            </SMS>
                        </Pesquisas>

                        <ComunicacoesEspeciais>
                            <OptionTitle>Comunicações essenciais</OptionTitle>
                            <DescOption>Visitas agendadas, propostas e faturas</DescOption>

                            <SMS>
                                <GeneralOptions>SMS e WhatsApp</GeneralOptions>
                            </SMS>

                            <Email>
                                <GeneralOptions>E-mail</GeneralOptions>
                            </Email>

                            <Napp>
                                <GeneralOptions>Notificações do aplicativo</GeneralOptions>
                            </Napp>

                        </ComunicacoesEspeciais>


                    </InputView>

                </ScrollView>

            </Form>

            {/* <Footer>
                </Footer> */}

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
        backgroundColor: 'white',
    },
});