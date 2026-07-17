type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

export function InstagramIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} width={size} height={size} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.98 1.83-2 3.77-2 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.8c0-1.38-.02-3.15-1.92-3.15-1.93 0-2.22 1.5-2.22 3.05V21h-4V9Z" />
    </svg>
  );
}

export function XIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} {...props}>
      <path d="M18.9 3H21.7l-6.06 6.93L22.8 21h-5.62l-4.4-5.76L7.7 21H4.9l6.48-7.41L4.2 3h5.76l3.98 5.27L18.9 3Zm-1 16.17h1.53L7.18 4.74H5.54L17.9 19.17Z" />
    </svg>
  );
}
