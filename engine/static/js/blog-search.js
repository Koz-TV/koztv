(function () {
    const container = document.querySelector('.blog-search');
    if (!container) return;

    const input = container.querySelector('#blog-search-input');
    const toggle = container.querySelector('.blog-search-toggle');
    const emptyEl = document.querySelector('.blog-search-empty');
    const items = Array.from(document.querySelectorAll('#blog li[data-slug]'));
    const groups = Array.from(document.querySelectorAll('#blog .blog-group'));
    const lang = container.dataset.lang || document.documentElement.lang || 'en';

    let postsText = null;
    let indexLoading = null;

    function loadIndex() {
        if (postsText || indexLoading) return indexLoading;
        const base = window.location.pathname.startsWith('/' + lang + '/') ? '../' : '';
        const url = base + 'static/data/posts-search-' + lang + '.json';
        indexLoading = fetch(url)
            .then(r => r.ok ? r.json() : {})
            .then(json => { postsText = json; })
            .catch(() => { postsText = {}; });
        return indexLoading;
    }

    function apply() {
        const q = (input.value || '').trim().toLowerCase();

        if (!q) {
            items.forEach(li => { li.hidden = false; });
            groups.forEach(g => { g.hidden = false; });
            if (emptyEl) emptyEl.hidden = true;
            return;
        }

        let anyVisible = false;
        items.forEach(li => {
            const title = li.dataset.title || '';
            const body = postsText ? (postsText[li.dataset.slug] || '') : '';
            const visible = title.includes(q) || body.includes(q);
            li.hidden = !visible;
            if (visible) anyVisible = true;
        });

        groups.forEach(g => {
            const visibleLi = g.querySelectorAll('li[data-slug]:not([hidden])').length;
            g.hidden = visibleLi === 0;
        });

        if (emptyEl) emptyEl.hidden = anyVisible;
    }

    function open() {
        container.classList.add('is-open');
        toggle.setAttribute('aria-expanded', 'true');
        input.tabIndex = 0;
        loadIndex();
        requestAnimationFrame(() => input.focus());
    }

    function close() {
        input.value = '';
        apply();
        container.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        input.tabIndex = -1;
    }

    toggle.addEventListener('click', () => {
        if (container.classList.contains('is-open')) close();
        else open();
    });

    let typingTimer;
    input.addEventListener('input', () => {
        clearTimeout(typingTimer);
        if ((input.value || '').trim() && !postsText) {
            loadIndex().then(() => apply());
        }
        typingTimer = setTimeout(apply, 80);
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') close();
    });
})();
