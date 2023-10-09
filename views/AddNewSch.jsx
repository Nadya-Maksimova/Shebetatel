const React = require('react');

function AddNewPost({ user, }) {
  return (
    <div className="container mt-3">
      <form method="post" action="/" id="addnewpost">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Текст
          </label>
          <input
            name="text"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Картинка
          </label>
          <input
            name="image"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <center>
          <button type="submit" className="btn btn-warning">
            Прощебетать
          </button>
        </center>
      </form>
    </div>

  );
}

module.exports = AddNewPost;
