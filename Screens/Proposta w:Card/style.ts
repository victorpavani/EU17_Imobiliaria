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
    height: 23%;
    margin-top: -10%;
    background-color: white;
    borderWidth: 1px;
    borderColor: grey;
    flexDirection: row;
    flexWrap: wrap;
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
    width: 380px;
    height: 500px;
    background-color: translucent;
`;

export const Title = styled.Text`
    height: 15%;
    width: 60%;
    font-weight: bold;
    font-size: 23px;
    color: black;
    margin-left: 22%;
    margin-top: -10%;
    background-color: white;
`;


//Pagina de Visitas
export const AndamentoBTN = styled.TouchableOpacity`
    width: 32%;
    height: 22%;
    margin-top: 0%;
    margin-left: 16%;
    background-color: white;
    borderBottomWidth: 2px;
    borderBottomColor: #2C599D;
`;

export const TitleAndamento = styled.Text`
    font-weight: bold;
    font-size: 17px;
    color: #2C599D;
    margin-left: 4%;
    margin-top: 10%;
`;

export const CanceladaBTN = styled.TouchableOpacity`
    width: 25%;
    height: 22%;
    margin-top: 0%;
    margin-left: 10%;
    background-color: white;
    borderBottomWidth: 2px;
    borderBottomColor: #2C599D;
`;

export const TitleCancelada = styled.Text`
    font-weight: bold;
    font-size: 17px;
    color: #2C599D;
    margin-left: 8%;
    margin-top: 15%;
`;

export const Footer = styled.View`
    width: 120%;
    height: 26%;
    background-color: translucent;
    position: absolute;
    bottom: 0;
`;

export const NovaProposta = styled.TouchableOpacity`
    height: 22%;
    width: 70%;
    border-radius: 8;
    margin-left: 15%;
    margin-top: 20%;
    background-color: #193A6F;
`;

export const TextBTN = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: white;
    margin-left: 27%;
    margin-top: 4%;
`;
