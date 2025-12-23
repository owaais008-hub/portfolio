import { motion } from "framer-motion";

import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    live_link,
}: {
    index: number;
    name: string;
    description: string;
    tags: { name: string; color: string }[];
    image: string;
    source_code_link: string;
    live_link: string;
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <div
                className="glass-card card-lift"
                style={{
                    backgroundColor: "transparent",
                    padding: "1.25rem",
                    borderRadius: "1rem",
                    width: "360px"
                }}
            >
                <div style={{ position: "relative", width: "100%", height: "230px" }}>
                    <img
                        src={image}
                        alt='project_image'
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "1rem"
                        }}
                    />

                    <div style={{ position: "absolute", inset: 0, display: "flex", justifyContent: "flex-end", margin: "0.75rem", gap: "0.5rem" }}>
                        <div
                            onClick={() => window.open(live_link, "_blank")}
                            style={{
                                width: "2.5rem",
                                height: "2.5rem",
                                borderRadius: "50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer",
                                background: "linear-gradient(to right, #43e97b, #38f9d7)"
                            }}
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/159/159604.png"
                                alt='live demo'
                                style={{ width: "60%", height: "60%", objectFit: "contain" }}
                            />
                        </div>
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            style={{
                                width: "2.5rem",
                                height: "2.5rem",
                                borderRadius: "50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer",
                                background: "linear-gradient(to right, #434343, #000000)"
                            }}
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                alt='source code'
                                style={{ width: "60%", height: "60%", objectFit: "contain" }}
                            />
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: "1.25rem" }}>
                    <h3 style={{ color: "white", fontWeight: "bold", fontSize: "24px" }}>{name}</h3>
                    <p style={{ marginTop: "0.5rem", color: "var(--secondary)", fontSize: "14px" }}>{description}</p>
                </div>

                <div style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            style={{ fontSize: "14px", color: tag.color === "blue-text-gradient" ? "#56ccf2" : tag.color === "green-text-gradient" ? "#11998e" : "#fc6767" }}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p style={{ color: "var(--secondary)", fontSize: "18px", textTransform: "uppercase", letterSpacing: "2px" }}>My work</p>
                <h2 style={{ color: "white", fontWeight: "900", fontSize: "60px" }}>Projects.</h2>
            </motion.div>

            <div style={{ width: "100%", display: "flex" }}>
                <motion.p
                    variants={fadeIn("", "tween", 0.1, 1)}
                    style={{ marginTop: "0.75rem", color: "var(--secondary)", fontSize: "17px", maxWidth: "48rem", lineHeight: "30px" }}
                >
                    Following projects showcases my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </motion.p>
            </div>

            <div style={{ marginTop: "5rem", display: "flex", flexWrap: "wrap", gap: "1.75rem", justifyContent: "center" }}>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "projects");
