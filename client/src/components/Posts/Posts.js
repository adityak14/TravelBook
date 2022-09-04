import React from 'react'
import { useSelector } from 'react-redux';
import Post from '../Posts/Post/Post';
import useStyles from './styles'

export default function Posts() {
const classes = useStyles();
const posts = useSelector((state) => state.reducer_posts)
  return (
    <div>
        Posts
        <Post />
        <Post />
    </div>
  )
}
