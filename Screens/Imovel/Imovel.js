import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import {
    Container,
    Header,
    FotosBTN,
    TitleFoto,
    VideoBTN,
    Botoes,
    MapaBTN,
    TitleVideo,
    TitleMapa,
    Identidade,
    Local,
    ImovelTitle,
    Line,
    Valores,
    Aluguel,
    AluguelView,
    ValorAluguel,
    CondoView,
    Condo,
    ValorCondo,
    IptuView,
    Iptu,
    ValorIptu,
    SeguroView,
    Seguro,
    ValorSeguro,
    TaxaView,
    Taxa,
    ValorTaxa,
    TrackLine,
    Track,
    TotalView,
    Total,
    ValorTotal,
    BottomLine,
    Agendar,
    TitleAgendar,
    Proposta,
    TitleProposta,
    Icones,
    Ruler,
    RulerIcon,
    RulerTitle,
    Bed,
    BedIcon,
    BedTitle,
    Shower,
    ShowerTitle,
    ShowerIcon,
    Car,
    CarTitle,
    CarIcon,
    Building,
    BuildingTitle,
    BuildingIcon,
    Pet,
    PetTitle,
    PetIcon,
    Mobilia,
    MobiliaTitle,
    MobiliaIcon,
    Metro,
    MetroTitle,
    MetroIcon
} from './style';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import ImovelCard from '../Card Imovel/ImovelCard';


export default function Imovel({ navigation }) {


    return (
        <Container>
            <Header>
                <ImovelCard />
            </Header>

            <ScrollView style={styles.ScrollView}>

                <Botoes>

                    <FotosBTN>
                        <TitleFoto>Fotos</TitleFoto>
                    </FotosBTN>

                    <VideoBTN>
                        <TitleVideo>Vídeo</TitleVideo>
                    </VideoBTN>

                    <MapaBTN>
                        <TitleMapa>Mapa</TitleMapa>
                    </MapaBTN>

                </Botoes>

                <Identidade>
                    <ImovelTitle>Kitnet/Studio para alugar com 1 quarto, 20m2</ImovelTitle>
                    <Local>Avenida Senador Queirós , Centro, São Paulo</Local>
                </Identidade>

                <Line></Line>

                <Valores>

                    <AluguelView>
                        <Aluguel>Aluguel</Aluguel>
                        <ValorAluguel>R$ 1500</ValorAluguel>
                    </AluguelView>

                    <CondoView>
                        <Condo>Condomínio</Condo>
                        <ValorCondo>R$ 730</ValorCondo>
                    </CondoView>

                    <IptuView>
                        <Iptu>IPTU</Iptu>
                        <ValorIptu>R$ 180</ValorIptu>
                    </IptuView>

                    <SeguroView>
                        <Seguro>Seguro de incêndio</Seguro>
                        <ValorSeguro>R$ 50</ValorSeguro>
                    </SeguroView>

                    <TaxaView>
                        <Taxa>Taxa de Serviço</Taxa>
                        <ValorTaxa>R$ 86</ValorTaxa>
                    </TaxaView>

                    <TrackLine>
                        <Track>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - </Track>
                    </TrackLine>

                    <TotalView>
                        <Total>Total</Total>
                        <ValorTotal>R$ 2546</ValorTotal>
                    </TotalView>

                    <BottomLine></BottomLine>
                </Valores>

                <Agendar>
                    <TitleAgendar>Agendar visita</TitleAgendar>
                </Agendar>

                <Proposta>
                    <TitleProposta>Fazer Proposta</TitleProposta>
                </Proposta>

                <Icones>
                    <Ruler>
                        <RulerIcon
                            source={require('../../assets/Imovel/rulers.png')}
                        />
                        <RulerTitle>22m</RulerTitle>
                    </Ruler>

                    <Bed>
                        <BedIcon
                            source={require('../../assets/Imovel/hotel-bed.png')}
                        />
                        <BedTitle>1 Quarto</BedTitle>
                    </Bed>

                    <Shower>
                        <ShowerIcon
                            source={require('../../assets/Imovel/shower.png')}
                        />
                        <ShowerTitle>1 Banheiro</ShowerTitle>
                    </Shower>

                    <Car>
                        <CarIcon
                            source={require('../../assets/Imovel/car.png')}
                        />
                        <CarTitle>Sem Vaga</CarTitle>
                    </Car>

                    <Building>
                        <BuildingIcon
                            source={require('../../assets/Imovel/building.png')}
                        />
                        <BuildingTitle>5 Andar</BuildingTitle>
                    </Building>

                    <Pet>
                        <PetIcon
                            source={require('../../assets/Imovel/paw.png')}
                        />
                        <PetTitle>Aceita pet</PetTitle>
                    </Pet>

                    <Mobilia>
                        <MobiliaIcon
                            source={require('../../assets/Imovel/sofa.png')}
                        />
                        <MobiliaTitle>Mobiliado</MobiliaTitle>
                    </Mobilia>

                    <Metro>
                        <MetroIcon
                            source={require('../../assets/Imovel/train.png')}
                        />
                        <MetroTitle>Metro próx.</MetroTitle>
                    </Metro>


                </Icones>


            </ScrollView>

        </Container>

    )
}

const styles = StyleSheet.create({
    inputFocused: {
        borderWidth: 1,
        borderColor: 'grey',
    },
    input: {
        borderWidth: 1,
        borderColor: '#0571ff'
    },
    background: {
        flex: 1,

    },

    ScrollView: {
        flex: 1,
        backgroundColor: '#F9FBFF',
        height: 100,
        width: 380,
        overflow: 'hidden',
    },
});