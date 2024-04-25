/* jQuery + AJAX + JS */
$('#btnEnviar').click((e) => {
    e.preventDefault();

    //Criar um objeto com os dados do formulário
    let dataForm = {
        setName: $('#nome').val(),
        setEmail: $('#email').val(),
        setPhone: $('#telefone').val(),
        setWhats: $('#whatsapp').val()
    }
    // Validar os campos do Formulário
    if(dataForm.setName.length < 2){
        $('.msg-error').text("Nome inválido!").show();
        return false;
    }else if(dataForm.setEmail.length < 7){
        $('.msg-error').text("Email inválido").show();
        return false;
    }else if(dataForm.setPhone.length < 11){
        $('.msg-error').text("Telefone inválido").show();
        return false;
    }else if(dataForm.setWhats.length < 11){
        $('.msg-error').text("WhatsApp inválido!").show();
        return false;
    }

    $('msg-error').hide();

    // Construção do AJAX
    let urlAction = "envia.html";

    $.ajax({
        url: urlAction,
        type: 'POST',
        data: dataForm,
        dataType: 'json',
        async: true
    })

    console(dataForm)

});