(function () {
    function setYear() {
        var el = document.getElementById('copyright-year');
        if (el && typeof Date !== 'undefined') {
            try {
                el.textContent = String(new Date().getFullYear());
            } catch (e) { /* keep default text for B2C validators */ }
        }
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setYear);
    } else {
        setYear();
    }
})();