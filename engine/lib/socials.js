// Social links configuration per language
const socialConfig = {
    ru: {
        youtube: { channelId: 'UCAYOcwdVam7TCtCjUP2i38w', handle: '@koz_tv_ru' },
        links: [
            { url: 'https://t.me/koztv', title: 'Telegram', icon: 'fab fa-telegram', platform: 'Telegram' },
            { url: 'https://www.instagram.com/mixvlad/', title: 'Instagram', icon: 'fab fa-instagram', platform: 'Instagram' },
            { url: 'https://www.threads.com/@mixvlad', title: 'Threads', icon: 'fas fa-at', platform: 'Threads' }
        ]
    },
    en: {
        youtube: { channelId: 'UCBFYIbjqFFhFZBvE1JmvpEg', handle: '@koz.tv' },
        links: [
            { url: 'https://x.com/mixvlad', title: 'X', icon: 'fab fa-x-twitter', platform: 'X' },
            { url: 'https://www.instagram.com/koz.tv/', title: 'Instagram', icon: 'fab fa-instagram', platform: 'Instagram' },
            { url: 'https://www.threads.com/@koz.tv', title: 'Threads', icon: 'fas fa-at', platform: 'Threads' }
        ]
    }
};

// Helper to generate HTML block with social icons and subscriber counts
function generateSocialIconsHtml(subs, lang = 'en') {
    const config = socialConfig[lang] || socialConfig.en;

    const linksHtml = config.links.map(link => {
        const count = subs[link.platform] ? `<span class='sub-count'>${subs[link.platform]}</span>` : '';
        return `<a href="${link.url}" title="${link.title}"><i class="${link.icon}"></i>${count}</a>`;
    }).join('\n    ');

    return `<script src="https://apis.google.com/js/platform.js"></script>
<div class="social-icons">
    <div class="g-ytsubscribe" data-channelid="${config.youtube.channelId}" data-layout="default" data-count="default"></div>
    ${linksHtml}
  </div>`;
}

export { generateSocialIconsHtml };
