<template>
    <section class="about d-flex flex-column align-items-center text-center py-5 px-3">
        <div class="avatar-container mb-4 animate-slide-right delay-0">
            <div class="avatar-glow"></div>
            <img src="@/assets/img/Profile/Profile.jpeg" alt="Foto de perfil" class="profile-img" />
        </div>
        <h2 class="hero-title mb-3 animate-slide-left delay-1">{{ $t('about.title') }}</h2>
        
        <div class="animate-slide-left delay-2 w-100 d-flex flex-column align-items-center">
            <p class="description mb-4">{{ $t('about.description') }}</p>
            <div class="cta-actions d-flex flex-wrap justify-content-center gap-3 mt-2">
                <a href="https://wa.me/5527998806513?text=Olá%2C%20gostaria%20de%20falar%20sobre%20seu%20portfolio" target="_blank" rel="noopener" class="btn btn-primary-metallic">
                    <AppIcon icon="mdi:whatsapp" width="18" />
                    <span>{{ $t('about.contact') }}</span>
                </a>
                <a href="https://drive.google.com/file/d/1gx6rV46OdhjJeSVz6cOaIXwvAgfZdtOa/view?usp=sharing" target="_blank" rel="noopener" class="btn btn-frosted">
                    <AppIcon icon="mdi:file-document-outline" width="18" />
                    <span>{{ $t('about.download') }}</span>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AboutComponent',
}
</script>
