import React, {Component} from 'react';
import {View, Text, Container, Header, Content, InputGroup, Icon, Input} from 'native-base';


export default class Input extends Component {
    render() {
        return (
            <InputGroup>
                <Icon name='ios-person' />
                <Input placeholder='EMAIL' />
            </InputGroup>
        )
    }
}