const modal = $.modal({
    title: 'Название модалки',
    closable: true,
    content: `
        <h2>Какой то заголовок</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate exercitationem illum mollitia natus non provident repellendus repudiandae veniam veritatis! Autem culpa distinctio dolorum ea enim ipsum obcaecati quidem, rerum saepe.</p>
    `,
    width: '400px',
    footerButtons: [
        {text: 'ебать кнопка', type: 'primary', handler() {
            console.log('primary key clicked')
        }},
        {text: 'лол еще одна', type: 'danger', handler() {
            console.log('danger key clicked')
                modal.close()
        }},
    ]
})
