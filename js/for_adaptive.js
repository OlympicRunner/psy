(() => {
    function block (clas) {
        let per = document.querySelector('.' + clas)
        per.setAttribute('display', 'none')
        console.log('+')
    }
    console.log('+')
    block('general')
})