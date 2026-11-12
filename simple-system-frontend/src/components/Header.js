import ss_logo from '../images/ss-logo.png';
import ss_text from '../images/ss-text.png';
import search_icon from '../images/icons/search-icon-white.png';

import {Link} from 'react-router-dom';

import '../styles/header.css';

export function Header (props) {

  return (
    <header className="header">
      <div className="logo">
        <Link to={'/'}>
          <img className="ss-logo" src={ss_logo} alt="Simple System logo"/>
          <img className="ss-text" src={ss_text} alt="Simple System logo text"/>
        </Link>
      </div>

      {props.location === "homePage" &&
        <form className="middle-section"
          action={(formData) => {props.handleSearch(formData.get("searchString"))}}
        >
          <input type="text"
            name="searchString" 
            className="search-bar" 
            placeholder="Filter Laptops"
            id="search-input"
          />
          <label htmlFor="search-input" className="search-label">
            filter laptops by specification
          </label>
          <button className="search-button">
            <img className="search-icon" 
              src={search_icon} 
              alt="search icon"
            />
          </button>
        </form>
      }
      
      <nav className="right-section">
        {props.location !== "homePage" && 
          <Link className="laptop-button" to={'/'}>
            Laptop
          </Link>
        }
        
        {props.location !== "infoPage" &&
          <Link className="info-button" to={'/info'}>
            Info
          </Link>
        }
        
        {props.location !== "buildPage" && 
          <Link className="build-button" to={'/build'}>
            Build
          </Link>
        }
      </nav>
    </header>
  )
}