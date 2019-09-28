import React, { Component } from "react";
import { Link } from "@version/react-router-v3";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createPost } from "../actions/index";
import { browserHistory } from "@version/react-router-v3";

const formConfig = {
  form: "createPostForm",
  fields: ["title", "content", "author"],
  validate: validate,
  initialValues: { author: "Moi" }
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ createPost }, dispatch)
});
class PostForm extends Component {
  render() {
    const { fields, handleSubmit, errors } = this.props;
    console.log(errors);

    return (
      <div className="container">
        <h1>Nouveau post</h1>
        <form action="" onSubmit={handleSubmit(this.createPost.bind(this))}>
          <div className="form-group">
            <label>Titre</label>
            <div>
              <Field
                name="title"
                component="input"
                type="text"
                placeholder="Entrez le titre"
                className="form-control"
                {...fields.title}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Description</label>
            <div>
              <Field
                name="content"
                className="form-control"
                component="textarea"
                placeholder="Entrez une description"
                {...fields.content}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Auteur</label>
            <div>
              <Field
                name="author"
                component="input"
                type="text"
                className="form-control"
                {...fields.author}
              />
            </div>
          </div>
          <Link to={"/"} className="button_space">
            <button className="btn btn-danger">Retour</button>
          </Link>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={this.props.invalid}
          >
            Créer
          </button>
        </form>
      </div>
    );
  }

  createPost(post) {
    this.props.createPost(post);
    browserHistory.push("/");
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = "Veuillez remplir le titre";
  }
  if (!values.content) {
    errors.content = "Veuillez remplir la description";
  }
  if (!values.author) {
    errors.author = "Veuillez remplir l'auteur";
  }

  return errors;
}

export default connect(
  null,
  mapDispatchToProps
)(reduxForm(formConfig)(PostForm));
