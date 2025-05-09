<template>
    <section class="technologies d-flex flex-column align-items-center text-center py-5 px-3">
        <h2 class="mb-4">Tecnologias</h2>
        <div
            :class="isMobile ? 'row justify-content-center g-3 w-100' : 'tech-grid d-flex flex-nowrap justify-content-center overflow-auto gap-3 w-100'">
            <div v-for="tech in techs" :key="tech.name" :class="isMobile ? 'col-4' : ''">
                <a :href="tech.url" target="_blank" rel="noopener"
                    class="tech-icon d-flex justify-content-center align-items-center m-auto text-decoration-none">
                    <div class="icon-inner">
                        <AppIcon :icon="tech.icon" width="36"/>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TechnologiesComponent',
    data() {
        return {
            techs: [
                { name: 'HTML', icon: 'vscode-icons:file-type-html', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
                { name: 'CSS', icon: 'vscode-icons:file-type-css', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
                { name: 'JavaScript', icon: 'logos:javascript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
                { name: 'TypeScript', icon: 'logos:typescript-icon', url: 'https://www.typescriptlang.org/' },
                { name: 'Vue', icon: 'logos:vue', url: 'https://vuejs.org/' },
                { name: 'Sass', icon: 'logos:sass', url: 'https://sass-lang.com/' },
                { name: 'Bootstrap', icon: 'logos:bootstrap', url: 'https://getbootstrap.com/' },
                { name: 'Tailwind', icon: 'logos:tailwindcss-icon', url: 'https://tailwindcss.com/' },
                { name: 'SQL', icon: 'logos:mysql', url: 'https://www.mysql.com/' },
                { name: 'PHP', icon: 'logos:php', url: 'https://www.php.net/' },
                { name: 'Git', icon: 'logos:git-icon', url: 'https://git-scm.com/' },
                { name: 'Docker', icon: 'logos:docker-icon', url: 'https://www.docker.com/' }
            ],
            isMobile: false
        }
    },
    mounted() {
        this.checkMobile()
        window.addEventListener('resize', this.checkMobile)
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkMobile)
    },
    methods: {
        checkMobile() {
            this.isMobile = window.innerWidth < 576
        }
    }
}
</script>