interface ExperienceItem {
    company: string;
    role: string;
    date: string;
    bullets: string[];
}

const experiences: ExperienceItem[] = [
    {
        company: "Lockheed Martin",
        role: "Software Engineer",
        date: "June 2024 – September 2024",
        bullets: [
            "Resolved 7 software defects and problem requests within an Agile development team, delivering fixes across bi-weekly sprint cycles to ensure efficient updates to legacy systems",
            "Implement bug fixes, database changes, and create features that decrease mean-time-to-resolution for sailors & soldiers",
            "Utilize RHEL LinuxVM environments and CI/CD pipelines to enhance system reliability, security, and deployment efficiency",
            "Leading integration and regression testing efforts, automating test cases and ensuring the product functions as expected",
        ],
    },
    {
        company: "The Social NLP Lab",
        role: "Machine Learning Researcher",
        date: "June 2023 – September 2023",
        bullets: [
            "Conducted research at the intersection of social science and AI, analyzing datasets to study how linguistic patterns shape bias",
            "Utilize GPT-4o and LLaMA models to evaluate online content and compare their outputs with human judgment",
        ],
    },
    {
        company: "Center for Produce Safety Research Team",
        role: "Machine Learning Research Assistant",
        date: "June 2023 – September 2023",
        bullets: [
            "Did something impactful using X technology",
            "Built a system that improved Y by Z%",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="experience-section">
            <div className="timeline">
                {experiences.map((exp, i) => (
                    <div className="timeline-item" key={i}>
                        <div className="timeline-dot" />
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <span className="timeline-role">{exp.role}</span>
                                <br />
                                <div className="timeline-company">{exp.company}</div>
                                <span className="timeline-date">{exp.date}</span>
                            </div>
                            <ul className="timeline-bullets">
                                {exp.bullets.map((b, j) => (
                                    <li key={j}>{b}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}