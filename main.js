$(document).ready(function(){
    
    $('#btnComecar').click(function(){
        $('#areaLista').slideDown();
        
    })

    $('#btnCancelar').click(function(){
        $('#areaLista').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const tarefa = $('#nomeTarefa').val();
        const data = $('#dataLimite').val();

        const newItem = $('<li></li>')
        $(`<p>${tarefa}</p>`).appendTo(newItem);
        $(`<p>${data}</p>`).appendTo(newItem);

        newItem.appendTo('#lista')
    })

    $('#lista').on('click', 'li', function() {
        
        $('li').toggleClass('riscado');
    })
})