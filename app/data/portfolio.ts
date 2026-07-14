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
				en: "Institutional website for a regional LG distributor, built as a product showcase with a strong focus on user experience. Custom WordPress architecture with dynamic content management, allowing the client to update the catalog without developer support.",
				pt: "Site institucional para um distribuidor regional LG, desenvolvido como vitrine de produtos com foco em experiência do usuário. Arquitetura WordPress customizada com gerenciamento dinâmico de conteúdo, permitindo ao cliente atualizar o catálogo sem precisar de desenvolvedor.",
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
				en: "Full rebuild of an existing WordPress site into Next.js + Tailwind, resulting in significant performance gains on mobile and desktop. The project demonstrates a practical migration from a legacy stack to a modern, scalable architecture — with the original site still live for direct comparison.",
				pt: "Reconstrução completa de um site WordPress existente para Next.js + Tailwind, com ganhos expressivos de performance no mobile e desktop. O projeto demonstra uma migração real de uma stack legada para uma arquitetura moderna e escalável — com o site original ainda no ar para comparação direta.",
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
				en: "Product showcase for Ecoville, a consumer goods brand. Built with custom WordPress and dynamic content loading via AJAX, delivering a fast and fluid browsing experience without full page reloads. Content fully manageable by the client team.",
				pt: "Vitrine de produtos para a Ecoville, marca de bens de consumo. Desenvolvido com WordPress customizado e carregamento dinâmico via AJAX, entregando uma navegação rápida e fluida sem recarregamento de página. Conteúdo totalmente gerenciável pela equipe do cliente.",
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
				en: "Modernization of an outdated institutional website, migrated to Next.js + Tailwind. The rebuild focused on performance improvements, a refreshed visual identity and better user experience. Currently in client approval — original site available for before/after comparison.",
				pt: "Modernização de um site institucional desatualizado, migrado para Next.js + Tailwind. O rebuild focou em ganhos de performance, identidade visual renovada e melhor experiência do usuário. Atualmente em aprovação pelo cliente — site original disponível para comparação antes/depois.",
			},
			stack: ["Next.js", "TS", "Tailwind"],
			projectUrl: "https://patella.vercel.app/",
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
				en: "Institutional website for the official sales branch of Helbor Empreendimentos in Mogi das Cruzes. Clean layout built around lead generation, presenting real estate developments with clear contact flows and a strong call to action.",
				pt: "Site institucional da representante oficial de vendas da Helbor Empreendimentos em Mogi das Cruzes. Layout limpo construído em torno da captação de leads, apresentando os lançamentos imobiliários com fluxos de contato claros e call to action forte.",
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
				en: "Website for a countryside events and lodging venue in São Paulo state. The design prioritizes visual storytelling — nature, horses and experiences — guiding visitors naturally toward contact and bookings.",
				pt: "Site para um espaço de eventos e hospedagem no interior de São Paulo. O design prioriza a narrativa visual — natureza, cavalos e experiências — conduzindo o visitante naturalmente até o contato e as reservas.",
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
				en: "Website for an education initiative connecting Brazilian students with Canadian public institutions. The site presents the program, academic guidance and admissions support — built with a clear lead capture flow for interested students.",
				pt: "Site para uma iniciativa educacional que conecta estudantes brasileiros a instituições públicas canadenses. O site apresenta o programa, orientação acadêmica e suporte ao processo de admissão — desenvolvido com um fluxo claro de captação para interessados.",
			},
			stack: ["WordPress", "ACF", "PHP", "CSS"],
			projectUrl: "https://thinkcanada.com.br/",
			github: "",
			accent: "accent",
		},
		{
			title: "O Burgues - Mogi das Cruzes",
			description: {
				en: "Conversion-focused landing page for O Burgues Mogi das Cruzes, built in WordPress with Bootstrap, JavaScript and ACF. The page was designed around direct CTAs to WhatsApp, making it easy for visitors to start an order or contact the restaurant quickly.",
				pt: "Landing page de conversão para O Burgues Mogi das Cruzes, desenvolvida em WordPress com Bootstrap, JavaScript e ACF. A página foi pensada em torno de CTAs diretos para o WhatsApp, facilitando o início do pedido ou o contato rápido com a hamburgueria.",
			},
			stack: ["WordPress", "ACF", "HTML", "CSS", "Bootstrap", "JS"],
			projectUrl: "https://oburguesmogi.com.br/",
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
