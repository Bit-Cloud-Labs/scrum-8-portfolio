import type { Project } from '@/lib/types';

export interface ProjectsSectionProps {
  projects: Project[];
}

/** Projects gallery section displaying a card for each project. */
export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      aria-label="Projects"
      style={{
        backgroundColor: '#0a0a0a',
        color: '#f9fafb',
        padding: '4rem 2rem',
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 700,
          color: '#22c55e',
          marginBottom: '2rem',
        }}
      >
        Projects
      </h2>

      {projects.length === 0 ? (
        <p style={{ color: '#9ca3af' }}>No projects yet. Check back soon!</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {projects.map((project) => (
            <div
              key={project.title}
              style={{
                backgroundColor: '#111827',
                borderRadius: '0.5rem',
                padding: '1.5rem',
                border: '1px solid #1f2937',
              }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#22c55e',
                  marginBottom: '0.5rem',
                }}
              >
                {project.title}
              </h3>
              <p style={{ color: '#d1fae5', marginBottom: '1rem' }}>
                {project.description}
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                }}
              >
                {project.tech_stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      backgroundColor: '#064e3b',
                      color: '#6ee7b7',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '0.25rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.screenshot && (
                <img
                  src={project.screenshot}
                  alt={`Screenshot of ${project.title}`}
                  style={{
                    width: '100%',
                    borderRadius: '0.25rem',
                    marginBottom: '1rem',
                  }}
                />
              )}
              <div style={{ display: 'flex', gap: '1rem' }}>
                {project.github_url && (
                  <a
                    href={project.github_url}
                    aria-label={`GitHub for ${project.title}`}
                    style={{ color: '#22c55e', textDecoration: 'none', fontWeight: 600 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {project.live_demo_url && (
                  <a
                    href={project.live_demo_url}
                    aria-label={`Live Demo for ${project.title}`}
                    style={{ color: '#22c55e', textDecoration: 'none', fontWeight: 600 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
