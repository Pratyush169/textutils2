import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <NavLink className={(navdata) => navdata.isActive ? `text-danger navbar-brand text-decoration-none` : `text-decoration-none navbar-brand text-${props.text}`} to="/">{props.title}</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/home" className={(navdata) => navdata.isActive ? `text-danger nav-link active text-decoration-none` : `text-decoration-none nav-link active text-${props.text}`} aria-current="page">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/about' className={(navdata) => navdata.isActive ? "text-danger nav-link text-decoration-none" : `text-decoration-none nav-link text-${props.text}`}>{props.about}</NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggle} />
                <label className={`form-check-label text-${props.text}`} htmlFor="flexSwitchCheckDefault" >Enable {props.text} mode</label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
}

Navbar.defaultProps = {
  title: "TITLE",
  about: "ABOUT US"
}

