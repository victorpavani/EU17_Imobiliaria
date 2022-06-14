import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: white;
    padding: 15px;
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


export const TitleWts = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: black;
    text-align: center;
`;

export const NextBTN = styled.TouchableOpacity`
    position: absolute;
    width: 85%;
    height: 28%;
    margin-bottom: 15%;
    margin-left: 7%;
    margin-top: 10%;
    background-color: black;
    color: black;
    align-items: center;
`;

export const Next = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: white;
    margin-top: 4%;
    text-align: center;
`;

export const Footer = styled.View`
    width: 120%;
    height: 20%;
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
    margin-top: 10%;
    margin-left: 10%;
`;

export const Form = styled.View`
    flex: 1;
    background-color: white;
    padding: 15px;
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
    font-size: 28px;
    color: black;
`;


export const Name = styled.Text`
    height: 6%;
    width: 33%;
    font-size: 16px;
    fontWeight: bold;
    color: grey;
    text-align: left;
    margin-left: 7%;
    margin-top: 2%;
    background-color: white;
    z-index: 999;
`;

export const Email = styled.Text`
    height: 6%;
    width: 12%;
    font-size: 16px;
    fontWeight: bold;
    color: grey;
    text-align: left;
    margin-left: 7%;
    margin-top: 12%;
    background-color: white;
    z-index: 999;
`;

export const Cpf = styled.Text`
    height: 6%;
    width: 9%;
    font-size: 16px;
    fontWeight: bold;
    color: grey;
    text-align: left;
    margin-left: 8%;
    margin-top: 14%;
    background-color: white;
    z-index: 999;
`;

export const NameInput = styled.TextInput`
    height: 100%;
`;

export const MailInput = styled.TextInput`
    height: 100%;
    margin-left: 2%;
`;

export const CpfInput = styled.TextInput`
    height: 100%;
    margin-left: 2%;
`;


export const InputView = styled.View`
    position: absolute;
    flex: 1;
    width: 120%;
    height: 50%;
    margin-top: 40%;
    background-color: white;
`;

export const NameView = styled.View`
    height: 13%;
    width: 90%;
    border-radius: 8px;
    position: absolute;
    margin-left: 5%;
    background-color: white;
    margin-top: 4%;
`;

export const MailView = styled.View`
    height: 13%;
    width: 93%;
    border-radius: 8px;
    position: absolute;
    margin-left: 3%;
    background-color: white;
    margin-top: 21%;
`;

export const CpfView = styled.View`
    height: 13%;
    width: 93%;
    border-radius: 8px;
    position: absolute;
    margin-left: 3%;
    background-color: white;
    margin-top: 40%;
`;
