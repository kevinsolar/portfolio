import Image from "next/image"

type AboutPortraitImage = {
	alt: string
	src: string
}

type AboutPortraitProps = {
	image?: AboutPortraitImage
}

export function AboutPortrait({ image }: AboutPortraitProps) {
	return (
		<div className="portrait-frame portrait-grid relative mx-auto flex aspect-4/5 w-full max-w-sm items-center justify-center overflow-hidden rounded-3xl">
			{image ? (
				<Image
					alt={image.alt}
					className="object-cover object-center"
					fill
					sizes="(min-width: 1024px) 24rem, calc(100vw - 2.5rem)"
					src={image.src}
				/>
			) : (
				<>
					<div className="absolute inset-x-8 bottom-8 h-px bg-accent" />
					<div className="text-center">
						<span className="font-brand text-7xl text-foreground">KS</span>
						<div className="mx-auto mt-4 h-2 w-24 rounded-full bg-accent" />
					</div>
				</>
			)}
		</div>
	)
}
