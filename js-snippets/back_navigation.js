<script>

    function navigateBack() {
            const referrer = document.referrer;
    const createUrl = "{{ route('user.create') }}";

    // Se veio da página de criação OU se não há referência (casos como acessar via URL diretamente)
    if (referrer.includes(createUrl) || !referrer) {
        window.location.href = "{{ route('user.index') }}"; // Vai para a listagem
            } else {
        history.back(); // Volta normalmente para a página anterior
            }
        }
</script>

// onclick="navigateBack()