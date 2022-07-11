import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: purple;
    padding: 15px;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.View`
    width: 110%;
    height: 25%;
    left: 0;
    right: 0;
    bottom: 0;
    top: -8px;
    flex: 1;
    align-self: center;
    background-color: white;
    align-items: center;
    position: absolute;
    flexDirection: row;
    z-index: 9999;
    flexWrap: wrap;
`;

export const Placeholder = styled.Text`
    font-size: 18px;
    color: #909090;
    margin-left: 22%;
    margin-top: -7%;

`;

export const SearchBTN = styled.TouchableOpacity`
    width: 88%;
    height: 24%;
    margin-top: 33%;
    margin-left: 5%;
    margin-bottom: -5%;
    position: relative;
    border-radius: 9;
    background-color: #F8F8F8;
`;

export const FilterIcon = styled.Image`
    width: 24px;
    height: 24px;
    margin-top: 9%;
    margin-left: 15%;
`;


export const Maps = styled.View`
    width: 110%;
    height: 110%;
    margin-top: 0%;
    margin-left: 0%;
    background-color: green;
`;

export const MapaImage = styled.Image`
    width: 100%;
    height: 100%;
`;

export const MapIcon = styled.Image`
    width: 24px;
    height: 24px;
    margin-top: 7%;
    margin-left: 9%;
`;

export const SearchIcon = styled.Image`
    width: 28px;
    height: 28px;
    margin-top: 3%;
    margin-left: 7%;
`;

export const FilterBtn = styled.TouchableOpacity`
    width: 32%;
    height: 22%;
    margin-top: -20%;
    margin-left: 14%;
    border-radius: 8;
    background-color: #2C599D;
`;

export const MapBtn = styled.TouchableOpacity`
    width: 32%;
    height: 22%;
    margin-top: -20%;
    margin-left: 11%;
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
    margin-top: -17%;;
`;

export const TitleMap = styled.Text`
    font-weight: bold;
    font-size: 15px;
    color: #2C599D;
    margin-left: 34%;
    margin-top: -17%;;
`;


