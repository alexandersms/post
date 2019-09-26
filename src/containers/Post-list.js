import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { readAllPost, deletePost } from "../actions/index";
import PostListItem from "../components/Post-list-item";

class PostList extends Component {
  componentWillMount() {
    this.props.readAllPost();
  }

  renderPosts() {
    const { posts } = this.props;
    if (posts) {
      return posts.map(post => {
        return (
          <PostListItem
            key={post.id}
            post={post}
            deletePostCallBack={post => this.deletePostCallBack(post)}
          />
        );
      });
    }
  }

  deletePostCallBack(post) {
    this.props.deletePost(post.id);
  }

  render() {
    console.log(this.props.posts);

    return (
      <div className="container">
        <h1 className="mb-5 mt-5">Liste des posts</h1>
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
