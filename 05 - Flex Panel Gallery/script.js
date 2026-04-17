const panels = document.querySelector('.panels');

function open(element) {
    console.log('open');
    element.classList.add("open", "open-active");
    setTimeout(() => {
        element.classList.remove("open-active");
    },
        750);
}

function close(element) {
    console.log('close');
    element.classList.remove("open");
}

panels.addEventListener('click', function(e) {
    if (e.target.closest('.panel') && !(e.target.matches(".panel > p:nth-child(1)"))){
        open(e.target.closest('.panel'));
    }
});

panels.addEventListener('mouseout', function(e) {
    if (e.target.closest('.panel')){
        close(e.target.closest('.panel'));
    }
});