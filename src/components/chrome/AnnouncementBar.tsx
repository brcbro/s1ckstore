const announcements = [
  "UNLOCK 15% OFF YOUR FIRST ORDER",
  "FREE SHIPPING ON ALL SUBSCRIPTIONS",
  "30-DAY ATTRACTION GUARANTEE",
];

export function AnnouncementBar() {
  return (
    <div className="border-b border-gold/20 bg-ink text-[11px] uppercase tracking-[0.2em] text-ivory-dim">
      <div className="mx-auto flex max-w-[1600px] items-center justify-center gap-8 px-6 py-2.5">
        {announcements.map((line, i) => (
          <span
            key={line}
            className={
              i === 1
                ? "hidden sm:inline-flex items-center gap-8 before:content-['·'] before:text-gold before:text-lg before:leading-none after:content-['·'] after:text-gold after:text-lg after:leading-none"
                : i === 0
                  ? "text-ivory"
                  : "hidden md:inline text-ivory"
            }
          >
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}
