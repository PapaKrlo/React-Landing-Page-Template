import logo from '../logos/logo-full-tu-casa-365.svg';
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
          <div className="dflex">
          <a href='#page-top'> 
            <img
              src={logo}
              className='logo-image img-responsive'
              alt={"Futura Casa 365 logo"}
            />{' '}
            </a>{' '}
           
          </div>

          
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
        <div className=''>
          <ul className='nav navbar-nav navbar-right align-center ul-nav'>
            <li>
              <a href='#comofun' className='page-scroll'>
                Acerca de
              </a>
            </li>
            <li>
              <a href='#inversion' className='page-scroll'>
                Inversión
              </a>
            </li>
            <li>
              <a href='#part' className='page-scroll'>
                Partners
              </a>
            </li>
            <li>
              <a href='#testi' className='page-scroll'>
                Testimonios 
              </a>
            </li>
            <li>
              <a href='#cont' className='page-scroll'>
                Contáctanos
              </a>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
