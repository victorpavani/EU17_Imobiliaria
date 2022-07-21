import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: white;
    padding: 15px;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.View`
    width: 110%;
    height: 22%;
    left: 0;
    right: 0;
    bottom: 0;
    top: -8px;
    flex: 1;
    align-self: center;
    background-color: white;
    position: absolute;
    flexDirection: row;
    z-index: 9999;
    flexWrap: wrap;
`;

export const Placeholder = styled.Text`
    font-size: 18px;
    color: #909090;
    margin-left: 22%;
    margin-top: -8%;

`;

export const SearchBTN = styled.TouchableOpacity`
    width: 88%;
    height: 25%;
    margin-top: 14%;
    margin-left: 5%;
    margin-bottom: 0%;
    position: relative;
    border-radius: 9;
    background-color: #F8F8F8;
`;

export const FilterIcon = styled.Image`
    width: 24px;
    height: 24px;
    margin-top: 6%;
    margin-left: 15%;
`;

export const MapIcon = styled.Image`
    width: 24px;
    height: 24px;
    margin-top: 3%;
    margin-left: 9%;
`;

export const SearchIcon = styled.Image`
    width: 28px;
    height: 28px;
    margin-top: 2%;
    margin-left: 7%;
`;

export const FilterBtn = styled.TouchableOpacity`
    width: 32%;
    height: 25%;
    margin-top: 3%;
    margin-left: 14%;
    position: relative;
    border-radius: 8;
    background-color: #2C599D;
`;

export const MapBtn = styled.TouchableOpacity`
    width: 32%;
    height: 25%;
    margin-left: 11%;
    margin-top: 3%;
    position: relative;
    border-radius: 8;
    background-color: translucent;
    border-width: 2px;
    border-color: #2C599D;
`;



export const TitleFilter = styled.Text`
    font-weight: bold;
    font-size: 15px;
    color: white;
    margin-left: 45%;
    margin-top: -15%;
`;

export const TitleMap = styled.Text`
    font-weight: bold;
    font-size: 15px;
    color: #2C599D;
    margin-left: 34%;
    margin-top: -14%;;
`;

export const InfoPesquisa = styled.View`
    width: 110%;
    height: 11%;
    padding-left: 5%;
    padding-top: 2%;
    backgroundColor: #F9FBFF;
    margin-top: 44%;
    margin-left: 2%;
    overflow: hidden;
`;

export const Cidade = styled.Text`
    font-weight: bold;
    font-size: 15px;
    color: black;
    margin-top: 0%;
    z-index: 9999;
`;

export const NumImoveis = styled.Text`
    font-weight: normal;
    color: grey;
    font-size: 15px;
`;

export const Ordenar = styled.TouchableOpacity`
    width: 80%;
    height: 55%;
    margin-top: 2%;
    margin-left: 0%;
    background-color: translucent;
    border-color: #2C599D;
    flexDirection: row;
`;

export const OrdenarText = styled.Text`
    font-weight: normal;
    color: black;
    font-size: 15px;
    margin-top: 0%;
`;

export const OrdenarBTNText = styled.Text`
    font-weight: bold;
    color: black;
    font-size: 17px;
    margin-left: 3%;
    margin-top: 0%;
`;

