export interface AboutSectionProps {
  bio: string;
  photoSrc?: string;
}

/** About Me section displaying a bio paragraph and optional profile photo. */
export default function AboutSection({ bio, photoSrc }: AboutSectionProps) {
  return (
    <section
      aria-label="About"
      style={{
        backgroundColor: '#111827',
        color: '#f9fafb',
        padding: '4rem 2rem',
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 700,
          color: '#22c55e',
          marginBottom: '1.5rem',
        }}
      >
        About Me
      </h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          alignItems: 'center',
        }}
      >
        {photoSrc && (
          <img
            src={photoSrc}
            alt="Izrael's profile photo"
            style={{
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid #22c55e',
            }}
          />
        )}
        <p style={{ maxWidth: '640px', lineHeight: '1.75', color: '#d1fae5' }}>
          {bio}
        </p>
      </div>
    </section>
  );
}
