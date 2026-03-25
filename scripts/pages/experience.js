document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    const accordionItems = document.querySelectorAll('.accordion-item');

    // Initialize all accordion items
    accordionHeaders.forEach(header => {
        const contentId = header.getAttribute('aria-controls');
        const content = document.getElementById(contentId);

        if (content) {
            header.setAttribute('aria-expanded', 'false');
            content.setAttribute('aria-hidden', 'true');
            content.style.maxHeight = '0px';
        }

        /* Open/close accordion items */
        header.addEventListener('click', () => {
            const expanded = header.getAttribute('aria-expanded') === 'true';
            toggleAccordion(header, content, !expanded);
        });
    });


    // Open/close function
    function toggleAccordion(header, content, expand) {
        if (!content) return;

        header.setAttribute('aria-expanded', expand.toString());
        content.setAttribute('aria-hidden', (!expand).toString());

        if (expand) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = '0px';
        }
    }
});
