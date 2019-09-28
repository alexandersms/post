import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { readAllPost, deletePost } from "../actions/index";
import PostListItem from "../components/Post-list-item";
import { Link } from "@version/react-router-v3";
import "../style/Animation.css";
class PostList extends Component {
  state = {
    displayOnlyMines: false
  };

  componentWillMount() {
    this.props.readAllPost();
  }

  renderPosts() {
    const { posts } = this.props;
    let arrayPosts;
    if (posts) {
      if (this.state.displayOnlyMines) {
        arrayPosts = this.filterMyPosts(posts);
      } else {
        arrayPosts = posts;
      }
      return arrayPosts.map(post => (
        <PostListItem
          key={post.id}
          post={post}
          deletePostCallBack={post => this.deletePostCallBack(post)}
        />
      ));
    }
  }

  deletePostCallBack(post) {
    this.props.deletePost(post.id);
  }

  filterMyPosts(postlist) {
    return postlist.filter(post => {
      if (post.author === "Moi") {
        return true;
      } else {
        return false;
      }
    });
  }

  render() {
    console.log(this.props.posts);

    return (
      <div className="container">
        <h1 className="mb-3 mt-2">Liste des posts</h1>
        <input
          type="checkbox"
          onChange={e =>
            this.setState({
              displayOnlyMines: e.target.checked
            })
          }
        />{" "}
        Afficher uniquement mes posts
        <div className="button_add">
          <Link to={"create-post"}>
            <button className="btn btn-primary btn-circle btn-lg">+</button>
          </Link>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Titre</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.renderPosts()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ readAllPost, deletePost }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
