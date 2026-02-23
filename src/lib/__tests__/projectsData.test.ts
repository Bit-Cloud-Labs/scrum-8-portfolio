/**
 * Tests for the seed projects data.
 * The data lives in src/data/projects.ts.
 */
import { projects } from '../../data/projects';
import type { Project } from '../types';

describe('projects data', () => {
  it('exports a non-empty array', () => {
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
  });

  it('every project has a non-empty title', () => {
    for (const project of projects) {
      expect(typeof project.title).toBe('string');
      expect(project.title.trim().length).toBeGreaterThan(0);
    }
  });

  it('every project has a non-empty description', () => {
    for (const project of projects) {
      expect(typeof project.description).toBe('string');
      expect(project.description.trim().length).toBeGreaterThan(0);
    }
  });

  it('every project has a non-empty tech_stack array', () => {
    for (const project of projects) {
      expect(Array.isArray(project.tech_stack)).toBe(true);
      expect(project.tech_stack.length).toBeGreaterThan(0);
    }
  });

  it('every project has a valid github_url starting with https', () => {
    for (const project of projects) {
      expect(project.github_url).toMatch(/^https:\/\//);
    }
  });

  it('every project conforms to the Project interface shape', () => {
    for (const project of projects) {
      const p = project as Project;
      expect(p).toHaveProperty('title');
      expect(p).toHaveProperty('description');
      expect(p).toHaveProperty('tech_stack');
      expect(p).toHaveProperty('github_url');
    }
  });
});
