import React from 'react';
import {TextInput} from 'react-native';
import {View, Text} from "native-base";
import LinearGradient from 'react-native-linear-gradient';

export default class Input extends React.Component {
    render() {
        return (
            <View style={{width: '100%', paddingLeft: 30, paddingRight: 30}}>
                <LinearGradient
                    style={{width: '100%', height: 54, padding: 2, borderRadius: 6 }}
                    start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                    colors={['#43b496', '#f4ba2a']}
                >
                    <TextInput
                        style={{
                            height: 50,
                            color: '#fff',
                            fontSize: 18,
                            paddingLeft: 15,
                            paddingRight: 15,
                            borderRadius: 6,
                            backgroundColor: '#0a0a0a'
                        }}
                    />
                </LinearGradient>
            </View>
        )
    }
}