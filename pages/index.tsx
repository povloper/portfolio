import { useState, useEffect } from 'react';
import Link from 'next/link';
import { VscArrowRight } from 'react-icons/vsc';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import styles from '@/styles/HomePage.module.css';

export default function HomePage() {
  const [activeLineIndex, setActiveLineIndex] = useState(0);

  const codeString = `const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const developerInfo = {
    name: 'Nitin Ranganath',
    role: 'Full Stack Developer',
    bio: 'Building modern web experiences'
  };

  useEffect(() => {
    document.title = \`\${developerInfo.name} | Portfolio\`;
    setIsLoaded(true);
  }, []);

  return (
    <main className="hero-container">
      <h1>{developerInfo.name}</h1>
      <p>{developerInfo.role}</p>
      <div className="cta">
        <Link href="/projects">View Projects</Link>
      </div>
    </main>
  );
};

export default HomePage;`;

  // Split the code into lines to track which line is active
  const codeLines = codeString.split('\n');
  const totalLines = codeLines.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLineIndex((prev) => (prev + 1) % totalLines);
    }, 2000);

    return () => clearInterval(interval);
  }, [totalLines]);

  // Custom renderer for line highlighting
  const lineProps = (lineNumber: number) => {
    const isActive = lineNumber === activeLineIndex + 1;
    return {
      style: {
        display: 'block',
        backgroundColor: isActive ? 'rgba(121, 82, 179, 0.2)' : undefined,
        borderLeft: isActive ? '3px solid #9f61e6' : '3px solid transparent'
      }
    };
  };

  return (
    <div className={styles.heroLayout}>
      <div className={styles.container}>
        <div className={styles.codeSection}>
          <div className={styles.codeContainer}>
            <div className={styles.editorContent}>
              <SyntaxHighlighter 
                language="jsx"
                style={vscDarkPlus}
                showLineNumbers={true}
                wrapLines={true}
                lineProps={lineProps}
                customStyle={{
                  margin: 0,
                  borderRadius: '8px',
                  padding: '20px',
                  backgroundColor: 'rgba(30, 30, 30, 0.95)',
                  height: '100%',
                  fontSize: '14px',
                  overflow: 'auto'
                }}
              >
                {codeString}
              </SyntaxHighlighter>
              <div className={styles.overlayGlow}></div>
            </div>
          </div>
        </div>

        <div className={styles.infoSection}>
          <h1 className={styles.developerName}>
            Nitin <span className={styles.accentText}>Ranganath</span>
          </h1>

          <div className={styles.developerRole}>Full Stack Web Developer</div>

          <p className={styles.bio}>
            I build elegant, responsive web applications with modern
            technologies. Focused on clean code and intuitive user experiences.
          </p>

          <div className={styles.actionLinks}>
            <Link href="/projects" className={styles.primaryLink}>
              View Projects <VscArrowRight />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.decorElements}>
        <div className={styles.codeFlare}></div>
        <div className={styles.gridLines}></div>
        <div className={styles.codeBlock1}>{'{'}</div>
        <div className={styles.codeBlock2}>{'}'}</div>
        <div className={styles.codeBlock3}>{'<>'}</div>
        <div className={styles.codeBlock4}>{'/>'}</div>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
        <div className={styles.codeSymbol1}>{'()'}</div>
        <div className={styles.codeSymbol2}>{'[]'}</div>
        <div className={styles.codeSymbol3}>{'=>'}</div>
        <div className={styles.dotPattern}></div>
        <div className={styles.mobileAccent}></div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
