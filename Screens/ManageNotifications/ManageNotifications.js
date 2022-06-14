import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import {
    Container,
    Header, NextBTN, Next, Footer,
    BackIcon, BackBtn,
    Title,
    Form,
    InputView,
    NameView,
    NameInput,
    ExitBTN,
    Exit,
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
    Pesquisas
} from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function ManageNotifications({ navigation }) {

    const [isInputFocused, setInputFocused] = useState({
        input1: false, input2: false, input3: false
    });

    const name = useRef();

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={90}>

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

                    <InputView>

                        <Description>Escolha quais comunicações você quer receber do QuintoAndar</Description>
                        {/* <Options> Aplicar para todos os produtos</Options>
                        <DescOption>Inquilino, Proprietário e Indica Aí</DescOption> */}


                        <NameView>
                            {/* Nome Completo */}
                            {/* <NameInput
                                maxLength={250}
                                placeholder='Ex: Joao Oliveira Silva'
                                returnKeyType='next'
                                onSubmitEditing={() => { name.current.focus(); }}
                                blurOnSubmit={false}
                                style={isInputFocused.input1 ? styles.input : styles.inputFocused}
                                onChangeText={() => { }}
                                onFocus={() => setInputFocused((prev) => ({ ...prev, input1: true }))}
                                onBlur={() => setInputFocused((prev) => ({ ...prev, input1: false }))}
                            /> */}
                        </NameView>

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
                                    style={{ marginLeft: '70%' }}
                                />
                            </SMS>

                            <Email>
                                <GeneralOptions>E-mail</GeneralOptions>
                                <Switch
                                    trackColor={{ false: "grey", true: "#073167" }}
                                    thumbColor={isEnabled ? "white" : "white"}
                                    ios_backgroundColor="grey"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                    style={{ marginLeft: '66%' }}
                                />
                            </Email>

                            <Napp>
                                <GeneralOptions>Notificações do aplicativo</GeneralOptions>
                                <Switch
                                    trackColor={{ false: "grey", true: "#073167" }}
                                    thumbColor={isEnabled ? "white" : "white"}
                                    ios_backgroundColor="grey"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                    style={{ marginLeft: '21%' }}
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
                                    thumbColor={isEnabled ? "white" : "white"}
                                    ios_backgroundColor="grey"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                    style={{ marginLeft: '70%' }}
                                />
                            </SMS>

                            <Email>
                                <GeneralOptions>E-mail</GeneralOptions>
                                <Switch
                                    trackColor={{ false: "grey", true: "#073167" }}
                                    thumbColor={isEnabled ? "white" : "white"}
                                    ios_backgroundColor="grey"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                    style={{ marginLeft: '66%' }}
                                />
                            </Email>

                            <Napp>
                                <GeneralOptions>Notificações do aplicativo</GeneralOptions>
                                <Switch
                                    trackColor={{ false: "grey", true: "#073167" }}
                                    thumbColor={isEnabled ? "white" : "white"}
                                    ios_backgroundColor="grey"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                    style={{ marginLeft: '21%' }}
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
                                    thumbColor={isEnabled ? "white" : "white"}
                                    ios_backgroundColor="grey"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                    style={{ marginLeft: '66%' }}
                                />
                            </SMS>
                        </Pesquisas>

                    </InputView>

                </Form>

                {/* <Footer>
                </Footer> */}

            </Container>

        </KeyboardAwareScrollView>

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
    background: {
        flex: 1,

    },
});