import React, { useState, useCallback, useEffect } from 'react'
import { TextInput, View,Text } from 'react-native'
import { Bubble, GiftedChat, Send, Day } from 'react-native-gifted-chat'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';
const Chatting = () => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages),
        )
    }, [])

    return (
        <SafeAreaProvider style={{ backgroundColor: "#111111" }}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
                // Customize chat bubble
                renderBubble={(props) => (
                    <Bubble
                        {...props}
                        wrapperStyle={{
                            right: {
                                backgroundColor: '#FFD700', // Yellow for outgoing messages
                                borderRadius: 10,
                                padding: 5,
                            },
                            left: {
                                backgroundColor: '#fff',    // White for incoming messages
                                borderRadius: 10,
                                padding: 5,
                            },
                        }}
                        textStyle={{
                            right: { color: '#000' },    // Black text for outgoing
                            left: { color: '#000' },     // Black text for incoming
                        }}
                    />
                )}

                // Customize the day (Today) label
                renderDay={(props) => (
                    <Day
                        {...props}
                        textStyle={{ color: '#FFD700', fontWeight: 'bold', fontSize: 16 }} // Yellow text for day indicator
                    />
                )}

                // Customize the send button
                renderSend={(props) => (
                    <Send {...props}>
                        <View style={{ marginRight: 10, marginBottom: 5 }}>
                            <Icon name="send" size={28} color="#FFD700" /> 
                        </View>
                    </Send>
                )}

                // Customize the input toolbar
                renderInputToolbar={(props) => (
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#333',    // Dark background for input
                        borderRadius: 1,
                        padding: 10,
                        
                    }}>
                        <TextInput
                            style={{
                                flex: 1,
                                color: '#fff',           // White text color in input
                                backgroundColor: '#444', // Darker background for the input field
                                borderRadius: 25,
                                paddingLeft: 10,
                            }}
                            placeholder="Write your message"
                            placeholderTextColor="#999" // Placeholder text color
                            {...props.textInputProps}
                        />
                        {props.text && (
                            <TouchableOpacity onPress={() => props.onSend({ text: props.text })}>
                                <Icon name="paper-plane" size={28} color="#FFD700" /> 
                            </TouchableOpacity>
                        )}
                    </View>
                )}

                // Timestamp customization
                renderFooter={() => (
                    <View style={{ padding: 5, alignItems: 'flex-end' }}>
                        <Text style={{ color: '#999', fontSize: 10 }}>09:25 AM</Text>
                    </View>
                )}

            />
        </SafeAreaProvider>
    )
}
export default Chatting