import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { theme } from "../../styles/theme";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaMicrosoft,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiSupabase,
  SiPostgresql,
  SiRedux,
  SiDjango,
  SiShopify,
  SiPrisma,
  SiRailway,
  SiAstro,
  SiCloudflare,
} from "react-icons/si";

const SkillsSection = styled.section`
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

const SectionSubtitle = styled(motion.p)`
  max-width: 760px;
  text-align: center;
  color: ${theme.colors.textLight};
  font-size: clamp(0.95rem, 1.6vw, 1.05rem);
  line-height: 1.65;
  margin: -${theme.spacing.md} 0 ${theme.spacing.xl};
  opacity: 0.92;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${theme.spacing.lg};
  width: 100%;
  max-width: 1200px;
  margin-top: ${theme.spacing.xl};

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing.xl};
  }
`;

const SkillCategory = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${theme.spacing.lg} ${theme.spacing.md};
  transition: all ${theme.transitions.default};
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 32px rgb(0 0 0 / 15%);
  }
`;

const CategoryTitle = styled.h3`
  font-size: clamp(1.35rem, 2.3vw, 1.7rem);
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

const CategoryDescription = styled.p`
  color: ${theme.colors.textLight};
  font-size: 0.94rem;
  line-height: 1.55;
  margin-bottom: ${theme.spacing.lg};
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  flex: 1;
  width: 100%;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: clamp(0.9rem, 1.4vw, 1.05rem);
  font-weight: 500;
  padding: 0.85rem 0.9rem;
  border-radius: 10px;
  transition: all ${theme.transitions.default};
  border: 1px solid ${theme.colors.glass.border};
  background: linear-gradient(
    135deg,
    rgb(98 190 106 / 24%) 0%,
    rgb(98 190 106 / 16%) 100%
  );
  flex: 1 1 calc(50% - ${theme.spacing.sm});
  min-width: 135px;

  svg {
    font-size: clamp(1rem, 1.8vw, 1.35rem);
    color: ${theme.colors.accent};
    transition: all ${theme.transitions.default};
  }

  &:hover {
    background: ${theme.colors.gradient.glass};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${theme.colors.overlay.light};

    svg {
      transform: scale(1.1) rotate(5deg);
      color: ${theme.colors.light};
    }
  }
`;

const skillCategories = [
  {
    title: "Frontend",
    description: "Responsive and accessible interfaces built for conversion, performance, and product quality.",
    icon: <FaReact />,
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "React Native", icon: <FaReact /> },
      { name: "Next.js", icon: <SiTypescript /> },
      { name: "Astro", icon: <SiAstro /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Redux Toolkit", icon: <SiRedux /> },
      { name: "Shopify", icon: <SiShopify /> },
    ],
  },
  {
    title: "Backend & Data",
    description: "Scalable APIs and data models focused on reliability, security, and clean architecture.",
    icon: <FaNodeJs />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    title: "Cloud & Delivery",
    description: "Modern deployment workflows using cloud services, automation, and production-ready tooling.",
    icon: <FaDocker />,
    skills: [
      { name: "Git / GitHub", icon: <FaGitAlt /> },
      { name: "CI/CD", icon: <FaDatabase /> },
      { name: "Azure", icon: <FaMicrosoft /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "Cloudflare", icon: <SiCloudflare /> },
      { name: "Railway", icon: <SiRailway /> },
      { name: "Docker", icon: <FaDocker /> },
    ],
  },
];

const Skills = () => {
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
    <SkillsSection id="skills" role="region" aria-label="Skills and Expertise">
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        role="heading"
        aria-level={2}
      >
        Skills & Expertise
      </SectionTitle>
      <SectionSubtitle
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        A toolkit for building and shipping modern digital products across frontend, backend, and cloud.
      </SectionSubtitle>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SkillsContainer role="list">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              variants={itemVariants}
              role="listitem"
              aria-labelledby={`category-title-${index}`}
            >
              <CategoryTitle id={`category-title-${index}`}>
                <span aria-hidden="true">{category.icon}</span>
                {category.title}
              </CategoryTitle>
              <CategoryDescription>{category.description}</CategoryDescription>
              <SkillsList role="list" aria-label={`${category.title} skills`}>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    variants={itemVariants}
                    role="listitem"
                  >
                    <span aria-hidden="true">{skill.icon}</span>
                    <span>{skill.name}</span>
                    <span className="sr-only">{`${skill.name} - ${category.title} skill`}</span>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsContainer>
      </motion.div>
    </SkillsSection>
  );
};

export default Skills;
