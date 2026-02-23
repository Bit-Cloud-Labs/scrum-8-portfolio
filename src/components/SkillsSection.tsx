import type { Skill } from '@/lib/types';

export interface SkillsSectionProps {
  skills: Skill[];
}

/** Skills section displaying a list of technical skills as badges. */
export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section
      aria-label="Skills"
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
        Skills
      </h2>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}
      >
        {skills.map((skill) => (
          <li
            key={skill.name}
            style={{
              backgroundColor: '#064e3b',
              color: '#6ee7b7',
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: 600,
            }}
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
