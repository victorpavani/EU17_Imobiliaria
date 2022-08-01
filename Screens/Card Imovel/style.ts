import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: purple;
    padding: 15px;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.View`
    width: 120%;
    height: 25%;
    margin-top: -180%;
    background-color: white;
    align-items: center;
    flexDirection: row;
    flexWrap: wrap;
`;

export const Placeholder = styled.Text`
    font-size: 18px;
    color: #909090;
    margin-left: 22%;
    margin-top: -7%;

`;

export const SearchBTN = styled.TouchableOpacity`
    width: 80%;
    height: 24%;
    margin-top: 30%;
    margin-left: 9%;
    margin-bottom: -5%;
    position: relative;
    border-radius: 9;
    background-color: #F8F8F8;
`;

export const FilterIcon = styled.Image`
    width: 24px;
    height: 24px;
    margin-top: 7%;
    margin-left: 15%;
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
    margin-left: 13%;
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
    margin-top: -15%;;
`;

export const TitleMap = styled.Text`
    font-weight: bold;
    font-size: 15px;
    color: #2C599D;
    margin-left: 30%;
    margin-top: -16%;;
`;