const React = require('react');
const Layout = require('./Layout');

function UpdatePost({ user, cards }) {
  return (
    <Layout user={user}>
      <div className="container mt-3">
        <center>
      <h4 style={{'color':'#F32B5C'}}>Редактирование щебета</h4>
      </center>
        <form method="PUT" action={`http://localhost:3000/update/${cards.id}`} id="updatecard">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Картинка
            </label>
            <input
              name="image"
              type="text"
              defaultValue={cards.image}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Текст
            </label>
            <input
              name="text"
              type="text"
              defaultValue={cards.text}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <center>
            <button type="submit" className="btn btn-warning">
              Изменить
            </button>
          </center>
        </form>
      </div>
    </Layout>
  );
}

module.exports = UpdatePost;