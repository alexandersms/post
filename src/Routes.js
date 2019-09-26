import React, { Component } from "react";
import PostList from "./containers/Post-list";
import PostForm from "./containers/Post-form";
import Post from "./containers/Post";
import NotFound from "./containers/NotFound";
import "./style/App.css";
import { Router, Route, browserHistory } from "@version/react-router-v3";

class Routes extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route exact path="/" component={PostList} />
          <Route path="/create-post" component={PostForm} />
          <Route path="/post/:id" component={Post} />
          <Route path="*" component={NotFound} />
        </Router>
      </div>
    );
  }
}

export default Routes;
