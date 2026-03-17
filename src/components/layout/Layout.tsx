import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { theme } from "../../styles/theme";
import { FloatingNav } from "../navigation/FloatingNav";
import { useKeyboardNavigation } from "../../hooks/useKeyboardNavigation";
import CLogo from "../../assets/c-logo.jpg";

interface LayoutProps {
  children: ReactNode;
}

const LayoutWrapper = styled.div`
  @media print {
    background: white !important;
    color: black !important;

    * {
      color: black !important;
      text-shadow: none !important;
      box-shadow: none !important;
    }

    section {
      min-height: auto !important;
      padding: 2rem 0 !important;
      page-break-inside: avoid;
    }

    a[href]:after {
      content: " (" attr(href) ")";
      font-size: 0.8em;
    }
  }

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
  background: transparent;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 70% 30%,
      ${theme.colors.accent}15 0%,
      transparent 100%
    );
    pointer-events: none;
    z-index: 0;
  }
`;

const Header = styled.header`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  padding: ${theme.spacing.md} 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  @media print {
    display: none;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 0;
    right: 0;
    height: 20px;
    background: linear-gradient(
      to bottom,
      ${theme.colors.glass.background},
      transparent
    );
  }
`;

const Nav = styled.nav`
  position: relative;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${theme.spacing.md};
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;

    @media (max-width: ${theme.breakpoints.md}) {
      width: 94%;
      padding: 0 ${theme.spacing.sm};
    }
  }
`;

const Logo = styled(motion.div)`
  color: ${theme.colors.light};
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

const LogoImg = styled(motion.div)<{ imageUrl: string }>`
  background-image: url(${(props) => props.imageUrl});
  background-size: contain;
  border-radius: 90px;
  height: 30px;
  width: 30px;
  margin-right: 8px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};

  a {
    color: ${theme.colors.textLight};
    transition: all ${theme.transitions.default};
    font-weight: 500;
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    border-radius: 4px;

    &:hover {
      color: ${theme.colors.light};
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    gap: ${theme.spacing.sm};
  }
`;

const DesktopNavLinks = styled(NavLinks)`
  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileNavLinks = styled(NavLinks)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  width: 100%;

  a {
    display: block;
    width: 100%;
    padding: 0.9rem 1rem;
    border-radius: 8px;
    font-size: 1rem;
    text-align: left;
  }
`;

const MenuToggle = styled.button`
  display: none;
  color: ${theme.colors.textLight};
  background: ${theme.colors.glass.card};
  border: 1px solid ${theme.colors.glass.border};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: 12px;
  width: 44px !important;
  height: 44px !important;
  font-size: 1.5rem !important;
  font-weight: 600;
  line-height: 1;
  transition: all ${theme.transitions.default};

  &:hover {
    color: ${theme.colors.light};
    border-color: ${theme.colors.accent};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.accent};
    outline-offset: 2px;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 48px;
    height: 48px;
    font-size: 1.65rem;
  }
`;

const MobileMenuBackdrop = styled.button<{ isOpen: boolean }>`
  @media (max-width: ${theme.breakpoints.md}) {
    position: fixed;
    inset: 0;
    border: 0;
    margin: 0;
    padding: 0;
    background: rgba(15, 23, 42, 0.35);
    backdrop-filter: blur(1px);
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
    transition: opacity 0.2s ease;
    z-index: 999;
  }

  @media (min-width: calc(${theme.breakpoints.md} + 1px)) {
    display: none;
  }
`;

const MobileNavPanel = styled.div<{ isOpen: boolean }>`
  @media (max-width: ${theme.breakpoints.md}) {
    position: fixed;
    top: calc(4.5rem + 0.5rem);
    left: 50%;
    transform: translateX(-50%)
      ${(props) => (props.isOpen ? "translateY(0)" : "translateY(-8px)")};
    width: min(520px, calc(100vw - 1rem));
    max-height: calc(100vh - 6rem);
    overflow-y: auto;
    background: ${theme.colors.glass.background};
    border: 1px solid ${theme.colors.glass.border};
    border-radius: 16px;
    backdrop-filter: blur(10px);
    padding: ${theme.spacing.sm};
    box-shadow: 0 10px 24px ${theme.colors.overlay.dark};
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;
    z-index: 1001;
  }

  @media (min-width: calc(${theme.breakpoints.md} + 1px)) {
    display: none;
  }
