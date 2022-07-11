import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: white;
    padding: 15px;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.View`
    width: 120%;
    height: 15%;
    margin-top: -10%;
    background-color: white;
    borderWidth: 1px;
    borderColor: grey;
`;


export const TitleWts = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: black;
    text-align: center;
`;

export const NextBTN = styled.TouchableOpacity`
    position: absolute;
    width: 85%;
    height: 22%;
    margin-top: 5%;
    margin-left: 7%;
    background-color: #193A6F;
    border-radius: 8;
    color: black;
    align-items: center;
`;

export const ExitBTN = styled.TouchableOpacity`
    position: absolute;
    width: 85%;
    height: 22%;
    margin-left: 7%;
    margin-top: 20%;
    background-color: white;
    border-radius: 8;
    color: black;
    align-items: center;
    borderWidth: 2px;
    borderColor: #193A6F;
`;

export const NotificationBTN = styled.TouchableOpacity`
    position: absolute;
    width: 87%;
    height: 2%;
    margin-bottom: 15%;
    margin-left: 4%;
    margin-top: 97%;
    background-color: white;
    borderWidth: 2px;
    border-radius: 8;
    borderColor: #2C599D;
    color: black;
    align-items: center;
`;

export const Next = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: white;
    margin-top: 4%;
    text-align: center;
`;

export const Exit = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #193A6F;
    margin-top: 4%;
    text-align: center;
`;

export const Notification = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #2C599D;
    margin-top: -7%;
    text-align: center;
    margin-left: -4%;
`;

export const Footer = styled.View`
    width: 120%;
    height: 26%;
    background-color: white;
    position: absolute;
    bottom: 0;
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
    margin-top: 15%;
    margin-left: 8%;
`;

export const Form = styled.View`
    flex: 1;
    background-color: white;
    padding: 20px;
    align-items: center;
`;

export const TitleView = styled.View`
    height: 10%;
    width: 120%;
    margin-top: 10%;
    margin-right: 5%;
    background-color: white;
    align-items: left;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 23px;
    color: black;
    margin-left: 22%;
    margin-top: -5%;;
`;


export const Name = styled.Text`
    height: 6%;
    width: 33%;
    font-size: 17px;
    color: grey;
    text-align: left;
    margin-left: 4%;
    z-index: 999;
`;

export const Email = styled.Text`
    height: 6%;
    width: 40%;
    font-size: 17px;
    color: grey;
    text-align: left;
    margin-left: 4%;
    margin-top: 18%;
    z-index: 999;
`;

export const Cpf = styled.Text`
    height: 6%;
    width: 16%;
    font-size: 17px;
    color: grey;
    text-align: left;
    margin-left: 4%;
    margin-top: 18%;
    z-index: 999;
`;

export const AlternativeMail = styled.Text`
    height: 6%;
    width: 40%;
    font-size: 17px;
    color: grey;
    text-align: left;
    margin-left: 4%;
    margin-top: 20%;
    z-index: 999;
`;

export const NameInput = styled.TextInput`
    height: 100%;
    margin-top: 2%;
`;

export const MailInput = styled.TextInput`
    height: 100%;
    margin-left: 2%;
    margin-top: 2%;
`;

export const CpfInput = styled.TextInput`
    height: 100%;
    margin-left: 2%;
    margin-top: 15%;
`;

export const AlternativeInput = styled.TextInput`
    height: 100%;
    margin-left: 2%;
    margin-top: 15%;
`;


export const InputView = styled.View`
    position: absolute;
    flex: 1;
    width: 120%;
    height: 50%;
    margin-top: 20%;
    background-color: white;
`;

export const NameView = styled.View`
    height: 15%;
    width: 90%;
    position: absolute;
    margin-left: 4%;
    margin-top: 6%;
`;

export const MailView = styled.View`
    height: 14%;
    width: 92%;
    position: absolute;
    margin-left: 2%;
    margin-top: 28%;
`;

export const CpfView = styled.View`
    height: 13%;
    width: 93%;
    position: absolute;
    margin-left: 2%;
    margin-top: 40%;
`;

export const CpfMask = styled.View`
    height: 100%;
    width: 98%;
    border-radius: 9;
    backgroundColor: #073167;
    position: absolute;
    margin-left: 2%;
    margin-top: 15%;
    opacity: 0.2;
    z-index: 99999;
`;

export const NumberMask = styled.View`
    height: 100%;
    width: 98%;
    border-radius: 9;
    backgroundColor: #073167;
    position: absolute;
    margin-left: 2%;
    margin-top: 2%;
    opacity: 0.2;
    z-index: 99999;
`;

export const AlternativeView = styled.View`
    height: 13%;
    width: 93%;
    border-radius: 8;
    position: absolute;
    margin-left: 2%;
    margin-top: 65%;
`;

export const MailIcon = styled.Image`
    width: 26px;
    height: 26px;
    margin-top: 3%;
    margin-left: -80%;
    position: relative;
`;

export const NextIcon = styled.Image`
    width: 30px;
    height: 30px;
    margin-top: -8%;
    margin-left: 75%;
`;


