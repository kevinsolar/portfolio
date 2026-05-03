import { AboutSection } from "@/app/sections/AboutSection"
import { ContactSection } from "@/app/sections/ContactSection"
import { Footer } from "@/app/sections/Footer"
import { HeroSection } from "@/app/sections/HeroSection"
import { ProjectsSection } from "@/app/sections/ProjectsSection"
import { SiteNav } from "@/app/sections/SiteNav"
import { SkillsSection } from "@/app/sections/SkillsSection"

export default function Home() {
	return (
		<main className="min-h-screen overflow-hidden bg-background text-foreground">
			<SiteNav />
			<HeroSection />
			<AboutSection />
			<SkillsSection />
			<ProjectsSection />
			<ContactSection />
			<Footer />
		</main>
	)
}
