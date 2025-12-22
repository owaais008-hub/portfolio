import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }: { experience: any }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "rgba(21, 16, 48, 0.7)",
                color: "#fff",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(145, 94, 255, 0.2)",
                boxShadow: "0 12px 40px 0 rgba(145, 94, 255, 0.15), 0 0 20px rgba(145, 94, 255, 0.05)",
                borderRadius: "1rem"
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(145, 94, 255, 0.5)" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        style={{ width: "60%", height: "60%", objectFit: "contain" }}
                    />
                </div>
            }
        >
            <div>
                <h3 style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>{experience.title}</h3>
                <p
                    style={{
                        color: "#aaa6c3",
                        fontSize: "16px",
                        fontWeight: "600",
                        margin: 0,
                    }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul style={{ marginTop: "1.25rem", listStyleType: "disc", marginLeft: "1.25rem" }}>
                {experience.points.map((point: string, index: number) => (
                    <li
                        key={`experience-point-${index}`}
                        style={{
                            color: "white",
                            fontSize: "14px",
                            paddingLeft: "0.25rem",
                            letterSpacing: "0.05rem",
                            marginBottom: "0.5rem"
                        }}
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p style={{ color: "var(--secondary)", fontSize: "18px", textTransform: "uppercase", letterSpacing: "2px" }}>What I have done so far</p>
                <h2 style={{ color: "white", fontWeight: "900", fontSize: "60px" }}>Work Experience.</h2>
            </motion.div>

            <div style={{ marginTop: "5rem", display: "flex", flexDirection: "column" }}>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");
