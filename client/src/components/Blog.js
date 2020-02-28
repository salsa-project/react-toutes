import React from 'react'
import {connect} from 'react-redux';

import withColour from '../hoc/withColour';

function Blog(props){
  console.log(props);

  return(
    <div>
      <h1>{props.post.title}</h1>
      <p>{props.post.body}</p>
    </div>
  )
}

const mapStateToProps = (state, ownProps)=>{
  let id = ownProps.match.params.post_id;
  const post = ()=>{
     return{
    post: state.posts.find((post)=>{
      return post.id == id
    })
  }
  }
  return post

}

export default connect(mapStateToProps)(Blog)
