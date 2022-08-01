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
    height: 33%;
    left: 0;
    right: 0;
    bottom: 0;
    top: -8px;
    flex: 1;
    align-self: center;
    background-color: red;
    position: absolute;
    flexDirection: row;
    z-index: 9999;
    flexWrap: wrap;
`;

export const Botoes = styled.View`
    height: 9%;
    width: 100%;
    background-color: white;
    margin-top: 57%;
    margin-left: 3%;
    align-self: center;
    flexDirection: row;
    flexWrap: wrap;
`;

export const FotosBTN = styled.TouchableOpacity`
    height: 100%;
    width: 27%;
    background-color: #2C599D;
    borderRadius: 8;
    margin-left: 5%;
    align-items: center;
    justify-content: center;
`;

export const TitleFoto = styled.Text`
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    color: white;
`;

export const VideoBTN = styled.TouchableOpacity`
    height: 100%;
    width: 27%;
    background-color: translucent;
    borderRadius: 8;
    margin-left: 3%;
    borderWidth: 2;
    borderColor: #2C599D;
    align-items: center;
    justify-content: center;
`;

export const TitleVideo = styled.Text`
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    color: #2C599D;
`;

export const MapaBTN = styled.TouchableOpacity`
    height: 100%;
    width: 27%;
    background-color: translucent;
    borderRadius: 8;
    margin-left: 3%;
    borderWidth: 2;
    borderColor: #2C599D;
    align-items: center;
    justify-content: center;
`;

export const TitleMapa = styled.Text`
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    color: #2C599D;
`;

export const Identidade = styled.View`
    height: 30%;
    width: 75%;
    background-color: translucent;
    margin-left: 7%;
    align-items: center;
    justify-content: center;
    margin-top: 1%;
`;

export const ImovelTitle = styled.Text`
    font-size: 21px;
    font-weight: 600;
    color: black;
    text-align: left;
    margin-top: -5%;
`;

export const Local = styled.Text`
    font-size: 12px;
    font-weight: 500;
    color: #808080;
    text-align: left;
    margin-top: 5%;
    margin-left: -12%;
`;

export const Line = styled.View`
    height: 0.5%;
    width: 90%;
    margin-left: 5%;
    margin-top: -4%;
    margin-bottom: 5%;
    background-color: #DBDBDB;
`;

export const Valores = styled.View`
    height: 58%;
    width: 90%;
    margin-left: 5%;
    background-color: translucent;
    flexDirection: column;
    flexWrap: wrap;
`;

export const AluguelView = styled.View`
    height: 15%;
    width: 100%;
    background-color: translucent;
    flexDirection: row;
    flexWrap: wrap;
`;

export const Aluguel = styled.Text`
    font-size: 12px;
    color: #808080;
    font-weight: 500;
    text-align: center;
`;

export const ValorAluguel = styled.Text`
    font-size: 12px;
    color: #808080;
    font-weight: 500;
    text-align: right;
    margin-left: 72%;
`;

export const CondoView = styled.View`
    height: 15%;
    width: 100%;
    background-color: translucent;
    flexDirection: row;
    flexWrap: wrap;
`;

export const Condo = styled.Text`
    font-size: 12px;
    color: #808080;
    font-weight: 500;
    text-align: center;
`;

export const ValorCondo = styled.Text`
    font-size: 12px;
    color: #808080;
    font-weight: 500;
    text-align: right;
    margin-left: 66%;
`;

export const IptuView = styled.View`
    height: 15%;
    width: 100%;
    background-color: translucent;
    flexDirection: row;
    flexWrap: wrap;
`;

export const Iptu = styled.Text`
    font-size: 12px;
    color: #808080;
    font-weight: 500;
    text-align: center;
`;

export const ValorIptu = styled.Text`
    font-size: 12px;
    color: #808080;
    font-weight: 500;
    text-align: right;
    margin-left: 78%;
`;

export const SeguroView = styled.View`
    height: 15%;
    width: 100%;
    background-color: translucent;
    flexDirection: row;
    flexWrap: wrap;
`;

export const Seguro = styled.Text`
    font-size: 12px;
    color: #808080;
    font-weight: 500;
    text-align: center;
`;

export const ValorSeguro = styled.Text`
    font-size: 12px;
    color: #808080;
    font-weight: 500;
    text-align: right;
    margin-left: 57%;
`;

export const TaxaView = styled.View`
    height: 15%;
    width: 100%;
    background-color: translucent;
    flexDirection: row;
    flexWrap: wrap;
`;

export const Taxa = styled.Text`
    font-size: 12px;
    color: #808080;
    font-weight: 500;
    text-align: center;
`;

export const ValorTaxa = styled.Text`
    font-size: 12px;
    color: #808080;
    font-weight: 500;
    text-align: right;
    margin-left: 62%;
`;

export const TrackLine = styled.View`
    height: 7%;
    width: 100%;
    margin-top: -7%;
    margin-bottom: 5%;
    overflow: hidden;
    background-color: translucent;
