// Init Icons
        lucide.createIcons();

        // Mobile Menu Elements
        const menuBtn = document.getElementById('menuBtn');
        const sidebar = document.getElementById('sidebar');
        const backdrop = document.getElementById('backdrop');

        function toggleMenu() {
            const isOpen = !sidebar.classList.contains('-translate-x-full');
            
            if (isOpen) {
                // Close
                sidebar.classList.add('-translate-x-full');
                sidebar.classList.remove('translate-x-0');
                backdrop.classList.add('hidden');
            } else {
                // Open
                sidebar.classList.remove('-translate-x-full');
                sidebar.classList.add('translate-x-0');
                backdrop.classList.remove('hidden');
            }
        }

        menuBtn.addEventListener('click', toggleMenu);
        backdrop.addEventListener('click', toggleMenu);

        // Close sidebar on link click (Mobile only)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if(window.innerWidth < 768) {
                    toggleMenu();
                }
            });
        });