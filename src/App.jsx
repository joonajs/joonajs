import { useState, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import { ArrowUp } from "lucide-react";

function App() {
const [scrolled, setScrolled] = useState(false);

const handleScroll = () => {
    if (window.scrollY > 50) {
        setScrolled(true);
    } else {
        setScrolled(false);
    }
};

useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);



  return (
    <div className="font-sans font-medium text-black bg-[#fcfcfce6] lg:mb-0 mb-10">
      <Navigation />
      <main className="lg:mt-20 p-3 min-w-full left-1/2 -transform-x-1/2 mx-auto max-w-[1920px] overflow-hidden">
        <div className="p-1 border rounded-3xl bg-white">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 px-5 py-5 rounded-3xl">
              <section id="about" className="mb-4 max-w-4xl">
                <h1 className="text-2xl rounded-3xl w-fit font-bold mb-2 bg-neutral-100 px-3 text-black">About Me</h1>
                <p className="text-lg leading-tight">
                  Hey there! My name is Joona and I'm a 3rd-year Information Technology student at Vaasa University of Applied Sciences, majoring in software development. I'm interested in everything technology-related, with a passion for UI/UX and design aswell. You should also check out my
                  <a target="_blank" href="https://www.github.com/joonajs" className="text-blue-500 hover:underline"> GitHub </a>
                  where I have some of my personal projects, as well as my
                  <a target="_blank" href="https://www.gitlab.com/joonajs" className="text-blue-500 hover:underline"> GitLab </a>
                  where I have some of my school projects.
                </p>
              </section>
              <section id="projects" className="mb-4 max-w-3xl text-lg leading-tight">
                <h2 className="text-2xl rounded-3xl w-fit font-bold mb-2 bg-neutral-100 px-3 text-black">Projects</h2>
                <p className="mb-2">Small list of some projects I have done, will be updating this in the future.</p>
                <div className="space-y-2">
                  <div>
                    <p><strong>Magic Bin</strong> was made as the final project for my school course in React development. In it, a user can type a 1000 character text-bin to be stored and you get a token you can share to other users to retrieve.</p>
                    <a href="https://w81-magicbin.web.app/" className="text-blue-500 hover:underline">View Project</a>
                  </div>
                  <div>
                    <p><strong>Sorter</strong> is a straightforward web app that helps users organize text documents by sorting their content alphabetically.</p>
                    <a href="https://github.com/joonajs/sorter/" className="text-blue-500 hover:underline">View Project</a>
                  </div>
                  <div>
                    <p><strong>XTemps</strong> is a temporary file server built for quick file sharing. It combines a Flask backend with a React frontend, allowing users to spin up a local server for ephemeral file transfers.</p>
                    <a href="https://github.com/joonajs/xtfs" className="text-blue-500 hover:underline">View Project</a>
                  </div>
                  <div>
                    <p><strong>HRMA</strong> is a Hotel Room Management Application, in which users can log in or sign up and book hotel rooms, manage them, etc. Made for DevOps -course as a Final Project, albeit the focus was on CI/CD and Docker.</p>
                    <a href="https://gitlab.com/joonajs/devops-finalproject" className="text-blue-500 hover:underline">View Project</a>
                  </div>
                </div>
              </section>
              <section id="design" className="mb-4 max-w-3xl">
                <h2 className="text-2xl rounded-3xl w-fit font-bold mb-2 bg-neutral-100 px-3 text-black">Design</h2>
                <p className="text-lg leading-tight">
                  As much as I love developing software and programming, I also have a passion for design. I have experience in creating user interfaces and user experiences for web applications, mobile applications, and websites. I have a strong understanding of design principles and I always strive to create visually appealing and user-friendly interfaces. You can view my work on <a href="https://www.behance.net/joonajs" className="text-blue-500 hover:underline">Behance</a> as well as <a href="https://www.x.com/joona_js" className="text-blue-500 hover:underline">X</a>.
                </p>
              </section>
              <section id="contact" className="lg:mb-0 mb-10 text-lg leading-tight">
                <h2 className="text-2xl rounded-3xl w-fit font-bold mb-2 bg-neutral-100 px-3 text-black">Contact</h2>
                <p>
                  Feel free to reach out to me via email at
                  <a href="joonajs@proton.me" className="text-blue-500 hover:underline pl-1">
                    joonajs@proton.me
                  </a>.
                </p>
              </section>
            </div>

            {/* Image section */}
            <div className="lg:col-span-1 space-y-4">
              <div className="relative">
                <img
                  src="demoapp.svg"
                  alt="A design for Mobile Application"
                  className="rounded-3xl border object-cover opacity-50 hover:opacity-100 hover:cursor-pointer transition-all"
                />
                <p className="text-xs text-left max-w-lg text-neutral-400 mt-2">
                  A design prototype for a payment mobile application made in an evening with Figma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

          <footer className=" m-6 rounded-3xl h-fit bg-white border mt-0 px-5 py-5">
                <p className="text-sm">
                    This website is still hugely a work in progress, so please excuse the mess. I'm currently working on adding more content and improving the design. If you have any feedback or suggestions, feel free to reach out to me via email. I'm trying to add more projects and design work to the site, so stay tuned for updates!
                </p>
                <div className="flex justify-center items-center mt-2 gap-2">
                <a href="https://www.behance.net/joonajs" className="text-blue-500 hover:underline text-xs">Behance</a>
                <a href="https://github.com/joonajs" className="text-blue-500 hover:underline text-xs">GitHub</a>
                <a href="https://gitlab.com/joonajs" className="text-blue-500 hover:underline text-xs">GitLab</a>
                <a href="https://www.x.com/joona_js" className="text-blue-500 hover:underline text-xs">X</a>
                <a href="mailto:joonajs@proton.me" className="text-blue-500 hover:underline text-xs">Email</a>

                </div>
              </footer>

        <div className="lg:grid lg:grid-cols-6 lg:gap-6 max-w-[1920px] overflow-hidden p-5">
            <div className="lg:col-span-4 space-y-4 lg:mt-0 mt-2 min-w-full">
                <div className="relative">
                <img
                    src="MagicBin.png"
                    alt="A design for Mobile Application"
                    className="rounded-3xl border-0 hover:border-opacity-100 object-cover opacity-10 invert hover:invert-0 hover:opacity-100 hover:cursor-pointer transition-all "
                />
                <p className="text-xs text-left max-w-lg text-neutral-400 mt-2">
                Magic Bin was made as the final project for my school course in React development. In it, a user can type a 1000 character text-bin to be stored and you get a token you can share to other users to retrieve.
                </p>
                </div>
            </div>
            <div className="lg:col-span-2 space-y-4 lg:mt-0 mt-2 min-w-full">
                <div className="relative">
                <img
                    src="Sorter.png"
                    alt="A design for Mobile Application"
                    className="rounded-3xl border object-cover opacity-5 hover:opacity-100 transition-opacity hover:cursor-pointer"
                />
                <p className="text-xs text-left max-w-lg text-neutral-400 mt-2">
                A straightforward web app that helps users organize text documents by sorting their content alphabetically. Aesthetically, not very pleasing.
                </p>
                </div>
            </div>
        </div>

        <div className="fixed bottom-0 right-0 p-4 hidden lg:block">
        <button
    className={`bg-white border bg-opacity-90 hover:bg-neutral-100 text-black font-bold p-2 rounded-3xl 
                transform transition-transform duration-300 ease-out 
                ${scrolled ? "scale-125 opacity-100" : "scale-0 opacity-0"}`}
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
    <ArrowUp size={24} />
</button>

        </div>
      </div>
  );
}

export default App;