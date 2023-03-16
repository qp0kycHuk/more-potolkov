

let items = []

function changeHandler(event) {
    if (event.target.closest('.quiz-form-files')) {
        Array.from(event.target.files).forEach((file) => {
            items.push({
                id: crypto.randomUUID(),
                file
            })
        })

        render(event.target.closest('.quiz-form-files'))
    }
}

function render(cover) {
    const block = cover.querySelector('.quiz-form-files-list') || document.createElement('div')
    block.classList.add('quiz-form-files-list')
    block.innerHTML = ''
    items.forEach((item) => {
        const $item = document.createElement('div')
        $item.innerHTML = `
        <img src="img/paperclip.png" alt="" class="mr-2">
        <div class="text-body-2 text--underline clipped-text">${item.file.name}</div>
        `
        const $close = document.createElement('button')
        $close.classList.add('ml-2')
        $close.innerHTML = '<img src="img/cross.png" alt="" >'
        $close.addEventListener('click', () => {
            items = items.filter(({ id }) => id !== item.id)
            render(cover)
        })

        $item.classList.add('quiz-form-files-item')
        $item.appendChild($close)
        block.appendChild($item)
    })

    cover.insertAdjacentElement('beforeend', block)

}

function init() {
    document.addEventListener('change', changeHandler)
}

document.addEventListener('submit', (event) => {
    if (!event.target.classList.contains('quiz')) return
    event.preventDefault()

    const formData = new FormData(event.target)
    items.forEach((item) => {
        formData.append('file', item.file)
    })

    const btn = event.target.querySelector('[type="submit"]')
    const btnHtml = btn.innerHTML

    btn.disabled = true
    btn.style.width = btn.clientWidth + 'px'
    btn.innerHTML = '<div class="text-small progress progress-circle fade-80"></div>'

    fetch('/submitHandler.php', {
        method: 'post',
        body: formData
    })
        .then((response) => response.text())
        .then((result) => {
            btn.disabled = false
            btn.innerHTML = btnHtml
            btn.style.width = ''

            const customEvent = new CustomEvent('successsubmit', {
                bubbles: true,
                cancelable: true,
            });

            event.target.dispatchEvent(customEvent);

            window.Fancybox.close()
            window.Fancybox.modal.open('/dialog-success.php', { type: 'ajax' })
            event.target.reset()


            // ym(80446801, 'reachGoal', 'zayavka'); return true;
        })

})

export default { init }