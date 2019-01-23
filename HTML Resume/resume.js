const experience = [
  {
    title: "Software Engineer",
    companyName: "Rubenstein Technology Group",
    companyLink: "https://www.rubensteintech.com/",
    startDate: "11/2016",
    current: true,
    location: "New York, NY",
    tasks: [
      {
        description:
          "Implemented frontend design and functionality for client websites according to best practices, including BEM and ES6: <a href='https://www.bclplaw.com/'>BCLP</a>, <a href='https://www.choateia.com/'>Choate IA</a>, <a href='https://www.finnegan.com/en/'>Finnegan</a>, among others",
        link: ""
      },
      {
        description:
          "Wrote an internal service to integrate Trello and Request Tracker, obviating the need for duplicate content entry"
      },
      {
        description:
          "Resolved support &amp; maintenance issues in core and project code to keep clients happy"
      },
      {
        description:
          "Developed several internal Chrome extensions and bash scripts to aid engineer productivity and work satisfaction"
      }
    ]
  },
  {
    title: "Software Engineer",
    companyName: "ProSeeder Technologies Inc.",
    startDate: "01/2015",
    endDate: "10/2016",
    location: "New York, NY",
    tasks: [
      {
        description:
          "Developed new core functionality for the ProSeeder platform using a Java/JSP backend",
        link: ""
      },
      {
        description:
          "Implemented new designs and features to modernize the web application and improve user experience"
      },
      {
        description:
          "Improved systems development lifecycle by automating build processes"
      },
      {
        description:
          "Implemented SASS for product consistency, speed, and more enjoyable development"
      },
      {
        description: "Worked on platform optimizations from front-end to back"
      }
    ]
  },
  {
    title: "Co-founder & Lead Developer",
    companyName: "Fitted Threads",
    startDate: "10/2012",
    endDate: "02/2015",
    location: "New York, NY",
    tasks: [
      {
        description:
          "Developed company website and infrastructure, including setting up account management, product display, e-commerce frontend, admin backend, and manufacturer interface",
        link: ""
      },
      {
        description:
          "Interfaced with tech companies such as UpCload and Poikos (Flixfit) to consider utilizing their technology for measuring customers"
      }
    ]
  }
];

const tasksTemplate = ({ description }) => `<li>
${description}
</li>`;

const experienceTemplate = ({
  title,
  companyName,
  startDate,
  endDate,
  location,
  current,
  tasks
}) => {
  console.log(title, companyName, startDate, endDate, location, current, tasks);

  return `<article class="experience">
<h2>${title}</h2>
<h3>
    ${companyName}
</h3>
<p class="subDetails">${startDate} - ${current ? "Present" : endDate}</p>
<ul>
    ${tasks
      .map(task => {
        return tasksTemplate(task);
      })
      .join("")}
</ul>
</article>`;
};

const experienceSectionMarkup = experience
  .map(experienceItem => experienceTemplate(experienceItem))
  .join("");

document
  .querySelector(".js-experience-section")
  .insertAdjacentHTML("beforeend", experienceSectionMarkup);
