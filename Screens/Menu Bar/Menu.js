import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
    NextBTN
} from './style'


export default function Confirmation({ navigation }) {
    const [isInputFocused, setInputFocused] = useState({
        input1: false, input2: false, input3: false,
        input4: false, input5: false, input6: false
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
                        />
                    </ZoneView>

                    <Num2>
                        <Zone2
                            keyboardType="numeric"
                            maxLength={1}
                            style={isInputFocused.input2 ? styles.input : styles.inputFocused}
                            onChangeText={() => { }}
                            onFocus={() => setInputFocused((prev) => ({ ...prev, input2: true }))}
                            onBlur={() => setInputFocused((prev) => ({ ...prev, input2: false }))}
                        />
                    </Num2>


                    <Num3>
                        <Zone3
                            keyboardType="numeric"
                            maxLength={1}
                            style={isInputFocused.input3 ? styles.input : styles.inputFocused}
                            onChangeText={() => { }}
                            onFocus={() => setInputFocused((prev) => ({ ...prev, input3: true }))}
                            onBlur={() => setInputFocused((prev) => ({ ...prev, input3: false }))}
                        />
                    </Num3>

                    <Num4>
                        <Zone4
                            keyboardType="numeric"
                            maxLength={1}
                            style={isInputFocused.input4 ? styles.input : styles.inputFocused}
                            onChangeText={() => { }}
                            onFocus={() => setInputFocused((prev) => ({ ...prev, input4: true }))}
                            onBlur={() => setInputFocused((prev) => ({ ...prev, input4: false }))}
                        />
                    </Num4>

                    <Num5>
                        <Zone5
                            keyboardType="numeric"
                            maxLength={1}
                            style={isInputFocused.input5 ? styles.input : styles.inputFocused}
                            onChangeText={() => { }}
                            onFocus={() => setInputFocused((prev) => ({ ...prev, input5: true }))}
                            onBlur={() => setInputFocused((prev) => ({ ...prev, input5: false }))}
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
                        />
                    </Num6>

                </InputView>

                <Received>
                    <TextReceived>Não recebi o código</TextReceived>
                </Received>

            </PhoneInfo>

            <Footer>

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
