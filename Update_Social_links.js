// social_links.js

function updateSocialLinks() {
    var links = document.querySelectorAll('.social-links a');

    links.forEach(function(link) {
        var href = link.getAttribute('href');
        // Update the href attribute based on your requirement
        if (href.includes('gmail.com')) {
            link.setAttribute('href', 'https://gmail.com');
        } else if (href.includes('youtube.com')) {
            link.setAttribute('href', 'https://youtube.com/@MBKTechStudios');
        } else if (href.includes('github.com')) {
            link.setAttribute('href', 'https://github.com/Muhammad-Ibn-E-Khalid');
        } else if (href.includes('facebook.com')) {
            link.setAttribute('href', 'https://facebook.com/@MBKTechStudios');
        } else if (href.includes('discord.com')) {
            link.setAttribute('href', 'https://discord.gg/MUAyAeckrM');
        } else if (href.includes('instagram.com')) {
            link.setAttribute('href', 'https://instagram.com/mbktech.studios');
        }
    });
}
