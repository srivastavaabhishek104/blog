import React, { Component } from 'react'
import BlogPostForm from '../components/BlogPostForm';
import {Context} from '../context/BlogContext'
class CreateScreen extends Component {
    static contextType = Context;
    render() {
        const {navigation} = this.props;
        const {add_blogPost} = this.context;
        return (
            <BlogPostForm onSubmit={
                (title,content) => {
                    add_blogPost(title,content,()=>navigation.navigate('Index'))   
                }
            }/>
        )
    }
}


export default CreateScreen;
