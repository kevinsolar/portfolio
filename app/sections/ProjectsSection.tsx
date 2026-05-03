import { Button } from "@/app/components/button"
import { GithubIcon } from "@/app/components/icons/github-icon"
import { LocalizedText } from "@/app/components/localized-text"
import { ProjectThumb } from "@/app/components/project-thumb"
import { projects } from "@/app/data/portfolio"

export function ProjectsSection() {
	return (
		<section className="px-5 py-16 md:px-8 md:py-24" id="projects">
			<div className="mx-auto max-w-7xl">
				<div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
					<div className="max-w-3xl">
						<p className="mb-3 text-sm font-bold uppercase text-accent">
							03 / Work
						</p>
						<h2 className="font-sans text-3xl font-extrabold text-foreground md:text-5xl">
							<LocalizedText value={projects.heading} />
						</h2>
					</div>
					<p className="max-w-xl text-sm leading-7 text-muted md:text-base">
						<LocalizedText value={projects.intro} />
					</p>
				</div>

				<div className="project-rail mt-10 flex snap-x gap-4 overflow-x-auto pb-5 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
					{projects.items.map((project) => (
						<article
							className="flex min-w-[82%] snap-start flex-col rounded-lg border border-border bg-secondary p-4 md:min-w-0"
							key={project.title}
						>
							<ProjectThumb
								accent={project.accent}
								image={project.image}
								title={project.title}
							/>

							<div className="flex flex-1 flex-col pt-5">
								<h3 className="font-sans text-xl font-bold text-foreground">
									{project.title}
								</h3>
								<p className="mt-3 text-sm leading-7 text-muted">
									<LocalizedText value={project.description} />
								</p>

								<div className="mt-5 flex flex-wrap gap-2">
									{project.stack.map((item) => (
										<span
											className="rounded-lg border border-border px-2.5 py-1.5 text-xs font-semibold text-muted"
											key={item}
										>
											{item}
										</span>
									))}
								</div>

								<div className="mt-6 flex flex-wrap gap-3">
									<Button href={project.projectUrl} size="sm" target="_blank">
										<LocalizedText value={projects.learnMore} />
									</Button>
									{project.github && (
										<Button
											href={project.github}
											size="sm"
											target="_blank"
											variant="ghost"
											className="gap-2"
										>
											<GithubIcon />
											GitHub
										</Button>
									)}
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
