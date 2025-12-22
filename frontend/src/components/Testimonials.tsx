import { motion } from "framer-motion";

import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

interface FeedbackCardProps {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}: FeedbackCardProps) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="glass-card card-lift"
    style={{
      backgroundColor: "transparent",
      padding: "2.5rem",
      borderRadius: "1.25rem",
      width: "100%",
      maxWidth: "320px"
    }}
  >
    <p style={{ color: "white", fontWeight: "900", fontSize: "3rem" }}>"</p>

    <div style={{ marginTop: "0.25rem" }}>
      <p style={{ color: "white", letterSpacing: "0.05em", fontSize: "1.125rem" }}>{testimonial}</p>

      <div style={{ marginTop: "1.75rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.25rem" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <p style={{ color: "white", fontWeight: "medium", fontSize: "1rem" }}>
            <span style={{ color: "#915eff" }}>@</span> {name}
          </p>
          <p style={{ marginTop: "0.25rem", color: "var(--secondary)", fontSize: "0.75rem" }}>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", objectFit: "cover" }}
        />
      </div>
    </div>
  </motion.div >
);

const Testimonials = () => {
  return (
    <div style={{ marginTop: "3rem", backgroundColor: "#100d25", borderRadius: "1.25rem" }}>
      <div
        className="glass-card"
        style={{
          backgroundColor: "transparent",
          borderRadius: "1.25rem",
          padding: "2rem",
          minHeight: "300px"
        }}
      >
        <motion.div variants={textVariant()}>
          <p style={{ color: "var(--secondary)", fontSize: "18px", textTransform: "uppercase", letterSpacing: "2px" }}>What others say</p>
          <h2 style={{ color: "white", fontWeight: "900", fontSize: "60px" }}>Testimonials.</h2>
        </motion.div>
      </div>
      <div style={{ marginTop: "-5rem", padding: "0 2rem 2rem 2rem", display: "flex", flexWrap: "wrap", gap: "1.75rem", justifyContent: "center" }}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Testimonials, "");