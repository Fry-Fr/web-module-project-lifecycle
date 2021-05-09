import img1 from '../assets/lambdalogo.png';
import img2 from '../assets/githublogo.png';

const Header = () => {
    return (
      <header className="logo-header">
        <img alt="logo" src={`${img1}`}/>
        <p>❤️'s</p>
        <img alt="logo" src={`${img2}`}/>
      </header>
    )
  }
  export default Header;