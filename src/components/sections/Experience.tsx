import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { theme } from "../../styles/theme";
import { FaReact, FaNodeJs, FaFilePdf } from "react-icons/fa";
import { computeDateDuration } from "../../shared/functions/computeDateDuration";
import CliffordCV from "../../assets/clifford-cv.pdf";

const ExperiencesSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.lg} ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} ${theme.spacing.lg};
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.textDark};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.light};
    border-radius: 2px;
  }
`;

const ExperiencesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${theme.spacing.lg};
  width: 100%;
  max-width: 1200px;
  margin-top: ${theme.spacing.xl};

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.xl};
  }
`;

const ExperienceCategory = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${theme.spacing.lg};
  transition: all ${theme.transitions.default};
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  min-width: 400px;
  margin: 0 auto;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 32px rgb(0 0 0 / 15%);
  }
`;

const CategoryTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 1.75rem);
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.light};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-weight: 600;
  position: relative;
  padding-bottom: ${theme.spacing.md};

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }

  svg {
    font-size: clamp(1.75rem, 3vw, 2rem);
    color: ${theme.colors.accent};
  }
`;

const ExperiencesCVContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin-top: ${theme.spacing.xl};
`;

const ContactEmail = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: clamp(0.9rem, 2vw, 1.3rem);
  color: ${theme.colors.accent};
  margin-bottom: ${theme.spacing.lg};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: 30px;
  transition: all ${theme.transitions.default};
  font-weight: 500;
  background: ${theme.colors.glass.card};
  border: 1px solid ${theme.colors.accent};
  word-break: break-all;

  @media (min-width: ${theme.breakpoints.sm}) {
    word-break: normal;
    padding: ${theme.spacing.md} ${theme.spacing.lg};
  }

  svg {
    font-size: 1.2em;
    flex-shrink: 0;

    @media (min-width: ${theme.breakpoints.md}) {
      font-size: 1.4em;
    }
  }

  &:hover {
    background: ${theme.colors.gradient.accent};
    color: ${theme.colors.textDark};
    transform: translateY(-3px);
    box-shadow: 0 6px 16px ${theme.colors.overlay.dark};
  }
`;

const ExperienceCompany = styled(motion.h3)`
  margin-bottom: ${theme.spacing.xs};
`;

const ExperienceJobType = styled(motion.h6)`
  margin-bottom: ${theme.spacing.xs};
  font-weight: lighter;
`;

const ExperienceDuration = styled(motion.h6)`
  margin-bottom: ${theme.spacing.xs};
`;

const ExperienceCountry = styled(motion.h6)`
  margin-bottom: ${theme.spacing.xs};
  font-weight: lighter;
`;

const experienceCategories = [
  {
    title: "Sr. Frontend Dev",
    icon: <FaReact />,
    company: "Finastra Philippines Inc.",
    hiredDate: "Jan 2021",
    terminationDate: undefined,
    country: "Philippines",
    isFullTime: true,
  },
  {
    title: "Full Stack Dev",
    icon: <FaNodeJs />,
    company: "Different Clients",
    hiredDate: "Mar 2024",
    terminationDate: undefined,
    country: "USA, UK, Thailand",
    isFullTime: false,
  },
];

const Experiences = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <ExperiencesSection
      id="experiences"
      role="region"
      aria-label="Work Experiences"
    >
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        role="heading"
        aria-level={2}
      >
        Work Experience
      </SectionTitle>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ExperiencesContainer role="list">
          {experienceCategories.map((category, index) => (
            <ExperienceCategory
              key={index}
              variants={itemVariants}
              role="listitem"
              aria-labelledby={`category-title-${index}`}
            >
              <CategoryTitle id={`category-title-${index}`}>
                <span aria-hidden="true">{category.icon}</span>
                {category.title}
              </CategoryTitle>
              <ExperienceCompany>{category.company}</ExperienceCompany>
              <ExperienceJobType>
                {category.isFullTime ? "Full-time" : "Freelance"}
              </ExperienceJobType>
              <ExperienceDuration>{`${category.hiredDate} - ${category.terminationDate || "Present"
                } · ${computeDateDuration(
                  category.hiredDate,
                  category.terminationDate
                )}`}</ExperienceDuration>
              <ExperienceCountry>{category.country}</ExperienceCountry>
            </ExperienceCategory>
          ))}
        </ExperiencesContainer>
        <ExperiencesCVContainer>
          <ContactEmail
            href={CliffordCV}
            target="_blank"
            rel="noopener noreferrer"
            download="Clifford-Mark-Musni-CV.pdf"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View Clifford's CV"
          >
            <FaFilePdf aria-hidden="true" />
            <span>View more</span>
          </ContactEmail>
        </ExperiencesCVContainer>
      </motion.div>
    </ExperiencesSection>
  );
};

export default Experiences;
