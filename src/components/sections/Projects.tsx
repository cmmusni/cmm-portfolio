import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { theme } from "../../styles/theme";
import { FaGithub, FaExternalLinkAlt, FaFacebook } from "react-icons/fa";
import MemeGen from "../../assets/memegen.png";
import AGTGChurch from "../../assets/agtg-church.png";
import IPLabs from "../../assets/ip-labs.png";
import AppTechAnalysis from "../../assets/app-tech-analysis.png";
import PusoSpaze from "../../assets/puso-spaze.png";
import Portionist from "../../assets/portionist.png";
import Early7Cafe from "../../assets/early-7-cafe.png";
import BrandMonitoring from "../../assets/brand-monitoring.png";
import HOApp from "../../assets/hoapp.png";
import ClogHeroes from "../../assets/clog-heroes.png";
import PersonalInjuryClaims from "../../assets/personal-injury-claims.png";
import Rightscape from "../../assets/rightscape.io.png";

const ProjectsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: calc(${theme.spacing.xl} * 1.5);
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
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: calc(${theme.spacing.xl} * 2);
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
  gap: ${theme.spacing.lg};
  width: 100%;
  margin-top: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.xl};
    margin-top: ${theme.spacing.xl};
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  overflow: hidden;
  color: ${theme.colors.textLight};
  transition: all ${theme.transitions.default};
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 32px rgb(0 0 0 / 15%);
  }
`;

const ProjectImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 180px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;

  @media (min-width: ${theme.breakpoints.md}) {
    height: 220px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(
      to top,
      ${theme.colors.glass.card},
      transparent
    );
  }
`;

const ProjectContent = styled.div`
  padding: ${theme.spacing.md};
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg};
  }
`;

const ProjectTitle = styled.h3`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.light};
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.lg};
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.6;
  flex: 1;
  opacity: 0.9;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.sm};
    margin-bottom: ${theme.spacing.lg};
  }
`;

const TechTag = styled.span`
  background: ${theme.colors.glass.card};
  color: ${theme.colors.accent};
  padding: 4px 10px;
  border-radius: 20px;
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  font-weight: 500;
  transition: all ${theme.transitions.default};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 6px 12px;
  }

  &:hover {
    background: ${theme.colors.gradient.accent};
    color: #fff;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px ${theme.colors.overlay.light};
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: auto;
  padding-top: ${theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.05);

  a {
    color: ${theme.colors.accent};
    font-size: clamp(1rem, 2vw, 1.2rem);
    transition: all ${theme.transitions.default};
    padding: ${theme.spacing.xs};
    border-radius: 4px;

    &:hover {
      color: ${theme.colors.light};
      background: ${theme.colors.glass.card};
      transform: translateY(-2px);
    }
  }
`;

