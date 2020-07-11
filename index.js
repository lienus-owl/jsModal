const modal = $.modal({
    title: 'Название модалки',
    closable: true,
    content: `
        <h2>Какой то всратый заголовок</h2>
        <p>текст лолотекст кек лол текст</p>
    `,
    width: '400px',
    footerButtons: [
        {text: 'кек кнопка', type: 'primary', handler() {
            console.log('primary key clicked')
        }},
        {text: 'лол еще одна', type: 'danger', handler() {
            console.log('danger key clicked')
                modal.close()
        }},
    ]
})
