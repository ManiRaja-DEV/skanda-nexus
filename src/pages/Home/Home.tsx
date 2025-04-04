import { Code, GearFine, Terminal } from "@phosphor-icons/react";
import PageHero from "../../components/PageHero/PageHero";

import "./home.css";
import Faq from "../../components/Faq/Faq";

function Home() {
  const servicesContent = {
    heading: "Our Services",
    description:
      "Transform your brand with our innovative digital solutions that captivate and engage your audience.",
  };

  const whyUsContent = {
    heading: "Why Choose Skanda Nexus?",
    description:
      "We provide tailored IT, HR, and Training solutions with measurable results.",
  };

  return (
    <div className="home">
      <PageHero
        heading={servicesContent.heading}
        description={servicesContent.description}
      />
      <div className="careers__type-wrapper careers__type-wrapper--home ">
        <div className="careers__type-item">
          <span className="careers__type-icon">
            <Code size={28} color="#9eff00" weight="fill" />
          </span>
          <h4 className="careers__type-name">Vehicle GPS Tracking Software</h4>
          <p className="careers__type-content">
            Real-time location tracking, route optimization, fuel monitoring,
            and driver behavior insights.
          </p>
          <p className="careers__apply-btn">Learn More</p>
        </div>
        <div className="careers__type-item">
          <span className="careers__type-icon">
            <Terminal size={28} color="#9eff00" weight="fill" />
          </span>
          <h4 className="careers__type-name">HR Services</h4>
          <p className="careers__type-content">
            Talent acquisition, performance management, payroll, and compliance
            support.
          </p>
          <p className="careers__apply-btn">Learn More</p>
        </div>
        <div className="careers__type-item">
          <span className="careers__type-icon">
            <GearFine size={28} color="#9eff00" weight="fill" />
          </span>
          <h4 className="careers__type-name">Website Development</h4>
          <p className="careers__type-content">
            Custom website solutions with UI/UX design, SEO, and e-commerce
            features.
          </p>
          <p className="careers__apply-btn">Learn More</p>
        </div>
        <div className="careers__type-item">
          <span className="careers__type-icon">
            <Code size={28} color="#9eff00" weight="fill" />
          </span>
          <h4 className="careers__type-name">Mobile App Development</h4>
          <p className="careers__type-content">
            High-quality iOS & Android app development with seamless user
            experience.
          </p>
          <p className="careers__apply-btn">Learn More</p>
        </div>
        <div className="careers__type-item">
          <span className="careers__type-icon">
            <Terminal size={28} color="#9eff00" weight="fill" />
          </span>
          <h4 className="careers__type-name">Training and Development</h4>
          <p className="careers__type-content">
            Corporate training, certification programs, soft skills, leadership,
            and psychological training.
          </p>
          <p className="careers__apply-btn">Learn More</p>
        </div>
      </div>
      <PageHero
        heading={whyUsContent.heading}
        description={whyUsContent.description}
      />
      <section className="careers__list">
        <div className="careers__list-item">
          <h2 className="careers__list-heading">Industry Expertise</h2>
          <p className="careers__list-description">
            Specialists in HR, IT, GPS tracking, and Training & Development.
          </p>
        </div>
        <div className="careers__list-item">
          <h2 className="careers__list-heading">Client-Centric Approach</h2>
          <p className="careers__list-description">
            Customized solutions aligned with your business goals.
          </p>
        </div>
        <div className="careers__list-item">
          <h2 className="careers__list-heading">Results-Driven</h2>
          <p className="careers__list-description">
            Ensuring tangible improvements in workforce skills and business
            operations.
          </p>
        </div>
        <div className="careers__list-item">
          <h2 className="careers__list-heading">Long-Term Partnership</h2>
          <p className="careers__list-description">
            Ongoing support and continuous improvement.
          </p>
        </div>
      </section>
      <Faq />
    </div>
  );
}

export default Home;
