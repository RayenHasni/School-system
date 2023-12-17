import "./modules.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <div className="footer-basic">
  <footer>
    <div className="social">
      <a href="#">
        <FontAwesomeIcon icon="fa-brands fa-instagram" />       
      </a>
      <a href="#">
        <FontAwesomeIcon icon="fa-brands fa-facebook" />
      </a>
      <a href="#">
       <FontAwesomeIcon icon="fa-brands fa-snapchat" />
      </a>
      <a href="#">
       <FontAwesomeIcon icon="fa-brands fa-twitter" />
      </a>
    </div>
    <ul className="list-inline">
      <li className="list-inline-item">
        <a href="#">Home</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Services</a>
      </li>
      <li className="list-inline-item">
        <a href="#">About</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Terms</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Privacy Policy</a>
      </li>
    </ul>
    <p className="copyright">School © 2023</p>
  </footer>
</div>

  );
}

export default Footer;
