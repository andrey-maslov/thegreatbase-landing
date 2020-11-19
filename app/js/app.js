document.addEventListener("DOMContentLoaded", function () {

    const langToggle = document.getElementById('langToggle')
    const navToggle = document.getElementById('navToggle')

    openPopup(langToggle)
    openPopup(navToggle)

    function openPopup(toggleElement) {

        const wrapper = toggleElement.parentElement

        toggleElement.addEventListener("click", function (e) {
            e.stopPropagation()
            wrapper.classList.toggle('opened')
        })

        document.body.addEventListener("click", function (e) {
            if (wrapper.classList.contains('opened') && e.target !== toggleElement) {
                wrapper.classList.remove('opened')
            }
        })
    }

});
