$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function () {
        $('form').slideUp();
    })

    $('form').on('submit', function (e) {
        e.preventDefault();

        const nomeTarefa = $('#nome-tarefa').val();

        $(`<li>${nomeTarefa}</li>`).appendTo('ol');
        $('li').addClass('tarefa');
        $('#nome-tarefa').val('');
    })

    $('ol').on('click', 'li', function() {
        $(this).addClass('concluido');
    })

    $('ol').on('dblclick', 'li', function () {
        $(this).removeClass('concluido');
    })
})