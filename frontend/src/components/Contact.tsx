import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Send email using template parameters
        emailjs.send(
            'service_nfgo34u',      // Correct Service ID
            'template_g6acsc4',     // Template ID
            {
                from_name: form.name,
                from_email: form.email,
                to_name: 'Owais Ali',
                message: form.message,
            },
            '3Fv5kAAaDO925h8Gt'
        )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you! I will get back to you as soon as possible.");
                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error('EmailJS Error Details:', error);
                    const errorMessage = error.text || error.message || 'Unknown error';
                    alert(`Error: ${errorMessage}\n\nPlease email me directly at owaais008@gmail.com`);
                }
            );
    };

    return (
        <div
            style={{
                marginTop: "3rem",
                display: "flex",
                flexDirection: "row",
                gap: "2.5rem",
                overflow: "hidden",
                justifyContent: "center",
            }}
        >
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="glass-card"
                style={{
                    maxWidth: "800px",
                    width: "100%",
                    padding: "3rem",
                    borderRadius: "1rem"
                }}
            >
                <p style={{ color: "var(--secondary)", fontSize: "18px", textTransform: "uppercase", letterSpacing: "2px" }}>Get in touch</p>
                <h3 style={{ color: "white", fontWeight: "900", fontSize: "50px" }}>Contact.</h3>

                {/* Contact Information */}
                <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <div style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #915eff 0%, #7c3aed 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 4px 20px rgba(145, 94, 255, 0.4)"
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </div>
                        <div>
                            <p style={{ color: "var(--secondary)", fontSize: "14px", marginBottom: "0.25rem" }}>Phone</p>
                            <a href="tel:+923316078214" style={{ color: "white", fontSize: "18px", fontWeight: "600", textDecoration: "none" }}>
                                +92 331 6078214
                            </a>
                        </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <div style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #915eff 0%, #7c3aed 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 4px 20px rgba(145, 94, 255, 0.4)"
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </div>
                        <div>
                            <p style={{ color: "var(--secondary)", fontSize: "14px", marginBottom: "0.25rem" }}>Email</p>
                            <a href="mailto:owaais008@gmail.com" style={{ color: "white", fontSize: "18px", fontWeight: "600", textDecoration: "none" }}>
                                owaais008@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    style={{ marginTop: "3rem", display: "flex", flexDirection: "column", gap: "2rem" }}
                >
                    <label style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ color: "white", fontWeight: "500", marginBottom: "1rem" }}>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            style={{
                                backgroundColor: "rgba(255, 255, 255, 0.07)",
                                padding: "1rem 1.5rem",
                                color: "white",
                                borderRadius: "0.5rem",
                                border: "1px solid rgba(145, 94, 255, 0.2)",
                                fontWeight: "500",
                                transition: "all 0.3s ease",
                                outline: "none"
                            }}
                            onFocus={(e) => e.target.style.borderColor = "rgba(145, 94, 255, 0.5)"}
                            onBlur={(e) => e.target.style.borderColor = "rgba(145, 94, 255, 0.2)"}
                        />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ color: "white", fontWeight: "500", marginBottom: "1rem" }}>Your email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Your Email Address"
                            style={{
                                backgroundColor: "rgba(255, 255, 255, 0.07)",
                                padding: "1rem 1.5rem",
                                color: "white",
                                borderRadius: "0.5rem",
                                border: "1px solid rgba(145, 94, 255, 0.2)",
                                fontWeight: "500",
                                transition: "all 0.3s ease",
                                outline: "none"
                            }}
                            onFocus={(e) => e.target.style.borderColor = "rgba(145, 94, 255, 0.5)"}
                            onBlur={(e) => e.target.style.borderColor = "rgba(145, 94, 255, 0.2)"}
                        />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ color: "white", fontWeight: "500", marginBottom: "1rem" }}>Your Message</span>
                        <textarea
                            rows={7}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='Type your message here...'
                            style={{
                                backgroundColor: "rgba(255, 255, 255, 0.07)",
                                padding: "1rem 1.5rem",
                                color: "white",
                                borderRadius: "0.5rem",
                                border: "1px solid rgba(145, 94, 255, 0.2)",
                                fontWeight: "500",
                                transition: "all 0.3s ease",
                                outline: "none",
                                resize: "vertical" as const
                            }}
                            onFocus={(e) => e.target.style.borderColor = "rgba(145, 94, 255, 0.5)"}
                            onBlur={(e) => e.target.style.borderColor = "rgba(145, 94, 255, 0.2)"}
                        />
                    </label>

                    <button
                        type='submit'
                        className="btn-primary"
                        style={{
                            width: "fit-content"
                        }}
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
