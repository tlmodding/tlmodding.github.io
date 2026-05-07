// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics'

const NETLIFY_PREVIEW_SITE = process.env.CONTEXT !== 'production' && process.env.DEPLOY_PRIME_URL;

const site = NETLIFY_PREVIEW_SITE || 'https://tlmodding.com/';
const ogUrl = new URL('banner.png?v=1', site).href;
const ogImageAlt = 'Your place for everything about Tomodachi Life modding!';

// https://astro.build/config
export default defineConfig({
	site: "https://tlmodding.com",
	integrations: [
		starlight({
			title: 'Tomodachi Life Modding',
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
				SocialIcons: './src/components/SocialIcons.astro',
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
				starlightSidebarTopics([
					{
						label: 'Wiki',
						link: '/getting-started/overview',
						icon: 'open-book',
						items: [
							{
								label: 'Getting Started',
								translations: {
									'pt-BR': 'Começando'
								},
								items: [{ autogenerate: { directory: 'getting-started' } }]
							},
							{
								label: 'Creating Mods',
								translations: {
									'pt-BR': 'Criando Mods'
								},
								items: [{ autogenerate: { directory: "creating-mods" } }]
							},
							{
								label: 'Tools',
								translations: {
									'pt-BR': 'Ferramentas'
								},
								items: [{ autogenerate: { directory: 'tools' } }]
							},
							{
								label: 'Guides',
								translations: {
									'pt-BR': 'Guias'
								},
								items: [{ autogenerate: { directory: "guides" } }]
							},
						]
					},
					{
						label: 'Living the Dream',
						link: '/living-the-dream',
						icon: 'star',
						items: [{
							label: 'Getting Started',
							translations: {
								'pt-BR': 'Começando'
							},
							items:[{
								label: 'Overview',
								translations: {
									'pt-BR': 'Visão Geral'
								},
								link: '/living-the-dream',
							},
							{
								label: 'Spreadsheet',
								translations: {
									'pt-BR': 'Planilha'
								},
								link: 'https://docs.google.com/spreadsheets/d/1TyLMb9qR52tpPSeCWo3kovkHwIGDUlJQYmKz77NHAIE/view'
							}]
						},
						{
							label: 'Tools',
							translations: {
								'pt-BR': 'Ferramentas'
							},
							items: [{ autogenerate: { directory: 'living-the-dream/tools' } }]
						}, 
						{
							label: 'Reverse Engineering',
							translations: {
								'pt-BR': 'Engenharia Reversa'
							},
							items: [{ autogenerate: { directory: 'living-the-dream/reverse-engineering' } }]
						}]
					},
					{
						label: {
							en: 'Documentation',
							'pt-BR': 'Documentação'
						},
						link: '/documentation',
						icon: 'laptop',
						items: [{
							label: 'Documentation',
							translations: {
								'pt-BR': 'Documentação'
							},
							items:[{
								label: 'Getting Started',
								link: '/documentation',
							}]
						},
						{
								label: 'Living the Dream',
								items: [{ autogenerate: { directory: 'documentation/living-the-dream' } }]
						},
						{
								label: 'Tomodachi Life (3DS)',
								items: [{ autogenerate: { directory: 'documentation/tomodachi-life-3ds' } }]
						},
					 	{
								label: 'File Formats',
								translations: {
									'pt-BR': 'Formatos de Arquivo'
								},
								items: [{ autogenerate: { directory: 'documentation/file-formats' } }]
						}]
					},

				])
			]
		}),
	],
});
