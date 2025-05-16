const slides = document.querySelectorAll('.carousel-slide');
        const indicators = document.querySelectorAll('.carousel-indicator');
        let currentSlide = 0;
        let interval;  // Store the interval id

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            indicators.forEach(indicator => indicator.classList.remove('active'));

            slides[index].classList.add('active');
            indicators[index].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function startCarousel() {
          interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
        }

        function stopCarousel() {
          clearInterval(interval);
        }


        indicators.forEach(indicator => {
            indicator.addEventListener('click', () => {
                const slideIndex = parseInt(indicator.dataset.slide) - 1;
                currentSlide = slideIndex;
                showSlide(currentSlide);
                stopCarousel(); // Stop existing interval when user interacts
                startCarousel(); // Restart the carousel
            });
        });
        //Initial slide show
        showSlide(currentSlide);
        startCarousel();