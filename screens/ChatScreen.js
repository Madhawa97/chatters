import { View, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState, useCallback, useEffect } from 'react'
import { auth, db } from '../firebase';
import { AntDesign } from '@expo/vector-icons';
import { Avatar } from '@rneui/base';
import { GiftedChat } from 'react-native-gifted-chat'

const ChatScreen = ({ navigation }) => {
    // gifted chat code from 'https://github.com/FaridSafi/react-native-gifted-chat#:~:text=const%20%5Bmessages%2C%20setMessages%5D%20%3D,))%0A%20%20%7D%2C%20%5B%5D)'
    const [messages, setMessages] = useState([]);

    //dummy data
    //
    // useEffect(() => {
    //     setMessages([
    //         {
    //             _id: 1,
    //             text: 'Hello developer',
    //             createdAt: new Date(),
    //             user: {
    //                 _id: 2,
    //                 name: 'React Native',
    //                 avatar: 'https://placeimg.com/140/140/any',
    //             },
    //         },
    //     ])
    // }, [])

    useLayoutEffect(() => {
        const unsubscribe = db.collection('chats').orderBy('createdAt', 'desc').onSnapshot(
            snapshot => setMessages(
                snapshot.docs.map(doc => ({
                    _id: doc.data()._id,
                    createdAt: doc.data().createdAt.toDate(),
                    text: doc.data().text,
                    user: doc.data().user,
                }))
            )
        )

        return unsubscribe;
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        const {
            _id,
            createdAt,
            text,
            user,
        }=messages[0]
        db.collection('chats').add({
            _id,
            createdAt,
            text,
            user,
        })
    }, [])


    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <Avatar
                        rounded
                        source={{
                            uri: auth?.currentUser?.photoURL
                        }}
                    />
                </View>
            ),
            headerRight: () => (
                <TouchableOpacity style={{ marginRight: 30 }} onPress={signOut}>
                    <AntDesign name="logout" size={24} color="black" />
                </TouchableOpacity>
            )
        })
    }, [])

    const signOut = () => {
        auth.signOut().then(() => {
            navigation.replace('Login');
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            user={{
                _id: auth?.currentUser?.email,
                name: auth?.currentUser?.displayName,
                avatar: auth?.currentUser?.photoURL,
            }}
        />

    )
}

export default ChatScreen;