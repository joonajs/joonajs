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
    <nav className="fixed left-1/2 -translate-x-1/2 bottom-0 lg:bottom-auto lg:top-0 lg:left-auto lg:right-10 lg:translate-x-0 flex justify-center items-center border mx-auto py-1 px-1 bg-white lg:m-5 lg:w-fit w-full lg:rounded-full bg-opacity-90 backdrop-blur-3xl z-10">
      <ul className="flex md:space-x-5 lg:text-4xl text-md font-semibold group">
        <li
          onClick={() => scrollToSection('about')}
          className="hover:bg-blue-500 hover:text-white px-2 lg:px-3 lg:py-1 rounded-full cursor-pointer transition-all duration-200 lg:group-hover:text-[2.85rem] lg:group-hover:px-5 lg:group-hover:py-2"
        >
          About
        </li>
        <li
          onClick={() => scrollToSection('projects')}
          className="hover:bg-blue-500 hover:text-white px-2 lg:px-3 lg:py-1 rounded-full cursor-pointer transition-all duration-200 lg:group-hover:text-[2.85rem] lg:group-hover:px-5 lg:group-hover:py-1"
        >
          Projects
        </li>
        <li
          onClick={() => scrollToSection('design')}
          className="hover:bg-blue-500 hover:text-white px-2 lg:px-3 lg:py-1 rounded-full cursor-pointer transition-all duration-200 lg:group-hover:text-[2.85rem] lg:group-hover:px-5 lg:group-hover:py-1"
        >
          Design
        </li>
        <li
          onClick={() => scrollToSection('contact')}
          className="hover:bg-blue-500 hover:text-white px-2 lg:px-3 lg:py-1 rounded-full cursor-pointer transition-all duration-200 lg:group-hover:text-[2.85rem] lg:group-hover:px-5 lg:group-hover:py-1"
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;