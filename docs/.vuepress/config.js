module.exports = {
    lang: 'ru',
    title: 'Russian Kit',
    description: 'Set of Russian addons and features for Invision Community 4.',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        repo: 'ilyahoilik/russian-kit',
        docsRepo: 'ilyahoilik/russian-kit-docs',
        contributors: false,
        sidebar: [
            {
                text: 'Введение',
                children: [
                    {
                        text: 'Добро пожаловать',
                        link: '/',
                        children: []
                    },
                    {
                        text: 'Установка и обновление',
                        link: '/v1/installation.md',
                        children: []
                    },
                    {
                        text: 'История изменений',
                        link: '/v1/changelog.md',
                        children: []
                    },
                    {
                        text: 'Участие в разработке',
                        link: '/v1/contributions.md',
                        children: []
                    }
                ],
                collapsible: false
            },
            {
                text: 'Функциональность',
                children: [
                    {
                        text: 'Поделиться в соцсетях',
                        link: '/v1/sharing.md',
                        children: []
                    },
                    {
                        text: 'Поиск по Админцентру',
                        link: '/v1/acp-search.md',
                        children: []
                    },
                    {
                        text: 'Транслитерация ссылок',
                        link: '/v1/transliteration.md',
                        children: []
                    },
                    {
                        text: 'Встраивание ссылок',
                        link: '/v1/embedding.md',
                        children: []
                    },
                    {
                        text: 'Расширение Яндекс.Карты',
                        link: '/v1/yandex-maps.md',
                        children: []
                    },
                    {
                        text: 'Регионы стран РУБК',
                        link: '/v1/regions.md',
                        children: []
                    }
                ],
                collapsible: false
            },
            {
                text: 'Методы входа',
                children: [
                    {
                        text: 'ВКонтакте',
                        link: '/v1/login/vkontakte.md',
                        children: []
                    },
                    {
                        text: 'Одноклассники',
                        link: '/v1/login/odnoklassniki.md',
                        children: []
                    },
                    {
                        text: 'Яндекс',
                        link: '/v1/login/yandex.md',
                        children: []
                    },
                    {
                        text: 'Mail.ru',
                        link: '/v1/login/mail-ru.md',
                        children: []
                    }
                ],
                collapsible: false
            }
        ]
    }
}