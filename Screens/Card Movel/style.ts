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

export const Maps = styled.View`
    width: 110%;
    height: 110%;
    margin-top: 0%;
    margin-left: 0%;
    background-color: green;
    position: relative;
`;

export const MapaImage = styled.Image`
    width: 100%;
    height: 58%;
    borderTopRightRadius: 8;
    borderTopLeftRadius: 8;
    overflow: hidden;
    `;

export const ImovelType = styled.View`
    width: 100%;
    height: 15%;
    background-color: white;
    margin-top: 5%;
    margin-left: 0%;
    flexDirection: row;
    flexWrap: wrap;
    position: relative;
`;

export const TipoImovel = styled.Text`
    font-size: 13px;
    color: grey;
    font-weight: normal;
    margin-top: 1%;
    margin-left: 5%;
    z-index: 9999;
    position: relative;
`;


export const Endereco = styled.View`
    width: 60%;
    height: 25%;
    background-color: translucent;
    margin-left: -35%;
    position: relative;
`;

export const Localizacao = styled.Text`
    font-size: 13px;
    color: black;
    font-weight: 600;
    margin-top: -20%;
    margin-left: 5%;
    text-align: left;
    position: relative;
`;

export const Infos = styled.Text`
    font-size: 13px;
    color: grey;
    font-weight: normal;
    margin-top: 5%;
    margin-left: 5%;
    text-align: left;
    position: relative;
`;

export const Aluguel = styled.Text`
    font-size: 14px;
    color: grey;
    font-weight: normal;
    margin-top: 7%;
    margin-left: 5%;
    text-align: left;
    position: relative;
`;

export const ValorTotal = styled.Text`
    font-size: 15px;
    color: #07A844;
    font-weight: normal;
    margin-top: 5%;
    margin-left: 5%;
    text-align: left;
    position: relative;
`;

export const OriginalsView = styled.View`
    width: 25%;
    height: 40%;
    margin-top: 0%;
    margin-left: 40%;
    borderRadius: 8%;
    backgroundColor: #F98125;
    position: relative;
    align-items: center;
    align-content: center;
`;

export const Originals = styled.Text`
    font-size: 15px;
    color: white;
    font-weight: 700;
    margin-top: 6%;
    margin-left: 5%;
    text-align: center;
    position: relative;
`;

export const FavBtn = styled.TouchableOpacity`
    width: 14%;
    height: 11%;
    margin-top: -18%;
    margin-left: 75%;
    borderRadius: 23%;
    position: relative;
`;

export const FavIcon = styled.Image`
    width: 45px;
    height: 45px;
    position: relative;
`;

