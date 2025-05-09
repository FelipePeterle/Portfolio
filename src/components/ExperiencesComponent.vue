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
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                    tech: ['C#', '.Net', 'TypeScript', 'Angular', 'Oracle', 'Kafka']
                },
                {
                    period: 'Junho, 2022 - Junho, 2023',
                    title: 'Gestão de Risco ao Crédito - Desenvolvedor Full-Stack',
                    company: 'Autoglass',
                    companyUrl: 'https://www.autoglass.com.br/',
                    description:
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                    tech: ['C#', '.Net', 'TypeScript', 'Angular', 'MongoDB', 'SQS']
                },
                {
                    period: 'Março, 2023 - Julho, 2023',
                    title: 'Aksie - Desenvolvedor Front-end',
                    company: 'Freelance',
                    companyUrl: '#',
                    description:
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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