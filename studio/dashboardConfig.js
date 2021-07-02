export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '60df55eb17dd34382b2fd91b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-q5b129eh',
                  apiId: '89707604-6c18-46c1-8457-0234a98f2d3d'
                },
                {
                  buildHookId: '60df55eb602b682e10efdf9a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-t5kcwdih',
                  apiId: '222cdc62-85bc-4b0e-8d7c-da7968a68719'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joshuaoas/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-t5kcwdih.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
