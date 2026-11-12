"use client";

import Link from "next/link";
import { useState } from "react";
import { hashHex } from "@/lib/hash";
import { HashMark } from "./HashMark";

export function IdeaMark() {
  const [idea, setIdea] = useState("");
  const href = idea.trim() ? `/contact?idea=${encodeURIComponent(idea.trim())}` : "/contact";

  return (
    <div className="flex h-full flex-col gap-5">
      <HashMark text={idea} className="w-full max-w-64 self-center lg:max-w-none" />
      <div>
        <label htmlFor="idea" className="block font-medium">
          Every idea makes its own mark
        </label>
        <input
          id="idea"
          value={idea}
          onChange={(event) => setIdea(event.target.value)}
          placeholder="Type your idea, e.g. a clinic booking app"
          maxLength={120}
          autoComplete="off"
          className="field mt-2"
        />
        <p className="mt-2 flex items-baseline justify-between gap-3 text-sm text-muted">
          <span aria-live="polite">#{hashHex(idea)}</span>
          <Link href={href} className="font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">
            Send us this idea
          </Link>
        </p>
      </div>
    </div>
  );
}
