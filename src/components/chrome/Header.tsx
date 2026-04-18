"use client";

import { useEffect, useRef, useState } from "react";
import { AnnouncementBar } from "./AnnouncementBar";
import { Nav } from "./Nav";

export function Header() {
  const [visible, setVisible] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const lastY = useRef(0);

  /* Publish --hdr-h so sticky children on any page can track the header */
  useEffect(() => {
    const el = document.documentElement;
    const h = wrapperRef.current?.offsetHeight ?? 112;
    el.style.setProperty("--hdr-h", visible ? `${h}px` : "0px");
  }, [visible]);

  /* Measure on mount / resize so --hdr-h is always accurate */
  useEffect(() => {
    const el = document.documentElement;
    const ro = new ResizeObserver(() => {
      const h = wrapperRef.current?.offsetHeight ?? 112;
      if (visible) el.style.setProperty("--hdr-h", `${h}px`);
    });
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, [visible]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 10) {
        setVisible(true);
      } else if (y < lastY.current) {
        setVisible(true);
      } else if (y > lastY.current + 4) {
        setVisible(false);
      }
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`fixed top-0 left-0 right-0 z-50 flex flex-col transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <AnnouncementBar />
      <Nav />
    </div>
  );
}
