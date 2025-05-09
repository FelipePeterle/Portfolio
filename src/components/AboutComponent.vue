<template>
    <section class="about d-flex flex-column align-items-center text-center py-4 px-3">
        <img src="@/assets/img/Profile/Profile.jpeg" alt="Foto de perfil" class="profile-img mb-4 animate-slide-right delay-0" />
        <h2 class="mb-3 animate-slide-left delay-1">{{ $t('about.title') }}</h2>
        <div class="animate-slide-left delay-2">
            <p class="description mb-4">{{ $t('about.description') }}</p>
            <div class="btn-group mt-2">
                <a href="#contato" class="btn btn-orange me-2 pt-3 pb-3">{{ $t('about.contact') }}</a>
                <a href="/cv/MeuCV.pdf" download class="btn btn-orange-outline pt-3 pb-3">{{ $t('about.download') }}</a>
            </div>
        </div>
    </section>

</template>

<script>
export default {
    name: 'AboutComponent'
}
</script>
