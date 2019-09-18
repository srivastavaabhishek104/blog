import createDataContext from './createDataContext';
const blogReducer = (state,action) => {
    switch(action.type) {
        case 'add_blogPost':
            return([...state,{
                id: state.length+1,
                title:action.payload.title,
                content:action.payload.content
            }]);

        case 'delete_blogPost':
            return state.filter(blogPost => blogPost.id !== action.payload)
        case 'edit_blogPost':
            return state.map(blogPost => {
                return blogPost.id === action.payload.id ? action.payload : blogPost; 
            })
        default:
            return state;
    }
};
const add_blogPost = dispatch => {
    return (title,content,callback) => {
        if (title !== "" && content!== "") { 
            dispatch({type:'add_blogPost',payload:{title,content}});
            if(callback) { 
                callback();
            }
        }
    }
    
};

const delete_blogPost = dispatch => {
    return (id) => {
        dispatch({type:'delete_blogPost',payload:id});
    }
    
};

const edit_blogPost = dispatch => {
    return (id,title,content,callback) => {
        if (id !== "" && title !== "" && content!== "") {
            dispatch({type:'edit_blogPost',payload:{id,title,content} });
            if(callback) { 
                callback();
            }
        }
    }
    
};

export const {Context,Provider} = createDataContext(
    blogReducer,
    {
        add_blogPost,
        delete_blogPost,
        edit_blogPost
    },
    []
    );
