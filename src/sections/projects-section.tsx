import Section from "../components/section";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Internal CRM",
            description: "Cyberbacker - CRM designed to automate the connectivity of the workflow between departments.",
            image: "/assets/no-preview.jpg",
            framework: "Laravel, React, DaisyUI",
            href: "#",
        },
        {
            title: "Application Tracking System",
            description: "Cyberbacker - An application form designed to follow the company process and placement algorithm.",
            image: "/assets/projects/cb-application-tracking.png",
            framework: "Laravel, React",
            href: "https://apply.cyberbackercareers.com/",
        },
        {
            title: "Marketing Site",
            description: "Cyberbacker - marketing site for a US base virtual assistant company.",
            image: "/assets/projects/cb-marketing.png",
            framework: "Wordpress, Javascript",
            href: "https://cyberbackercareers.com",
        },
        {
            title: "Internal CRM",
            description: "Avocado Hive - CRM designed to manage client-agent tasks, accounting and personel",
            image: "/assets/no-preview.jpg",
            framework: "ReactJS, ExpressJS, PostgreSQL, Stripe",
            href: "#",
        },
        {
            title: "Marketing Site",
            description: "Avocado Hive - A Philippine-based Virtual Legal Assistant services catering to boutique law firms in the US and Australia.",
            image: "/assets/no-preview.jpg",
            framework: "Wordpress, Javascript",
            href: "#",
        },
        {
            title: "Campaign Management System",
            description: "The AdBar allows you to automatically create and execute a customized media plan across 100s of media channels.",
            image: "/assets/no-preview.jpg",
            framework: "Laravel, Bootstrap, Javascript, Restful API",
            href: "#",
        },
        {
            title: "Contract Management System",
            description: "Swayfile - Create, manage and sign contract in one platform.",
            image: "/assets/projects/swayfile.png",
            framework: "Laravel, Bootstrap, Javascript",
            href: "#",
        },
        {
            title: "Social Media Platform",
            description: "Lydus Inc. - Social media and stock trading journaling software.",
            image: "/assets/no-preview.jpg",
            framework: "Laravel, VueJS, React Native, Microservice",
            href: "#",
        },
        {
            title: "Social media platform",
            description: "Vici - designed to target business individuals with a specific hobby.",
            image: "/assets/no-preview.jpg",
            framework: "Laravel, VueJS, React native",
            href: "#",
        },
        {
            title: "Campaign Management System",
            description: "Boost - Allow campaign automation across social media",
            image: "/assets/no-preview.jpg",
            framework: "Laravel, Javascript",
            href: "#",
        },
        {
            title: "Product CRM",
            description: "NAXUM - CRM to create and manage branded crm for businesses",
            image: "/assets/projects/naxum.png",
            framework: "PERL, Bootstrap, Javascript, Laravel",
            href: "#",
        },
        {
            title: "Product Cataloge",
            description: "Brickworks building products - A brick catalogs and e-commerce site.",
            image: "/assets/projects/brickworks.png",
            framework: "Wordpress, Ecommerce, Laravel",
            href: "#",
        },
        {
            title: "Marketing Site",
            description: "Greenway Surgery Center - offer quality care, specialized equipment, and advanced technology in a safe, family-friendly environment.",
            image: "/assets/no-preview.jpg",
            framework: "Wordpress, Custom Theme, Custom Plugin",
            href: "#",
        },
        {
            title: "Marketing Site",
            description: "All Flex Inc. - All Flex Solutions is a leading provider of specialty flex products.",
            image: "/assets/no-preview.jpg",
            framework: "Wordpress, Custom Theme, Custom Plugin",
            href: "https://www.allflexinc.com",
        },
        {
            title: "Marketing Site",
            description: "Anesthesiology - VCU - Virginia Commonwealth University Anesthesiology Department",
            image: "/assets/no-preview.jpg",
            href: "https://anesthesiology.vcu.edu",
            framework: "Wordpress, Custom Theme, Custom Plugin",
        },
        {
            title: "Event Management System",
            framework: "Wordpress, Custom Theme, Custom Plugin, Stripe",
            description: "MyPleases - Philippine League of Secretaries to the Sanggunian - an event management and reservation system",
            image: "/assets/no-preview.jpg",
            href: "#",
        },
        {
            title: "Marketing Site",
            description: "American Freight Service - A marketing site for the American Freight Service Team",
            image: "/assets/no-preview.jpg",
            href: "http://www.afsaudit.com",
            framework: "Wordpress, Custom Theme, Custom Plugin",
        },
        {
            title: "Marketing Site",
            description: "R. O. Harrell inc. - Tanker truck carriers, liquid & dry bulk hauling",
            image: "/assets/no-preview.jpg",
            href: "https://www.roharrell.com",
            framework: "Wordpress, Custom Theme, Custom Plugin",
        },
        {
            title: "Marketing Site",
            description: "Borderline Personality Disorder Demystified - An innovative description of the changing emphasis of medications and psychotherapy in the treatment of BPD from the Beginning to Recovery.",
            image: "/assets/no-preview.jpg",
            framework: "Wordpress, Custom Theme, Custom Plugin",
            href: "https://bpddemystified.com"
        }
    ];

    return (
        <Section title="Projects">
            <div className="space-y-6">
                <div className="flex flex-wrap justify-center items-center gap-4 ml-15">
                    {projects.map((project) => (
                        <div key={project.title} className="hover:-translate-y-0.5 transition duration-300 max-w-85 border border-gray-200 rounded-xl">
                            <img
                                className="rounded-t-xl h-42 object-fit"
                                src={project.image}
                                alt={project.title}
                                width={400}
                                height={170}
                            />
                            <div className="p-4">
                                {project.href && (
                                    <a href={project.href} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                        <h3 className="text-base font-medium">
                                            {project.title}
                                        </h3>
                                    </a>
                                )}
                                <p className="text-gray-500 mt-1">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {project.framework.split(", ").map((framework) => (
                                        <span key={framework} className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full">
                                            {framework}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}