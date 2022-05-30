import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/addPostReducer';
import NewPostForm from './NewPostForm';
import { Spinner } from './Spinner';

export const PostsList = () => {

     const posts = useSelector(state => state.post.posts) 
     const postStatus = useSelector(state => state.post.status)
     const error = useSelector(state => state.post.error)
     
    
    const dispach = useDispatch()

    useEffect(() => {
        if(postStatus === "idle") {
            dispach(fetchPosts())
        }
    }, [postStatus, dispach])

    let content 

    if(postStatus === "loading") {
       content = <Spinner/>
    } else if( postStatus === "succeeded") {
        let orderPosts = posts
            .slice()
            .sort((a,b) => b - a) //Отсортировать список постов по дате
        content = orderPosts.map(post => <NewPostForm post={post} key={post.id}/>)
    } else if(postStatus === "failed") {
        content = <div>{error}</div>
    }

    return (
        <div>{content}</div>
    )
}