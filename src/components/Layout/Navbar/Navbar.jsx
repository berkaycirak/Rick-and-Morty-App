import './Navbar.styles.scss';
import logoImg from '../../../assets/logo.png';

function Navbar() {
  return (
    <>
      <nav>
        <div className='logo'>
          <img src={logoImg} alt='logo' />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
