/**
 * jQuery saveStorage - 23.06.2019
 * Version: 1.0.0
 * Website: https://sarkhanrajabov.com/
 * Author: Sarkhan Rajabov
**/

(function($){
    $.fn.saveStorage = function(options){
        'use strict';

        if(typeof Storage !== "undefined"){
            var form = $(this),
                key = $(this).attr('id')+'_saveStorage',
                nonSavingInp = '';

            if(options){
                $.each(options.nonSavingInputs, function(k,v){
                    nonSavingInp += 'input[type='+v+'],'
                })
            }

            form.find('input,select,textarea').bind('change keyup', function () {
                var serializeForm = form.serializeArray();
                localStorage.setItem(key, JSON.stringify(serializeForm));
            });

            var data = JSON.parse(localStorage.getItem(key));

            $(data).each(function(k,v){
                form.find(':input[name='+v.name+']').not(nonSavingInp+'input[type=radio], input[type=checkbox]').val(v.value);

                $(form.find('input[type=radio]')).each(function () {
                    if($(this).attr('name') === v.name && $(this).attr('value') === v.value){
                        $(this).prop('checked', true)
                    }
                });
                $(form.find('input[type=checkbox]')).each(function () {
                    if($(this).attr('name') === v.name && $(this).attr('value') === v.value){
                        $(this).prop('checked', true)
                    }
                });
            });

            form.submit(function () {
                localStorage.removeItem(key);
            })
        }
        else {
            console.error('Sorry! No web storage support.')
        }
    };
})(jQuery);
