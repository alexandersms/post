import React from "react";
import { Link } from "@version/react-router-v3";
import { Button } from "react-bootstrap";

const PostListItem = props => {
  const { post } = props;
  return (
    <tr>
      <td>
        <Link to={`post/${post.id}`}>{post.title}</Link>
      </td>
      <td>
        <Button
          className="remove-btn"
          variant="danger"
          size="md"
          onClick={() => deletePost(post)}
        >
          &times;
        </Button>
      </td>
    </tr>
  );

  function deletePost(post) {
    props.deletePostCallBack(post);
  }
};

export default PostListItem;
