import './post.css';
import React, { Component ,useState} from 'react';
// import useModal from './useModal';
import BasicModal from './modal';
import Button from '@mui/material/Button';
import CommentDropDown from '../commentDropdown';
import SearchBar from '../searchBar';
import Chatbox from '../ChatComponents/chatbox';

const query = ""
const searchbarStyling={
  position:"relative",
  top:"50",
  marginTop:"50"
}


const categories = ['Behavioral', 'LeetCode 75', 'Technical'];
class Render extends Component {
  render() {
    return (
      <div >
      
        <Feed />
        <Chatbox/>
      </div>
    );
  }
}
class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: JSON.parse(localStorage.getItem('posts')) || [],
      filteredPosts: []
    }
    this.handleNewPost = this.handleNewPost.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }
  handleNewPost(post) {
    var posts = this.state.posts.concat([post]);
    this.setState({posts: posts});
  }
  handleFilter(filter) {
    this.setState({
      filteredPosts: this.state.posts.filter((post) =>
        post.category.toUpperCase() === filter.toUpperCase() ||
          post.content.includes(filter)
       
      )
    });
  }
  render() {
    const posts = this.state.posts.reverse().map((post, index) =>
      <Post key={index} value={post} />
    );
    const filteredPosts = this.state.filteredPosts.map((post, index) =>
      <Post key={index} value={post} />
    );
    return (
      <div >
        <div style={searchbarStyling}><center><SearchBar/></center></div> 
         <PostForm onSubmit={this.handleNewPost} />
        <Filter onFilter={this.handleFilter} />
        {filteredPosts.length > 0 ? filteredPosts : posts}
       
      </div>
    )
  }
}
class Post extends Component {
  handleClick = () => {
  return (   <BasicModal/>)
  };
  render() {
    return (
      <div className="post" >
         <div className="heading">
        <span className="User">User:    Wayne</span><span className="label">{this.props.value.category}</span> </div>
        <span className="Title">   Title: {this.props.value.title}</span>
        <span className="content">{this.props.value.content}</span>
       
       
      <div className='comments'><BasicModal/> <CommentDropDown/></div>  
      </div>
      
    )
  }
}

class PostForm extends Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      title :"",
      category :"",
      content : ""
    }
  }


  async componentDidMount(title,category,content){
let id= 1
    const body = {id, title,content,category };
    console.log(body)
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }

try{
fetch('http://localhost:4005/addPost',options)
}
catch(error){
  console.log("error")
}
  }


  handleSubmit(event) {
    event.preventDefault();
    
    this.props.onSubmit({
      category: this.category.value,
      content: this.content.value,
      title: this.title.value,
     
    });
    this.category.value = categories[0];
    this.content.value = '';
    this.title.value = "";
    event.preventDefault();
  }
  
  render() {
    
    return (
    
      <div>
        <form className="form" onSubmit={this.handleSubmit} >
          <label>
            Category:
            <select className="category" ref={(input) =>  ({category:input})}>
              {categories.map((category, index) =>
                <option key={category} value={category}>{category}</option>
              )}
            </select>
          </label>
          <label>
            Title:
            <input type="text" className="titles" placeholder="Title" ref={(input) =>  ({title:input})} />
          </label>
          <label>
            Content:
            <input type="text" className="contents" placeholder="Question" ref={(input) =>  ({content:input})} />
          </label>
          <center><div> <button className="button-default" > Ask A Question!</button></div></center>
       
        </form>
      </div>
     
    )
    
  }
}
class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    if (event.target.value === '') {
      this.props.onFilter('');
      event.preventDefault()
    }
  }
  handleKeyUp(event) {
    if (event.key === 'Enter') {
      this.props.onFilter(this.state.value);
      event.preventDefault()
    }
  }
 
  render() {
    return (
      <div>
      </div>
    )
  }
}
export default Render;