import { createI18n } from 'vue-i18n'

const messages = {
  pt: {
    about: {
      title: 'Desenvolvedor FrontEnd',
      description: 'Desenvolvedor Front-End com 1 ano de experiência, graduando em Engenharia de Computação. Possuo experiência no desenvolvimento de layouts modernos utilizando HTML, CSS, JavaScript, TypeScript, Vue.js, Sass, Bootstrap e Tailwind CSS. Também tenho conhecimento em tecnologias como Docker, ERP Sankhya, Git e GitHub para versionamento de código, e MySQL para banco de dados.',
      contact: 'Entre em contato',
      download: 'Download CV'
    },
    technologies:{
      title:'Tecnologias'
    },
    experiences: {
      sectionTitle: 'Experiências',
      list: [
        {
          period: 'Dezembro, 2024 - Atualmente',
          title: 'Analista de Desenvolvimento',
          company: 'CPAPS - Terapia do Sono',
          description: 'Atuando como Desenvolvedor Front-End, sou responsável pela construção diária de layouts responsivos, integrando interfaces com APIs desenvolvidas no Back-End por meio de requisições HTTP. Utilizo Git e GitHub para controle de versionamento e colaboração em equipe. Também realizo consultas e manipulações de dados em banco de dados MySQL localmente, além de consumir endpoints criados em PHP para aplicação no Front-End. Trabalho com metodologias ágeis, como Scrum e Kanban, para organização e acompanhamento eficiente dos projetos.'
        },
        {
          period: 'Novembro, 2023 - Dezembro, 2024',
          title: 'Assistente de TI',
          company: 'CPAPS - Terapia do Sono',
          description: 'Atuei como Assistente de TI, prestando suporte ao cliente interno e acompanhando rotinas de manutenção. Durante esse período, aprofundei meus estudos em desenvolvimento Front-End e, mesmo na função de Assistente, tive a oportunidade de colaborar em equipe com outros desenvolvedores. Participei da criação de layouts e desenvolvimento de novos módulos para a empresa, consumindo APIs desenvolvidas pelo Back-End, utilizando endpoints e requisições para implementar funcionalidades.'
        },
        {
          period: 'Julho, 2023 - Novembro, 2023',
          title: 'Estagiário de TI',
          company: 'CPAPS - Terapia do Sono',
          description: 'Iniciei minha carreira como estagiário de TI, onde tive a oportunidade de adquirir experiência tanto na área de infraestrutura quanto no desenvolvimento. Durante esse período, prestei suporte ao cliente interno, participei das rotinas de manutenção de computadores, substituição de equipamentos, realização de reparos e outras atividades relacionadas ao suporte técnico.'
        }
      ]
    },
    projects: {
      sectionTitle: 'Projetos em destaque',
      viewMore: 'Outros projetos',
      list: [
        {
          name: 'MakeYourburger',
          description: 'Projeto feito para servir como gerenciamento de uma loja virtual de uma hamburgueria, podendo ser feito desde o cadastro, remoção e atualização de um pedido. Utilizado também o JSON Server para mockar o backend.'
        },
        {
          name: 'VidFlow',
          description: 'Esse projeto foi feito a partir do curso de JavaScript: consumindo e tratando dados de uma API da Alura, aonde pude aprimorar conhecimento de consumir API pelo frontend, criação de filtros dinâmicos, criação de funções assíncronas e seus respectivos tratamentos. Também foi utilizado JSON Server para mockar o backend.'
        },
        {
          name: 'Fokus',
          description: 'Projeto feito durante meu período de estudo, foi desenvolvido a partir das aulas de manipulação do DOM e do LocalStorage nas videoaulas da Alura, onde pude me aprofundar mais no meu conhecimento de JavaScript.'
        }
      ]
    },
    projectsView: {
      sectionTitle: 'Meus projetos',
      list: [
        {
          name: 'MakeYourburger',
          description: 'Projeto feito para servir como gerenciamento de uma loja virtual de uma hamburgueria, podendo ser feito desde o cadastro, remoção e atualização de um pedido. Utilizado também o JSON Server para mockar o backend.'
        },
        {
          name: 'VidFlow',
          description: 'Esse projeto foi feito a partir do curso de JavaScript: consumindo e tratando dados de uma API da Alura, aonde pude aprimorar conhecimento de consumir API pelo frontend, criação de filtros dinâmicos, criação de funções assíncronas e seus respectivos tratamentos. Também foi utilizado JSON Server para mockar o backend.'
        },
        {
          name: 'Fokus',
          description: 'Projeto feito durante meu período de estudo, foi feito a partir das aulas de manipulação do DOM e do LocalStorage nas videoaulas da Alura, onde pude me aprofundar mais no meu conhecimento de JavaScript.'
        },
        {
          name: 'Meteora',
          description: 'Projeto totalmente responsivo, feito durante prática de Bootstrap 5 na Alura. A ideia é ser um layout de um marketplace.'
        },
        {
          name: 'NewsLetter',
          description: 'Newsletter desenvolvida a partir do curso de Tailwind da Alura, onde foram aplicadas diversas classes utilitárias, desde responsividades, cores e até mesmo animações.'
        },
        {
          name: 'AluraBooks',
          description: 'Projeto feito durante curso de Métodos de Array na Alura, onde foi desenvolvido um layout responsivo de uma plataforma de livros, utilizando métodos do JavaScript como Filter, Reduce e Map para criação de filtros.'
        }
      ]
    }
  },
  en: {
    about: {
      title: 'Front-End Developer',
      description: 'Front-End Developer with 1 year of experience, currently pursuing a degree in Computer Engineering. I have experience building modern layouts using HTML, CSS, JavaScript, TypeScript, Vue.js, Sass, Bootstrap, and Tailwind CSS. I also have knowledge of technologies like Docker, ERP Sankhya, Git and GitHub for version control, and MySQL as a database.',
      contact: 'Contact me',
      download: 'Download CV'
    },
    technologies:{
      title:'Technologies'
    },
    experiences: {
      sectionTitle: 'Experiences',
      list: [
        {
          period: 'December, 2024 - Present',
          title: 'Development Analyst',
          company: 'CPAPS - Terapia do Sono',
          description: 'Working as a Front-End Developer, I am responsible for building responsive layouts daily, integrating interfaces with backend APIs through HTTP requests. I use Git and GitHub for version control and team collaboration. I also perform data queries and manipulation on local MySQL databases, and consume PHP-created endpoints for frontend use. I work with agile methodologies like Scrum and Kanban for efficient project management.'
        },
        {
          period: 'November, 2023 - December, 2024',
          title: 'IT Assistant',
          company: 'CPAPS - Terapia do Sono',
          description: 'I worked as an IT Assistant, providing support to internal clients and following maintenance routines. During this time, I deepened my front-end development studies and had the opportunity to collaborate with other developers. I participated in layout creation and new module development, consuming backend-developed APIs and implementing features via HTTP requests.'
        },
        {
          period: 'July, 2023 - November, 2023',
          title: 'IT Intern',
          company: 'CPAPS - Terapia do Sono',
          description: 'I started my career as an IT intern, where I gained experience in both infrastructure and development. During this period, I supported internal users, participated in computer maintenance routines, equipment replacements, repairs, and other support tasks.'
        }
      ]
    },
    projects: {
      sectionTitle: 'Featured Projects',
      viewMore: 'More projects',
      list: [
        {
          name: 'MakeYourburger',
          description: 'Project created to manage a virtual burger shop, allowing order creation, removal, and updates. JSON Server was also used to mock the backend.'
        },
        {
          name: 'VidFlow',
          description: 'This project was built from the JavaScript course: consuming and processing API data from Alura. I improved my API consumption skills, created dynamic filters, asynchronous functions, and error handling. JSON Server was also used to mock the backend.'
        },
        {
          name: 'Fokus',
          description: 'Project developed during my study phase, based on DOM and LocalStorage manipulation lessons from Alura’s courses. It helped me deepen my JavaScript knowledge.'
        }
      ]
    },
    projectsView: {
      sectionTitle: 'My Projects',
      list: [
        {
          name: 'MakeYourburger',
          description: 'Project designed to manage a virtual burger shop, allowing order creation, removal, and updates. JSON Server was also used to mock the backend.'
        },
        {
          name: 'VidFlow',
          description: 'This project was developed from a JavaScript course on consuming and processing data from an API on Alura. I improved my frontend API consumption skills, created dynamic filters and async functions. JSON Server was used to mock the backend.'
        },
        {
          name: 'Fokus',
          description: 'A project built during my learning period, based on DOM and LocalStorage manipulation lessons from Alura, helping deepen my JavaScript knowledge.'
        },
        {
          name: 'Meteora',
          description: 'Fully responsive project developed during Bootstrap 5 practice on Alura, simulating a marketplace layout.'
        },
        {
          name: 'NewsLetter',
          description: 'Newsletter developed during the Tailwind CSS course on Alura, applying multiple utility classes for responsiveness, colors, and animations.'
        },
        {
          name: 'AluraBooks',
          description: 'Built during an Array Methods course on Alura, this responsive book platform used JavaScript methods like Filter, Reduce, and Map to create dynamic filters.'
        }
      ]
    }
  }
}


const i18n = createI18n({
  locale: 'pt',
  fallbackLocale: 'en',
  messages
})

export default i18n
