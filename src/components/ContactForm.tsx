"use client";

import { useState } from "react";
import { site } from "@/lib/site";

// There is no backend yet: sending opens a ready-written draft in the
// visitor's own email app. Swap handleSubmit for a real API call later.
export function ContactForm() {
  const [opened, setOpened] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `New project from ${data.get("name")}`;
    const body = `${data.get("idea")}\n\nType: ${data.get("type")}\nBudget: ${data.get("budget")}\n\n${data.get("name")}\n${data.get("email")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="type" className="block font-medium">
            What do you need?
          </label>
          <select id="type" name="type" className="field mt-2" defaultValue="Web application">
            {["Web application", "Mobile app", "AI and automation", "Product design", "Cloud and DevOps", "Care and support", "Not sure yet"].map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="block font-medium">
            Rough budget
          </label>
          <select id="budget" name="budget" className="field mt-2" defaultValue="Not sure yet">
            {["Under $5,000", "$5,000 to $15,000", "$15,000 to $50,000", "Over $50,000", "Not sure yet"].map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="project" className="block font-medium">
          What do you want to build?
        </label>
        <textarea
          id="project"
          name="idea"
          required
          rows={5}
          placeholder="What it is, who it is for, and when you need it."
          className="field mt-2 resize-y"
        />
      </div>
      <button type="submit" className="button w-full text-lg">
        Open email draft
      </button>
      <p aria-live="polite" className="text-center text-sm text-muted">
        {opened
          ? `Your email app should now show a draft. Press send there. If nothing opened, write to ${site.email}.`
          : "This opens a ready-written draft in your email app."}
      </p>
    </form>
  );
}
