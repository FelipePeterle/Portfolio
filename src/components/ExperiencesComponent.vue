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
                    period: 'Junho, 2023 - Atualmente',
                    title: 'Caixa Web - Desenvolvedor Full-Stack',
                    company: 'Autoglass',
                    companyUrl: 'https://www.autoglass.com.br/',
                    description:
                        'Atuo no time de desenvolvimento do produto de faturamento e emissão de notas da empresa utilizando .Net, Angular, Oracle e Kafka. Aplicação dos princípios de Design Orientado a Domínio (DDD) e Clean Architecture. Utilização de metodologias ágeis, incluindo Scrum e Kanban, para o gerenciamento de projetos.',
                    tech: ['C#', '.Net', 'TypeScript', 'Angular', 'Oracle', 'Kafka']
                },
                {
                    period: 'Junho, 2022 - Junho, 2023',
                    title: 'Gestão de Risco ao Crédito - Desenvolvedor Full-Stack',
                    company: 'Autoglass',
                    companyUrl: 'https://www.autoglass.com.br/',
                    description:
                        'Atuei no time de desenvolvimento do produto de análise de crédito financeiro utilizando .Net, Angular, MongoDB, SQS. Desempenhei um papel crucial no desenvolvimento do processo de análise automatizada, implementando o processo assíncrono de fila com o SQS. E na reestruturação do armazenamento de anexos. Além disso, utilizávamos a metodologia ágil Scrum.',
                    tech: ['C#', '.Net', 'TypeScript', 'Angular', 'MongoDB', 'SQS']
                },
                {
                    period: 'Março, 2023 - Julho, 2023',
                    title: 'Aksie - Desenvolvedor Front-end',
                    company: 'Freelance',
                    companyUrl: '#',
                    description:
                        'Atuei como desenvolvedor Front-end para uma plataforma de gerenciamento contábil. Utilizando as tecnologias Angular, TypeScript, SASS.',
                    tech: ['TypeScript', 'Angular', 'SASS']
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