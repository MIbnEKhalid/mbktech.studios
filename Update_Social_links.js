// social_links.js

function updateSocialLinks() {
    var links = document.querySelectorAll('.social-links a');

    links.forEach(function(link) {
        var href = link.getAttribute('href');
        // Update the href attribute based on your requirement
        if (href.includes('youtube.com')) {
            link.setAttribute('href', 'NEW_YOUTUBE_LINK');
        } else if (href.includes('facebook.com')) {
            link.setAttribute('href', 'NEW_FACEBOOK_LINK');
        } else if (href.includes('discord.com')) {
            link.setAttribute('href', 'NEW_DISCORD_LINK');
        } else if (href.includes('instagram.com')) {
            link.setAttribute('href', 'NEW_INSTAGRAM_LINK');
        }
    });
}
