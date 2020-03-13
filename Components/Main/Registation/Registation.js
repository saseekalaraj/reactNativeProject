/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Modal,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        overflow: 'scroll'
    },
    logoStyle: {
        textAlign: 'center',
        fontSize: 25,
        color: '#000',
        marginTop: 25,
    },
    logoContainer: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '#fff',
        zIndex: 1
    },
    cardContainer: {
        flexDirection: 'row',
        flex: 6,
        backgroundColor: 'transparent',
        zIndex: -500
    },
    card: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#222',
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        elevation: 23,
        position: 'relative',
        marginTop: 5,
        marginBottom: 10,
    },
    withoutCard: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginTop: -50
    },
    footerContainer: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'transparent',
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 400,
        width: '85%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: 100,
        marginLeft: 35,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        elevation: 23,
        overflow: 'scroll'
    },
    triangle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 0,
        height: 0,
        borderLeftWidth: 50,
        borderLeftColor: 'transparent',
        borderRightWidth: 50,
        borderRightColor: 'transparent',
        borderBottomWidth: 50,
        borderBottomColor: '#fff',
        backgroundColor: 'transparent',
        marginTop: -10,
        marginLeft: -100,
        zIndex: -100,
    },
    loginText: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 50,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {
            width: -1,
            height: 1,
        },
        textShadowRadius: 5,
    },
    footerText: {
        color: '#009952',
        padding: 20,
        alignSelf: 'center',
        marginLeft: 50,
        fontSize: 18,
    },
    signupColor: {
        color: '#d93275',
        fontSize: 19,
        letterSpacing: 1.5,
    },
    inputContainer: {
        marginTop: 5,
        flexDirection: 'row',
    },

    searchIcon: {
        marginTop: 0,
        alignSelf: 'flex-end',
    },
    input: {
        backgroundColor: 'transparent',
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: '#999',
        color: '#454444',
        alignSelf: 'center',
        marginTop: 10,
    },
    forgotPassword: {
        color: '#949494',
        fontSize: 17,
        marginLeft: 110,
        marginTop: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    buttonPosition: {
        alignItems: 'center',
        width: '100%',
        marginTop: 50,
    },
    button: {
        height: 50,
        width: '50%',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        elevation: 23,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
    signupText: {
        color: '#636363',
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 58,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {
            width: -1,
            height: 1,
        },
        textShadowRadius: 5,
    },
    heading: {
        fontSize: 18,
        fontWeight: '500',
        textShadowOffset: {
            width: -1,
            height: 1,
        },
        textShadowRadius: 5,
        padding: 10,
        marginTop: 60
    }
});
class App extends Component {
    state = {
        visible: false,
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logoStyle}>Sagarika Driving School</Text>
                    {/* <Text>Enjoy the learning Experience</Text> */}
                </View>
                <View style={styles.cardContainer}>

                    <Modal visible={this.state.visible} transparent>
                        <View style={styles.modal}>
                            {/* <View style={styles.triangle} /> */}
                            <Text style={styles.heading}>Registation</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Name"
                                    underlineColorAndroid="transparent"
                                    autoCompleteType="name"
                                />
                                {/* <Icon style={styles.searchIcon} name="user" size={20} color="#000" /> */}
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Email"
                                    underlineColorAndroid="transparent"
                                    autoCompleteType="email"
                                />
                                {/* <Icon style={styles.searchIcon} name="rocket" size={20} color="#000" /> */}
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Username"
                                    underlineColorAndroid="transparent"
                                    autoCompleteType="username"
                                />
                                {/* <Icon style={styles.searchIcon} name="rocket" size={20} color="#000" /> */}
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Password"
                                    underlineColorAndroid="transparent"
                                    autoCompleteType="password"
                                />
                                {/* <Icon style={styles.searchIcon} name="rocket" size={20} color="#000" /> */}
                            </View>
                            <View style={styles.buttonContainer}>
                                <View style={styles.buttonPosition}>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={styles.buttonText}>Registation</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
                <View style={styles.footerContainer}>
                    <Text style={styles.footerText}>
                        Do you have an Account?
            <Text style={styles.signupColor}>LOGIN</Text>
                    </Text>
                </View>
            </View>
        );
    }
}
export default App;
