document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('banner');
    const closeBannerButton = document.getElementById('close-banner');

    // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const currentDay = new Date().getDay();

    // Show the banner only on Monday (1), Tuesday (2), and Wednesday (3)
    if (currentDay === 1 || currentDay === 2 || currentDay === 3) {
        banner.style.display = 'block';
    }

    // Add event listener to close the banner
    closeBannerButton.addEventListener('click', function() {
        banner.style.display = 'none';
    });
});