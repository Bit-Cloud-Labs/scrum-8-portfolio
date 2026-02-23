export interface HeroSectionProps {
  name: string;
  tagline: string;
}

/** Hero landing section displaying the developer name, tagline, and CTA buttons. */
export default function HeroSection({ name, tagline }: HeroSectionProps) {
  return (
    <section
      aria-label="Hero"
      style={{
        backgroundColor: '#0a0a0a',
        color: '#f9fafb',
        padding: '6rem 2rem',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          fontWeight: 800,
          color: '#22c55e',
          margin: '0 0 1rem',
        }}
      >
        {name}
      </h1>
      <p
        style={{
          fontSize: '1.25rem',
          color: '#d1fae5',
          margin: '0 0 2rem',
        }}
      >
        {tagline}
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <a
          href="#projects"
          style={{
            backgroundColor: '#22c55e',
            color: '#0a0a0a',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.375rem',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          View My Work
        </a>
        <a
          href="#contact"
          style={{
            border: '2px solid #22c55e',
            color: '#22c55e',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.375rem',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
