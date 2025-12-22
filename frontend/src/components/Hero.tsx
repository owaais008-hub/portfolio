import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="particle-bg" style={{ position: "relative", width: "100%", height: "100vh", margin: "0 auto", overflow: "hidden" }}>
            {/* Animated Background Elements */}
            <div style={{
                position: "absolute",
                top: "20%",
                right: "10%",
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(145, 94, 255, 0.15) 0%, transparent 70%)",
                filter: "blur(60px)",
                animation: "pulse 4s ease-in-out infinite"
            }} />
            <div style={{
                position: "absolute",
                bottom: "20%",
                left: "10%",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255, 94, 154, 0.12) 0%, transparent 70%)",
                filter: "blur(50px)",
                animation: "pulse 5s ease-in-out infinite"
            }} />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    position: "absolute",
                    inset: 0,
                    top: "120px",
                    maxWidth: "80rem",
                    margin: "0 auto",
                    padding: "0 1.5rem",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    gap: "1.25rem",
                    zIndex: 10
                }}
            >
                {/* Enhanced Timeline Indicator */}
                <motion.div
                    variants={itemVariants}
                    style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "1.25rem" }}
                >
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{
                            width: "1.25rem",
                            height: "1.25rem",
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #915eff, #ff5e9a)",
                            boxShadow: "0 0 20px rgba(145, 94, 255, 0.6)"
                        }}
                    />
                    <div style={{
                        width: "0.25rem",
                        height: "20rem",
                        background: "linear-gradient(to bottom, #915eff, rgba(145, 94, 255, 0.3), transparent)",
                        borderRadius: "2px",
                        position: "relative"
                    }}>
                        <motion.div
                            animate={{ y: [0, 320, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: "-2px",
                                width: "8px",
                                height: "40px",
                                background: "linear-gradient(to bottom, #915eff, transparent)",
                                borderRadius: "4px",
                                boxShadow: "0 0 10px rgba(145, 94, 255, 0.8)"
                            }}
                        />
                    </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.5rem 1rem",
                            background: "rgba(145, 94, 255, 0.1)",
                            border: "1px solid rgba(145, 94, 255, 0.3)",
                            borderRadius: "2rem",
                            marginBottom: "1rem",
                            backdropFilter: "blur(10px)"
                        }}
                    >
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                background: "#915eff",
                                boxShadow: "0 0 10px rgba(145, 94, 255, 0.8)"
                            }}
                        />
                        <span style={{ color: "#915eff", fontSize: "0.875rem", fontWeight: "600" }}>
                            Full Stack Developer
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        style={{
                            fontWeight: "900",
                            color: "white",
                            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                            marginTop: "0.5rem",
                            lineHeight: "1.1",
                            letterSpacing: "-0.02em"
                        }}
                    >
                        Hi, I'm{" "}
                        <motion.span
                            className="text-gradient-premium"
                            style={{ display: "inline-block" }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            Owais Ali
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        style={{
                            color: "#dfd9ff",
                            fontWeight: "500",
                            fontSize: "clamp(1.125rem, 2.5vw, 1.75rem)",
                            marginTop: "1.5rem",
                            lineHeight: "1.7",
                            maxWidth: "650px"
                        }}
                    >
                        I develop{" "}
                        <motion.span
                            style={{ color: "#915eff", fontWeight: "700", position: "relative" }}
                            whileHover={{ scale: 1.05 }}
                        >
                            Full Stack MERN
                        </motion.span>{" "}
                        Applications
                        <br />
                        and create{" "}
                        <motion.span
                            style={{
                                background: "linear-gradient(135deg, #915eff, #ff5e9a)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                fontWeight: "700"
                            }}
                        >
                            stunning user interfaces
                        </motion.span>
                        .
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        style={{
                            marginTop: "2rem",
                            display: "flex",
                            gap: "1rem",
                            alignItems: "center",
                            flexWrap: "wrap"
                        }}
                    >
                        <div style={{
                            height: "3px",
                            width: "80px",
                            background: "linear-gradient(90deg, #915eff, rgba(145, 94, 255, 0.3), transparent)",
                            borderRadius: "2px",
                            boxShadow: "0 0 10px rgba(145, 94, 255, 0.5)"
                        }} />
                        <motion.p
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{
                                color: "var(--secondary)",
                                fontSize: "0.875rem",
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                fontWeight: "600"
                            }}
                        >
                            Available for Opportunities
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        style={{ marginTop: "2.5rem", display: "flex", gap: "1.25rem", flexWrap: "wrap" }}
                    >
                        <motion.a
                            href="/Professional_CV.html"
                            target="_blank"
                            className="btn-primary"
                            style={{
                                textDecoration: "none",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                position: "relative",
                                overflow: "hidden"
                            }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>View CV</span>
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </motion.a>
                        <motion.a
                            href="https://github.com/owaais008-hub"
                            target="_blank"
                            className="btn-secondary"
                            style={{
                                textDecoration: "none",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem"
                            }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <span>GitHub Profile</span>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Enhanced Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                style={{ position: "absolute", bottom: "5%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 10 }}
            >
                <motion.a
                    href="#about"
                    style={{ textDecoration: "none", color: "inherit" }}
                    whileHover={{ scale: 1.1 }}
                >
                    <div style={{
                        width: "35px",
                        height: "64px",
                        borderRadius: "20px",
                        border: "3px solid rgba(145, 94, 255, 0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        padding: "8px",
                        background: "rgba(145, 94, 255, 0.05)",
                        backdropFilter: "blur(10px)",
                        boxShadow: "0 0 20px rgba(145, 94, 255, 0.3)"
                    }}>
                        <motion.div
                            animate={{ y: [0, 24, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            style={{
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, #915eff, #ff5e9a)",
                                boxShadow: "0 0 10px rgba(145, 94, 255, 0.8)"
                            }}
                        />
                    </div>
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Hero;
