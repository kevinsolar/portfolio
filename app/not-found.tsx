import Link from "next/link"

export default function NotFound() {
	return (
		<section
			id="notfound"
			className="relative flex flex-col gap-4 min-h-dvh items-center justify-center px-5 pb-16 pt-28 md:px-8 md:pb-20 md:pt-32"
		>
			<h1 className="max-w-4xl font-sans text-6xl font-extrabold leading-tight text-accent md:text-8xl">404</h1>
			<p>Nothing to see here</p>

			<Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-7 py-3 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background md:text-base">Return Home</Link>
		</section>
	)
}
