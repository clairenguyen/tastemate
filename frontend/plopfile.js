/* eslint-disable import/no-anonymous-default-export */
export default function (plop) {
  plop.setGenerator('route', {
    description: 'creates a new route',
    prompts: [
      {
        type: 'input',
        name: 'path',
        message: 'Route path?',
        default: '',
        transformer: (value) => {
          return `src/app/${value}`
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/app/{{path}}/page.tsx',
        templateFile: 'plop-templates/route/page.tsx.hbs',
      },
    ],
  })
  plop.setGenerator('component', {
    description: 'creates a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}.tsx',
        templateFile: 'plop-templates/component/component.tsx.hbs',
      },
      {
        type: 'add',
        path: '__tests__/components/{{name}}.test.tsx',
        templateFile: 'plop-templates/component/component.test.tsx.hbs',
      },
    ],
  })
}
