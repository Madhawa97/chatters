import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Input } from '@rneui/themed';
import { Button } from '@rneui/base';

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [imageURL, setImageURL] = useState('');

    return (
        <View style={styles.container}>
            <Input
                placeholder='Enter your name'
                label="Name"
                leftIcon={{ type: 'material', name: 'badge' }}
                value={name}
                onChangeText={text => setName(text)}
            />
            <Input
                placeholder='Enter your email'
                label="Email"
                leftIcon={{ type: 'material', name: 'email' }}
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Input
                placeholder='Enter your password'
                label="Password"
                leftIcon={{ type: 'material', name: 'lock' }}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            <Input
                placeholder='Enter your image url'
                label="Profile Picture"
                leftIcon={{ type: 'material', name: 'face' }}
                value={imageURL}
                onChangeText={text => setImageURL(text)}
            />

            <Button title="register" style={styles.button} />
        </View>
    )
}

export default RegisterScreen;


const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,
    },

    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    }
})