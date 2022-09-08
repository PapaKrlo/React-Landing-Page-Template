import logo from '../logos/futura-casa-365.svg';
import "../my-styles.css"
export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          {/* <img src="./logos/futura-casa-365/png" alt="Futura casa 365 logo"></img> */}
          <div className="dflex">
            <img
              src={logo}
              className='logo-image img-responsive'
              alt={"Futura Casa 365 logo"}
            />{' '}
            <div className="logo-text">
              <a className='navbar-brand page-scroll' href='#page-top'>
                Futura Casa 365
              </a>{' '}
            </div>
           
          </div>

          
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Inicio
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                Inversión
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Compra un hogar
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Acerca de
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Contactos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
