import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-600 shadow-soft",
  dark:
    "bg-charcoal text-white hover:bg-charcoal-600",
  outline:
    "border-2 border-white/70 text-white hover:bg-white hover:text-charcoal",
  outlineDark:
    "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
  ghost:
    "text-charcoal hover:text-primary",
};

export default function Button({
  as = "link",
  to = "/",
  href,
  onClick,
  type = "button",
  variant = "primary",
  icon = true,
  className = "",
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-body font-semibold text-sm sm:text-base transition-all duration-300 ease-out";
  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );

  if (as === "button") {
    return (
      <button type={type} onClick={onClick} className={`group ${classes}`} {...props}>
        {content}
      </button>
    );
  }

  if (as === "a") {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`group ${classes}`} {...props}>
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className={`group ${classes}`} {...props}>
      {content}
    </Link>
  );
}
