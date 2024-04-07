// social_links.js

function updateSocialLinks() {
    var links = document.querySelectorAll('.social-links a');

    links.forEach(function(link) {
        var href = link.getAttribute('href');
        // Update the href attribute based on your requirement
        if (href.includes('youtube.com')) {
            link.setAttribute('href', 'youtube.com/@MBKTechStudios');
        } else if (href.includes('facebook.com')) {
            link.setAttribute('href', 'facebook.com/@MBKTechStudios');
        } else if (href.includes('discord.com')) {
            link.setAttribute('href', 'discord.gg/MUAyAeckrM');
        } else if (href.includes('instagram.com')) {
            link.setAttribute('href', 'instagram.com/mbktech.studios');
        }
    });
}
