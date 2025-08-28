import logo from '../logo.jpg';

const Header = () => {
  return (
    <header className="bg-pink-600 text-white p-4 flex justify-between items-center sticky top-0 z-50">
      <div>
        <img src={logo} alt="Teksquilt Logo" className="h-10" />
      </div>
      <nav>
        <a href="#home" className="px-4">Home</a>
        <a href="#about" className="px-4">About</a>
        <a href="#services" className="px-4">Services</a>
        <a href="#contact" className="px-4">Contact</a>
        <a href="#news" className="px-4">News</a>
      </nav>
      <button className="bg-white text-pink-600 font-bold py-2 px-4 rounded">
        Submit Resume
      </button>
    </header>
  );
};

export default Header;