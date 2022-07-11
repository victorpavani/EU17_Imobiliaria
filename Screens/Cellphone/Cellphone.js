import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
    Container,
    Header, WhatsappBTN, TitleWts, SmsBTN, TitleSms, Footer, Termos,
    WppIcon, BackIcon, BackBtn,
    Title,
    Description,
    Reminder,
    PhoneInfo,
    Number,
    Zone,
    InputView,
    Input,
    ZoneView,
    NumberView,
    InputZone,
    InputNumber,
    InfoText
} from './style'

export default function Cellphone({ navigation }) {
    const [isInputFocused, setInputFocused] = useState({ input1: false, input2: false });

    return (
        <Container>
            <Header>
            </Header>

            <PhoneInfo>
                <InfoText>

                    <Title>Acesse ou crie sua conta</Title>

                    <Description>Digite seu celular para entrar.
                        Seus dados estao seguros e voce nao
                        precisa de senha.
                    </Description>

                </InfoText>

                <InputView>

                    <InputZone>DDD</InputZone>
                    <ZoneView>
                        <Zone
                            keyboardType="numeric"
                            maxLength={2}
                            style={isInputFocused.input1 ? styles.input : styles.inputFocused}
                            onChangeText={() => { }}
                            onFocus={() => setInputFocused((prev) => ({ ...prev, input1: true }))}
                            onBlur={() => setInputFocused((prev) => ({ ...prev, input1: false }))}
                        />
                    </ZoneView>

                    <InputNumber>Celular</InputNumber>

                    <NumberView>
                        <Number
                            keyboardType="numeric"
                            maxLength={9}
                            style={isInputFocused.input2 ? styles.input : styles.inputFocused}
                            onChangeText={() => { }}
                            onFocus={() => setInputFocused((prev) => ({ ...prev, input2: true }))}
                            onBlur={() => setInputFocused((prev) => ({ ...prev, input2: false }))}
                        />
                    </NumberView>

                </InputView>

                <Reminder>Voce vai receber um código para confirmar seu telefone</Reminder>

            </PhoneInfo>


            <SmsBTN onPress={() => navigation.navigate('Confirmation')}>
                <TitleSms>Receber código por SMS</TitleSms>
            </SmsBTN>

            <WhatsappBTN onPress={() => navigation.navigate('Confirmation')}>
                <WppIcon
                    source={require('../../assets/Icons/whatsapp.png')}
                />
                <TitleWts>Receber código por WhatsApp</TitleWts>
            </WhatsappBTN>

            <Footer>
                <Termos>
                    Ao continuar, voce está de acordo com os Termos de Uso
                    e ciente da Política de Privacidade.
                </Termos>
            </Footer>
        </Container>
    );
}

const styles = StyleSheet.create({
    inputFocused: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'grey'
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#0571ff'
    }
});
