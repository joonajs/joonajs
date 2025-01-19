
const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="flex justify-center items-center border mx-auto lg:fixed lg:right-10 lg:left-auto lg:translate-x-0 left-1/2 -translate-x-1/2 py-1 px-1 fixed top-0 bg-white m-5 w-fit rounded-full bg-opacity-90 backdrop-blur-3xl z-10">
   <ul className="flex space-x-5 md:text-2xl text-xl font-semibold group">
        <li
          onClick={() => scrollToSection('about')}
          className="hover:bg-blue-500 hover:text-white px-2 md:px-3 md:py-1 rounded-full cursor-pointer transition-all duration-200  md:group-hover:text-3xl"
        >
          About
        </li>
        <li
          onClick={() => scrollToSection('projects')}
          className="hover:bg-blue-500 hover:text-white px-2 md:px-3 md:py-1 rounded-full cursor-pointer transition-all duration-200 md:group-hover:text-3xl"
        >
          Projects
        </li>
        <li
          onClick={() => scrollToSection('design')}
          className="hover:bg-blue-500 hover:text-white px-2 md:px-3 md:py-1 rounded-full cursor-pointer transition-all duration-200 md:group-hover:text-3xl"
        >
          Design
        </li>
        <li
          onClick={() => scrollToSection('contact')}
          className="hover:bg-blue-500 hover:text-white px-2 md:px-3 md:py-1 rounded-full cursor-pointer transition-all duration-200 md:group-hover:text-3xl"
        >
          Contact
        </li>

      </ul>
    </nav>
  );
};

export default Navigation;