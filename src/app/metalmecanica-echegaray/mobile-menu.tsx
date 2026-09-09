"use client";

import { Menu } from "lucide-react";
import { useRef } from "react";
import { echegaray } from "@/content/echegaray";
import styles from "./page.module.css";

export function MobileMenu() {
  const details = useRef<HTMLDetailsElement>(null);

  function closeMenu() {
    if (details.current) details.current.open = false;
  }

  return (
    <details
      ref={details}
      className={styles.mobileMenu}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          closeMenu();
          details.current?.querySelector("summary")?.focus();
        }
      }}
    >
      <summary aria-label={echegaray.labels.menu}>
        <Menu size={24} aria-hidden="true" />
        <span>{echegaray.labels.menu}</span>
      </summary>
      <nav aria-label="Navegación móvil">
        {echegaray.nav.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </nav>
    </details>
  );
}
