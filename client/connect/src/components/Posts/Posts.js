import { Container } from "@material-ui/core";
import React from "react";
import Post from "./Post/Post";
import useStyles from './styles'
const Posts = () => {
  const classes = useStyles();
  return (
   <Container>
    <h1>Posts</h1>
    <Post />
    <Post />
   </Container>
  );
};

export default Posts;

