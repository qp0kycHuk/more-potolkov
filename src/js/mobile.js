const init = () => {

    const mobile = document.querySelector('.-mobile-')
    const open = document.querySelector('.-open-mobile-')
    const close = document.querySelector('.-close-mobile-')

    open.addEventListener('click', () => {

        mobile.classList.add('mobile--open')

    })

    close.addEventListener('click', () => {

        mobile.classList.remove('mobile--open')

    })

    document.addEventListener('click', (event) => {

        if (event.target.classList.contains('-mobile-link-')) mobile.classList.remove('mobile--open')

        if (!event.target.closest('.-mobile-') && !event.target.closest('.-open-mobile-')) mobile.classList.remove('mobile--open')

    })

}

export default { init }