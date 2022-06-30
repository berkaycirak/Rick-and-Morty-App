import './Navbar.styles.scss';
import backgroundImg from '../../../assets/logo.png';

function Navbar() {
  return (
    <>
      <nav>
        <div className='logo'>
          <img src={backgroundImg} alt='logo' />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
