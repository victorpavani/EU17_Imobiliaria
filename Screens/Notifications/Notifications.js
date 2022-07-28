import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import {
    Container,
    Header,
    BackIcon, BackBtn,
    Title,
    Form,
    Line,
    Bell,
    MainText,
    Description
} from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Notifications({ navigation }) {

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
                    <Line></Line>
                </Header>

                <Form>
                    <Bell
                        source={require('../../assets/Perfil/bell.png')}
                    />
                    <MainText>Você não possui notificações</MainText>
                    <Description>Aqui aparecerão as notificações enviadas pelo app. Verifique também seu e-mail e WhatsApp.</Description>
                </Form>

            </Container>

        </KeyboardAwareScrollView>

    );
}

const styles = StyleSheet.create({
    inputFocused: {
        borderWidth: 2,
        borderRadius: 9,
        borderColor: 'grey',
        paddingLeft: 3,
    },
    input: {
        borderWidth: 2,
        borderRadius: 9,
        borderColor: '#0571ff',
        paddingLeft: 3,
    },
    background: {
        flex: 1,

    },
});