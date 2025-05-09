<template>
    <footer class="footer">
        <div class="container-footer d-flex justify-content-between align-items-center px-4 py-3 text-muted">
            <span>© 2024 <span class="fw-medium text-gradient">{{ name }}</span>.</span>
            <div class="d-flex align-items-center gap-3">
                <a href="https://br.linkedin.com/in/felipe-peterle" target="_blank" rel="noopener" class="footer-icon">
                    <AppIcon icon="mdi:linkedin" width="20" />
                </a>
                <a href="https://github.com/FelipePeterle" target="_blank" rel="noopener" class="footer-icon">
                    <AppIcon icon="mdi:github" width="20" />
                </a>
            </div>
        </div>
    </footer>
</template>


<script>
export default {
    name: 'FooterComponent',
    data(){
        return{
            name:'Felipe Peterle'
        }
    }
}
</script>
