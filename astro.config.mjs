// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics'
import starlightThemeObsidian from 'starlight-theme-obsidian'

const NETLIFY_PREVIEW_SITE = process.env.CONTEXT !== 'production' && process.env.DEPLOY_PRIME_URL;

const site = NETLIFY_PREVIEW_SITE || 'https://tlmodding.github.io/';
const ogUrl = new URL('banner.png?v=1', site).href;
const ogImageAlt = 'Your place for everything about Tomodachi Life modding!';

// https://astro.build/config
export default defineConfig({
	site: "https://tlmodding.github.io",
	integrations: [
		starlight({
			title: 'Tomodachi Modding',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en'
				},
				'pt-br': {
					label: "Português (BR)",
					lang: 'pt-BR'
				}
			},
			components: {
				Sidebar: './src/overrides/Sidebar.astro',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/tlmodding/tlmodding.github.io' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/YHFNTvXrdE' },
				{ icon: 'heart', label: 'GameBanana', href: 'https://gamebanana.com/games/23911' }
			],
			head: [
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: ogUrl },
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image:alt', content: ogImageAlt },
				},
				{
					tag: 'meta',
					attrs: { name: 'theme-color', content: '#ff6d02' },
				}
			],
			editLink: {
				baseUrl: "https://github.com/tlmodding/tlmodding.github.io/edit/master/"
			},
			expressiveCode: {
				themes: ['dracula', 'one-light'],
			},
			plugins: [
				starlightThemeObsidian({
					debug: false,
					sitemapConfig: {},
					graphConfig: {},
					backlinksConfig: {},
					graph: false,
					backlinks: true,
				}),
				starlightSidebarTopics([
					{
						label: 'Wiki',
						link: '/getting-started/overview',
						icon: 'open-book',
						items: [
							{
								label: 'Getting Started',
								autogenerate: { directory: "getting-started" }
							},
							{
								label: 'Creating Mods',
								autogenerate: { directory: "creating-mods" }
							},
							{
								label: 'Tools',
								autogenerate: { directory: 'tools' }
							},
							{
								label: 'Guides',
								autogenerate: { directory: "guides" }
							},
						]
					},
					{
						label: 'Living the Dream',
						link: '/living-the-dream',
						icon: 'star',
						items: [{
							label: 'Getting Started',
							items:[{
								label: 'Overview',
								link: '/living-the-dream',
							},
							{
								label: 'Spreadsheets',
								link: '/living-the-dream/spreadsheets',
							}]
						},
						{
							label: 'Tools',
							autogenerate: { directory: 'living-the-dream/tools' },
						}]
					},
					{
						label: 'Documentation',
						link: '/documentation',
						icon: 'laptop',
						items: [{
							label: 'Documentation',
							items:[{
								label: 'Getting Started',
								link: '/documentation',
							}]
						},
						{
								label: 'Living the Dream',
								autogenerate: { directory: 'documentation/living-the-dream' },
						},
						{
								label: 'Tomodachi Life (3DS)',
								autogenerate: { directory: 'documentation/tomodachi-life-3ds' },
						},
					 	{
								label: 'File Formats',
								autogenerate: { directory: 'documentation/file-formats' },
						}]
					},

				])
			]
		}),
	],
});
