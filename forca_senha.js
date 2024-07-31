$(function(){
    $('#senha').bind('keyup',function(){
        var txt   = $(this).val();
        var forca = 0;

        if(txt.leght > 8){
            forca += 20;
        }
        var regex = new RegExp(/[a-z]/i);
        if (regex.test(txt)) {
            forca +=20
        }
        var regex = new RegExp(/[0-9]/i);
        if (regex.test(txt)) {
            forca +=20
        }
        var regex = new RegExp(/[^a-z0-9]/i);
        if (regex.test(txt)) {
            forca +=20
        }

        if (forca >= 80) {
            var apropriada = 'Senha dentro dos padrões de segurança'
        }else{
            var apropriada = 'ops...Senha fraca demais'
        }

        $('#forca-senha').html('forca:'+forca+' texto: '+txt+'Nível de segurança:'+apropriada);

    });
});