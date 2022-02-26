import { useState } from "react";

function Projects({ projects }) {
  const [active, setActive] = useState(null);

  return (
    <>
      <section
        id="projects"
        className="navbar-is-white text-white section pp-scrollable position-absolute"
        style={{ backgroundImage: "url('img/bg/programmin.jpg')" }}
      >
        <div className="project-wrap">
          <div className="bg-changer">
            <div
              className="section-bg active"
              style={{
                backgroundImage: `${
                  active ? "url('img/bg/portfolio/" + active + "')" : "none"
                }`,
                backgroundAttachment: "fixed",
                backgroundPosition: "top",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
          <div className="intro">
            <div className="scroll-wrap">
              <div className="container">
                <h2 className="text-white mb-0">Latest projects</h2>
                <div className="mt-5 pt-2">
                  <div className="row-project-box row">
                    {projects?.map(({ title, category, image, url }) => (
                      <div
                        onMouseEnter={() => setActive(image)}
                        onMouseLeave={() => setActive(null)}
                        className="col-project-box col-md-6 col-lg-4 col-xl-3"
                        key={title}
                      >
                        <a
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          className="project-box"
                        >
                          <div className="project-box-inner">
                            <h4>{title}</h4>
                            <div className="project-category">{category}</div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
