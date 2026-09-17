// Small, dependency-free social icons.
// lucide-react's newer versions dropped brand/social icons, so these are
// hand-rolled inline SVGs to avoid pinning lucide-react to an old version
// (which conflicts with React 19's peer dependency range).

export function FacebookIcon({ size = 17, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.25-1.5 1.5-1.5H16.5V4.3c-.27-.04-1.2-.12-2.27-.12C11.93 4.18 10.5 5.5 10.5 8.2v2.3H8v3h2.5V21h3z" />
    </svg>
  );
}

export function TwitterIcon({ size = 17, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.5 6.2c-.6.27-1.24.45-1.9.53a3.3 3.3 0 0 0 1.46-1.83c-.64.38-1.35.65-2.1.8a3.29 3.29 0 0 0-5.6 3c-2.74-.14-5.16-1.45-6.79-3.44a3.28 3.28 0 0 0 1.02 4.4c-.54-.02-1.05-.17-1.5-.4v.04a3.29 3.29 0 0 0 2.64 3.23c-.5.14-1.02.16-1.5.06a3.3 3.3 0 0 0 3.07 2.29A6.6 6.6 0 0 1 4 17.4a9.3 9.3 0 0 0 5.04 1.48c6.05 0 9.36-5.02 9.36-9.36l-.01-.43c.64-.46 1.2-1.04 1.63-1.7z" />
    </svg>
  );
}

export function YoutubeIcon({ size = 17, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 7.6a2.5 2.5 0 0 0-1.76-1.77C18.2 5.4 12 5.4 12 5.4s-6.2 0-7.84.43A2.5 2.5 0 0 0 2.4 7.6 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.4 2.5 2.5 0 0 0 1.76 1.77c1.64.43 7.84.43 7.84.43s6.2 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.4zM10 15V9l5.2 3-5.2 3z" />
    </svg>
  );
}

export function InstagramIcon({ size = 17, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.7" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon({ size = 17, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H3.56V20.4h3.38V8.5zM5.25 3.6a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92zM20.4 20.4h-3.38v-6.2c0-1.48-.03-3.39-2.07-3.39-2.07 0-2.39 1.62-2.39 3.28v6.3H9.18V8.5h3.24v1.63h.05c.45-.86 1.56-1.77 3.21-1.77 3.44 0 4.72 2.26 4.72 5.2z" />
    </svg>
  );
}
