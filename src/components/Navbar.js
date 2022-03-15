import logo192 from '../images/logo192.png'

const Navbar = () => {
  return (
    <nav>
      <img className='img--logo' src={logo192} alt='react-logo' />
      <h3 className='nav--logo_text'>ReactFacts</h3>
      <h4 className='nav--title'>React Course - Project 1</h4>
    </nav>
  )
}

export default Navbar
