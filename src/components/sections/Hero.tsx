import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { theme } from "../../styles/theme";
import ProfilePic from "../../assets/profile-pic.jpg";
import ProfilePicDark from "../../assets/profile-pic-dark.png";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useTheme } from "../../contexts/useThemeHook";

const fadeUpKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = styled.section`
  min-height: calc(100vh - 5rem);
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  padding: ${theme.spacing.xl} 0;
  transition:
    background 0.3s ease,
    color 0.3s ease;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: calc(${theme.spacing.xl} + 1rem) 0;
  }

  .container {
    max-width: 1180px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: ${theme.breakpoints.sm}) {
      width: 90%;
    }
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1120px;
  width: 100%;
  border-radius: 28px;
  padding: 1.5rem;
  transition: all 0.3s ease;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 2rem;
  }
`;

const LightModeHeroContent = styled(HeroContent)`
  background: linear-gradient(180deg, #ffffff 0%, #f6f8fb 100%);
  border: 1px solid rgba(17, 24, 39, 0.08);
  box-shadow: 0 30px 80px rgba(15, 23, 42, 0.28);
`;

const DarkModeHeroContent = styled(HeroContent)`
  background: linear-gradient(180deg, #1f2937 0%, #111827 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
`;

const HeaderGrid = styled.div`
  display: grid;
  gap: 1.25rem;
  border-bottom: 1px solid;
  border-color: rgba(17, 24, 39, 0.08);
  padding-bottom: 1.25rem;
  transition: border-color 0.3s ease;

  html[data-theme="dark"] & {
    border-color: rgba(255, 255, 255, 0.1);
  }

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr auto;
    align-items: center;
  }
`;

const IdentityBlock = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;
`;

const Avatar = styled.div<{
  lightImage: string;
  darkImage: string;
  isDark: boolean;
}>`
  position: relative;
  overflow: hidden;
  width: 86px;
  height: 86px;
  border-radius: 18px;
  border: 2px solid #ffffff;
  box-shadow: 0 10px 24px rgba(17, 24, 39, 0.2);

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    transition:
      opacity 0.45s ease,
      transform 0.45s ease;
  }

  &::before {
    background-image: url(${(props) => props.lightImage});
    opacity: ${(props) => (props.isDark ? 0 : 1)};
    transform: scale(${(props) => (props.isDark ? 1.04 : 1)});
  }

  &::after {
    background-image: url(${(props) => props.darkImage});
    opacity: ${(props) => (props.isDark ? 1 : 0)};
    transform: scale(${(props) => (props.isDark ? 1 : 1.04)});
  }

  @media (min-width: ${theme.breakpoints.md}) {
    width: 110px;
    height: 110px;
  }
`;

const Name = styled.h1`
  animation: ${fadeUpKeyframes} 0.5s ease-out forwards;
  font-size: clamp(1.7rem, 3.2vw, 2.4rem);
  letter-spacing: -0.01em;
  line-height: 1.15;
  color: #0f172a;
  transition: color 0.3s ease;

  html[data-theme="dark"] & {
    color: #f9fafb;
  }
`;

const LocationLine = styled.p`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.1s forwards;
  opacity: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: #4b5563;
  margin-top: 0.4rem;
  font-size: 0.98rem;
  transition: color 0.3s ease;

  html[data-theme="dark"] & {
    color: #d1d5db;
  }
`;

const RoleLine = styled.p`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.2s forwards;
  opacity: 0;
  margin-top: 0.35rem;
  color: #1f2937;
  font-size: clamp(1rem, 1.7vw, 1.35rem);
  font-weight: 500;
  transition: color 0.3s ease;

  html[data-theme="dark"] & {
    color: #e5e7eb;
  }
`;

const AboutGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  padding-top: 1.5rem;

  @media (min-width: ${theme.breakpoints.lg}) {
    // grid-template-columns: 1.4fr 0.9fr;
    align-items: start;
  }
`;

const AboutBlock = styled.div`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.35s forwards;
  opacity: 0;

  h2 {
    font-size: clamp(1.4rem, 2.5vw, 1.9rem);
    color: #0f172a;
    margin-bottom: 0.9rem;
    transition: color 0.3s ease;

    html[data-theme="dark"] & {
      color: #f9fafb;
    }
  }

  p {
    color: #334155;
    font-size: clamp(1rem, 1.15vw, 1.2rem);
    margin-bottom: 1rem;
    // max-width: 65ch;
    line-height: 1.75;
    transition: color 0.3s ease;

    html[data-theme="dark"] & {
      color: #d1d5db;
    }
  }
`;

