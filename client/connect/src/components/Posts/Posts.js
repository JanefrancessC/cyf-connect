import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from './styles'
const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts)
  return (
   
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.Container} spacing={3} container alignItems="stretch">
        {posts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6}>
            <Post post={post} />
          </Grid>
        ))

        }

      </Grid>
    )
    
  );
};

export default Posts;

