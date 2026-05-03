import { LocalizedText } from "@/app/components/localized-text";
import { skills } from "@/app/data/portfolio";

export function SkillsSection() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24" id="skills">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase text-accent">
            02 / Stack
          </p>
          <h2 className="font-sans text-3xl font-extrabold text-foreground md:text-5xl">
            <LocalizedText value={skills.heading} />
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {skills.groups.map((group) => (
            <article
              className="rounded-lg border border-border bg-secondary p-5"
              key={group.category}
            >
              <h3 className="font-sans text-lg font-bold text-foreground">
                {group.category}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    className="rounded-lg border border-border bg-card px-3 py-2 text-xs font-semibold text-muted"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
              {group.note ? (
                <p className="mt-4 text-xs font-semibold text-sage">
                  <LocalizedText value={group.note} />
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