const SocialLinks = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 1.25rem;

  a {
    color: #0f172a;
    font-size: 1rem;
    transition: all 0.3s ease;
    padding: 0.55rem 0.7rem;
    border-radius: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
    background: rgba(15, 23, 42, 0.03);
    border: 1px solid rgba(15, 23, 42, 0.08);

    &:hover {
      color: #1d4ed8;
      transform: translateY(-2px);
      border-color: rgba(37, 99, 235, 0.4);
    }

    html[data-theme="dark"] & {
      color: #e5e7eb;
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.15);

      &:hover {
        color: #93c5fd;
        border-color: rgba(147, 197, 253, 0.4);
      }
    }
  }
`;

const TopActions = styled.div`
  display: flex;
  align-self: start;
  gap: 0.6rem;
`;

const ToggleTrack = styled.button<{ isDark: boolean }>`
  width: 54px;
  height: 28px;
  border-radius: 999px;
  position: relative;
  padding: 0;
  flex-shrink: 0;
  cursor: pointer;
  border: 1px solid
    ${({ isDark }) =>
      isDark ? "rgba(255,255,255,0.18)" : "rgba(17,24,39,0.14)"};
  background: ${({ isDark }) => (isDark ? "#374151" : "#e5e7eb")};
  transition:
    background 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    border-color: ${({ isDark }) =>
      isDark ? "rgba(255,255,255,0.34)" : "rgba(17,24,39,0.28)"};
  }

  &:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }
`;

const ToggleThumb = styled.span<{ isDark: boolean }>`
  position: absolute;
  top: 2px;
  left: ${({ isDark }) => (isDark ? "26px" : "2px")};
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: left 0.3s ease;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.18);
  font-size: 0.68rem;
  color: ${({ isDark }) => (isDark ? "#818cf8" : "#f59e0b")};
  pointer-events: none;
`;

export const Hero = () => {
  const { mode, toggleTheme } = useTheme();
  const HeroContentComponent =
    mode === "light" ? LightModeHeroContent : DarkModeHeroContent;

  return (
    <HeroSection id="hero" role="region" aria-label="Introduction">
      <div className="container">
        <HeroContentComponent>
          <HeaderGrid>
            <IdentityBlock>
              <Avatar
                lightImage={ProfilePic}
                darkImage={ProfilePicDark}
                isDark={mode === "dark"}
                aria-hidden="true"
              />
              <div>
                <Name>Clifford Mark Musni</Name>
                <LocationLine>
                  <FaMapMarkerAlt aria-hidden="true" />
                  Metro Manila, Philippines
                </LocationLine>
                <RoleLine>Software Engineer | AI Engineer | Traveler</RoleLine>
              </div>
            </IdentityBlock>

            <TopActions>
              <ToggleTrack
                isDark={mode === "dark"}
                onClick={toggleTheme}
                aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
                title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
              >
                <ToggleThumb isDark={mode === "dark"}>
                  {mode === "dark" ? (
                    <BsMoonFill aria-hidden="true" />
                  ) : (
                    <BsSunFill aria-hidden="true" />
                  )}
                </ToggleThumb>
              </ToggleTrack>
            </TopActions>
          </HeaderGrid>

          <AboutGrid>
            <AboutBlock>
              <h2>About</h2>
              <p>
                I'm a full-stack software engineer with experience building
                modern and scalable web and mobile applications.
              </p>
              <p>
                {`I graduated with a degree in Information Technology and have
                several years of experience in software development.
                I specialize in building intuitive user interfaces and efficient
                systems using technologies like React. Throughout my career,
                I’ve worked in both enterprise and product-focused environments
                where I’ve been responsible for designing features, developing
                frontend components, integrating APIs, and collaborating with
                cross-functional teams to deliver high-quality applications.`}
              </p>
              <p>
                Recently, I’ve also been diving deeper into integrating AI tools
                and developing AI-powered solutions, leveraging generative AI to
                enhance application capabilities and user experiences.
              </p>
              <p>
                Outside of work, I enjoy traveling to new places with my wife,
                experiencing different cultures, and finding inspiration from
                each journey.
              </p>

              <SocialLinks role="list" aria-label="Social media links">
                <a
                  href="#contact"
                  aria-label="Go to get in touch section"
                  role="listitem"
                >
                  <FaEnvelope aria-hidden="true" /> Get In Touch
                </a>
              </SocialLinks>
            </AboutBlock>
          </AboutGrid>
        </HeroContentComponent>
      </div>
    </HeroSection>
  );
};
