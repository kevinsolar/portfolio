import Image from "next/image"
import type { LocalizedCopy } from "@/app/data/portfolio"

type ProjectThumbAccent = "accent" | "sage" | "cream"

export type ProjectThumbImage = {
	alt?: string | LocalizedCopy
	src: string
}

type ProjectThumbProps = {
	accent: ProjectThumbAccent
	image?: ProjectThumbImage
	title: string
}

function getImageAlt(
	image: ProjectThumbImage | undefined,
	title: LocalizedCopy | string
) {
	if (!image?.alt) {
		return typeof title === "string" ? title : title.en
	}

	if (typeof image.alt === "string") {
		return image.alt
	}

	return image.alt.en
}

export function ProjectThumb({ accent, image, title }: ProjectThumbProps) {
	return (
		<div
			className="project-shot relative aspect-video overflow-hidden rounded-lg p-4"
			data-accent={accent}
		>
			{image ? (
				<Image
					alt={getImageAlt(image, title)}
					className="object-cover"
					fill
					sizes="(min-width: 768px) 33vw, 82vw"
					src={image.src}
				/>
			) : (
				<ProjectThumbFallback />
			)}
		</div>
	)
}

function ProjectThumbFallback() {
	return (
		<>
			<div className="mb-4 flex gap-1.5">
				<span className="h-2.5 w-2.5 rounded-full bg-accent" />
				<span className="h-2.5 w-2.5 rounded-full bg-sage" />
				<span className="h-2.5 w-2.5 rounded-full bg-muted" />
			</div>
			<div className="grid gap-3">
				<div className="h-4 w-3/4 rounded bg-foreground/80" />
				<div className="h-3 w-1/2 rounded bg-muted/80" />
				<div className="mt-4 grid grid-cols-3 gap-3">
					<div className="h-16 rounded bg-accent/80" />
					<div className="h-16 rounded bg-card" />
					<div className="h-16 rounded bg-sage/80" />
				</div>
			</div>
		</>
	)
}
