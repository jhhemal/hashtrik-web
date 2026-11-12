"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";
import { HashMark } from "./HashMark";

// There is no backend yet: sending opens a ready-written draft in the
// visitor's own email app. Swap handleSubmit for a real API call later.
export function ContactForm() {
  const params = useSearchParams();
  const [idea, setIdea] = useState(params.get("idea") ?? "");
  const [opened, setOpened] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `New project from ${data.get("name")}`;
    const body = `${data.get("idea")}\n\n${data.get("name")}\n${data.get("email")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
      <div>
        <label htmlFor="name" className="block font-medium">
          Your name
        </label>
        <input id="name" name="name" required autoComplete="name" className="field mt-2" />
      </div>
      <div>
        <label htmlFor="email" className="block font-medium">
          Email address
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className="field mt-2" />
      </div>
      <div>
        <label htmlFor="project" className="block font-medium">
          What do you want to build?
        </label>
        <textarea
          id="project"
          name="idea"
          required
          rows={6}
          value={idea}
          onChange={(event) => setIdea(event.target.value)}
          placeholder="What it is, who it is for, and when you need it."
          className="field mt-2 resize-y"
        />
      </div>
      <div className="flex items-center gap-5">
        <button type="submit" className="button text-lg">
          Open email draft
        </button>
        <HashMark text={idea} className="size-12" />
      </div>
      <p aria-live="polite" className="text-muted">
        {opened
          ? `Your email app should now show a draft. Press send there. If nothing opened, write to ${site.email}.`
          : "This opens a ready-written draft in your email app."}
      </p>
    </form>
  );
}
