$(document).ready(function () {
    $('#telefone').mask('0000-0000', {
        placeholder: '0000-0000'
    });
    
    $('.telefone-tipo').change(function () {
        const escolha = $(this).val()

        if (escolha == 'fixo') {
            $('#telefone').mask('0000-0000', {
                placeholder: '0000-0000'
            });
        } else if (escolha == 'movel') {
            $('#telefone').mask('(00) 00000-0000', {
                placeholder: '(00) 00000-0000'
            });
        }
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    });

    $('#cep').mask('00000-000', {
        placeholder: '_____-___'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Este campo é obrigatório',
            email: 'Digite um email válido',
            telefone: 'Este campo é obrigatório',
            cpf: 'Este campo é obrigatório',
            endereco: 'Este campo é obrigatório',
            cep: 'Este campo é obrigatório'
        }
    });
});