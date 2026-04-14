"use client";

import Image from "next/image";
import {useEffect, useMemo, useRef, useState} from "react";
import {STACK_DATA, type StackCategory} from "./data";

function SkillItem({name, icon, role, level}: {name: string; icon: string; role: string; level: number}) {
  const invertInDark = name === "GitHub" || name === "Express" || name === "Vercel";

  return (
    <div className="flex items-center gap-3 rounded-lg border border-border/70 bg-background/35 px-3 py-2.5">
      <div className="relative h-7 w-7 shrink-0">
        <Image src={icon} alt={name} fill className={`object-contain ${invertInDark ? "dark:invert" : ""}`} unoptimized />
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-medium">{name}</p>
        <p className="truncate text-[11px] uppercase tracking-wide text-muted-foreground">{role}</p>
      </div>
      <span className="ml-auto shrink-0 text-xs font-semibold text-primary">{level}%</span>
    </div>
  );
}

function CategoryPanel({title, items}: StackCategory) {
  return (
    <article className="h-full rounded-xl border border-primary/30 bg-card/65 p-4 shadow-sm backdrop-blur-sm md:p-5">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">{title}</h3>
      <div className="space-y-2">
        {items.map((item) => (
          <SkillItem key={`${title}-${item.name}`} name={item.name} icon={item.icon} role={item.role} level={item.level} />
        ))}
      </div>
    </article>
  );
}

export default function Stack() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const orderedCategories = useMemo(() => {
    const order = ["LANGUAGES", "FRONTEND", "BACKEND", "DATABASE", "TOOLS"];
    return order.map((title) => STACK_DATA.find((c) => c.title === title)).filter((c): c is StackCategory => Boolean(c));
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const rect = trackRef.current?.getBoundingClientRect();
      if (!rect) return;

      const viewportH = window.innerHeight;
      const inView = rect.top < viewportH && rect.bottom > 0;
      if (!inView || orderedCategories.length === 0) {
        return;
      }

      const totalScrollable = Math.max(1, rect.height - viewportH);
      const traveled = Math.min(totalScrollable, Math.max(0, -rect.top));
      const progress = traveled / totalScrollable;
      const nextIndex = Math.floor(progress * orderedCategories.length);
      const clampedIndex = Math.min(nextIndex, orderedCategories.length - 1);
      setActiveIndex(clampedIndex);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [orderedCategories.length]);

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 max-md:py-10">
      <h2 className="mb-2 text-center text-2xl font-bold max-md:text-start max-md:text-xl">2. My Stack</h2>
      <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-muted-foreground max-md:mx-0 max-md:text-start">
        Scroll down to walk through each category from Languages to Tools.
      </p>

      <div ref={trackRef} className="relative h-[300vh]">
        <div className="sticky top-24 mx-auto max-w-3xl">
          <div className="mb-4 flex flex-wrap justify-center gap-2">
            {orderedCategories.map((category, idx) => (
              <span
                key={category.title}
                className={`rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wider ${
                  idx === activeIndex ? "border-primary/70 bg-primary/15 text-primary" : "border-border/70 bg-background/30 text-muted-foreground"
                }`}
              >
                {category.title}
              </span>
            ))}
          </div>

          <div className="relative min-h-[860px] sm:min-h-[820px]">
            {orderedCategories.map((category, idx) => (
              <div
                key={category.title}
                className={`absolute inset-0 transition-all duration-300 ${
                  idx === activeIndex ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
                }`}
                aria-hidden={idx !== activeIndex}
              >
                <CategoryPanel title={category.title} items={category.items} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
