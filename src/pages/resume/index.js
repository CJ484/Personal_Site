const ResumePage = () => {
  return (
    <div className="resume">
      <h2>Check out my bio...</h2>
      <p className="summary">
        Nice to meet you all, I am a Front-End Developer. I like to free draw,
        so getting creative ideas on a website is my speaciality. I also like everything
        when it comes to technology, so I am always learning new things. You can always say "Whats going to be the next big thing? and will we get 
        Marty Mcfly's hoverboard?". I enjoyed codiung when I took my first class in college, and I have been doing it ever since. I am currently
        learning more about React and Javascript. I am also learning about the backend, so I can be a Full-Stack Developer. I am also learning about
        UI/UX design, so I can make my websites look more appealing. I am also learning about SEO, so I can make my websites more visible on the web.
      </p>
      <h3>Education</h3>
      <table>
        <tbody>
          <tr>
            <td className="education-location">
              Suffolk County Community College <br/>
              Liberal Arts and Sciences
            </td>
            <td className="education-date">2015 - 2021</td>
          </tr>
          <tr>
            <td className="education-location">Codecademy</td>
            <td>I started my learning path by self teaching myself the basics of HTML, CSS, JS</td>
            <td className="education-date">December 2020 - March 2021</td>
          </tr>
          <tr>
            <td className="education-location">General Assembly</td>
            <td>I took a 3 month bootcamp to learn more about Javascript and React</td>
            <td className="education-date">September 2021 - December2021</td>
          </tr>
          <tr>
            <td className="education-location">Mentorship</td>
            <td>I am currently being taught by </td>
            <td className="education-date">March 2023 - Present</td>
          </tr>
        </tbody>
      </table>
      <h3>Experience</h3>
      <table>
        <tbody>
          <tr>
            <td className="experience-location">Lowes</td>
            <td className="experience-date">September 2021 - Present</td>
          </tr>
          <tr>
            <td className="experience-location">Freelance</td>
            <td className="experience-date">October 2023 - Present</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResumePage;