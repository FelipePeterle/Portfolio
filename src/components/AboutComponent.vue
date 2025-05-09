<template>
    <section class="about d-flex flex-column align-items-center text-center py-4 px-3">
        <img src="@/assets/img/Profile/Profile.jpeg" alt="Foto de perfil" class="profile-img mb-4 animate-slide-right delay-0" />
        <h2 class="mb-3 animate-slide-left delay-1">{{ $t('about.title') }}</h2>
        <div class="animate-slide-left delay-2">
            <p class="description mb-4">{{ $t('about.description') }}</p>
            <div class="btn-group mt-2">
                <a href="https://wa.me/5527998806513?text=Olá%2C%20gostaria%20de%20falar%20sobre%20seu%20portfolio" target="_blank" class="btn btn-orange me-2 pt-3 pb-3">{{ $t('about.contact') }}</a>
                <a href="https://drive.google.com/file/d/1vYDCDk083-3fqU5Tx443tkU5GLzotIID/view?usp=drive_link" target="_blank" class="btn btn-orange-outline pt-3 pb-3">{{ $t('about.download') }}</a>
            </div>
        </div>
    </section>

</template>

<script>
export default {
    name: 'AboutComponent',
}
</script>
