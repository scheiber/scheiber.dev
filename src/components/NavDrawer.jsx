import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./NavDrawer.css";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/gallery", label: "Gallery" },
  { to: "/now", label: "Now" },
  { to: "/contact", label: "Contact" },
];

const NavDrawer = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const toggleRef = useRef(null);
  const drawerRef = useRef(null);
  const wasOpenRef = useRef(false);

  // Close whenever the route changes (e.g. a drawer link was followed).
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock page scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Move focus in/out of the drawer, support Escape, and trap Tab inside it.
  useEffect(() => {
    if (!open) {
      // Only return focus to the toggle when the drawer was actually
      // open and is now closing — not on the initial page-load render,
      // which would otherwise leave the toggle focused (and outlined)
      // before the user has interacted with anything.
      if (wasOpenRef.current) {
        toggleRef.current?.focus();
      }
      wasOpenRef.current = false;
      return;
    }

    wasOpenRef.current = true;
    // Move focus into the drawer region without landing on (and
    // outlining) the first link — Tab will reach it naturally.
    drawerRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;

      const focusables = drawerRef.current?.querySelectorAll("a");
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        className={`nav-toggle${open ? " nav-toggle-open" : ""}`}
        aria-expanded={open}
        aria-controls="nav-drawer"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setOpen((wasOpen) => !wasOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`nav-overlay${open ? " nav-overlay-visible" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <nav
        id="nav-drawer"
        ref={drawerRef}
        tabIndex={-1}
        className={`nav-drawer${open ? " nav-drawer-open" : ""}`}
        aria-label="Primary"
        aria-hidden={!open}
      >
        <ul>
          {navLinks.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                tabIndex={open ? 0 : -1}
                className={({ isActive }) =>
                  isActive
                    ? "nav-drawer-link nav-drawer-link-active"
                    : "nav-drawer-link"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavDrawer;
