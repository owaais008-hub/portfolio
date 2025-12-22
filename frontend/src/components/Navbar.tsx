import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants";

const Navbar: React.FC = () => {
    const [active, setActive] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [mobileMenuOpen]);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
                padding: "1.5rem 0",
                width: "100%",
                display: "flex",
                alignItems: "center",
                position: "fixed",
                top: 0,
                zIndex: 50,
                backgroundColor: scrolled ? "rgba(5, 8, 22, 0.95)" : "transparent",
                backdropFilter: scrolled ? "blur(20px)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
                borderBottom: scrolled ? "1px solid rgba(145, 94, 255, 0.15)" : "none",
                boxShadow: scrolled ? "0 8px 32px rgba(0, 0, 0, 0.4)" : "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "80rem",
                    margin: "0 auto",
                    padding: "0 1.5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        to="/"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            textDecoration: "none",
                        }}
                        onClick={() => {
                            setActive("");
                            setMobileMenuOpen(false);
                            window.scrollTo(0, 0);
                        }}
                    >
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            style={{
                                width: "45px",
                                height: "45px",
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, #915eff 0%, #7c3aed 100%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 4px 20px rgba(145, 94, 255, 0.5)",
                                fontWeight: "900",
                                fontSize: "1.5rem",
                                color: "white",
                                position: "relative"
                            }}
                        >
                            <span>O</span>
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                style={{
                                    position: "absolute",
                                    inset: "-4px",
                                    borderRadius: "50%",
                                    border: "2px solid rgba(145, 94, 255, 0.5)",
                                    pointerEvents: "none"
                                }}
                            />
                        </motion.div>
                        <div>
                            <p style={{
                                color: "white",
                                fontSize: "1.5rem",
                                fontWeight: "900",
                                cursor: "pointer",
                                margin: 0,
                                lineHeight: "1.2"
                            }}>
                                Owais Ali
                            </p>
                            <p style={{
                                color: "var(--secondary)",
                                fontSize: "0.75rem",
                                margin: 0,
                                letterSpacing: "0.05em"
                            }}>
                                Full Stack Developer
                            </p>
                        </div>
                    </Link>
                </motion.div>

                {/* Desktop Menu */}
                <ul
                    style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "row",
                        gap: "2.5rem",
                        margin: 0,
                        padding: 0,
                    }}
                    className="desktop-menu"
                >
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            style={{
                                position: "relative",
                            }}
                        >
                            <motion.a
                                href={`#${nav.id}`}
                                style={{
                                    color: active === nav.title ? "white" : "var(--secondary)",
                                    textDecoration: "none",
                                    fontSize: "1.125rem",
                                    fontWeight: "500",
                                    cursor: "pointer",
                                    position: "relative",
                                    display: "block",
                                    transition: "color 0.3s ease"
                                }}
                                onClick={() => setActive(nav.title)}
                                whileHover={{ color: "white" }}
                                onMouseEnter={() => setActive(nav.title)}
                            >
                                {nav.title}
                                <motion.div
                                    initial={false}
                                    animate={{
                                        width: active === nav.title ? "100%" : "0%",
                                        opacity: active === nav.title ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        position: "absolute",
                                        bottom: "-8px",
                                        left: 0,
                                        height: "2px",
                                        background: "linear-gradient(90deg, #915eff, #ff5e9a)",
                                        borderRadius: "2px",
                                        boxShadow: "0 0 10px rgba(145, 94, 255, 0.8)"
                                    }}
                                />
                            </motion.a>
                        </li>
                    ))}
                    <li>
                        <motion.a
                            href="/Professional_CV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            style={{
                                textDecoration: "none",
                                fontSize: "1rem",
                                padding: "0.625rem 1.5rem",
                                display: "inline-block"
                            }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View CV
                        </motion.a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <motion.button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{
                        display: "none",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        padding: "0.5rem",
                        flexDirection: "column",
                        gap: "6px",
                        zIndex: 100
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    <motion.span
                        animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        style={{
                            width: "28px",
                            height: "3px",
                            background: "linear-gradient(90deg, #915eff, #ff5e9a)",
                            borderRadius: "2px",
                            display: "block"
                        }}
                    />
                    <motion.span
                        animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                        style={{
                            width: "28px",
                            height: "3px",
                            background: "linear-gradient(90deg, #915eff, #ff5e9a)",
                            borderRadius: "2px",
                            display: "block"
                        }}
                    />
                    <motion.span
                        animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        style={{
                            width: "28px",
                            height: "3px",
                            background: "linear-gradient(90deg, #915eff, #ff5e9a)",
                            borderRadius: "2px",
                            display: "block"
                        }}
                    />
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: "rgba(5, 8, 22, 0.98)",
                            backdropFilter: "blur(20px)",
                            zIndex: 40,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "2rem",
                            padding: "2rem"
                        }}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {navLinks.map((nav, index) => (
                            <motion.a
                                key={nav.id}
                                href={`#${nav.id}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => {
                                    setActive(nav.title);
                                    setMobileMenuOpen(false);
                                }}
                                style={{
                                    color: active === nav.title ? "#915eff" : "white",
                                    textDecoration: "none",
                                    fontSize: "2rem",
                                    fontWeight: "700",
                                    textAlign: "center",
                                    position: "relative",
                                    padding: "1rem 2rem",
                                    borderRadius: "1rem",
                                    background: active === nav.title ? "rgba(145, 94, 255, 0.1)" : "transparent",
                                    border: active === nav.title ? "2px solid rgba(145, 94, 255, 0.3)" : "2px solid transparent",
                                    transition: "all 0.3s ease",
                                    width: "100%",
                                    maxWidth: "300px"
                                }}
                                whileHover={{ scale: 1.05, background: "rgba(145, 94, 255, 0.15)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {nav.title}
                            </motion.a>
                        ))}
                        <motion.a
                            href="/Professional_CV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ delay: navLinks.length * 0.1 }}
                            onClick={() => setMobileMenuOpen(false)}
                            style={{
                                textDecoration: "none",
                                fontSize: "1.25rem",
                                padding: "1rem 2rem",
                                marginTop: "1rem"
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View CV
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 768px) {
                    .desktop-menu {
                        display: none !important;
                    }
                    .mobile-menu-btn {
                        display: flex !important;
                    }
                }
            `}</style>
        </motion.nav>
    );
};

export default Navbar;
