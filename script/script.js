document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-gtm-category]');
    if (!el) return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'click_link',
        gtm_category: el.dataset.gtmCategory,
        gtm_action: el.dataset.gtmAction,
        gtm_label: el.dataset.gtmLabel,
        link_url: el.href || null
    });
});
