import React, { Component } from "react";
import { Link } from "@version/react-router-v3";

class PostForm extends Component {
  render() {
    return (
      <div className="container">
        <h1>Nouveau post</h1>
        <form action="">
          <div className="form-group">
            <label>Titre</label>
            <input type="text" className="form-control" />
            <div></div>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" rows="3"></textarea>
            <div></div>
          </div>

          <div className="form-group">
            <label>Auteur</label>
            <input type="text" className="form-control" />
            <div></div>
          </div>
          <Link to={"/"} className="button_space">
            <button className="btn btn-danger">Retour</button>
          </Link>
          <button type="submit" className="btn btn-primary">
            Créer
          </button>
        </form>
      </div>
    );
  }
}

export default PostForm;
