import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Mert",
  lastName: "Turker",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "mertturker99@gmail.com", // Add your email if you want to display it
  location: "Europe/Istanbul", // IANA time zone for Türkiye
  languages: ["Turkish (Native)", "English (C2)", "German (A2)", "Spanish (A1)"]
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/merttrkr",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mertturker/",
  },
    {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Mert, a software engineer passionate about building scalable systems and modern web applications.
      <br /> Always learning, always building.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Izmir & Antalya, Türkiye`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Disciplined, innovative, and solution-oriented person. Seeking to learn new software development technologies while improving the ones I know.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "SAN TSG",
        timeframe: "Nov 2024 – Present, Antalya, Türkiye",
        role: "Software Engineer",
        achievements: [
          <>Transformed a monolithic travel software system into microservices.</>,
          <>Designed and developed a Notification Microservice.</>,
          <>Contributed to 15+ microservices, using CQRS, DDD, Generic Repository Pattern.</>,
          <>Implemented Dapr sidecar, Redis caching, PostgreSQL, MongoDB, Elasticsearch.</>,
          <>Deployed to AWS, integrated Prometheus, Grafana, and resolved performance issues.</>,
        ],
        images: [],
      },
      {
        company: "Intertech",
        timeframe: "Sep 2022 – Jun 2024, Izmir, Türkiye",
        role: "Software Engineer",
        achievements: [
          <>Integrated API Gateway, Clean Architecture, and client gateway.</>,
          <>Used EF Core, Unit of Work, Repository, Jaeger, ELK, Jira, Jenkins, MSSQL.</>,
          <>Implemented Domain Event pattern with RabbitMQ, Kubernetes, SAGA, Circuit Breaker.</>,
          <>Developed tests with Moq, FluentAssertions, and Fluent Validation.</>,
        ],
        images: [],
      },
      {
        company: "Izmir Institute of Technology",
        timeframe: "Sep 2022 – Aug 2023, Izmir, Türkiye",
        role: "Software Engineer",
        achievements: [
          <>Developed Erasmus Without Paper project with CQRS, DDD, MassTransit, RabbitMQ.</>,
          <>Implemented caching (InMemory, Redis), logging (Serilog), dynamic queries, Automapper.</>,
          <>Used SAGA, retry, circuit breaker, extension writing, domain modeling, clean code.</>,
        ],
        images: [],
      },
      {
        company: "Delta Smart Tech",
        timeframe: "May 2022 – Sep 2022, Izmir, Türkiye",
        role: "Software Engineer",
        achievements: [
          <>Developed Spring Boot endpoints, improved code quality with unit tests (Mockito).</>,
          <>Managed AWS cloud resources.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Izmir Institute of Technology",
        description: <>
          BSc in Computer Engineering (Sep 2020 – Aug 2023)
          <br />
          <a href="https://ceng.iyte.edu.tr/tr/" target="_blank" rel="noopener noreferrer">Department Website</a>
        </>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "C# / .NET (Framework, Standard, Core)",
        description: <>Professional experience in backend and microservices development.</>,
        images: [],
      },
      {
        title: "Java / Spring Boot",
        description: <>Developed REST APIs and microservices, including unit testing.</>,
        images: [],
      },
      {
        title: "TypeScript / React / Next.js",
        description: <>Frontend and full-stack web development.</>,
        images: [],
      },
      {
        title: "Python / Django",
        description: <>Experience in scripting and web backend development.</>,
        images: [],
      },
      {
        title: "Docker / Kubernetes / Ingress",
        description: <>Containerization and orchestration for scalable deployments.</>,
        images: [],
      },
      {
        title: "PostgreSQL / MSSQL / NoSQL",
        description: <>Database design and optimization.</>,
        images: [],
      },
      {
        title: "RabbitMQ / SAGA / DDD / Jaeger / ELK",
        description: <>Distributed systems, messaging, and observability.</>,
        images: [],
      },
      {
        title: "Unit Testing / Moq / FluentAssertions / Fluent Validation / Mockito",
        description: <>Test-driven development and code quality assurance.</>,
        images: [],
      },
      {
        title: "Git / TFS / AWS",
        description: <>Version control and cloud deployment.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
