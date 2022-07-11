import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: white;
    padding: 15px;
    justifyContent: center;
    align-items: center;
`;

export const Header = styled.View`
    width: 120%;
    height: 13%;
    margin-top: -5%;
    background-color: white;
    borderWidth: 1px;
    borderColor: grey;
`;

export const WhatsappBTN = styled.TouchableOpacity`
    position: absolute;
    borderWidth: 2px;
    borderColor: #2C599D;
    borderRadius: 8;
    width: 90%;
    height: 3%;
    margin-bottom: 50%;
    bottom: 0;
    background-color: white;
    color: black;
    align-items: center;
    flexDirection: row;
`;

export const TitleWts = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #2C599D;
    text-align: center;
`;

export const SmsBTN = styled.TouchableOpacity`
    position: absolute;
    width: 90%;
    height: 3%;
    margin-bottom: 65%;
    bottom: 0;
    borderRadius: 8;
    background-color: #193A6F;
    color: black;
    align-items: center;
`;

export const TitleSms = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: white;
    margin-top: 4%;
    text-align: center;
`;

export const Footer = styled.View`
    width: 100%;
    height: 20%;
    background-color: white;
    position: absolute;
    bottom: 0;
`;

export const Termos = styled.Text`
    font-size: 12px;
    padding: 5%;
    color: grey;
    margin-left: 3%;
    text-align: center;
`;

export const WppIcon = styled.Image`
    margin-left: 5%;
    margin-right: 5%;
    width: 24px;
    height: 24px;
`;

export const BackIcon = styled.Image`
    width: 28px;
    height: 28px;
    margin-top: 10%;
    margin-left: 10%;
`;

export const BackBtn = styled.TouchableOpacity`
    width: 30%;
    height: 30%;
    margin-top: 10%;
    margin-left: 10%;
`;

export const PhoneInfo = styled.View`
    flex: 1;
    background-color: white;
    padding: 15px;
    align-items: center;
`;

export const InfoText = styled.View`
    height: 10%;
    width: 120%;
    margin-top: 10%;
    margin-right: 5%;
    margin-left: 5%;
    background-color: white;
    align-items: center;
`;

export const Title = styled.Text`
    font-weight: bold;
    margin-left: 0%;
    font-size: 24px;
    color: #2C599D;
`;

export const Description = styled.Text`
    font-size: 17px;
    text-align: left;
    padding-right: 7%;
    margin-top: 3%;
    margin-left: 9%;
`;

export const Reminder = styled.Text`
    font-size: 14px;
    color: grey;
    margin-top: 33%;
    margin-right: 10%;
    padding-right: 5%;
    text-align: left;
`;

export const InputZone = styled.Text`
    height: 9%;
    font-size: 20px;
    fontWeight: bold;
    color: #2C599D;
    text-align: left;
    margin-left: 13%;
    margin-top: 1%;
    background-color: white;
    z-index: 999;
`;

export const InputNumber = styled.Text`
    height: 9%;
    font-size: 20px;
    fontWeight: bold;
    color: #2C599D;
    text-align: left;
    margin-left: 11%;
    margin-top: 1%;
    background-color: white;
    z-index: 999;
`;

export const Number = styled.TextInput`
    height: 100%;
    padding: 5%;
`;

export const Zone = styled.TextInput`
    height: 100%;
    padding: 15%;
`;

export const InputView = styled.View`
    position: absolute;
    flex: 1;
    width: 120%;
    height: 50%;
    margin-top: 43%;
    background-color: white;
    flexDirection: row;
`;

export const ZoneView = styled.View`
    height: 10%;
    width: 10%;
    borderColor: grey;
    position: absolute;
    margin-left: 10%;
    background-color: white;
    margin-top: 4%;
`;

export const NumberView = styled.View`
    height: 11%;
    width: 10%;
    border-radius: 8;
    position: absolute;
    margin-left: 32%;
    margin-top: 4%;
`;