import { motion } from "framer-motion";

import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const ServiceCard = ({ index, title, icon: Icon }: { index: number, title: string, icon: any }) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.2, 0.75)}
        style={{ width: "100%", maxWidth: "300px" }}
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
        <div
            style={{
                position: "relative",
                padding: "2px",
                borderRadius: "20px",
                background: "linear-gradient(135deg, rgba(145, 94, 255, 0.5), rgba(255, 94, 154, 0.5))",
                boxShadow: "0 8px 32px rgba(145, 94, 255, 0.3)"
            }}
        >
            <motion.div
                className='glass-card'
                style={{
                    borderRadius: "20px",
                    padding: "2.5rem 1.5rem",
                    minHeight: "320px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1.5rem",
                    position: "relative",
                    overflow: "hidden"
                }}
                whileHover={{
                    boxShadow: "0 20px 60px rgba(145, 94, 255, 0.4)"
                }}
            >
                {/* Animated Background Gradient */}
                <motion.div
                    animate={{
                        background: [
                            "radial-gradient(circle at 0% 0%, rgba(145, 94, 255, 0.1), transparent)",
                            "radial-gradient(circle at 100% 100%, rgba(255, 94, 154, 0.1), transparent)",
                            "radial-gradient(circle at 0% 0%, rgba(145, 94, 255, 0.1), transparent)"
                        ]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    style={{
                        position: "absolute",
                        inset: 0,
                        pointerEvents: "none"
                    }}
                />

                <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #915eff, #ff5e9a)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 8px 30px rgba(145, 94, 255, 0.5)",
                        position: "relative",
                        zIndex: 1
                    }}
                >
                    <Icon style={{ width: "40px", height: "40px", color: "white" }} />
                </motion.div>

                <h3 style={{
                    color: "white",
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    textAlign: "center",
                    margin: 0,
                    position: "relative",
                    zIndex: 1,
                    background: "linear-gradient(135deg, #ffffff, #dfd9ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                }}>
                    {title}
                </h3>

                {/* Decorative Elements */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: "absolute",
                        top: "-50%",
                        right: "-50%",
                        width: "200%",
                        height: "200%",
                        background: "conic-gradient(transparent, rgba(145, 94, 255, 0.1), transparent)",
                        opacity: 0.3
                    }}
                />
            </motion.div>
        </div>
    </motion.div>
);

const About = () => {
    return (
        <div style={{ position: "relative", padding: "5rem 0" }}>
            {/* Section Background Glow */}
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "600px",
                height: "600px",
                background: "radial-gradient(circle, rgba(145, 94, 255, 0.08) 0%, transparent 70%)",
                filter: "blur(80px)",
                pointerEvents: "none"
            }} />

            <motion.div variants={textVariant()}>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        color: "var(--secondary)",
                        fontSize: "18px",
                        textTransform: "uppercase",
                        letterSpacing: "3px",
                        fontWeight: "600",
                        marginBottom: "0.5rem"
                    }}
                >
                    Introduction
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{
                        color: "white",
                        fontWeight: "900",
                        fontSize: "clamp(2.5rem, 5vw, 4rem)",
                        margin: 0,
                        background: "linear-gradient(135deg, #ffffff, #dfd9ff)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                    }}
                >
                    Overview.
                </motion.h2>
            </motion.div>

            <motion.p
                variants={fadeIn("up", "spring", 0.2, 1)}
                style={{
                    marginTop: "1.5rem",
                    color: "var(--secondary)",
                    fontSize: "clamp(1rem, 2vw, 1.125rem)",
                    maxWidth: "48rem",
                    lineHeight: "1.8",
                    position: "relative",
                    zIndex: 1
                }}
            >
                I specialize in transforming complex requirements into seamless, high-performance digital ecosystems. As a{" "}
                <span style={{ color: "#915eff", fontWeight: "700" }}>MERN Stack Developer</span>, I combine architectural precision with creative problem-solving to build scalable web applications. Whether it's optimizing backend performance or crafting immersive user interfaces, I am committed to delivering excellence through clean, maintainable code and modern cloud technologies.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                    marginTop: "5rem",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "2.5rem",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 1
                }}
            >
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </motion.div>
        </div>
    );
};

export default SectionWrapper(About, "about");
