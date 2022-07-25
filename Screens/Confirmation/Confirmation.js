import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import {
    Container,
    Header, Footer,
    BackIcon, BackBtn,
    Title,
    Description,
    PhoneInfo,
    Zone,
    InputView,
    ZoneView,
    InfoText,
    Cellphone,
    Num2,
    Num3,
    Num4,
    Num5,
    Num6,
    Zone2,
    Zone3,
    Zone4,
    Zone5,
    Zone6,
    Received,
    TextReceived,
    Next,
    NextBTN,
    Waiting
} from './style'
import CountDownTimer from 'react-native-countdown-timer-hooks';


export default function Confirmation({ navigation }) {
    const [isInputFocused, setInputFocused] = useState({
        input1: false, input2: false, input3: false,
        input4: false, input5: false, input6: false
    });

    const refInput2 = useRef();
    const refInput3 = useRef();
    const refInput4 = useRef();
    const refInput5 = useRef();
    const refInput6 = useRef();

    //timer
    const refTimer = useRef();
    // For keeping a track on the Timer
    const [timerEnd, setTimerEnd] = useState(false);

    const timerCallbackFunc = (timerFlag) => {
        // Setting timer flag to finished
        setTimerEnd(timerFlag);
        console.warn(
            'You can alert the user by letting him know that Timer is out.',
        );
    };

    return (
        <Container>
            <Header>
                <BackBtn onPress={() => navigation.goBack()}>
                    <BackIcon
                        source={require('../../assets/Icons/arrow-left.png')}
                    />
                </BackBtn>
            </Header>

            <PhoneInfo>
                <InfoText>

                    <Title>Digite o código de acesso</Title>

                    <Description>Insira o código de 6 digitos que enviamos para o número
                    </Description>
                    <Cellphone>+5519995387196</Cellphone>

                </InfoText>

                <InputView>

                    <ZoneView>
                        <Zone
                            keyboardType="numeric"
                            maxLength={1}
                            onFocus={() => setInputFocused((prev) => ({ ...prev, input1: true }))}
                            onBlur={() => setInputFocused((prev) => ({ ...prev, input1: false }))}
                            style={isInputFocused.input1 ? styles.input : styles.inputFocused}
                            onChangeText={(text) => {
                                if (text.length === 1) {
                                    refInput2.current.focus();
                                }
                            }}
                            onSubmitEditing={() => refInput2.current.focus()}
                        />
                    </ZoneView>

                    <Num2>
                        <Zone2
                            keyboardType="numeric"
                            maxLength={1}
                            style={isInputFocused.input2 ? styles.input : styles.inputFocused}
                            onChangeText={(text) => {
                                if (text.length === 1) {
                                    refInput3.current.focus();
                                }
                            }}
                            onFocus={() => setInputFocused((prev) => ({ ...prev, input2: true }))}
                            onBlur={() => setInputFocused((prev) => ({ ...prev, input2: false }))}
                            ref={refInput2}
                            onSubmitEditing={() => refInput3.current.focus()}
                        />
                    </Num2>


                    <Num3>
                        <Zone3
                            keyboardType="numeric"
                            maxLength={1}
                            style={isInputFocused.input3 ? styles.input : styles.inputFocused}
                            onChangeText={(text) => {
                                if (text.length === 1) {
                                    refInput4.current.focus();
                                }
                            }}
                            onFocus={() => setInputFocused((prev) => ({ ...prev, input3: true }))}
                            onBlur={() => setInputFocused((prev) => ({ ...prev, input3: false }))}
                            ref={refInput3}
                            onSubmitEditing={() => refInput4.current.focus()}
                        />
                    </Num3>

                    <Num4>
                        <Zone4
                            keyboardType="numeric"
                            maxLength={1}
                            style={isInputFocused.input4 ? styles.input : styles.inputFocused}
                            onChangeText={(text) => {
                                if (text.length === 1) {
                                    refInput5.current.focus();
                                }
                            }}
                            onFocus={() => setInputFocused((prev) => ({ ...prev, input4: true }))}
                            onBlur={() => setInputFocused((prev) => ({ ...prev, input4: false }))}
                            ref={refInput4}
                            onSubmitEditing={() => refInput5.current.focus()}
                        />
                    </Num4>

                    <Num5>
                        <Zone5
                            keyboardType="numeric"
                            maxLength={1}
                            style={isInputFocused.input5 ? styles.input : styles.inputFocused}
                            onChangeText={(text) => {
                                if (text.length === 1) {
                                    refInput6.current.focus();
                                }
                            }}
                            onFocus={() => setInputFocused((prev) => ({ ...prev, input5: true }))}
                            onBlur={() => setInputFocused((prev) => ({ ...prev, input5: false }))}
                            ref={refInput5}
                            onSubmitEditing={() => refInput6.current.focus()}
                        />
                    </Num5>

                    <Num6>
                        <Zone6
                            keyboardType="numeric"
                            maxLength={1}
                            style={isInputFocused.input6 ? styles.input : styles.inputFocused}
                            onChangeText={() => { }}
                            onFocus={() => setInputFocused((prev) => ({ ...prev, input6: true }))}
                            onBlur={() => setInputFocused((prev) => ({ ...prev, input6: false }))}
                            ref={refInput6}
                        />
                    </Num6>

                </InputView>

                <Received onPress={() => {
                    setTimerEnd(false);
                    refTimer.current.resetTimer();
                }}>
                    <TextReceived
                        style={{ display: timerEnd ? 'flex' : 'none' }}
                    >Não recebi o código</TextReceived>
                </Received>

            </PhoneInfo>

            <Footer>
                <Waiting style={{ display: timerEnd ? 'none' : 'flex' }}>para solicitar novamente</Waiting>
                <View style={{ display: timerEnd ? 'none' : 'flex' }}>
                    <CountDownTimer
                        ref={refTimer}
                        timestamp={60}
                        timerCallback={timerCallbackFunc}
                        containerStyle={{
                            height: 36,
                            width: 70,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'translucent',
                            marginLeft: 185,
                            marginTop: -55,
                            zIndex: 99999,
                        }}
                        textStyle={{
                            fontSize: 17,
                            color: '#2C599D',
                            fontWeight: 'bold',
                            letterSpacing: 0.25,
                        }}
                    />
                </View>

                <NextBTN onPress={() => navigation.navigate('Register')}>
                    <Next>Confirmar</Next>
                </NextBTN>

            </Footer>



        </Container>
    );
}

const styles = StyleSheet.create({
    inputFocused: {
        borderWidth: 2,
        borderRadius: 8,
        borderColor: 'grey'
    },
    input: {
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#0571ff'
    }
});
