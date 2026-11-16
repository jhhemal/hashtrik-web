"use client";

import { useState } from "react";
import { founders, type Person } from "@/lib/site";
import { Logo } from "./Logo";

const areas = ["Everyone", "Leadership", "Design", "Delivery", "Engineering"] as const;

const founderWash = "bg-[linear-gradient(135deg,#3346ff,#8b6cff)]";
const washes = [
  "bg-[linear-gradient(135deg,#8b6cff,#ff7ac3)]",
  "bg-[linear-gradient(135deg,#17b890,#4cc3ff)]",
  "bg-[linear-gradient(135deg,#ffb52e,#ff7a59)]",
  "bg-[linear-gradient(135deg,#4cc3ff,#8b6cff)]",
  "bg-[linear-gradient(135deg,#ff7a59,#8b6cff)]",
];

const everyone: Person[] = founders.flatMap((founder) => [founder, ...founder.reports]);
const members = founders.flatMap((founder) => founder.reports);

function washFor(person: Person) {
  const index = members.findIndex((member) => member.name === person.name);
  return index === -1 ? founderWash : washes[index % washes.length];
}

function initials(name: string) {
  const parts = name.split(" ");
  return parts[0][0] + parts[parts.length - 1][0];
}

function Chips({ items }: { items: string[] }) {
  return (
    <span className="mt-3 flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span key={item} className="rounded-full bg-tint px-2.5 py-0.5 text-sm font-medium">
          {item}
        </span>
      ))}
    </span>
  );
}

export function TeamTree() {
  const [area, setArea] = useState<(typeof areas)[number]>("Everyone");
  const [closed, setClosed] = useState<Record<string, boolean>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const active = hovered ?? selected;
  const person = everyone.find((p) => p.name === selected);
  const dim = (p: Person) => (area !== "Everyone" && p.area !== area ? "opacity-30" : "");

  const cardProps = (p: Person) => ({
    type: "button" as const,
    "aria-pressed": selected === p.name,
    onClick: () => setSelected(selected === p.name ? null : p.name),
    onMouseEnter: () => setHovered(p.name),
    onMouseLeave: () => setHovered(null),
    onFocus: () => setHovered(p.name),
    onBlur: () => setHovered(null),
  });

  return (
    <div>
      <div className="rise flex flex-wrap justify-center gap-2" role="group" aria-label="Show part of the team">
        {areas.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={area === item}
            onClick={() => setArea(item)}
            className={`rounded-full border px-4 py-1.5 font-medium transition-colors ${
              area === item
                ? "border-accent bg-accent text-on-accent"
                : "border-line bg-surface text-muted hover:border-accent hover:text-ink"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-10">
        <div className="rise flex w-fit items-center gap-2.5 rounded-full border border-line bg-surface px-5 py-2.5 shadow-[var(--shadow)] lg:mx-auto">
          <Logo className="h-7" />
        </div>
        <div className={`tree-stem ${active ? "on" : ""}`} />

        <ul className={`tree-kids ${active ? "lit" : ""}`}>
          {founders.map((founder, i) => {
            const isOpen = !closed[founder.name];
            const branchActive = founder.reports.some((p) => p.name === active);
            const founderActive = branchActive || active === founder.name;
            return (
              <li
                key={founder.name}
                className={`tree-kid rise ${founderActive ? "on" : ""}`}
                style={{ flexGrow: founder.reports.length, animationDelay: `${0.2 + i * 0.15}s` }}
              >
                <button
                  {...cardProps(founder)}
                  className={`card lift mx-auto flex w-full items-start gap-5 p-5 text-left shadow-[var(--shadow-lift)] transition-opacity lg:max-w-md lg:p-6 ${
                    selected === founder.name ? "!border-accent ring-4 ring-accent/20" : ""
                  } ${dim(founder)}`}
                >
                  <span className={`grid size-16 shrink-0 place-items-center rounded-2xl font-display text-2xl font-semibold text-white lg:size-20 lg:text-3xl ${founderWash}`}>
                    {initials(founder.name)}
                  </span>
                  <span className="block">
                    <span className="block font-display text-2xl font-semibold tracking-tight">{founder.name}</span>
                    <span className="mt-1 block font-medium text-accent">{founder.role}</span>
                    <span className="mt-2 block text-muted">{founder.bio}</span>
                    <Chips items={founder.skills} />
                  </span>
                </button>

                <div className={`tree-stem !h-4 ${branchActive && isOpen ? "on" : ""}`} />
                <div className="flex max-lg:mt-3 lg:justify-center">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setClosed({ ...closed, [founder.name]: isOpen })}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1 text-sm font-medium shadow-[var(--shadow)] transition-colors hover:border-accent hover:text-accent"
                  >
                    <svg viewBox="0 0 24 24" className={`size-3.5 transition-transform duration-300 ${isOpen ? "" : "-rotate-90"}`} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                    {isOpen ? "Hide" : "Show"} {founder.reports.length} people
                  </button>
                </div>

                {isOpen && (
                  <>
                    <div className={`tree-stem !h-4 ${branchActive ? "on" : ""}`} />
                    <ul className={`tree-kids ${branchActive ? "lit" : ""}`}>
                      {founder.reports.map((member, j) => (
                        <li
                          key={member.name}
                          className={`tree-kid rise ${active === member.name ? "on" : ""}`}
                          style={{ animationDuration: "0.5s", animationDelay: `${j * 0.07}s` }}
                        >
                          <button
                            {...cardProps(member)}
                            className={`card lift flex h-full w-full items-start gap-4 !rounded-3xl p-4 text-left transition-opacity lg:flex-col lg:p-5 ${
                              selected === member.name ? "!border-accent ring-4 ring-accent/20" : ""
                            } ${dim(member)}`}
                          >
                            <span className={`grid size-12 shrink-0 place-items-center rounded-xl font-display text-lg font-semibold text-white ${washFor(member)}`}>
                              {initials(member.name)}
                            </span>
                            <span className="block lg:mt-4">
                              <span className="block font-display text-xl font-semibold tracking-tight">{member.name}</span>
                              <span className="mt-0.5 block font-medium text-accent">{member.role}</span>
                              <span className="mt-2 block text-muted">{member.bio}</span>
                              <Chips items={member.skills} />
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-10" aria-live="polite">
        {person ? (
          <div key={person.name} className="card rise grid gap-6 p-6 shadow-[var(--shadow-lift)] md:grid-cols-[auto_1fr_auto] md:p-8" style={{ animationDuration: "0.4s" }}>
            <span className={`grid size-20 place-items-center rounded-3xl font-display text-3xl font-semibold text-white ${washFor(person)}`}>
              {initials(person.name)}
            </span>
            <div>
              <h2 className="text-3xl">{person.name}</h2>
              <p className="mt-1 font-medium text-accent">{person.role}</p>
              <p className="mt-4 max-w-2xl text-lg text-muted">{person.detail}</p>
              <p className="mt-5 text-sm text-muted">Talk to {person.name.split(" ")[0]} about</p>
              <Chips items={person.askAbout} />
            </div>
            <button type="button" onClick={() => setSelected(null)} className="button button-soft self-start !px-4 !py-2">
              Close
            </button>
          </div>
        ) : (
          <p className="rounded-3xl border border-dashed border-line px-6 py-5 text-center text-muted">
            Select anyone in the tree to see what they do on your project.
          </p>
        )}
      </div>
    </div>
  );
}
