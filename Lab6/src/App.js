import './App.css';
import { useState } from 'react';

const navData = {
  logo: { src: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg", alt: "Udemy", width: 91, height: 34 },
  exploreGoals: [
    "Learn AI", "Launch a new career", "Prepare for a certification", "Practice with Role Play"
  ],
  links: [
    { text: "Plans & Pricing", href: "#" },
    { text: "Udemy Business", href: "#" },
    { text: "Teach on Udemy", href: "#" }
  ]
};

const heroData = {
  image: "https://img-c.udemycdn.com/notices/web_carousel_slide/image/5ab81bd5-af55-4235-9f1e-07cdc7ce0b93.jpg",
  titleLine1: "Learn more, spend less",
  titleLine2: "Black Friday Sale from E£279.99",
  descriptionLine1: "Sitewide savings on thousands of courses.",
  descriptionLine2: "Ends Nov 28."
};

const essentialSkillsData = {
  title: "Learn essential career and life skills",
  description: "Udemy helps you build in-demand skills fast and advance your career in a changing job market.",
  items: [
    { id: 1, count: "1.7M+", title: "Generative AI", link: "#", image: "https://cms-images.udemycdn.com/96883mtakkm8/9Gj6y7OdRKhBmHkgJ9lWV/4589dcd6feb8009798924f70f515b731/generative-ai.png" },
    { id: 2, count: "14M+", title: "IT Certifications", link: "#", image: "https://cms-images.udemycdn.com/96883mtakkm8/5Pyb4XbnD2CBt6TgiSBB8v/26f6893300dadc86519907b854b430de/certifications.png" },
    { id: 3, count: "8.1M+", title: "Data Science", link: "#", image: "https://cms-images.udemycdn.com/96883mtakkm8/6QeCzvTvnqKN6tI18U0Wmg/cebc19b24d374ec1cab549a9c7a93020/data-science.png" }
  ]
};

const aiEraData = {
  title: "Reimagine your career in the AI era",
  description: "Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.",
  benefits: [
    "Learn AI and more", "Prep for a certification", "Practice with AI coaching", "Advance your career"
  ],
  buttonText: "Learn More",
  priceText: "Starting at E£204.00/month",
  image: "https://frontends.udemycdn.com/staticx/udemy/images/ai-career-banner/ai-career@2x.webp"
};

const skillsSectionData = {
  title: "Skills to transform your career and life",
  description: "From critical skills to technical topics, Udemy supports your professional development.",
  defaultTab: "Python"
};

const coursesData = {
  "Python": [
    { id: 1, image: "https://img-c.udemycdn.com/course/240x135/543600_64d1_4.jpg", title: "Automate the Boring Stuff with Python Programming", instructor: "Al Sweigart", rating: 4.7, count: "110k", price: "E£299.99", oldPrice: "E£349.99" },
    { id: 2, image: "https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg", title: "100 Days of Code: The Complete Python Pro Bootcamp", instructor: "Dr. Angela Yu", rating: 4.7, count: "250k", price: "E£309.99", oldPrice: "E£599.99" },
    { id: 3, image: "https://img-c.udemycdn.com/course/240x135/903744_8eb2.jpg", title: "Python for Data Science and Machine Learning Bootcamp", instructor: "Jose Portilla", rating: 4.5, count: "140k", price: "E£309.99", oldPrice: "E£499.99" }
  ],
  "Digital Marketing": [
    { id: 4, image: "https://img-c.udemycdn.com/course/240x135/914296_3670_8.jpg", title: "The Complete Digital Marketing Course - 12 Courses in 1", instructor: "Rob Percival", rating: 4.5, count: "750k", price: "E£309.99", oldPrice: "E£699.99" },
  ],
  "Amazon AWS": [
    { id: 5, image: "https://img-c.udemycdn.com/course/240x135/362328_91f3_10.jpg", title: "AWS Certified Solutions Architect", instructor: "Stephane Maarek", rating: 4.7, count: "900k", price: "E£309.99", oldPrice: "E£699.99" },
  ]
};

const trustedData = {
  title: "Trusted by over 17,000 companies and millions of learners around the world",
  companies: [
    { name: "Volkswagen", src: "https://cms-images.udemycdn.com/96883mtakkm8/3E0eIh3tWHNWADiHNBmW4j/3444d1a4d029f283aa7d10ccf982421e/volkswagen_logo.svg" },
    { name: "Samsung", src: "https://cms-images.udemycdn.com/96883mtakkm8/2pNyDO0KV1eHXk51HtaAAz/090fac96127d62e784df31e93735f76a/samsung_logo.svg" },
    { name: "Cisco", src: "https://cms-images.udemycdn.com/96883mtakkm8/3YzfvEjCAUi3bKHLW2h1h8/ec478fa1ed75f6090a7ecc9a083d80af/cisco_logo.svg" },
    { name: "Vimeo", src: "https://cms-images.udemycdn.com/96883mtakkm8/23XnhdqwGCYUhfgIJzj3PM/77259d1ac2a7d771c4444e032ee40d9e/vimeo_logo_resized-2.svg" },
    { name: "Procter & Gamble", src: "https://cms-images.udemycdn.com/96883mtakkm8/1UUVZtTGuvw23MwEnDPUr3/2683579ac045486a0aff67ce8a5eb240/procter_gamble_logo.svg" },
    { name: "HPE", src: "https://cms-images.udemycdn.com/96883mtakkm8/1GoAicYDYxxRPGnCpg93gi/a8b6190cc1a24e21d6226200ca488eb8/hewlett_packard_enterprise_logo.svg" },
    { name: "Citi", src: "https://cms-images.udemycdn.com/96883mtakkm8/2tQm6aYrWQzlKBQ95W00G/c7aaf002814c2cde71d411926eceaefa/citi_logo.svg" },
    { name: "Ericsson", src: "https://cms-images.udemycdn.com/96883mtakkm8/7guDRVYa2DZD0wD1SyxREP/b704dfe6b0ffb3b26253ec36b4aab505/ericsson_logo.svg" }
  ]
};

function NavBar() {
  return (
    <header>
      <nav className="layout-container">
        <a href="#" className="logo">
          <img src={navData.logo.src} alt={navData.logo.alt} width={navData.logo.width} height={navData.logo.height} />
        </a>
        <div className="explore-wrapper">
          <a href="#" className="nav-link explore-trigger">Explore</a>
          <div className="explore-dropdown">
            <div className="dropdown-section">
              <span className="dropdown-header">Explore by Goal</span>
              <ul className="dropdown-list">
                {navData.exploreGoals.map((goal, index) => (
                  <li key={index} className="dropdown-item">
                    <a href="#">{goal}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <form className="search-form">
          <input className="search-input" placeholder="Search for anything" />
        </form>
        {navData.links.map((link, index) => (
          <a key={index} href={link.href} className="nav-link">{link.text}</a>
        ))}
        <a href="#" className="nav-link cart-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </a>
        <button className="btn btn-login">Log in</button>
        <button className="btn btn-signup">Sign up</button>
      </nav>
    </header>
  );
}

function Sale() {
  return (
    <div className="hero-container layout-container">
      <img className="hero-image" src={heroData.image} alt="Sale Banner" width="1340" height="400" />
      <div className="hero-content-box">
        <h3>{heroData.titleLine1} <br /> {heroData.titleLine2}</h3>
        <p>{heroData.descriptionLine1}<br /> {heroData.descriptionLine2}</p>
      </div>
    </div>
  );
}

const SkillCard = ({ data }) => (
  <a href={data.link} className="skill-card">
    <div className="card-image-container">
      <img src={data.image} alt={data.title} className="card-img" />
    </div>
    <div className="card-content">
      <div className="learner-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="#1c1d1f" />
          <path d="M20 21C20 18.2386 16.4183 16 12 16C7.58172 16 4 18.2386 4 21" stroke="#1c1d1f" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span>{data.count}</span>
      </div>
      <div className="card-title-row">
        <h4>{data.title}</h4>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1c1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </div>
  </a>
);

function EssentialSkills() {
  return (
    <div className="skills-container layout-container">
      <div className="skills-text">
        <h3>{essentialSkillsData.title}</h3>
        <p>{essentialSkillsData.description}</p>
      </div>
      <div className="skills-grid">
        {essentialSkillsData.items.map((item) => (
          <SkillCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

function AiEra() {
  return (
    <section className="ai-era-section">
      <div className="layout-container">
        <div>
          <h3>{aiEraData.title}</h3>
          <p>{aiEraData.description}</p>
          <ul>
            {aiEraData.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
          <a href="#"><span>{aiEraData.buttonText}</span></a>
          <p>{aiEraData.priceText}</p>
        </div>
        <img src={aiEraData.image} alt="AI Era" />
      </div>
    </section>
  )
}

function Skills() {
  const [activeTab, setActiveTab] = useState(skillsSectionData.defaultTab);
  const categories = Object.keys(coursesData);
  const courses = (coursesData[activeTab] || []).slice(0, 4);

  return (
    <section className="skills-section layout-container">
      <h2>{skillsSectionData.title}</h2>
      <p>{skillsSectionData.description}</p>

      <div className="skills-tabs">
        {categories.map((category) => (
          <button key={category} className={activeTab === category ? "active" : ""} onClick={() => setActiveTab(category)}>
            <span>{category}</span>
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <div className='card-image-container'><img src={course.image} alt="Course thumbnail" /></div>
            <div className="course-info">
              <h3><a href='#'>{course.title}</a></h3>
              <span className="course-instructor">{course.instructor}</span>
              <ul className="course-rating">
                <li className="badge">{course.rating}</li>
                <li className="rating-num">★★★★★</li>
                <li className="rating-count">({course.count})</li>
              </ul>
              <div className="course-price-row">
                <span className="price-current">{course.price}</span>
                <span className="price-old">{course.oldPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <a href="#" className="show-all-link">
        <span>Show all {activeTab} courses</span>
      </a>
    </section>
  );
}

function Trusted() {
  return (
    <section className="trusted-section">
      <div className="layout-container">
        <h2>{trustedData.title}</h2>
        <ul>
          {trustedData.companies.map(company => (
            <li key={company.name}>
              <img src={company.src} alt={`${company.name} logo`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function App() {
  return (
    <main>
      <NavBar />
      <Sale />
      <EssentialSkills />
      <AiEra />
      <Skills />
      <Trusted />
    </main>
  );
}

export default App;