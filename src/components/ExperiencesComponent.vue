<template>
    <section class="experiences d-flex flex-column text-light py-5 px-3">
        <h2 class="text-center mb-5">Experiências</h2>
        <div v-for="(exp, index) in experiences" :key="exp.company" class="row mb-5" ref="experienceItems">
            <div class="col-12 col-md-4 text-md-end mb-2 mb-md-0"
                :class="{ 'slide-in-left': visible[index], 'invisible': !visible[index] }">
                <span>{{ exp.period }}</span>
            </div>
            <div class="col-12 col-md-8" :class="{ 'slide-in-right': visible[index], 'invisible': !visible[index] }">
                <h5 class="fw-semibold mb-1">{{ exp.title }}</h5>
                <a :href="exp.companyUrl" target="_blank" rel="noopener" class="company-link text-decoration-none">
                    {{ exp.company }}
                </a>
                <p class="mt-2 mb-2">{{ exp.description }}</p>
                <div class="d-flex flex-wrap gap-2">
                    <span v-for="tag in exp.tech" :key="tag" class="tech-badge">{{ tag }}</span>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    name: 'ExperiencesComponent',
    data() {
        return {
            experiences: [
                {
                    period: 'Dezembro, 2024 - Atualmente',
                    title: 'Analista de Desenvolvimento',
                    company: 'CPAPS - Terapia do Sono',
                    companyUrl: 'https://www.cpaps.com.br/',
                    description:
                        'Atuando como Desenvolvedor Front-End, sou responsável pela construção diária de layouts responsivos, integrando interfaces com APIs desenvolvidas no Back-End por meio de requisições HTTP. Utilizo Git e GitHub para controle de versionamento e colaboração em equipe. Também realizo consultas e manipulações de dados em banco de dados MySQL localmente, além de consumir endpoints criados em PHP para aplicação no Front-End. Trabalho com metodologias ágeis, como Scrum e Kanban, para organização e acompanhamento eficiente dos projetos.',
                    tech: ['HTML','Css','JavaScript','VueJs','Sass','Bootstrap','Git','GitHub','PHP','MySql','Docker']
                },
                {
                    period: 'Novembro, 2023 - Dezembro, 2024',
                    title: 'Assistente de TI',
                    company: 'CPAPS - Terapia do Sono',
                    companyUrl: 'https://www.cpaps.com.br/',
                    description:
                        'Atuei como Assistente de TI, prestando suporte ao cliente interno e acompanhando rotinas de manutenção. Durante esse período, aprofundei meus estudos em desenvolvimento Front-End e, mesmo na função de Assistente, tive a oportunidade de colaborar em equipe com outros desenvolvedores. Participei da criação de layouts e desenvolvimento de novos módulos para a empresa, consumindo APIs desenvolvidas pelo Back-End, utilizando endpoints e requisições para implementar funcionalidades.',
                    tech: ['HTML','Css','JavaScript','VueJs','Sass','Bootstrap','Git','GitHub','Docker']
                },
                {
                    period: 'Julho, 2023 - Novembro, 2023',
                    title: 'Estagiário de TI',
                    company: 'CPAPS - Terapia do Sono',
                    companyUrl: 'https://www.cpaps.com.br',
                    description:
                        'Iniciei minha carreira como estagiário de TI, onde tive a oportunidade de adquirir experiência tanto na área de infraestrutura quanto no desenvolvimento. Durante esse período, prestei suporte ao cliente interno, participei das rotinas de manutenção de computadores, substituição de equipamentos, realização de reparos e outras atividades relacionadas ao suporte técnico.',
                    tech: []
                }
            ],
            visible: []
        }
    },
    mounted() {
        this.visible = this.experiences.map(() => false)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Array.from(this.$refs.experienceItems).indexOf(entry.target)
                        if (index !== -1) {
                            this.visible[index] = true
                            observer.unobserve(entry.target)
                        }
                    }
                })
            },
            { threshold: 0.3 }
        )

        this.$nextTick(() => {
            this.$refs.experienceItems.forEach((el) => {
                observer.observe(el)
            })
        })
    }
}
</script>