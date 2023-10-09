const React = require('react')


function Navbar({ user}) {
    return(
        <nav className="navbar navbar-expand-lg navbar-black " style={{'backgroundColor':'#F8C6D2'}}>
        <div className="container-fluid">
          <h4 style={{ 'color': 'black' }} className="navbar-brand">ЩЕБЕТАТЕЛЬ</h4>

          <ul className="navbar-nav ms-auto ">
            { !user ? (
              <>
                <li className="nav-item">
                  <a className="nav-link mx-2 active" aria-current="page" style={{ color: 'black' }} href="/login">Войти</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link mx-2" style={{ color: 'black' }} href="/register">Зарегистрироваться</a>
                </li>
              </>
            ) : (
                <>
                <li className="nav-item">
                <a className="nav-link mx-2" style={{ color: '#76062C' }}>Привет, {user.name} 😊</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link mx-2" style={{ color: 'black' }} href="/">Главная</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" style={{ color: 'black' }} href="/profile">Профиль</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" style={{ color: 'black' }} href="/logout">Выйти</a>
              </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    )
}

module.exports = Navbar;