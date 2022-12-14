import React from 'react';
import { updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
 


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }, 
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;