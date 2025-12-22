import BallCanvas from "./canvas/Ball";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <p style={{ color: "var(--secondary)", fontSize: "18px", textTransform: "uppercase", letterSpacing: "2px" }}>
          My Technical Arsenal
        </p>
        <h2 style={{ color: "white", fontWeight: "900", fontSize: "60px", marginTop: "0.5rem" }}>
          Technologies.
        </h2>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "3rem" }}>
        {technologies.map((technology) => (
          <div
            style={{ width: "7rem", height: "7rem" }}
            key={technology.name}
            className="float-animation"
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
