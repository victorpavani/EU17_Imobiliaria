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
    width: 70%;
    height: 15%;
    margin-bottom: 15%;
    margin-left: 13%;
    margin-top: 10%;
    borderRadius: 8;
    background-color: #2C599D;
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
    margin-top: 2%;
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
    align-items: center;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 28px;
    color: #2C599D;
    margin-left: 5%;
`;

export const Description = styled.Text`
    font-size: 16px;
    padding-left: 5%;
    color: black;
    text-align: left;
    margin-top: 5%;
`;


export const Name = styled.Text`
    height: 11%;
    width: 35%;
    font-size: 16px;
    fontWeight: bold;
    color: #2C599D;
    text-align: left;
    margin-left: 13%;
    margin-top: 2%;
    padding-left: 1%;
    background-color: white;
    z-index: 999;
`;

export const Email = styled.Text`
    height: 11%;
    width: 12%;
    font-size: 16px;
    fontWeight: bold;
    color: #2C599D;
    padding-left: 1%;
    text-align: left;
    margin-left: 13%;
    margin-top: 10%;
    background-color: white;
    z-index: 999;
`;

export const Cpf = styled.Text`
    height: 11%;
    width: 9%;
    font-size: 16px;
    fontWeight: bold;
    padding-left: 1%;
    color: #2C599D;
    text-align: left;
    margin-left: 13%;
    margin-top: 12%;
    background-color: white;
    z-index: 999;
`;

export const NameInput = styled.TextInput`
    height: 105%;
`;

export const MailInput = styled.TextInput`
    height: 100%;
    margin-left: 0%;
`;

export const CpfInput = styled.TextInput`
    height: 100%;
    margin-left: 0%;
`;

export const InputView = styled.View`
    position: absolute;
    flex: 1;
    width: 120%;
    height: 50%;
    margin-top: 50%;
    background-color: white;
`;

export const NameView = styled.View`
    height: 13%;
    width: 77%;
    border-radius: 8;
    position: absolute;
    margin-left: 8%;
    background-color: white;
    margin-top: 4%;
`;

export const MailView = styled.View`
    height: 10%;
    width: 77%;
    border-radius: 8;
    position: absolute;
    margin-left: 8%;
    background-color: white;
    margin-top: 21%;
`;

export const CpfView = styled.View`
    height: 6%;
    width: 77%;
    border-radius: 8;
    position: absolute;
    margin-left: 8%;
    background-color: white;
    margin-top: 40%;
`;
