import React, { Component } from 'react'
import { Text, View,  StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    container:{
        flex:1
    }
})
export default class Index extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
