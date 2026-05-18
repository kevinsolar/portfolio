export type Locale = "en" | "pt"

export type LocalizedCopy = Record<Locale, string>

export type ProjectImage = {
	alt?: string | LocalizedCopy
	src: string
}

export type ProjectItem = {
	title: string
	description: LocalizedCopy
	stack: string[]
	accent: "accent" | "sage" | "cream"
	projectUrl?: string
	github?: string
	image?: ProjectImage
}

export const contact = {
	email: "kevinleitesolar@hotmail.com",
	linkedIn: "https://linkedin.com/in/kevinsolar",
	github: "https://github.com/kevinsolar",
	currentPortfolio: "https://present.bigfishco.com.br/jobs/",
}

export const navItems = [
	{
		href: "#about",
		label: { en: "About", pt: "Sobre" },
	},
	{
		href: "#skills",
		label: { en: "Skills", pt: "Skills" },
	},
	{
		href: "#projects",
		label: { en: "Projects", pt: "Projetos" },
	},
	{
		href: "#contact",
		label: { en: "Contact", pt: "Contato" },
	},
] satisfies Array<{ href: string; label: LocalizedCopy }>

export const hero = {
	name: "Kevin Solar",
	role: {
		en: "Full Stack Developer",
		pt: "Desenvolvedor Full Stack",
	},
	headline: {
		en: "Hi, I'm a Developer focused on building amazing experiences.",
		pt: "Olá, eu sou um Desenvolvedor focado em construir experiências incríveis.",
	},
	description: {
		en: "Turning ideas into solid code and intuitive interfaces. From frontend to backend, I like to get my hands dirty.",
		pt: "Transformando ideias em código sólido e interfaces intuitivas. Do frontend ao backend, gosto de colocar a mão na massa.",
	},
	primaryCta: {
		en: "See Projects",
		pt: "Ver Projetos",
	},
	secondaryCta: {
		en: "Download CV",
		pt: "Baixar CV",
	},
}

export const about = {
	heading: {
		en: "About me",
		pt: "Sobre mim",
	},
	paragraphs: [
		{
			en: "I'm a developer who genuinely loves technology, not just as a job, but as a way of thinking. I started out as an electronics technician, which gave me a strong analytical mindset and a deep appreciation for how things work under the hood.",
			pt: "Sou um desenvolvedor que genuinamente ama tecnologia, não só como profissão, mas como forma de pensar. Comecei como técnico eletrônico, o que me deu uma mentalidade analítica afiada e um olhar atento para como as coisas funcionam por baixo dos panos.",
		},
		{
			en: "In 2022, I made the leap into software development and haven't looked back. My foundation is in Frontend, React, modern CSS, clean structure, but I'm equally comfortable on the Backend with Node.js and SQL/NoSQL databases.",
			pt: "Em 2022, dei o salto para o desenvolvimento de software e não olhei mais para trás. Minha base é no Frontend, React, CSS moderno, código limpo, mas também atuo com confiança no Backend com Node.js e bancos de dados SQL/NoSQL.",
		},
		{
			en: "Currently, I work at BTA Creative building custom WordPress sites and landing pages, while continuously leveling up in Next.js and modern development practices.",
			pt: "Atualmente trabalho na BTA Creative desenvolvendo sites institucionais e landing pages com WordPress customizado, enquanto evoluo continuamente em Next.js e boas práticas de desenvolvimento.",
		},
		{
			en: "I'm not a designer, but I care deeply about clean, functional code, and that tends to show in interfaces that are organized and easy to use.",
			pt: "Não sou designer, mas me preocupo com código limpo e funcional, e isso naturalmente se reflete em interfaces organizadas e agradáveis de usar.",
		},
	] satisfies LocalizedCopy[],
}

export const skills = {
	heading: {
		en: "Technologies I work with",
		pt: "Tecnologias que utilizo",
	},
	groups: [
		{
			category: "Frontend",
			items: ["HTML", "CSS", "JavaScript", "React"],
		},
		{
			category: "Backend",
			items: ["PHP", "Node.js"],
		},
		{
			category: "Frameworks",
			items: ["Next.js", "WordPress (ACF)"],
			note: {
				en: "Next.js in study",
				pt: "Next.js em estudo",
			},
		},
		{
			category: "Tools",
			items: ["Git", "GitHub", "Asana"],
		},
		{
			category: "Others",
			items: ["Responsive Design", "Basic SEO", "Code Versioning"],
		},
	] satisfies Array<{
		category: string
		items: string[]
		note?: LocalizedCopy
	}>,
}

