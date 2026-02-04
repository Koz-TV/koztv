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

const subscribeText = {
    en: 'Subscribe',
    ru: 'Подписаться'
};

// Helper to generate HTML block with social icons and subscriber counts
function generateSocialIconsHtml(subs, lang = 'en') {
    const config = socialConfig[lang] || socialConfig.en;
    const subText = subscribeText[lang] || subscribeText.en;

    const linksHtml = config.links.map(link => {
        const count = subs[link.platform] ? `<span class='sub-count'>${subs[link.platform]}</span>` : '';
        return `<a href="${link.url}" title="${link.title}" aria-label="${link.title}" target="_blank" rel="noopener"><i class="${link.icon}" aria-hidden="true"></i>${count}</a>`;
    }).join('\n    ');

    // Lightweight YouTube subscribe link instead of heavy Google API widget
    const ytSubscribeUrl = `https://www.youtube.com/channel/${config.youtube.channelId}?sub_confirmation=1`;

    return `<div class="social-icons">
    <a href="${ytSubscribeUrl}" class="yt-subscribe-btn" title="YouTube" aria-label="${subText} YouTube" target="_blank" rel="noopener"><i class="fab fa-youtube" aria-hidden="true"></i> <span>${subText}</span></a>
    ${linksHtml}
  </div>`;
}

export { generateSocialIconsHtml };
