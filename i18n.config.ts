export default defineI18nConfig(() => ({
    legacy: false,
    messages: {
        uk: {
            menu: {
                homepage: 'Головна',
                experience: 'Досвід',
                petProjects: 'Персональні проекти',
                about: 'Про мене',
                contacts: 'Контакти'
            },
            contactMe: `Зв'язатися зі мною`,
            downloadCV: 'Завантажити резюме'
        },
        en: {
            menu: {
                homepage: 'Homepage',
                experience: 'Experience',
                petProjects: 'Pet projects',
                about: 'About',
                contacts: 'Contacts'
            },
            contactMe: 'Contact me',
            downloadCV: 'Download CV'
        }
    }
}))