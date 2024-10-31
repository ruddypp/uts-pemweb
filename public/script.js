document.addEventListener('alpine:init', () => {
    Alpine.data('navbar', () => ({
        isOpen: false,
        scrolled: false,
        showNotifications: false,
        hasNotifications: true,
        linkHovered: '',
        notifications: [
            { id: 1, text: 'New message received', time: '5 min ago' },
            { id: 2, text: 'Meeting reminder', time: '1 hour ago' },
            { id: 3, text: 'Update available', time: '2 hours ago' }
        ],
        
        init() {
            this.handleScroll();
            this.closeOnClickOutside();
            this.closeOnScroll();

            // Simulasi notifikasi baru setiap 30 detik
            setInterval(() => {
                this.hasNotifications = true;
            }, 30000);
        },

        toggleMenu() {
            this.isOpen = !this.isOpen;
        },

        toggleNotifications() {
            this.showNotifications = !this.showNotifications;
            this.hasNotifications = false;
        },

        toggleProfile() {
            // Implementasi dropdown profil bisa ditambahkan di sini
        },

        handleScroll() {
            this.scrolled = window.scrollY > 0;
        },

        closeOnClickOutside() {
            document.addEventListener('click', (e) => {
                if (!this.$el.contains(e.target)) {
                    this.isOpen = false;
                }
            });
        },

        closeOnScroll() {
            window.addEventListener('scroll', () => {
                if (this.isOpen) {
                    this.isOpen = false;
                }
            });
        }
    }));
});