"use client"

import { useEffect, useId, useState } from "react"
import { Button } from "@/app/components/button"
import { LocalizedText } from "@/app/components/localized-text"
import type { LocalizedCopy } from "@/app/data/portfolio"

type MobileNavItem = {
	href: string
	label: LocalizedCopy
}

type MobileNavProps = {
	cvLabel: LocalizedCopy
	items: MobileNavItem[]
}

function cx(...classes: Array<string | false | undefined>) {
	return classes.filter(Boolean).join(" ")
}

export function MobileNav({ cvLabel, items }: MobileNavProps) {
	const [isOpen, setIsOpen] = useState(false)
	const menuId = useId()

	useEffect(() => {
		if (!isOpen) {
			return
		}

		function handleKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				setIsOpen(false)
			}
		}

		window.addEventListener("keydown", handleKeyDown)

		return () => window.removeEventListener("keydown", handleKeyDown)
	}, [isOpen])

	return (
		<div className="mobile-nav relative">
			<button
				aria-controls={menuId}
				aria-expanded={isOpen}
				aria-label={isOpen ? "Close menu" : "Open menu"}
				className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-foreground transition-colors hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
				onClick={() => setIsOpen((current) => !current)}
				type="button"
			>
				<span aria-hidden="true" className="relative block h-4 w-5">
					<span
						className={cx(
							"absolute left-0 h-0.5 w-full rounded-full bg-current transition-transform",
							isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
						)}
					/>
					<span
						className={cx(
							"absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full bg-current transition-opacity",
							isOpen && "opacity-0",
						)}
					/>
					<span
						className={cx(
							"absolute left-0 h-0.5 w-full rounded-full bg-current transition-transform",
							isOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0",
						)}
					/>
				</span>
			</button>

			{isOpen && (
				<div
					className="absolute right-0 top-[calc(100%+0.75rem)] w-[calc(100vw-2.5rem)] max-w-80 rounded-lg border border-border bg-background p-3 shadow-xl"
					id={menuId}
				>
					<div className="grid gap-1">
						{items.map((item) => (
							<a
								className="rounded-lg px-3 py-3 text-sm font-semibold text-muted transition-colors hover:bg-secondary hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
								href={item.href}
								key={item.href}
								onClick={() => setIsOpen(false)}
							>
								<LocalizedText value={item.label} />
							</a>
						))}
					</div>

					<Button
						className="mt-3"
						download
						fullWidth
						href="/kevin-solar-cv.pdf"
						onClick={() => setIsOpen(false)}
						size="sm"
						variant="secondary"
					>
						<LocalizedText value={cvLabel} />
					</Button>
				</div>
			)}
		</div>
	)
}
