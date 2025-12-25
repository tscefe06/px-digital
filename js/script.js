      // Dark Mode Toggle
        const btn = document.getElementById('dark-mode-toggle');
        
        btn.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            
            if (document.body.classList.contains('dark-theme')) {
                btn.innerHTML = '<i class="fas fa-sun"></i> Gündüz Modu';
                btn.style.background = '#f4f4f4';
                btn.style.color = '#333';
            } else {
                btn.innerHTML = '<i class="fas fa-moon"></i> Gece Modu';
                btn.style.background = '#333';
                btn.style.color = 'white';
            }
        });

        // Cursor Follower
        const cursorFollower = document.querySelector('.cursor-follower');
        
        document.addEventListener('mousemove', (e) => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        });

        // Form Submit Handler
        function handleSubmit(event) {
            event.preventDefault();
            alert('Mesajınız gönderildi! Teşekkür ederiz.');
            event.target.reset();
            return false;
        }

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });