// Boostrap step wizard
$(document).ready(function () {

    var navListItems = $('div.setup-panel div a'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-primary').trigger('click');
});

// Excluir um item
(function($) {

  RemoveTableRow = function(handler) {
    var tr = $(handler).closest('tr');

    tr.fadeOut(400, function(){ 
      tr.remove(); 
    }); 

    return false;
  };
})(jQuery);


// Exibir apenas dígitos numéricos no campo quantidade no carrinho
(function(){ 
var inputs = document.querySelectorAll("#carrinho input");
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function(event) {
        var naoNumericos = /\D/g; 
        if (naoNumericos.test(this.value)) {
            this.value = this.value.replace(naoNumericos, "");
        }

    });
}
}) (); 

// Mascara dos forms
jQuery(function($){
   $("#cep").mask("99999-999");
   $("#cep2").mask("99999-999"); 
   $("#cep3").mask("99999-999"); 
   $("#tel").mask("(99) 9999-9999");
   $("#cel").mask("(99) 99999-9999");
   $("#cpf").mask("999.999.999-99");
   $("#val-mes").mask("99");
   $("#val-ano").mask("9999"); 
   $("#cv").mask("999");
   $("#num-cartao").mask("9999 9999 9999 9999");          
});