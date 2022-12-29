const init = () => {

    const html = document.querySelector('html')
    const mobile = document.querySelector('.-mobile-')
    const content = document.querySelector('.-mobile-content-')
    const open = document.querySelector('.-open-mobile-')
    const close = document.querySelector('.-close-mobile-')

    open.addEventListener('click', () => {

        html.style.overflow = 'hidden'
        mobile.classList.add('mobile--open')
        content.classList.add('mobile__content--open')

    })

    close.addEventListener('click', () => {

        html.style.overflow = 'visible'
        mobile.classList.remove('mobile--open')
        content.classList.remove('mobile__content--open')

    })

    document.addEventListener('click', (event) => {

        if (event.target.classList.contains('-mobile-link-')) {

            html.style.overflow = 'visible'
            mobile.classList.remove('mobile--open')
            content.classList.remove('mobile__content--open')

        }

        if (!event.target.closest('.-mobile-content-') && !event.target.closest('.-open-mobile-')) {

            html.style.overflow = 'visible'
            mobile.classList.remove('mobile--open')
            content.classList.remove('mobile__content--open')

        }

    })

}

export default { init }