`;

const Main = styled.main`
  flex: 1;
  margin-top: 4.5rem;
  width: 100%;
  overflow-x: hidden;
`;

const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 0;
  background: ${theme.colors.accent};
  color: ${theme.colors.textDark};
  padding: ${theme.spacing.sm};
  z-index: 9999;
  transition: top 0.2s;

  &:focus {
    top: 0;
  }
`;

const Footer = styled.footer`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.lg} 0;
  text-align: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: 0;
    right: 0;
    height: 20px;
    background: linear-gradient(
      to top,
      ${theme.colors.glass.background},
      transparent
    );
  }
`;

export const Layout = ({ children }: LayoutProps) => {
  useKeyboardNavigation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Add keyboard navigation instructions to console
    console.info(
      "Keyboard Navigation:\n",
      "- Arrow Up/Down or PageUp/PageDown: Navigate between sections\n",
      "- Home: Go to top\n",
      "- End: Go to bottom"
    );
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <LayoutWrapper>
      <SkipLink href="#main-content">Skip to main content</SkipLink>

      <Header role="banner">
        <Nav role="navigation" aria-label="Main navigation">
          <div className="container">
            <Logo
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              role="heading"
              aria-level={1}
            >
              <LogoImg imageUrl={CLogo}></LogoImg>
              Portfolio
            </Logo>

            <DesktopNavLinks role="list" aria-label="Desktop navigation">
              <a href="#hero" role="listitem" aria-label="Home section">
                Home
              </a>
              <a href="#projects" role="listitem" aria-label="Projects section">
                Projects
              </a>
              <a href="#skills" role="listitem" aria-label="Skills section">
                Skills
              </a>
              <a
                href="#experiences"
                role="listitem"
                aria-label="Experience section"
              >
                Work Experience
              </a>
              <a href="#contact" role="listitem" aria-label="Contact section">
                Contact
              </a>
            </DesktopNavLinks>

            <MenuToggle
              type="button"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-panel"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </MenuToggle>

            <MobileMenuBackdrop
              type="button"
              isOpen={isMobileMenuOpen}
              aria-label="Close mobile menu"
              onClick={closeMobileMenu}
            />

            <MobileNavPanel id="mobile-nav-panel" isOpen={isMobileMenuOpen}>
              <MobileNavLinks role="list" aria-label="Mobile navigation">
                <a
                  href="#hero"
                  role="listitem"
                  aria-label="Home section"
                  onClick={closeMobileMenu}
                >
                  Home
                </a>
                <a
                  href="#projects"
                  role="listitem"
                  aria-label="Projects section"
                  onClick={closeMobileMenu}
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  role="listitem"
                  aria-label="Skills section"
                  onClick={closeMobileMenu}
                >
                  Skills
                </a>
                <a
                  href="#experiences"
                  role="listitem"
                  aria-label="Experience section"
                  onClick={closeMobileMenu}
                >
                  Work Experience
                </a>
                <a
                  href="#contact"
                  role="listitem"
                  aria-label="Contact section"
                  onClick={closeMobileMenu}
                >
                  Contact
                </a>
              </MobileNavLinks>
            </MobileNavPanel>
          </div>
        </Nav>
      </Header>
      <Main id="main-content" role="main" tabIndex={-1}>
        {children}
      </Main>
      <FloatingNav />
      <Footer role="contentinfo">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Clifford Mark Musni. All rights
            reserved.
          </p>
        </div>
      </Footer>
    </LayoutWrapper>
  );
};
