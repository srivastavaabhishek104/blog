import React, { Component } from 'react'
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

class EditScreen extends Component {
    static contextType = Context;
    render() {
        const id = this.props.navigation.getParam('id', 'NO-ID');
        const blogPost = this.context.state.find((blogPost)=> blogPost.id === id)
        const {edit_blogPost} = this.context;
        return (
            <BlogPostForm
                initialValues = {{title:blogPost.title,content:blogPost.content}}
                onSubmit={(title,content) => {
                    //console.log(title,content);
                    edit_blogPost(id,title,content,()=>this.props.navigation.pop())
                }}
            />
        )
    }
}

export default EditScreen;
