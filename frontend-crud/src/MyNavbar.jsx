import React from 'react'

const MyNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Crud</a>
          <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">ViewProducts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/AddProduct">AddProduct</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default MyNavbar