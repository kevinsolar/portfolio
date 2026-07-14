"use client"

import { useId, useState } from "react"
import { LocalizedText } from "@/app/components/localized-text"
import type { LocalizedCopy } from "@/app/data/portfolio"

type ProjectDescriptionProps = {
	value: LocalizedCopy
}

const readMoreLabel = {
	en: "Read more",
	pt: "Ler mais",
} satisfies LocalizedCopy

const showLessLabel = {
	en: "Show less",
	pt: "Mostrar menos",
} satisfies LocalizedCopy

function cx(...classes: Array<string | false | undefined>) {
	return classes.filter(Boolean).join(" ")
}

export function ProjectDescription({ value }: ProjectDescriptionProps) {
	const [isExpanded, setIsExpanded] = useState(false)
	const descriptionId = useId()

	return (
		<div className="mt-3">
			<p
				className={cx(
					"break-words text-sm leading-7 text-muted",
					!isExpanded && "project-description-preview",
				)}
				id={descriptionId}
			>
				<LocalizedText value={value} />
			</p>

			<button
				aria-controls={descriptionId}
				aria-expanded={isExpanded}
				className="mt-3 text-xs font-bold uppercase text-accent transition-colors hover:text-foreground md:hidden"
				onClick={() => setIsExpanded((current) => !current)}
				type="button"
			>
				<LocalizedText value={isExpanded ? showLessLabel : readMoreLabel} />
			</button>
		</div>
	)
}
