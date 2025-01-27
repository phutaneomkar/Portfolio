import React from "react";
import "./Education.css"; // Import your CSS file

const data = {
  experience: [
    {
      time: "May 2024 - Present",
      title: "Web Developer",
      institute: "GRX10 Pvt Ltd, Bengaluru",
    },
    {
      time: "Oct 2023 - Apr 2024",
      title: "CMS course",
      institute: "Walnut Folks Pvt Ltd, Bengaluru",
    },
    {
      time: "Juy 2021 - Sep 2023",
      title: "Web Developer",
      institute: "Walstar Technology Pvt Ltd, Kolhapur",
    },
   
  ],
  education: [
    {
      time: "2017 - 2020",
      title: "MCA",
      institute: "Shivaji University,Kolhapur",
    },
    {
      time: "2014 - 2017",
      title: "BCA",
      institute: "Shivaji University,Kolhapur",
    },
    {
      time: "2013 - 2014",
      title: "12th",
      institute: "S.M.Lohiya College,Kolhapur",
    },
   
  ],
  skills: [
    {
      icon: "../src/assets/html.svg",
      percentage: "92%",
      name: "HTML",
      delay: ".3s",
    },
    {
      icon: "../src/assets/css.svg",
      percentage: "80%",
      name: "CSS3",
      delay: ".4s",
    },
    {
      icon: "../src/assets/javascript.svg",
      percentage: "85%",
      name: "JavaScript",
      delay: ".5s",
    },
    {
      icon: "../src/assets/wordPress.svg",
      percentage: "99%",
      name: "Wordpress",
      delay: ".6s",
    },
    {
      icon: "../src/assets/react.svg",
      percentage: "89%",
      name: "ReactJS",
      delay: ".7s",
    },
    {
      icon: "../src/assets/PHP.svg",
      percentage: "93%",
      name: "PHP",
      delay: ".8s",
    },
  ],
};

const ResumeItem = ({ time, title, institute, animation }) => (
  <div
    className={`resume-item wow fadeIn${animation}`}
    data-wow-delay=".4s"
    style={{
      visibility: "visible",
      animationDelay: "0.4s",
      animationName: `fadeIn${animation}`,
    }}
  >
    <div className="time">{time}</div>
    <h3 className="resume-title">{title}</h3>
    <div className="institute">{institute}</div>
  </div>
);

const Section = ({ headerIcon, title, items, animation }) => (
  <div className="col-md-6">
    <div
      className="section-header wow fadeInUp"
      data-wow-delay=".3s"
      style={{
        visibility: "visible",
        animationDelay: "0.3s",
        animationName: "fadeInUp",
      }}
    >
      <h2 className="section-title mb-5">
      <img src={headerIcon} /> {title}
      </h2>
    </div>
    <div className="resume-widget">
      {items.map((item, index) => (
        <ResumeItem
          key={index}
          time={item.time}
          title={item.title}
          institute={item.institute}
          animation={animation}
        />
      ))}
    </div>
  </div>
);

const Skills = () => (
  <div className="container hero" id="skills">
    <div className="row">
      <div className="col-md-12">
        <div className="section-header text-center">
          <h2
            className="section-title wow fadeInUp"
            data-wow-delay=".3s"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            My Skills
          </h2>
          <p
            className="wow fadeInUp"
            data-wow-delay=".4s"
            style={{
              visibility: "visible",
              animationDelay: "0.4s",
              animationName: "fadeInUp",
            }}
          >
         Crafting interactive designs, coding ideas, solving problems, building seamless experiences.
          </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="skills-widget d-flex flex-wrap justify-content-center align-items-center">
          {data.skills.map((skill, index) => (
            <div
              className="skill-item wow fadeInUp px-4 py-5 text-center"
              data-wow-delay={skill.delay}
              style={{
                visibility: "visible",
                animationDelay: skill.delay,
                animationName: "fadeInUp",
              }}
              key={index}
            >
              <div className="skill-inner">
                <div className="icon-box">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                {/* <div className="number">{skill.percentage}</div> */}
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Experience = () => {
  return (
    <div className="container hero" id="about">
      <div className="row">
        {/* Experience Section */}
        <Section
          headerIcon="../src/assets/certificate.svg"
          title="My Experience"
          items={data.experience}
          animation="Left"
        />
        {/* Education Section */}
        <Section
          headerIcon="../src/assets/education.svg"
          title="My Education"
          items={data.education}
          animation="Right"
        />
      </div>
      {/* Skills Section */}
      <Skills />
    </div>
  );
};

export default Experience;
