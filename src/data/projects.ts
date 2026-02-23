/**
 * Seed data for the portfolio projects section.
 */
import type { Project } from '../lib/types';

/** The list of featured projects displayed in the portfolio. */
export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio built with Next.js, Tailwind CSS, and TypeScript to showcase projects and skills.',
    tech_stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github_url: 'https://github.com/example/portfolio',
    live_demo_url: 'https://example.com',
  },
  {
    title: 'Task Manager API',
    description:
      'A RESTful API for managing tasks and projects, built with FastAPI and PostgreSQL.',
    tech_stack: ['Python', 'FastAPI', 'PostgreSQL'],
    github_url: 'https://github.com/example/task-manager-api',
  },
  {
    title: 'E-Commerce Storefront',
    description:
      'A fully-featured e-commerce storefront with cart, checkout, and order tracking.',
    tech_stack: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    github_url: 'https://github.com/example/ecommerce-storefront',
    live_demo_url: 'https://shop.example.com',
  },
];
