import { AddressBook, Alarm, Globe, TrendUp } from "@phosphor-icons/react";
import PageHero from "../../components/PageHero/PageHero";

import "./services.css";

function Services() {
  const heroContent = {
    heading: "Our Services",
    description:
      "Transform your brand with our innovative digital solutions that captivate and engage your audience.",
  };

  const subHeroContent = {
    heading: "Let us Bring your Ideas to Life in the Digital World.",
    description:
      "No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.",
  };

  return (
    <div className="services">
      <PageHero
        heading={heroContent.heading}
        description={heroContent.description}
      />
      <section className="services__wrapper">
        <div className="services__item">
          <div className="services__item-header">
            <h2 className="services__heading">
              Business Process Outsourcing (BPO) for HR
            </h2>
            <p className="services__description">
              At Skanda Nexus, our design team is passionate about creating
              stunning, user-centric designs that captivate your audience and
              elevate your brand. We believe that great design is not just about
              aesthetics; it's about creating seamless and intuitive user
              experiences.
            </p>
            <p className="services__btn">Our BPO services include:</p>
          </div>
          <h3 className="services__type">
            Business Process Outsourcing (BPO) for HR
          </h3>
          <div className="services__type-wrapper">
            <div className="services__type-item">
              <span className="services__type-icon">
                <TrendUp size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">End-to-End HR Outsourcing</h4>
              <p className="services__type-content">
                Empower your business with seamless HR operations—payroll,
                compliance, and workforce management—all handled with precision,
                so you can focus on growth.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <Alarm size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Temporary Staffing & Contract Hiring
              </h4>
              <p className="services__type-content">
                Agility meets expertise—scale your workforce effortlessly with
                on-demand professionals who fit right in, driving efficiency
                without long-term commitments.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <AddressBook size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Vendor & Workforce Management
              </h4>
              <p className="services__type-content">
                Turn vendor relationships into strategic assets—our solutions
                enhance efficiency, compliance, and workforce synergy for smooth
                business operations.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <Globe size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Global HR Solutions for Multinational Companies
              </h4>
              <p className="services__type-content">
                Expand without limits—our tailored HR solutions ensure
                compliance, workforce stability, and seamless talent mobility
                across international borders.
              </p>
            </div>
          </div>
        </div>
        <div className="services__item">
          <div className="services__item-header">
            <h2 className="services__heading">
              Recruitment & Talent Acquisition
            </h2>
            <p className="services__description">
              At Skanda Nexus, our design team is passionate about creating
              stunning, user-centric designs that captivate your audience and
              elevate your brand. We believe that great design is not just about
              aesthetics; it's about creating seamless and intuitive user
              experiences.
            </p>
            <p className="services__btn">Our BPO services include:</p>
          </div>
          <h3 className="services__type">Recruitment & Talent Acquisition</h3>
          <div className="services__type-wrapper">
            <div className="services__type-item">
              <span className="services__type-icon">
                <TrendUp size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                End-to-end recruitment services
              </h4>
              <p className="services__type-content">
                From job posting to onboarding, we handle it all. Our
                recruitment process ensures the right talent for your business.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <Alarm size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Executive search &amp; headhunting
              </h4>
              <p className="services__type-content">
                Find top-tier professionals for leadership roles. We identify,
                evaluate, and recruit the best industry leaders.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <AddressBook size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Recruitment process outsourcing (RPO)
              </h4>
              <p className="services__type-content">
                Streamline hiring with our expert RPO services. We manage talent
                acquisition efficiently for sustained growth.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <Globe size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">Campus hiring solutions</h4>
              <p className="services__type-content">
                Connect with young talent through strategic campus hiring. We
                help you build a strong entry-level workforce.
              </p>
            </div>
          </div>
        </div>
      </section>
      <PageHero
        heading={subHeroContent.heading}
        description={subHeroContent.description}
        isSubHero={true}
      />
    </div>
  );
}

export default Services;
