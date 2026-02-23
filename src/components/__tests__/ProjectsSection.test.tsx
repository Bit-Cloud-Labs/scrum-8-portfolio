import { render, screen } from '@testing-library/react';
import ProjectsSection from '../ProjectsSection';
import type { Project } from '@/lib/types';

const mockProjects: Project[] = [
  {
    title: 'Project Alpha',
    description: 'A cool project',
    tech_stack: ['React', 'TypeScript'],
    github_url: 'https://github.com/example/alpha',
    live_demo_url: 'https://alpha.example.com',
  },
  {
    title: 'Project Beta',
    description: 'Another great project',
    tech_stack: ['Next.js', 'Tailwind'],
  },
];

describe('ProjectsSection', () => {
  it('renders the projects heading', () => {
    render(<ProjectsSection projects={mockProjects} />);
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
  });

  it('renders the section with projects aria-label', () => {
    render(<ProjectsSection projects={mockProjects} />);
    expect(screen.getByRole('region', { name: /projects/i })).toBeInTheDocument();
  });

  it('renders a card for each project', () => {
    render(<ProjectsSection projects={mockProjects} />);
    expect(screen.getByText('Project Alpha')).toBeInTheDocument();
    expect(screen.getByText('Project Beta')).toBeInTheDocument();
  });

  it('renders project descriptions', () => {
    render(<ProjectsSection projects={mockProjects} />);
    expect(screen.getByText('A cool project')).toBeInTheDocument();
    expect(screen.getByText('Another great project')).toBeInTheDocument();
  });

  it('renders tech stack badges', () => {
    render(<ProjectsSection projects={mockProjects} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
  });

  it('renders GitHub link when provided', () => {
    render(<ProjectsSection projects={mockProjects} />);
    const githubLink = screen.getByRole('link', { name: /github.*project alpha/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/example/alpha');
  });

  it('renders live demo link when provided', () => {
    render(<ProjectsSection projects={mockProjects} />);
    const liveLink = screen.getByRole('link', { name: /live demo.*project alpha/i });
    expect(liveLink).toHaveAttribute('href', 'https://alpha.example.com');
  });

  it('does not render GitHub link when not provided', () => {
    render(<ProjectsSection projects={mockProjects} />);
    expect(screen.queryAllByRole('link', { name: /github.*project beta/i })).toHaveLength(0);
  });

  it('renders empty state when no projects', () => {
    render(<ProjectsSection projects={[]} />);
    expect(screen.getByText(/no projects yet/i)).toBeInTheDocument();
  });
});
