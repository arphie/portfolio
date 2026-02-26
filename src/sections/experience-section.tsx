import Section from "../components/section";

export default function ExperienceSection() {
    const experience = [
        {
            image: "/assets/google.svg",
            title: "Senior Lead Engineer",
            company: "Cyberbacker",
            location: "US",
            start: "July 2021",
            end: "Jan 2026",
            description: [
                "Strategic Leadership: Spent 2 years as Head of Technology aligning scalable technical roadmaps with business goals across HR Tech and CRM domains.",
                "Full-Stack Architecture: Architected bespoke CRM and Data Monitoring systems using Laravel (PHP) and React, including API gateway design and complex data flows.",
                "System Innovation: Engineered an automated ATS with custom algorithmic scoring logic for candidate assessment and ranking.",
                "Infrastructure & DevOps: Managed CI/CD pipelines and server infrastructure to ensure high availability for mission-critical systems.",
                "Team Growth: Led the full SDLC while mentoring developers and bridging the gap between technical teams and business stakeholders.",
            ],
        },
        {
            image: "/assets/google.svg",
            title: "Senior Software Engineer",
            company: "iBial Inc.",
            location: "Vietnam",
            start: "Apr 2020",
            end: "Apr 2021",
            description: [
                "Global SaaS Development: Engineered scalable platforms using React, Vue, and Laravel, delivering high-performance interfaces for a global user base.",
                "Multi-Tenant Architecture: Designed complex systems ensuring strict data isolation, security, and seamless scalability across diverse client organizations.",
                "API Ecosystems: Architected robust RESTful APIs to facilitate third-party integrations and white-label solutions.",
                "System Mirroring: Translated internal business logic into public-facing features, maintaining high performance across internal and external product suites."
            ],
        },
        {
            image: "/assets/google.svg",
            title: "Senior Lead Engineer",
            company: "Lyduz Inc.",
            location: "Philippines",
            start: "Jul 2018",
            end: "Mar 2020",
            description: [
                "Fintech Ecosystem: Architected a cross-platform social network for the fintech sector using Laravel, React, and React Native.",
                "Microservices Transition: Decoupled data processing workflows into Microservices, significantly improving resilience and scalability for high-volume financial data.",
                "End-to-End Delivery: Directed cross-functional teams through the full SDLC, from sprint planning and requirements gathering to CI/CD deployment.",
                "Performance Engineering: Optimized systems for high availability and low latency, ensuring seamless real-time interactions and data feeds."
            ],
        },
        {
            image: "/assets/google.svg",
            title: "Senior Lead Engineer",
            company: "Brickwork Building Inc.",
            location: "Australia",
            start: "Dec 2015",
            end: "May 2018",
            description: [
                "Custom API Middleware: Developed a WordPress middleware layer to synchronize real-time product, pricing, and stock data from a Laravel backend.",
                "Proprietary Plugin Development: Engineered custom plugins for complex business logic, including specialized checkout flows and Sanctum/OAuth authentication.",
                "Performance-First Themes: Built responsive, lightweight themes from scratch, achieving 90+ Google PageSpeed scores.",
                "WooCommerce Extension: Customized hooks and filters to integrate specialized payment gateways and external financial APIs.",
                "Database & Cache Optimization: Reduced page load times by 40% through SQL optimization and the WordPress Transients API.",
                "Technical QA: Conducted rigorous end-to-end testing of decoupled API endpoints using Postman to ensure data integrity."
            ],
        },
        {
            image: "/assets/google.svg",
            title: "Software Engineer",
            company: "Syntax Corporation",
            location: "Philippines",
            start: "Apr 2010",
            end: "Nov 2015",
            description: [
                "Multi-Platform Development: Delivered enterprise solutions on WordPress, Drupal, and Joomla, specializing in custom plugins and complex data migrations.",
                "Legacy Modernization: Refactored aging codebases to reduce technical debt, achieving a >20% performance boost.",
                "Team Mentorship: Supervised junior developers and enforced Clean Code standards through regular code reviews.",
                "Agile Delivery: Managed full development cycles under tight deadlines to ensure robust, production-ready code."
            ],
        }
    ];

    return (
        <Section title="Experience">
            <div className="space-y-6">
                {experience.map((experience) => (
                    <div key={experience.title} className="w-full border border-gray-200 p-6 rounded-xl hover:-translate-y-1 transition duration-300 border border-gray-200 rounded-xl">
                        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                {/* <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                                    <img
                                        src={experience.image}
                                        alt={experience.title}
                                        width={25}
                                        height={25}
                                    />
                                </div> */}
                                <div>
                                    <h3 className="text-base font-medium text-gray-800">
                                        {experience.title}
                                    </h3>
                                    <div>{experience.company} | {experience.location}</div>
                                </div>
                            </div>
                            <div>{experience.start} - {experience.end}</div>
                        </div>
                        <ul className="list-disc px-5 mt-6 text-gray-500 space-y-2">
                            {experience.description.map((description) => (
                                <li key={description}>{description}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}