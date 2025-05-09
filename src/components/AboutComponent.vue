<template>
    <section class="about d-flex flex-column align-items-center text-center py-4 px-3">
        <img src="@/assets/img/Profile/Profile.jpeg" alt="Foto de perfil" class="profile-img mb-4 animate-slide-right delay-0" />
        <h2 class="mb-3 animate-slide-left delay-1">Desenvolvedor FrontEnd</h2>
        <div class="animate-slide-left delay-2">
            <p class="description mb-4">Desenvolvedor Front-End com 1 ano de experiência, graduando em Engenharia de Computação. Possuo experiência no desenvolvimento de layouts modernos utilizado o HTML,Css,Javascript,TypeScript,Vuejs,Sass,Bootstrap e Tailwind Css. Também tenho conhecimento em tecnologias como Docker,ERP Sankhya, Git e Github para versionamento de código, e MYSql para banco de dados.</p>
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
