import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Swiper from "react-native-swiper";

export default function HeaderMain() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Swiper
                dot={
                    <View
                        style={{
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            margin: 5,
                            marginTop: '0%',
                            backgroundColor: 'white'
                        }}></View>
                }
                activeDot={
                    <View style={{
                        width: 12,
                        height: 12,
                        borderRadius: 8,
                        margin: 5,
                        marginTop: '0%',
                        backgroundColor: '#2C599D'
                    }}>

                    </View>
                }
            >
                <Image
                    source={require('../../assets/varanda.jpeg')}
                    resizeMode="center"
                    style={styles.image}
                />
                <Image
                    source={require('../../assets/sala.jpeg')}
                    resizeMode="center"
                    style={styles.image}
                />
                <Image
                    source={require('../../assets/apartamentoSP.jpeg')}
                    resizeMode="center"
                    style={styles.image}
                />
            </Swiper>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'translucent',
    },
    image: {
        resizeMode: "stretch",
        width: '100%',
        height: '100%',
        marginTop: 0,
        marginLeft: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    }
})