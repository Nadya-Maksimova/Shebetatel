const React = require('react');
const Layout = require('./Layout');

function Login ({ user} ) {
return (
    <Layout user = { user }>

<section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{"borderRadius":"1rem" }} >
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">
            <p className="data2" style={{'backgroundColor':'white',"color":"red"}}></p>
              <h2 className="fw-bold mb-2 text-uppercase">Войти</h2>
              <p className="text-white-50 mb-5">Введите ваш email и пароль</p>
              <form id="login" action="/login" method="post">
              <div className="form-outline form-white mb-4">
                <input name ="email" type="email" id="typeEmailX" className="form-control form-control-lg" />
                <label className="form-label" htmlFor="typeEmailX">Email</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input name="password" type="password" id="typePasswordX" className="form-control form-control-lg" />
                <label className="form-label" htmlFor="typePasswordX">Пароль</label>
              </div>

              <button className="btn btn-outline-light btn-lg px-5" type="submit">Войти</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      </Layout>
)
}

module.exports = Login;