<template>
  <section class="experiences py-5 px-3">
    <h2 class="text-center mb-5">{{ $t('experiences.sectionTitle') }}</h2>
    <div class="timeline-wrapper">
      <div
        v-for="(exp, index) in experiences"
        :key="index"
        class="timeline-item"
        :class="{ 'is-visible': visible[index] }"
        ref="experienceItems"
      >
        <div class="timeline-marker">
          <div class="marker-dot"></div>
          <div v-if="index < experiences.length - 1" class="marker-line"></div>
        </div>

        <div class="timeline-content">
          <div class="experience-card">
            <div class="d-flex flex-wrap justify-content-between align-items-baseline gap-2 mb-2">
              <h5 class="role-title m-0">{{ $t(`experiences.list.${index}.title`) }}</h5>
              <span class="period-badge">{{ $t(`experiences.list.${index}.period`) }}</span>
            </div>
            
            <a :href="experiences[index].companyUrl" target="_blank" rel="noopener" class="company-link">
              <AppIcon icon="mdi:domain" width="16" class="me-1" />
              <span>{{ $t(`experiences.list.${index}.company`) }}</span>
            </a>
            
            <p class="role-description mt-3 mb-3">{{ $t(`experiences.list.${index}.description`) }}</p>
            
            <div v-if="experiences[index].tech && experiences[index].tech.length" class="d-flex flex-wrap gap-2 pt-1">
              <span v-for="tag in experiences[index].tech" :key="tag" class="tech-badge">{{ tag }}</span>
            </div>
          </div>
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
          tech: ['PHP', 'Lumen', 'TypeScript', 'Vue.js', 'MySQL', 'Docker', 'Git', 'Scrum']
        },
        {
          companyUrl: 'https://www.cpaps.com.br/',
          tech: ['Vue.js', 'CSS', 'JavaScript', 'HTML5', 'Git', 'APIs']
        },
        {
          companyUrl: 'https://www.cpaps.com.br/',
          tech: ['Suporte Técnico', 'Hardware', 'Redes', 'Infraestrutura']
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