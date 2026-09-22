import { createI18n } from 'vue-i18n'

const messages = {
  pt: {
    about: {
      status: 'Disponível para novos projetos',
      title: 'Desenvolvedor Full-Stack',
      description: 'Desenvolvedor Full-Stack com forte autonomia na entrega de projetos de ponta a ponta, atuando tanto no desenvolvimento de interfaces modernas quanto na construção de back-ends robustos. Experiência marcante na criação e arquitetura de sistemas completos (abrangendo vendas, inventário, locação, ordens de serviço e orçamentos), além do desenvolvimento autônomo de aplicações web e dashboards gerenciais do zero. Sólida vivência na implementação de integrações complexas, como gateways de pagamento, unindo performance, escalabilidade e excelente experiência de usuário.',
      contact: 'Entre em contato',
      download: 'Download CV'
    },
    technologies: {
      title: 'Tecnologias & Habilidades',
      categories: {
        backend: 'Back-End & Infraestrutura',
        frontend: 'Front-End',
        database: 'Bancos de Dados',
        tools: 'Ferramentas & Metodologias'
      }
    },
    experiences: {
      sectionTitle: 'Experiências',
      list: [
        {
          period: 'Dezembro, 2024 - Atualmente',
          title: 'Desenvolvedor Full-Stack',
          company: 'CPAPS - Terapia do Sono',
          description: 'Atuação no desenvolvimento end-to-end de sistema interno de vendas, construindo APIs com PHP/Lumen e interfaces modernas em TypeScript e Vue.js. Responsável pela modelagem de banco de dados relacional (MySQL), criação de consultas SQL otimizadas e conteinerização de ambientes via Docker. Condução do ciclo de entregas com foco em qualidade, realizando a homologação de demandas, apoio a testes com o time de QA, gestão de deploys para produção e assegurando a aderência aos padrões técnicos da equipe sob rituais ágeis (Scrum).'
        },
        {
          period: 'Novembro, 2023 - Dezembro, 2024',
          title: 'Assistente de TI - JR I',
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
      back: 'Voltar ao início',
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
      status: 'Available for new projects',
      title: 'Full-Stack Developer',
      description: 'Full-Stack Developer with strong autonomy in delivering end-to-end projects, working both on modern interface development and building robust backends. Proven experience in creating and architecting complete systems (covering sales, inventory, leasing/rentals, service orders, and quotes), as well as independently developing web applications and management dashboards from scratch. Solid background implementing complex integrations, such as payment gateways, combining performance, scalability, and an excellent user experience.',
      contact: 'Contact me',
      download: 'Download CV'
    },
    technologies: {
      title: 'Technologies & Skills',
      categories: {
        backend: 'Back-End & Infrastructure',
        frontend: 'Front-End',
        database: 'Databases',
        tools: 'Tools & Methodologies'
      }
    },
    experiences: {
      sectionTitle: 'Experiences',
      list: [
        {
          period: 'December, 2024 - Present',
          title: 'Full-Stack Developer',
          company: 'CPAPS - Terapia do Sono',
          description: 'End-to-end development of internal sales systems, building APIs with PHP/Lumen and modern user interfaces in TypeScript and Vue.js. Responsible for relational database modeling (MySQL), creating optimized SQL queries, and environment containerization with Docker. Managed delivery cycles focused on quality, conducting requirement validation, QA testing support, production deployments, and ensuring technical standards within agile rituals (Scrum).'
        },
        {
          period: 'November, 2023 - December, 2024',
          title: 'IT Assistant - JR I',
          company: 'CPAPS - Terapia do Sono',
          description: 'Worked as an IT Assistant, providing support to internal clients and following maintenance routines. During this time, deepened front-end development studies and collaborated with other developers to create layouts and new company modules, consuming backend APIs via HTTP requests to implement features.'
        },
        {
          period: 'July, 2023 - November, 2023',
          title: 'IT Intern',
          company: 'CPAPS - Terapia do Sono',
          description: 'Started career as an IT intern, gaining experience in both infrastructure and development. Provided technical support to internal users, participated in computer maintenance routines, equipment replacement, repairs, and other technical support activities.'
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
      back: 'Back to home',
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
