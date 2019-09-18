import React, { Component } from 'react'
import { Text, View,FlatList,StyleSheet,TouchableOpacity } from 'react-native'
import {Context} from '../context/BlogContext';
import Feather from 'react-native-vector-icons/Feather';
class IndexScreen extends Component {
    static contextType = Context;
    static navigationOptions =({ navigation }) => {
        return {
            headerRight:(
                <TouchableOpacity onPress={()=>navigation.navigate('Create')}>
                    <Feather name="plus" size={30} />
                </TouchableOpacity>
            )
        }
    }  
    render() {
        console.log(this.context.state);
        return (
            <View>
                <FlatList 
                    data = {this.context.state}
                    keyExtractor = {blogPost => blogPost.id.toString()}
                    renderItem = {({item})=> {
                        return <TouchableOpacity onPress={()=>this.props.navigation.navigate('Show',{id:item.id})}> 
                            <View style= {styles.row}>
                                <Text style= {styles.title}>{item.title}</Text>
                                <TouchableOpacity onPress={()=>this.context.delete_blogPost(item.id)}> 
                                    <Feather name="trash" style= {styles.icon}/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical:20,
        borderTopWidth:1,
        borderColor:'gray',
        paddingHorizontal:10
    },
    title: {
        fontSize:18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;
