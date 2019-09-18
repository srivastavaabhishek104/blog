import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity} from 'react-native'
import {Context} from '../context/BlogContext'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
 class ShowScreen extends Component {
    static contextType = Context;
    static navigationOptions =({ navigation }) => {
        return {
            headerRight:(
                 <TouchableOpacity onPress={()=>navigation.navigate('Edit', {id:navigation.getParam('id', 'NO-ID')})}>
                     <EvilIcons name="pencil" size={35} />
                 </TouchableOpacity>
             )
        }
    } 
    render() {
        const {state} = this.context;
        const id = this.props.navigation.getParam('id', 'NO-ID');
        const blogPost = state.find((blogPost)=> blogPost.id === id)
        
        return (
            <View>
                <Text> {blogPost.title}</Text>
                <Text> {blogPost.content}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})

export default ShowScreen;