export const projects = {
	heading: {
		en: "Featured Projects",
		pt: "Projetos em destaque",
	},
	intro: {
		en: "A few projects I think are worth showing here, from custom WordPress builds to modern Next.js interfaces.",
		pt: "Alguns projetos que acho interessante mostrar por aqui, de builds customizados em WordPress a interfaces modernas com Next.js.",
	},
	items: [
		{
			image: {
				src: "/print-lgmais.png",
				alt: "LG Mais project screenshot",
			},
			title: "LG Mais",
			description: {
				en: "A corporate website project for LG, developed with custom WordPress and ACF, designed as a virtual showcase with a focus on user experience.",
				pt: "Um projeto de site institucional para a LG, desenvolvido com WordPress customizado e ACF, pensado para ser uma vitrine virtual, focado em experiência do usuário.",
			},
			stack: ["WordPress", "ACF", "PHP", "CSS", "AJAX"],
			projectUrl: "https://lgmais.ind.br/",
			github: "",
			accent: "accent",
		},
		{
			image: {
				src: "/print-saultcollege.png",
				alt: "Sault College project screenshot",
			},
			title: "Sault College",
			description: {
				en: "This site, previously built in WordPress, was rebuilt from scratch using Next.js + Tailwind, with the goal of improving performance and user experience, as well as making future maintenance easier.\nThe original site is still available at:\nhttps://saultcollege.com.br/ (also made by me).",
				pt: "Esse site antes feito em Wordpress foi refeito do zero usando Next.js + Tailwind, com o objetivo de melhorar a performance e a experiência do usuário, além de facilitar a manutenção futura.\nO site original se encontra ainda em:\nhttps://saultcollege.com.br/ (feito por mim tbm.)",
			},
			stack: ["Next.js", "TS", "Tailwind"],
			projectUrl: "https://lp-bta.vercel.app/",
			github: "https://github.com/kevinsolar/lp-bta",
			accent: "sage",
		},
		{
			image: {
				src: "/print-ecoville.png",
				alt: "Ecoville project screenshot",
			},
			title: "Ecoville",
			description: {
				en: "A virtual product showcase for the Ecoville brand, developed with custom WordPress (HTML + CSS + JS + AJAX) and ACF, focused on user experience and performance.",
				pt: "Uma vitrine virtual de produtos para a marca Ecoville, desenvolvido com WordPress customizado (HTML + CSS + JS + AJAX) e ACF, focado em experiência do usuário e performance.",
			},
			stack: ["WordPress", "ACF", "PHP", "CSS", "AJAX"],
			projectUrl: "https://ecovillebrasil.com.br/",
			github: "",
			accent: "accent",
		},
		{
			image: {
				src: "/print-patella.png",
				alt: "Patella project screenshot",
			},
			title: "Patella",
			description: {
				en: "This project is a modernization of an old website. It is still in the approval process, but it already demonstrates performance gains, modernization in both layout and stack, as well as improvements in user experience.\nOld site: https://patella.com.br/ (not developed by me).",
				pt: "Esse projeto é uma modernização de um site antigo. Ainda está em processo de aprovação, mas já evidencia ganhos de performance, modernização tanto no layout quanto na stack, além de melhorias na experiência do usuário.\nsite antigo: https://patella.com.br/ (nao foi feito por mim)",
			},
			stack: ["Next.js", "TS", "Tailwind"],
			projectUrl: "https://github.com/kevinsolar/patella",
			github: "https://github.com/kevinsolar/patella",
			accent: "accent",
		},
		{
			image: {
				src: "/print-helbor.png",
				alt: "Helbor Vendas Mogi project screenshot",
			},
			title: "Helbor Vendas Mogi",
			description: {
				en: "An institutional website for Helbor Vendas Mogi das Cruzes, the official sales company for Helbor Empreendimentos in the region. Built with WordPress, the site presents the company's real estate developments with a clean layout focused on lead generation and contact.",
				pt: "Site institucional da Helbor Vendas Mogi das Cruzes, empresa oficial de comercialização dos empreendimentos Helbor na região. Desenvolvido em WordPress, o site apresenta os lançamentos imobiliários com um layout limpo e foco em captação de leads e contato.",
			},
			stack: ["WordPress", "ACF", "PHP", "CSS"],
			projectUrl: "https://helborvendasmogi.com.br/",
			github: "",
			accent: "accent",
		},
		{
			image: {
				src: "/print-haras.png",
				alt: "Haras Marcon screenshot",
			},
			title: "Haras Marcon",
			description: {
				en: "A custom WordPress website for Haras Marcon and Espaço de Eventos Marcon, presenting a countryside venue that brings together nature, horses, events, lodging and a complete haras experience. The site highlights services, gallery, location and contact in a warm, visual flow.",
				pt: "Site em WordPress customizado para o Haras Marcon e Espaço de Eventos Marcon, apresentando um espaço no campo que une natureza, cavalos, eventos, hospedagem e a experiência completa de um haras. O site destaca serviços, galeria, localização e contato em uma navegação visual e acolhedora.",
			},
			stack: ["WordPress", "ACF", "PHP", "CSS"],
			projectUrl: "https://harasmarcon.com.br/",
			github: "",
			accent: "accent",
		},
		{
			image: {
				src: "/print-thinkcanada.png",
				alt: "Think Canada project screenshot",
			},
			title: "Think Canada",
			description: {
				en: "A custom WordPress website for Think Canada, an education project that connects Brazilian students and schools with public Canadian institutions. The site presents the initiative, academic guidance, admissions support, partner institutions and a lead capture flow for people interested in studying in Canada.",
				pt: "Site em WordPress customizado para o Think Canada, um projeto educacional que conecta estudantes e escolas brasileiras a instituições públicas do Canadá. O site apresenta a iniciativa, orientação acadêmica, suporte no processo de admissão, instituições parceiras e um fluxo de captação para quem quer estudar no Canadá.",
			},
			stack: ["WordPress", "ACF", "PHP", "CSS"],
			projectUrl: "https://thinkcanada.com.br/",
			github: "",
			accent: "accent",
		},
	] as ProjectItem[],
	learnMore: {
		en: "See more",
		pt: "Ver mais",
	},
	github: {
		en: "GitHub",
		pt: "GitHub",
	},
}

export const contactSection = {
	heading: {
		en: "Let's work together?",
		pt: "Vamos trabalhar juntos?",
	},
	description: {
		en: "I'm currently open to freelance projects and full-time opportunities. If you have an idea, a challenge, or just want to talk tech, reach out!",
		pt: "Estou aberto a projetos freelance e oportunidades de emprego. Se tiver uma ideia, um desafio, ou só quiser bater um papo sobre tecnologia, fala comigo!",
	},
}

export const footer = {
	builtWith: {
		en: "Built with Next.js.",
		pt: "Desenvolvido com Next.js.",
	},
}
