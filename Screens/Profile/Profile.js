import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import {
    Container,
    Header, NextBTN, Next, Footer,
    BackIcon, BackBtn,
    Title,
    Form,
    InputView,
    Name,
    Email,
    MailInput,
    MailView,
    CpfView,
    Cpf,
    CpfInput,
    NameView,
    NameInput,
    AlternativeMail,
    AlternativeInput,
    AlternativeView,
    NotificationBTN,
    Notification,
    MailIcon,
    NextIcon,
    ExitBTN,
    Exit,
    CpfMask,
    NumberMask
} from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Profile({ navigation }) {

    const [isInputFocused, setInputFocused] = useState({
        input1: false, input2: false, input3: false
    });

    const name = useRef();

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

                    <Title>Minha Conta</Title>
                </Header>

                <Form>

                    <InputView>

                        <Name>Nome completo</Name>
                        <Email>Número de celular</Email>
                        <Cpf>E-mail</Cpf>
                        <AlternativeMail>E-mail alternativo</AlternativeMail>

                        <NameView>
                            {/* Nome Completo */}
                            <NameInput
                                maxLength={250}
                                placeholder='Ex: Joao Oliveira Silva'
                                returnKeyType='next'
                                onSubmitEditing={() => { name.current.focus(); }}
                                blurOnSubmit={false}
                                style={isInputFocused.input1 ? styles.input : styles.inputFocused}
                                onChangeText={() => { }}
                                onFocus={() => setInputFocused((prev) => ({ ...prev, input1: true }))}
                                onBlur={() => setInputFocused((prev) => ({ ...prev, input1: false }))}
                            />
                        </NameView>

                        <MailView>
                            {/* Numero de Celular */}
                            <NumberMask />
                            <MailInput
                                maxLength={11}
                                placeholder='(19)99538-7196'
                                editable={false}
                                selectTextOnFocus={false}
                                style={isInputFocused.input2 ? styles.input : styles.inputFocused}
                                onChangeText={() => { }}
                                onFocus={() => setInputFocused((prev) => ({ ...prev, input2: true }))}
                                onBlur={() => setInputFocused((prev) => ({ ...prev, input2: false }))}
                            />
                        </MailView>

                        <CpfView>
                            {/* email */}
                            <CpfMask />
                            <CpfInput
                                maxLength={250}
                                placeholder='vicpavanii@gmail.com'
                                editable={false}
                                selectTextOnFocus={false}
                                style={isInputFocused.input3 ? styles.input : styles.inputFocused}
                                onChangeText={() => { }}
                                onFocus={() => setInputFocused((prev) => ({ ...prev, input3: true }))}
                                onBlur={() => setInputFocused((prev) => ({ ...prev, input3: false }))}
                            />
                        </CpfView>

                        <AlternativeView>
                            {/* Email Alternativo */}
                            <AlternativeInput
                                placeholder='E-mail'
                                maxLength={250}
                                ref={name}
                                style={isInputFocused.input4 ? styles.input : styles.inputFocused}
                                onChangeText={() => { }}
                                onFocus={() => setInputFocused((prev) => ({ ...prev, input4: true }))}
                                onBlur={() => setInputFocused((prev) => ({ ...prev, input4: false }))}
                            />
                        </AlternativeView>

                        <NotificationBTN>
                            <MailIcon
                                source={require('../../assets/Icons/envelope.png')}
                            />
                            <Notification>Gerenciar notificações</Notification>
                            <NextIcon
                                source={require('../../assets/Icons/right-chevron.png')}
                            />
                        </NotificationBTN>

                    </InputView>

                </Form>

                <Footer>

                    <NextBTN onPress={() => alert('Voce concluiu seu cadastro')}>
                        <Next>Salvar</Next>
                    </NextBTN>

                    <ExitBTN>
                        <Exit>Sair da conta</Exit>
                    </ExitBTN>


                </Footer>

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