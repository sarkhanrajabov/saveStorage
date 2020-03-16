/**
 * jQuery saveStorage - 23.06.2019
 * Version: 2.0.0
 * Website: https://github.com/sarkhanrajabov/saveStorage
 * Author: Sarkhan Rajabov
**/

(function($){
    $.fn.saveStorage = function(options){
        'use strict';

        if(typeof Storage !== "undefined"){

            var form     = $(this),
                key      = $(this).attr('id')+'_saveStorage',
                defaults = {
                    exclude: []
                };

            var opts = $.extend({}, defaults, options);

            var excludeInputType = function(){
                var inputType = '';

                $.each(opts.exclude, function(k,v){
                    inputType += 'input[type='+v+'],'
                });

                return inputType;
            };

            form.find(':input').bind('change keyup', function () {
                var serializeForm = form.serializeArray();
                localStorage.setItem(key, JSON.stringify(serializeForm));
            });

            var initApp = function(){
                if(localStorage.getItem(key) !== null){

                    var data          = JSON.parse(localStorage.getItem(key)),
                        inputRadio    = form.find('input[type=radio]'),
                        inputCheckbox = form.find('input[type=checkbox]');

                    for(var i = 0; i < data.length; i++){
                        form.find(':input[name='+data[i].name+']')
                            .not(excludeInputType() + 'input[type=radio], input[type=checkbox]').val(data[i].value);

                        for(var j = 0; j < inputRadio.length; j++){
                            if(inputRadio[j].getAttribute('name') === data[i].name && inputRadio[j].getAttribute('value') === data[i].value){
                                inputRadio[j].checked = true;
                            }
                        }

                        for(var k = 0; k < inputCheckbox.length; k++){
                            if(inputCheckbox[k].getAttribute('name') === data[i].name && inputCheckbox[k].getAttribute('value') === data[i].value){
                                inputCheckbox[k].checked = true;
                            }
                        }
                    }
                }
            };

            form.submit(function () {
                localStorage.removeItem(key);
            });

            initApp();
        }
        else {
            console.error('Sorry! No web storage support.')
        }
    };
})(jQuery);
