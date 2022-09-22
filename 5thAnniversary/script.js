const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () =>{
        remoteActiveClassess()
        panel.classList.add('active')
    })
})

function remoteActiveClassess(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}
