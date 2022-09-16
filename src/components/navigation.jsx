import logo from '../logos/logo-full-tu-casa-365.svg';
import { slide as Menu } from 'react-burger-menu'
import "../my-styles.css"
export const Navigation = (props) => {
  var styles = {
    bmBurgerButton: {
      position: 'absolute',
      float:'right',
      width: '28px',
      height: '21px',
      left: '85%',
      top: '50px'
    },
    bmBurgerBars: {
      background: '#15E384'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '34px',
      width: '34px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      top:'0px',
      height: '100%',
      width:'50%'
    },
    bmMenu: {
      background: '#154957',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'

    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'block',
      color: '#d1d1d1',
      marginBottom: '25px',
      textAlign: 'left',
      textDecoration: 'none',
    },
    bmOverlay: {
      top:'0px',
      left:'0px',
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }


 
  const toggleMenu = ({ isOpen }) => {
    const menuWrap = document.querySelector(".bm-menu-wrap");
    isOpen
      ? menuWrap.setAttribute("aria-hidden", false)
      : menuWrap.setAttribute("aria-hidden", true);
  };
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          {/* <button
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
          </button> */}
          <Menu onStateChange={toggleMenu}  right styles={ styles } id={ "sidebar" }>
              <a className="menu-item" href="#comofun">Acerca De</a>
              <a className="menu-item" href="#inversion">Inversión</a>
              <a className="menu-item" href="#part">Partners</a>
              <a className="menu-item" href="#testi">Testimonios</a>
              <a className="menu-item" href="#cont">Contáctanos</a>
        </Menu>
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
