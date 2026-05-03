import { LocalizedText } from "@/app/components/localized-text"
import { about } from "@/app/data/portfolio"

export function AboutSection() {
	return (
		<section className="about-band px-5 py-16 md:px-8 md:py-24" id="about">
			<div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.58fr]">
				<div>
					<p className="mb-3 text-sm font-bold uppercase text-accent">
						01 / Profile
					</p>
					<h2 className="font-sans text-3xl font-extrabold text-foreground md:text-5xl">
						<LocalizedText value={about.heading} />
					</h2>

					<div className="mt-8 grid gap-5 text-sm leading-7 text-muted md:text-base md:leading-8">
						{about.paragraphs.map((paragraph) => (
							<LocalizedText as="p" key={paragraph.en} value={paragraph} />
						))}
					</div>
				</div>

				<div className="portrait-frame portrait-grid relative mx-auto flex aspect-4/5 w-full max-w-sm items-center justify-center overflow-hidden rounded-3xl">
					<div className="absolute inset-x-8 bottom-8 h-px bg-accent" />
					<div className="text-center">
						<span className="font-brand text-7xl text-foreground">KS</span>
						<div className="mx-auto mt-4 h-2 w-24 rounded-full bg-accent" />
					</div>
				</div>
			</div>
		</section>
	)
}
