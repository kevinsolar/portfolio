import { Button } from "@/app/components/button";
import { GithubIcon } from "@/app/components/icons/github-icon";
import { LocalizedText } from "@/app/components/localized-text";
import { contact, contactSection } from "@/app/data/portfolio";

export function ContactSection() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24" id="contact">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-border pt-16 md:grid-cols-[1fr_0.85fr]">
        <div>
          <p className="mb-3 text-sm font-bold uppercase text-accent">
            04 / Contact
          </p>
          <h2 className="font-sans text-3xl font-extrabold text-foreground md:text-5xl">
            <LocalizedText value={contactSection.heading} />
          </h2>
        </div>

        <div>
          <p className="text-base leading-8 text-muted md:text-xl">
            <LocalizedText value={contactSection.description} />
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`mailto:${contact.email}`} size="sm">
              Email
            </Button>
            <Button
              href={contact.linkedIn}
              size="sm"
              target="_blank"
              variant="secondary"
            >
              LinkedIn
            </Button>
            <Button
              className="gap-2"
              href={contact.github}
              size="sm"
              target="_blank"
              variant="secondary"
            >
              <GithubIcon />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
