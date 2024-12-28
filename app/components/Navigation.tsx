"use client";
import React, { useState, useEffect, useRef, ForwardedRef } from "react";
import { useScrollPosition } from "./hooks/useScrollPosition";
import { useResizeObserver } from "./hooks/useResizeObserver";
import Link from "next/link";
import { mainBody, repos, about, skills } from "../config/editable-stuff";

const Navigation = React.forwardRef(
  (props: {}, ref: ForwardedRef<HTMLDivElement>) => {
    const [isTop, setIsTop] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);
    const navbarMenuRef = useRef<HTMLDivElement>(null);
    const navbarDimensions = useResizeObserver(navbarMenuRef);
    const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

    useScrollPosition(
      ({ currPos }) => {
        if (!navbarDimensions) return;
        currPos.y + (ref?.current?.offsetTop || 0) - navbarDimensions.bottom > 5
          ? setIsTop(true)
          : setIsTop(false);
        setScrollPosition(currPos.y);
      },
      [navBottom]
    );

    useEffect(() => {
      if (!navbarDimensions) return;
      navBottom - scrollPosition >= (ref?.current?.offsetTop || 0)
        ? setIsTop(false)
        : setIsTop(true);
    }, [navBottom, navbarDimensions, ref, scrollPosition]);

    return (
      <nav
        ref={navbarMenuRef}
        className={isTop ? "navbar-transparent" : "navbar-white"}
      >
        <div>
          <Link href="/#home">{`<${mainBody.firstName} />`}</Link>
        </div>
        <div>
          {repos.show && <Link href="/#projects">Projects</Link>}
          <a href={about.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
          {about.show && <Link href="/#aboutme">About</Link>}
          {skills.show && <Link href="/#skills">Skills</Link>}
        </div>
      </nav>
    );
  }
);

export default Navigation;
