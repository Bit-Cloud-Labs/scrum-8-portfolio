export interface FooterProps {
  className?: string;
}

/** Site footer displaying copyright with the portfolio owner's name. */
export default function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className={`w-full py-6 text-center text-sm text-gray-400 border-t border-brand-border${className ? ` ${className}` : ''}`}
    >
      <p>© {currentYear} Izrael. All rights reserved.</p>
    </footer>
  );
}
