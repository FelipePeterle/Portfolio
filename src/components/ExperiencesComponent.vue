<template>
  <section class="experiences d-flex flex-column text-light py-5 px-3">
    <h2 class="text-center mb-5">{{ $t('experiences.sectionTitle') }}</h2>
    <div v-for="(exp, index) in experiences" :key="index" class="row mb-5" ref="experienceItems">
      <div class="col-12 col-md-4 text-md-end mb-2 mb-md-0"
        :class="{ 'slide-in-left': visible[index], 'invisible': !visible[index] }">
        <span>{{ $t(`experiences.list.${index}.period`) }}</span>
      </div>
      <div class="col-12 col-md-8" :class="{ 'slide-in-right': visible[index], 'invisible': !visible[index] }">
        <h5 class="fw-semibold mb-1">{{ $t(`experiences.list.${index}.title`) }}</h5>
        <a :href="experiences[index].companyUrl" target="_blank" rel="noopener"
          class="company-link text-decoration-none">
          {{ $t(`experiences.list.${index}.company`) }}
        </a>
        <p class="mt-2 mb-2">{{ $t(`experiences.list.${index}.description`) }}</p>
        <div class="d-flex flex-wrap gap-2">
          <span v-for="tag in experiences[index].tech" :key="tag" class="tech-badge">{{ tag }}</span>
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
          companyUrl: 'https://www.cpaps.com.br/',
          tech: ['HTML', 'Css', 'JavaScript', 'VueJs', 'Sass', 'Bootstrap', 'Git', 'GitHub', 'PHP', 'MySql', 'Docker']
        },
        {
          companyUrl: 'https://www.cpaps.com.br/',
          tech: ['HTML', 'Css', 'JavaScript', 'VueJs', 'Sass', 'Bootstrap', 'Git', 'GitHub', 'Docker']
        },
        {
          companyUrl: 'https://www.cpaps.com.br/',
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