<template>
    <section class="about d-flex flex-column align-items-center text-center py-4 px-3">
        <img src="@/assets/img/perfil.jpeg" alt="Foto de perfil" class="profile-img mb-4 animate-slide-right delay-0" />
        <h2 class="mb-3 animate-slide-left delay-1">Desenvolvedor de Software</h2>
        <div class="animate-slide-left delay-2">
            <p class="description mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div class="btn-group mt-2">
                <a href="#contato" class="btn btn-orange me-2 pt-3 pb-3">Entre em contato</a>
                <a href="/cv/MeuCV.pdf" download class="btn btn-orange-outline pt-3 pb-3">Download CV</a>
            </div>
        </div>
    </section>

</template>

<script>
export default {
    name: 'AboutComponent'
}
</script>
