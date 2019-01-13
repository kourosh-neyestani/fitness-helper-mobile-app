import React, {Component} from 'react';
import {Image, TextInput} from 'react-native';
import { Container, Header, Title, Content, View } from 'native-base';
import Input from './components/Input';

export default class App extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#0a0a0a', justifyContent: 'center', alignItems: 'center'}}>

                    <Image
                        style={{width: 100, height: 100, marginBottom: 45}}
                        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                    />

                    <Input/>
            </View>
        );
    }
}