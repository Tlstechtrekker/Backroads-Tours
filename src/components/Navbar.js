import logo from '../images/logo.svg';
import { pageLinks, socialLinks } from './data';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">

          {/* add call to array of nav links - iterate over it using the .map method - callback function goes in the parameter - leave hardcoded ones for now  */}
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link"> {link.text} </a>
              </li>
            );
          })}
        </ul>

        {/* Social media icon links from font-awesome */}
        {/* do call to socialMedia links array and map over them - like before, leave others below until working - won't see anything from coffeeXchange since I'm not online */}

        <ul className="nav-icons">

          {socialLinks.map((link) => {
            const {id, href, icon} = link;
            return (
              <li key={id}>
                <a href={href} target="_blank" rel="noreferrer" className="nav-icon"><i className={icon}></i></a>
              </li>
            );
          })}

        </ul>

      </div>
    </nav>
  )
}

export default Navbar