const projects = [
  {
    id: 0,
    title: "Rightscape",
    description:
      "A social media music risk mitigation platform that audits, monitors, and clears unlicensed commercial music across all major social media platforms.",
    image: Rightscape,
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
    ],
    liveUrl: "https://rightscape.io",
  },
  {
    id: 1,
    title: "Personal Injury Claims",
    description:
      "A lead generation website for personal injury claims in Scotland, connecting injured individuals with specialist Scottish solicitors for no-win-no-fee compensation claims.",
    image: PersonalInjuryClaims,
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Cloudflare Pages",
    ],
    githubUrl: "https://github.com/cmmusni/personal-injury-claims",
    liveUrl: "https://personal-injury-claims.pages.dev/",
  },
  {
    id: 2,
    title: "Clog Heroes",
    description:
      "A professional plumbing service website for Fredericksburg, VA featuring service scheduling, 24/7 emergency support, and AI-powered customer engagement.",
    image: ClogHeroes,
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ],
    githubUrl: "https://github.com/cmmusni/trades-pilot-ai-clog-heroes",
    liveUrl: "https://trades-pilot-ai-clog-heroes.vercel.app/",
  },
  {
    id: 3,
    title: "HOApp",
    description:
      "A production-ready multi-tenant SaaS platform for HOA and condominium communities, featuring self-serve community creation, role-based access control, realtime features, and comprehensive HOA management tools.",
    image: HOApp,
    techStack: [
      "ReactJS",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Row Level Security",
      "Edge Functions",
    ],
    githubUrl: "https://github.com/cmmusni/hoapp",
    liveUrl: "https://hoapp.net",
    facebookUrl: "https://www.facebook.com/people/HOApp/61576472196862/",
  },
  {
    id: 4,
    title: "PUSO Spaze",
    description:
      "An AI-moderated anonymous community platform focused on psychological safety, positive reinforcement, and faith-based engagement.",
    image: PusoSpaze,
    techStack: [
      "ReactJS",
      "TypeScript",
      "NativeWind",
      "Express",
      "Prisma ORM",
      "OpenAI API",
    ],
    githubUrl: "https://github.com/cmmusni/puso-spaze",
    liveUrl: "https://www.puso-spaze.org",
  },
  {
    id: 5,
    title: "Portionist",
    description: "AI-Powered Meal Planning & Nutrition Tracking Platform",
    image: Portionist,
    techStack: [
      "ReactJS",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Google Gemini LLM",
      "Spoonacular API",
    ],
    githubUrl: "https://github.com/cmmusni/portionist",
    liveUrl: "https://portionist.netlify.app",
  },
  {
    id: 6,
    title: "Early 7 Cafe",
    description:
      "A pre-order and POS web app for a coffee shop, where customers can browse the menu, schedule pickup, and pay via cash, QRPh, or GCash, while admins can manage incoming orders and update statuses in real time.",
    image: Early7Cafe,
    techStack: [
      "Next.js",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Payment Workflow Integration",
      "RBAC",
      "DevOps",
    ],
    githubUrl: "https://github.com/cmmusni/early7cafe",
    liveUrl: "https://early7cafe.vercel.app",
  },
  {
    id: 7,
    title: "Brand Monitoring",
    description:
      "A platform for monitoring brand presence and reputation online.",
    image: BrandMonitoring,
    techStack: ["NextJS", "Tailwind", "Shadcn UI"],
    githubUrl: "https://github.com/sparklab-llc/brand-monitoring",
    liveUrl:
      "https://brand-monitoring-git-dasboard-and-pages-sparklabllc.vercel.app/",
  },
  {
    id: 8,
    title: "All Glory to God Church Website",
    description: "A full-stack website for our church",
    image: AGTGChurch,
    techStack: ["NextJS", "TypeScript", "Tailwind", "Supabase"],
    githubUrl: "https://github.com/cmmusni/agtg-church",
    liveUrl: "https://agtg-church.netlify.app",
  },
  {
    id: 9,
    title: "MemeGen",
    description:
      "A fun e-commerce platform where users can choose a product and personalize it with a meme.",
    image: MemeGen,
    techStack: ["ReactJS", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/cmmusni/MemeGen",
    liveUrl: "https://meme-products.netlify.app",
  },
  {
    id: 10,
    title: "IP Labs",
    description:
      "A front-end web application that analyze media content for trends, copyright compliance, or usage statistics.",
    image: IPLabs,
    techStack: ["React", "TypeScript", "Metronic"],
    githubUrl: "https://github.com/cmmusni/ip-labs",
    liveUrl: "https://iplabs.netlify.app/",
  },
  {
    id: 11,
    title: "App Tech Analysis",
    description:
      "A front-end web applicaition that track app performance, downloads, and market trends across different app stores.",
    image: AppTechAnalysis,
    techStack: ["React", "TypeScript", "Metronic"],
    githubUrl: "https://github.com/cmmusni/app-tech-analysis",
    liveUrl: "https://app-tech-analysis.netlify.app/",
  },
];

const Projects = () => {
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
    <ProjectsSection id="projects" role="region" aria-label="Featured Projects">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          Featured Projects
        </SectionTitle>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProjectGrid role="list">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                variants={itemVariants}
                role="listitem"
                aria-labelledby={`project-title-${project.id}`}
              >
                <ProjectImage
                  imageUrl={project.image}
                  role="img"
                  aria-label={`Screenshot of ${project.title}`}
                  onClick={() => window.open(project.liveUrl, "_blank")}
                  style={{ cursor: "pointer" }}
                />
                <ProjectContent>
                  <ProjectTitle id={`project-title-${project.id}`}>
                    {project.title}
                  </ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechStack
                    role="list"
                    aria-label={`Technologies used in ${project.title}`}
                  >
                    {project.techStack.map((tech) => (
                      <TechTag key={tech} role="listitem">
                        {tech}
                      </TechTag>
                    ))}
                  </TechStack>
                  <ProjectLinks>
                    {"githubUrl" in project && project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <FaGithub aria-hidden="true" />
                        <span className="sr-only">GitHub repository</span>
                      </a>
                    )}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title} live site`}
                    >
                      <FaExternalLinkAlt aria-hidden="true" />
                      <span className="sr-only">Live site</span>
                    </a>
                    {"facebookUrl" in project && project.facebookUrl && (
                      <a
                        href={project.facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title} Facebook page`}
                      >
                        <FaFacebook aria-hidden="true" />
                        <span className="sr-only">Facebook page</span>
                      </a>
                    )}
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </motion.div>
      </div>
    </ProjectsSection>
  );
};

export default Projects;
