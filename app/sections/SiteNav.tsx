import { Button } from "@/app/components/button"
import { LanguageToggle } from "@/app/components/language-toggle"
import { LocalizedText } from "@/app/components/localized-text"
import { hero, navItems } from "@/app/data/portfolio"
import Link from "next/link"

export function SiteNav() {
	return (
		<header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
			<nav className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
				<Link className="font-brand text-3xl text-foreground" href="/">
					{hero.name}
				</Link>

				<div className="hidden items-center gap-7 md:flex">
					{navItems.map((item) => (
						<a
							className="text-sm font-semibold text-muted transition-colors hover:text-foreground"
							href={item.href}
							key={item.href}
						>
							<LocalizedText value={item.label} />
						</a>
					))}
				</div>

				<div className="flex items-center gap-3">
					<Button
						className="hidden md:inline-flex"
						download
						href="/kevin-solar-cv.pdf"
						size="sm"
						variant="ghost"
					>
						<LocalizedText value={hero.secondaryCta} />
					</Button>
					<LanguageToggle />
				</div>
			</nav>
		</header>
	)
}
