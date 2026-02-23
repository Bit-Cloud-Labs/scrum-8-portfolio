import { render, screen } from '@testing-library/react';
import SkillsSection from '../SkillsSection';
import type { Skill } from '@/lib/types';

const mockSkills: Skill[] = [
  { name: 'JavaScript' },
  { name: 'Python' },
  { name: 'PostgreSQL' },
];

describe('SkillsSection', () => {
  it('renders the skills heading', () => {
    render(<SkillsSection skills={mockSkills} />);
    expect(screen.getByRole('heading', { name: /skills/i })).toBeInTheDocument();
  });

  it('renders the section with skills aria-label', () => {
    render(<SkillsSection skills={mockSkills} />);
    expect(screen.getByRole('region', { name: /skills/i })).toBeInTheDocument();
  });

  it('renders all skill items', () => {
    render(<SkillsSection skills={mockSkills} />);
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
  });

  it('renders an accessible list of skills', () => {
    render(<SkillsSection skills={mockSkills} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(mockSkills.length);
  });
});
