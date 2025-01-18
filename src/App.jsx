import { useEffect, useState } from "react";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const [timeNow, setTimeNow] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleString("en-US", {
        timeZone: "Europe/Helsinki",
        hour12: false,
      });
      setTimeNow(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
      <div className="font-sans text-black bg-white">
          <Navigation />
          <main className="mt-20 p-6 min-w-full lg:grid lg:grid-cols-2 lg:gap-6 max-w-[1920px]">
              <div className="lg:pr-10">
              <p className="text-xs font-mono mb-4">
             {timeNow ? timeNow : "joona.studio/"}</p>
                  <section id="about" className="mb-12 max-w-3xl">
                      <h1 className="text-4xl font-bold mb-4">About Me</h1>
                      <p className="leading-relaxed">
                      Hey there! My name is Joona and I'm a 3rd-year Information Technology student at Vaasa University of Applied Sciences, majoring in software development. I'm interested in everything technology-related, with a passion for UI/UX and design aswell. You should also check out my
                          <a target="_blank" href="https://www.github.com/joonajs" className="text-blue-500 hover:underline"> GitHub </a>
                          where I have some of my personal projects, as well as my
                          <a target="_blank" href="https://www.gitlab.com/joonajs" className="text-blue-500 hover:underline"> GitLab </a>
                          where I have some of my school projects.
                      </p>
                  </section>
                  <section id="projects" className="mb-12 max-w-3xl">
                      <h2 className="text-4xl font-bold mb-4">Projects</h2>
                      <div className="space-y-6">
                          <div>
                              <h3 className="text-xl font-semibold">Magic Bin</h3>
                              <p>Magic Bin was made as the final project for my school course in React development. In it, a user can type a 1000 character text-bin to be stored and you get a token you can share to other users to retrieve.</p>
                              <a href="https://w81-magicbin.web.app/" className="text-blue-500 hover:underline">View Project</a>
                          </div>
                          <div>
                              <h3 className="text-xl font-semibold">Sorter</h3>
                              <p>A straightforward web app that helps users organize text documents by sorting their content alphabetically.</p>
                              <a href="https://github.com/joonajs/sorter/" className="text-blue-500 hover:underline">View Project</a>
                          </div>
                          <div>
                              <h3 className="text-xl font-semibold">XTemps</h3>
                              <p>XTemps is a temporary file server built for quick file sharing. It combines a Flask backend with a React frontend, allowing users to spin up a local server for ephemeral file transfers.</p>
                              <a href="https://github.com/joonajs/xtfs" className="text-blue-500 hover:underline">View Project</a>
                          </div>
                          <div>
                              <h3 className="text-xl font-semibold">HRMA</h3>
                              <p>Hotel Room Management Application, in which users can log in or sign up and book hotel rooms, manage them, etc. Made for DevOps -course as a Final Project, albeit the focus was on CI/CD and Docker.</p>
                              <a href="https://gitlab.com/joonajs/devops-finalproject" className="text-blue-500 hover:underline">View Project</a>
                          </div>
                      </div>
                  </section>
                  <section id="contact" className="mb-12">
                      <h2 className="text-4xl font-bold mb-4">Contact</h2>
                      <p>
                          Feel free to reach out to me via email at 
                          <a href="joonajs@proton.me" className="text-blue-500 hover:underline pl-1">
                              joonajs@proton.me
                          </a>.
                      </p>
                  </section>
              </div>
              <div className="hidden lg:block">
                  <video
                      src="gradient.mp4" 
                      alt="Your description here"
                      autoPlay
                      loop
                      muted
                      className="w-full h-full rounded-3xl object-cover rotate-180"
                  />
              </div>
          </main>
      </div>
  );
}

export default App;
