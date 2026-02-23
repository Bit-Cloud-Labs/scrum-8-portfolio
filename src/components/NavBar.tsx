export interface NavBarProps {
  className?: string;
}

/** Navigation bar with anchor links to all portfolio sections. */
export default function NavBar({ className }: NavBarProps) {
  return (
    <nav
      className={className}
      style={{
        backgroundColor: '#0a0a0a',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span
        style={{
          color: '#22c55e',
          fontWeight: 700,
          fontSize: '1.25rem',
          letterSpacing: '0.05em',
        }}
      >
        Izrael
      </span>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          gap: '1.5rem',
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <a href="#about" style={{ color: '#d1fae5', textDecoration: 'none' }}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" style={{ color: '#d1fae5', textDecoration: 'none' }}>
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" style={{ color: '#d1fae5', textDecoration: 'none' }}>
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" style={{ color: '#d1fae5', textDecoration: 'none' }}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
