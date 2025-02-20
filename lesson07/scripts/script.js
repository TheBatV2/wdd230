document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img.lazy");

    const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add("loaded");
                observer.unobserve(img);
            }
        });
    };

    const observer = new IntersectionObserver(lazyLoad, { threshold: 0.1 });

    images.forEach(img => {
        observer.observe(img);
    });

    document.getElementById("lastModified").textContent = document.lastModified;
});
