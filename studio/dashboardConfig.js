export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events-2-studio-98x85b5h',
                  apiId: '2801cdce-c124-4ade-9e96-1a629493f018'
                },
                {
                  buildHookId: '5f428e3e542704f6d56ccdc5',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events-2-web-e4o6hbs6',
                  apiId: 'f6eb9587-6a5b-40aa-9252-8b5883f76175'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AxelBriche/sanity-nuxt-events2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events-2-web-e4o6hbs6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
