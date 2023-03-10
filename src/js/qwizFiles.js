

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


})

export default { init }