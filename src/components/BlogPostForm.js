import React, { Component } from 'react'
import { Text, StyleSheet, View,TextInput,Button } from 'react-native'

class BlogPostForm extends Component {
    static defaultProps = {
        initialValues: {
            title: "",
            content: ""
        }
    }
    state = {
        title: "",
        content: ""
    }

    setTitle = (title) => {
        this.setState({
            title
        })
    }

    setContent = (content) => {
        this.setState({
            content
        })
    }
    componentDidMount() {
        const {initialValues} = this.props;
        this.setState({
            title: initialValues.title,
            content: initialValues.content
        });
    }
    render() {
        const {title,content} = this.state; 
        return (
            <View>
                <Text style={styles.label}> Enter Title:</Text>
                <TextInput 
                    style={styles.input} 
                    value={this.state.title} 
                    onChangeText={(text)=>this.setTitle(text)}
                />
                <Text style={styles.label}> Enter Content:</Text>
                <TextInput style={styles.input} 
                    value={this.state.content} 
                    onChangeText={(text)=>this.setContent(text)}
                />
                <Button 
                    title="Add Post" 
                    onPress={()=>this.props.onSubmit(title,content)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input:{
        fontSize:18,
        borderWidth:1,
        marginBottom:15,
        padding:5,
        margin:5
    },
    label:{ 
        fontSize:20,
        marginBottom:5,
        marginLeft:5
    }
});

export default BlogPostForm;