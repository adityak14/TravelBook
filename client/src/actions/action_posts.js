import * as api from '../api';
import * as constants from '../constants/actionTypes'

export const getPosts = () => async(dispatch) => {
    try{
        const { data } = await api.fetchPosts();
        dispatch({ type: constants.FETCH_ALL, payload : data});
    }
    catch(error) {
        console.log(error.message);
    }
}
export const createPost = (post) => async(dispatch) => {
    try{
        const { data } = await api.createPost(post);
        dispatch({ type: constants.CREATE, payload : data});
    }
    catch(error) {
        console.log(error.message);
    }
}

export const updatePost = (id, post) => async(dispatch) => {
    try{
        const { data } = await api.updatePost(id, post);
        dispatch({ type: constants.UPDATE, payload : data});
    }
    catch(error) {
        console.log(error.message);
    }
}

export const deletePost = (id) => async(dispatch) => {
    try{
        await api.deletePost(id);
        dispatch({ type: constants.DELETE, payload : id});
    }
    catch(error) {
        console.log(error);
    }
}

export const likePost = (id) => async(dispatch) => {
    try{
        const { data } = await api.likePost(id);
        dispatch({ type: constants.LIKE, payload : data});
    }
    catch(error) {
        console.log(error.message);
    }
}