import styled from 'styled-components/native';

export const Header = styled.View`
    box-shadow: 5px 10px 10px grey;
    elevation: 3;
    width: 90%;
    height: 450px;
    margin-top: 7%;
    flex: 1;
    border-radius: 8%;
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
    margin-top: 5%;
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
    margin-top: 5%;
    position: relative;
    background-color: #C7C7C7;
`;

export const ProgressBar = styled.View`
    height: 60%;
    width: 20%;
    background-color: red;
    flexDirection: column;
    flexWrap: wrap;
    position: absolute;
`;

export const Check = styled.Image`
    width: 22px;
    height: 22px;
`;

export const LineBlue = styled.Image`
    width: 22px;
    height: 22px;
    margin-top: 1px;
    transform: rotate(135deg);
`;

