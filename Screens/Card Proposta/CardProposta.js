import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import {
    Header,
    Localizacao,
    Endereco,
    Aluguel,
    ValorTotal,
    Barra,
    Check,
    ProgressBar,
    LineBlue,
    Circle,
    BtnTeste,
    Teste,
    Etapas,
    Propose,
    ProposeStatus,
    Avaliacao,
    AvaliacaoStatus,
    Doc,
    DocStatus,
    Contract,
    ContractStatus
} from './style';
import HeaderMain from '../Header Main/HeaderMain';


export default function CardProposta({ navigation }) {
    const [Proposta, setProposta] = useState(false);
    const [Credito, setCredito] = useState(false);
    const [Documento, setDocumento] = useState(false);
    const [Contrato, setContrato] = useState(false);

    function estados2() {
        setProposta(true);
        setCredito(true);
        setDocumento(true);
        setContrato(true);
    }

    return (
        <Header>
            <HeaderMain />

            <Endereco>
                <Localizacao>Avenida Senador Queiros, Centro, São Paulo</Localizacao>
                <Aluguel>Aluguel R$1.400</Aluguel>
                <ValorTotal>Valor total R$1.887</ValorTotal>
                <Barra />

            </Endereco>

            <ProgressBar onTouchEnd={() => estados2()}>
                <Check
                    source={
                        Proposta
                            ? require('../../assets/ProgressBar/checked.png')
                            : require('../../assets/ProgressBar/blue_circle.png')
                    }
                />
                <LineBlue
                    source={
                        Proposta
                            ? require('../../assets/ProgressBar/dotted-barline.png')
                            : require('../../assets/ProgressBar/linha_azul.png')
                    }
                />

                <Circle
                    source={
                        Credito
                            ? require('../../assets/ProgressBar/checked.png')
                            : require('../../assets/ProgressBar/blue_circle.png')
                    }
                />

                <LineBlue
                    source={
                        Proposta
                            ? require('../../assets/ProgressBar/dotted-barline.png')
                            : require('../../assets/ProgressBar/linha_azul.png')
                    }
                />
                <Circle
                    source={
                        Documento
                            ? require('../../assets/ProgressBar/checked.png')
                            : require('../../assets/ProgressBar/blue_circle.png')
                    }
                />

                <LineBlue
                    source={
                        Proposta
                            ? require('../../assets/ProgressBar/dotted-barline.png')
                            : require('../../assets/ProgressBar/linha_azul.png')
                    }
                />
                <Circle
                    source={
                        Contrato
                            ? require('../../assets/ProgressBar/checked.png')
                            : require('../../assets/ProgressBar/blue_circle.png')
                    }
                />

            </ProgressBar>
            <Etapas>
                <Propose>Proposta</Propose>
                <ProposeStatus>Proposta aceita</ProposeStatus>
                <Avaliacao>Avaliação de crédito</Avaliacao>
                <AvaliacaoStatus>Aprovada</AvaliacaoStatus>
                <Doc>Ver ou enviar documentos</Doc>
                <DocStatus>Aprovados</DocStatus>
                <Contract>Ver modelo do contrato</Contract>
                <ContractStatus>Assinado</ContractStatus>

                {/* <BtnTeste onPress={() => estados2()}>
                    <Teste>useState</Teste>
                </BtnTeste> */}
            </Etapas>
        </Header >
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
});