`;

export const Track = styled.Text`
    font-size: 15px;
    color: #DBDBDB;
    font-weight: bold;
    text-align: center;
`;

export const TotalView = styled.View`
    height: 15%;
    width: 100%;
    background-color: translucent;
    flexDirection: row;
    flexWrap: wrap;
`;

export const Total = styled.Text`
    font-size: 13px;
    color: #808080;
    font-weight: 700;
    text-align: center;
`;

export const ValorTotal = styled.Text`
    font-size: 14px;
    color: #808080;
    font-weight: 700;
    text-align: right;
    margin-left: 73%;
`;

export const BottomLine = styled.View`
    height: 0.5%;
    width: 100%;
    margin-top: -2%;
    margin-bottom: 5%;
    background-color: #DBDBDB;
`;

export const Agendar = styled.TouchableOpacity`
    height: 10%;
    width: 80%;
    margin-left: 10%;
    background-color: #193A6F;
    align-items: center;
    justify-content: center;
    borderRadius: 8;
`;

export const Proposta = styled.TouchableOpacity`
    height: 10%;
    width: 80%;
    margin-left: 10%;
    margin-top: 5%;
    background-color: translucent;
    align-items: center;
    justify-content: center;
    borderRadius: 8;
    borderWidth: 2px;
    borderColor: #2C599D;
`;

export const TitleAgendar = styled.Text`
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: white;
`;

export const TitleProposta = styled.Text`
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: #2C599D;
`;

export const Icones = styled.View`
    width: 70%;
    height: 30%;
    background-color: grey;
    flexDirection: row;
    flexWrap: wrap;
    margin-left: 15%;
`;

export const Ruler = styled.View`
    height: 40%;
    width: 25%;
    background-color: white;
    flexDirection: column;
    flexWrap: wrap;
`;

export const RulerIcon = styled.Image`
    width: 37px;
    height: 37px;
    transform: rotate(45deg);
    margin-left: 15%;
`;

export const RulerTitle = styled.Text`
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    color: #2C599D;
    margin-left: 15%;
`;

export const Bed = styled.View`
    height: 40%;
    width: 25%;
    background-color: white;
    flexDirection: column;
    flexWrap: wrap;
`;

export const BedIcon = styled.Image`
    width: 31px;
    height: 31px;
    margin-left: 15%;
    margin-top: 5%;
`;

export const BedTitle = styled.Text`
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    color: #2C599D;
    margin-left: 5%;
`;

export const Shower = styled.View`
    height: 40%;
    width: 25%;
    background-color: white;
    flexDirection: column;
    flexWrap: wrap;
`;

export const ShowerIcon = styled.Image`
    width: 26px;
    height: 26px;
    margin-left: 15%;
    margin-top: 6%;
`;

export const ShowerTitle = styled.Text`
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    color: #2C599D;
    margin-top: 11%;
`;

export const Car = styled.View`
    height: 40%;
    width: 25%;
    background-color: white;
    flexDirection: column;
    flexWrap: wrap;
`;

export const CarIcon = styled.Image`
    width: 24px;
    height: 24px;
    margin-left: 22%;
    margin-top: 10%;
    margin-bottom: 6%;
`;

export const CarTitle = styled.Text`
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    color: #2C599D;
    margin-left: 2%;
`;

export const Building = styled.View`
    height: 40%;
    width: 25%;
    background-color: white;
    flexDirection: column;
    flexWrap: wrap;
`;

export const BuildingIcon = styled.Image`
    width: 24px;
    height: 24px;
    margin-left: 22%;
    margin-top: 10%;
    margin-bottom: 6%;
`;

export const BuildingTitle = styled.Text`
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    color: #2C599D;
    margin-left: 2%;
`;

export const Pet = styled.View`
    height: 40%;
    width: 25%;
    background-color: white;
    flexDirection: column;
    flexWrap: wrap;
`;

export const PetIcon = styled.Image`
    width: 24px;
    height: 24px;
    margin-left: 22%;
    margin-top: 10%;
    margin-bottom: 6%;
`;

export const PetTitle = styled.Text`
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    color: #2C599D;
    margin-left: 2%;
`;

export const Mobilia = styled.View`
    height: 40%;
    width: 25%;
    background-color: white;
    flexDirection: column;
    flexWrap: wrap;
`;

export const MobiliaIcon = styled.Image`
    width: 24px;
    height: 24px;
    margin-left: 22%;
    margin-top: 10%;
    margin-bottom: 6%;
`;

export const MobiliaTitle = styled.Text`
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    color: #2C599D;
    margin-left: 2%;
`;

export const Metro = styled.View`
    height: 40%;
    width: 25%;
    background-color: white;
    flexDirection: column;
    flexWrap: wrap;
`;

export const MetroIcon = styled.Image`
    width: 24px;
    height: 24px;
    margin-left: 22%;
    margin-top: 10%;
    margin-bottom: 6%;
`;

export const MetroTitle = styled.Text`
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    color: #2C599D;
    margin-left: 2%;
`;