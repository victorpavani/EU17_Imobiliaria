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

export const NextBTN = styled.TouchableOpacity`
    position: absolute;
    width: 85%;
    height: 22%;
    margin-top: 5%;
    margin-left: 7%;
    background-color: black;
    color: black;
    align-items: center;
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
    width: 380px;
    height: 500px;
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


export const Description = styled.Text`
    height: 20%;
    width: 90%;
    font-size: 16px;
    color: grey;
    text-align: left;
    margin-left: 4%;
    margin-top: -10%;
    z-index: 999;
`;

export const NameInput = styled.TextInput`
    height: 100%;
    margin-top: 2%;
`;


export const InputView = styled.View`
    position: relative;
    width: 400px;
    height: 900px;
    margin-top: 20%;
    padding: 0px;
    background-color: white;
`;

export const NameView = styled.View`
    height: 15%;
    width: 90%;
    position: absolute;
    margin-left: 4%;
    margin-top: 6%;
`;

export const Options = styled.Text`
    font-size: 16px;
    color: black;
    text-align: left;
`;

export const GeneralOptions = styled.Text`
    font-size: 18px;
    padding-bottom: 10%;
    color: black;
    text-align: left;
`;

export const DescOption = styled.Text`
    font-size: 13px;
    color: grey;
    text-align: left;
`;

export const OptionTitle = styled.Text`
    font-size: 16px;
    fontWeight: bold;
    text-align: left;
`;

export const MensagensInformativas = styled.View`
    height: 25%;
    width: 90%;
    position: absolute;
    margin-left: 4%;
    margin-top: 41%;
`;

export const MensagensPromocionais = styled.View`
    height: 65%;
    width: 90%;
    position: absolute;
    margin-left: 4%;
    margin-top: 105%;
`;

export const Pesquisas = styled.View`
    height: 22%;
    width: 90%;
    position: absolute;
    margin-left: 4%;
    margin-top: 168%;
`;

export const ComunicacoesEspeciais = styled.View`
    height: 50%;
    width: 90%;
    position: absolute;
    margin-left: 4%;
    margin-top: 188%;
`;

export const SMS = styled.View`
    height: 20%;
    width: 100%;
    position: absolute;
    margin-top: 15%;
    flexDirection: row;
`;

export const Email = styled.View`
    height: 20%;
    width: 100%;
    position: absolute;
    margin-top: 30%;
    flexDirection: row;
`;

export const Napp = styled.View`
    height: 20%;
    width: 100%;
    position: absolute;
    margin-top: 45%;
    flexDirection: row;
`;

export const AllProducts = styled.View`
    height: 15%;
    width: 100%;
    position: absolute;
    margin-top: 5%;
    flexDirection: row;
    background-color: white;
`;

export const Produtos = styled.View`
    height: 40%;
    width: 100%;
    position: absolute;
    margin-top: 15%;
    flexDirection: row;
    background-color: translucent;
`;

export const SwProduto = styled.View`
    height: 20%;
    width: 100%;
    position: absolute;
    margin-top: 2%;
    flexDirection: row;
    margin-left: 3%;
    `;

export const Inquilino = styled.TouchableOpacity`
    height: 55%;
    width: 25%;
    background-color: translucent;
    border-width: 2px;
    border-color: #2C599D;
    margin-left: 5%;
    borderRadius: 8;
`;

export const Proprietario = styled.TouchableOpacity`
    height: 55%;
    width: 25%;
    background-color: translucent;
    border-width: 2px;
    border-color: #2C599D;
    margin-left: 5%;
    borderRadius: 8;
`;

export const Afiliado = styled.TouchableOpacity`
    height: 55%;
    width: 25%;
    background-color: translucent;
    border-width: 2px;
    border-color: #2C599D;
    margin-left: 5%;
    borderRadius: 8;
`;

export const Inquilino2 = styled.Text`
    font-size: 12px;
    color: #2C599D;
    font-weight: bold;
    text-align: center;
    margin-top: 7%;
`;