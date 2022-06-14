import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
    TitleView,
    NameView,
    NameInput
} from './style'

export default function Register({ navigation }) {

    const [isInputFocused, setInputFocused] = useState({
        input1: false, input2: false, input3: false
    });

    return (
        <Container>
            <Header>
                <BackBtn onPress={() => navigation.goBack()}>
                    <BackIcon
                        source={require('../../assets/Icons/arrow-left.png')}
                    />
                </BackBtn>
            </Header>

            <Form>
                <TitleView>

                    <Title>Conclua o seu cadastro</Title>

                </TitleView>

                <InputView>

                    <Name>Nome Completo</Name>
                    <Email>Email</Email>
                    <Cpf>CPF</Cpf>

                    <NameView>
                        <NameInput
                            style={isInputFocused.input1 ? styles.input : styles.inputFocused}
                            onChangeText={() => { }}
                            onFocus={() => setInputFocused((prev) => ({ ...prev, input1: true }))}
                            onBlur={() => setInputFocused((prev) => ({ ...prev, input1: false }))}
                        />
                    </NameView>

                    <MailView>
                        <MailInput
                            style={isInputFocused.input2 ? styles.input : styles.inputFocused}
                            onChangeText={() => { }}
                            onFocus={() => setInputFocused((prev) => ({ ...prev, input2: true }))}
                            onBlur={() => setInputFocused((prev) => ({ ...prev, input2: false }))}
                        />
                    </MailView>

                    <CpfView>
                        <CpfInput
                            maxLength={11}
                            keyboardType="numeric"
                            style={isInputFocused.input3 ? styles.input : styles.inputFocused}
                            onChangeText={() => { }}
                            onFocus={() => setInputFocused((prev) => ({ ...prev, input3: true }))}
                            onBlur={() => setInputFocused((prev) => ({ ...prev, input3: false }))}
                        />
                    </CpfView>

                </InputView>

            </Form>

            <Footer>

                <NextBTN onPress={() => alert('Voce concluiu seu cadastro')}>
                    <Next>Confirmar</Next>
                </NextBTN>

            </Footer>

        </Container>
    );
}

const styles = StyleSheet.create({
    inputFocused: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'grey',
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#0571ff'
    }
});