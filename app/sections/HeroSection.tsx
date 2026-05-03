import { Button } from "@/app/components/button";
import { LocalizedText } from "@/app/components/localized-text";
import { hero } from "@/app/data/portfolio";

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-[88svh] items-center px-5 pb-16 pt-28 md:px-8 md:pb-20 md:pt-32"
      id="home"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.78fr]">
        <div className="max-w-4xl">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-accent">
            <span className="font-brand text-xl md:text-3xl">
              {hero.name}
            </span>
            <span className="text-xs font-bold uppercase md:text-sm">
              {" > "}
              <LocalizedText value={hero.role} />
            </span>
          </div>

          <h1 className="max-w-4xl font-sans text-4xl font-extrabold leading-tight text-foreground md:text-6xl">
            <LocalizedText value={hero.headline} />
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-muted md:text-xl">
            <LocalizedText value={hero.description} />
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="#projects">
              <LocalizedText value={hero.primaryCta} />
              <span aria-hidden="true" className="ml-2">
                -&gt;
              </span>
            </Button>
            <Button download href="/kevin-solar-cv.pdf" variant="secondary">
              <LocalizedText value={hero.secondaryCta} />
            </Button>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="hero-visual relative hidden min-h-96 overflow-hidden rounded-xl p-5 lg:block"
        >
          <div className="relative z-10 rounded-lg border border-border bg-background/80 p-4">
            <div className="mb-5 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-accent" />
              <span className="h-3 w-3 rounded-full bg-sage" />
              <span className="h-3 w-3 rounded-full bg-muted" />
            </div>
            <pre className="overflow-hidden font-mono text-sm leading-7 text-muted">
              <code>
                <span className="text-accent">const</span> developer = {"{"}
                {"\n"} name:{" "}
                <span className="text-foreground">&quot;Kevin Solar&quot;</span>,
                {"\n"} focus: [
                <span className="text-sage">&quot;frontend&quot;</span>,{" "}
                <span className="text-sage">&quot;backend&quot;</span>,{" "}
                <span className="text-sage">&quot;interfaces&quot;</span>],
                {"\n"} fuel:{" "}
                <span className="text-foreground">&quot;coffee&quot;</span>,
                {"\n"}
                {"};"}
                {"\n\n"}
                ship(
                <span className="text-accent">
                  &quot;solid web experiences&quot;
                </span>
                );
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
