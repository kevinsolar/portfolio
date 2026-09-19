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
	en: "Read less",
	pt: "Ler menos",
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
				className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent underline decoration-accent/70 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
				onClick={() => setIsExpanded((current) => !current)}
				type="button"
			>
				<svg
					aria-hidden="true"
					className="size-4 shrink-0 transition-transform duration-200"
					fill="none"
					viewBox="0 0 16 16"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M3.5 6 8 10.5 12.5 6"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.5"
						transform={isExpanded ? "rotate(180 8 8)" : undefined}
					/>
				</svg>
				<LocalizedText value={isExpanded ? showLessLabel : readMoreLabel} />
			</button>
		</div>
	)
}
