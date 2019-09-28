import React, { Component } from "react";
import { Link } from "@version/react-router-v3";
import { Field, reduxForm } from "redux-form";

class PostForm extends Component {
  render() {
    return (
      <div className="container">
        <h1>Nouveau post</h1>
        <form action="">
          <div className="form-group">
            <label>Titre</label>
            <div>
              <Field
                name="title"
                component="input"
                type="text"
                placeholder="Entrez le titre"
                className="form-control"
              />
            </div>
            <div></div>
          </div>

          <div className="form-group">
            <label>Description</label>
            <div>
              <Field
                name="content"
                className="form-control"
                component="textarea"
                placeholder="Entrez une description"
              />
            </div>

            <div></div>
          </div>

          <div className="form-group">
            <label>Auteur</label>
            <div>
              <Field
                name="author"
                component="input"
                type="text"
                placeholder="Qui est l'auteur"
                className="form-control"
              />
            </div>
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

export default reduxForm({
  form: "simple" // a unique identifier for this form
})(PostForm);
