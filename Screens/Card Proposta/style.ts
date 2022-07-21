import styled from 'styled-components/native';

export const Header = styled.View`
    box-shadow: 5px 10px 10px grey;
    elevation: 3;
    width: 90%;
    height: 450px;
    margin-top: 7%;
    flex: 1;
    border-radius: 8;
    align-self: center;
    background-color: white;
    align-items: center;
    position: relative;
    flexDirection: column;
    z-index: 9999;
    flexWrap: nowrap;
`;

export const Endereco = styled.View`
    width: 100%;
    height: 25%;
    background-color: translucent;
    margin-top: 1%;
    position: relative;
`;

export const Localizacao = styled.Text`
    font-size: 15px;
    color: #5B84C4;
    font-weight: 800;
    margin-top: 0%;
    margin-left: 3%;
    text-align: left;
    position: relative;
`;

export const Aluguel = styled.Text`
    font-size: 14px;
    color: #646464;
    font-weight: normal;
    margin-top: 2%;
    margin-left: 3%;
    text-align: left;
    position: relative;
`;

export const ValorTotal = styled.Text`
    font-size: 15px;
    color: #646464;
    font-weight: normal;
    margin-top: 2%;
    margin-left: 3%;
    text-align: left;
    position: relative;
`;

export const Barra = styled.View`
    width: 90%;
    height: 1%;
    margin-left: 5%;
    margin-top: 1%;
    position: relative;
    background-color: #C7C7C7;
`;

export const ProgressBar = styled.View`
    height: 35%;
    width: 7%;
    margin-top: -5%;
    margin-left: -70%
    margin-bottom: -5%;
    background-color: white;
    flexDirection: column;
    flexWrap: wrap;
    position: relative;
`;

export const Check = styled.Image`
    width: 20px;
    height: 20px;
    margin-bottom: 2px;
    z-index: 9999;
`;

export const LineBlue = styled.Image`
    width: 20px;
    height: 20px;
    margin-top: 1px;
    transform: rotate(135deg);
`;

export const Circle = styled.Image`
    width: 20px;
    height: 20px;
    margin-top: 2px;
    margin-bottom: 1px;
    z-index: 9999;
`;

export const BtnTeste = styled.TouchableOpacity`
    height: 15%;
    width: 25%;
    margin-top: 80%;
    margin-bottom: -80%;
    margin-left: 2%;
    background-color: purple;
    position: absolute;
    z-index: 99999;
`;

export const Teste = styled.Text`
    color: white;
    font-size: 12px;
    font-weight: 500;
`;

export const Etapas = styled.View`
    background-color: white;
    height: 37%;
    width: 70%;
    margin-left: 20%;
    margin-top: -41%;
    margin-bottom: 0%;
    flexDirection: column;
    flexWrap: wrap;
    position: relative;
`;

export const Propose = styled.Text`
    font-size: 15px;
    font-weight: 700;
    color: #5B84C4;
`;

export const ProposeStatus = styled.Text`
    font-size: 12px;
    font-weight: 500;
    padding-bottom: 5%;
    color: #ACACAC;
`;

export const Avaliacao = styled.Text`
    font-size: 15px;
    font-weight: 700;
    color: #5B84C4;
`;

export const AvaliacaoStatus = styled.Text`
    font-size: 12px;
    font-weight: 500;
    padding-bottom: 5%;
    color: #ACACAC;
`;

export const Doc = styled.Text`
    font-size: 15px;
    font-weight: 700;
    color: #5B84C4;
`;

export const DocStatus = styled.Text`
    font-size: 12px;
    font-weight: 500;
    padding-bottom: 4%;
    color: #ACACAC;
`;

export const Contract = styled.Text`
    font-size: 15px;
    font-weight: 700;
    color: #5B84C4;
`;

export const ContractStatus = styled.Text`
    font-size: 12px;
    font-weight: 500;
    color: #ACACAC;
`;