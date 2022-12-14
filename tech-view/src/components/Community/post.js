import './post.css';
import React, { Component ,useState} from 'react';
// import useModal from './useModal';


const categories = ['Behavioral', 'LeetCode 75', 'Technical', 'Other'];
// const [isShowing, setIsShowing] = useState(false);

// function toggle() {
//   setIsShowing(!isShowing);
// }



class Render extends Component {
  render() {
    return (
      <div className="App">
        <Feed />
      </div>
    );
  }
}

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // posts: JSON.parse(localStorage.clear('posts')) || [],
      filteredPosts: [],
      posts: localStorage.clear()
      
    }

    this.handleNewPost = this.handleNewPost.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleNewPost(post) {
    var posts = this.state.posts.concat([post]);
    this.setState({posts: posts});
    localStorage.setItem('posts', JSON.stringify(posts));
    localStorage.setItem('', JSON.stringify(""));
  
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
    const filteredPosts = this.state.filteredPosts.map((post, index) =>
    <Post key={index} value={post} />
  );
    const posts = this.state.posts.map((post, index) =>
      <Post key={index} value={post} />
    );

    return (
      <div className="feed">
         <PostForm onSubmit={this.handleNewPost} />
        <Filter onFilter={this.handleFilter} />
        {filteredPosts.length > 0 ? filteredPosts : posts}
       
      </div>
    )
  }
}

class Post extends Component {
  render() {
    return (
      
      <div className="post">
        <span className="User">User: Wayne</span>
        <span className="label">{this.props.value.category}</span>
       <center> <span className="Title">   Title: {this.props.value.title}</span></center>
        <span className="content">{this.props.value.content}</span>
        <span className="Time">{this.props.value.date}</span>
      
      </div>
    )
  }
}

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.onSubmit({
      category: this.category.value,
      content: this.content.value,
      title: this.title.value
    
    });
    this.category.value = categories[0];
    this.content.value = '';
    this.title.value = "";
    this.date.value = new Date().getDate
    event.preventDefault();
    this.localStorage.clear()
  }

  render() {
    return (
      
      <div className="post-form">
        <div className="button-default" >
        Create A New Post
      </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Category:
            <select ref={(input) => this.category = input}>
              {categories.map((category, index) =>
                <option key={category} value={category}>{category}</option>
              )}
            </select>
          </label>
          <label>
            Title:
            <input type="text" ref={(input) => this.title = input} />
          </label>
          <label>
            Content:
            <input type="text" ref={(input) => this.content = input} />
          </label>
          <button className="button">Submit</button>
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
    }
  }

  handleKeyUp(event) {
    if (event.key === 'Enter') {
      this.props.onFilter(this.state.value);
    }
  }

  render() {
    return (
      <div>
        <form>
          <input className="post" type="text" value={this.state.value}
                              //  onChange={this.handleChange}
                             
                               onSubmit={this.handleSubmit}
                               onKeyUp={this.handleKeyUp}
                               placeholder="What's on your mind?" />
        </form>
      </div>
    )
  }
}

export default Render;
