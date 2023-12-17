import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faSnapchat} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className="footer-basic">
  <footer>
    <div className="social">
      <a href="#">
      <FontAwesomeIcon icon={faInstagram} />
        <i className="icon ion-social-instagram" />
      </a>
      <a href="#">
      <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="#">
      <FontAwesomeIcon icon={faSnapchat} />
      </a>
      <a href="#">
      <FontAwesomeIcon icon={faTwitter} />
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
