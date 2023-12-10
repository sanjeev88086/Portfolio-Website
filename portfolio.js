<script>
    document.addEventListener('DOMContentLoaded', function () {
    const sidebarCollapse = document.getElementById('sidebarCollapse');
    const sidebar = document.getElementById('sidebar');
    const sections = document.querySelectorAll('section');

    sidebarCollapse.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });

    window.addEventListener('scroll', function () {
        let currentSectionId = '';

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 50; // Adjusted for better visibility
            const sectionBottom = sectionTop + section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSectionId = section.id;
            }
        });

        if (currentSectionId !== '') {
            sidebar.classList.add('sticky');
        } else {
            sidebar.classList.remove('sticky');
        }
    });
});


</script>
