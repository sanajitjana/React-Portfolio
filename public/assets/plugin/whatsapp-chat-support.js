    
/* ======================================================= 
 *
 *      Whatsapp Chat Support
 *      Version: 1.2
 *      By castlecode
 *
 *      Contact: http://codecanyon.net/user/castlecode
 *      Created: December 10, 2018
 *
 *      Copyright (c) 2018, castlecode. All rights reserved.
 *      Available only in http://codecanyon.net/
 *      
 *      ---------------------------------
 *      CONTENTS
 *      ---------------------------------
 *
 *      [A] WHATSAPP CHAT SUPPORT CLASS
 *      [B] DEFAULTS
 *      [C] INIT
 *          [1] SETUP
 *          [2] ON CLICK
 *          [3] OPEN / CLOSE
 *          [4] GO TO WHATSAPP
 *          [5] CHECK AVAILABILITY
 *      [D] WHATSAPP CHAT SUPPORT PLUGIN
 *      
 * ======================================================= */

(function( window, $, undefined ){

/* ====================================================================== *
        [A] WHATSAPP CHAT SUPPORT CLASS
 * ====================================================================== */    

    var WhatsappChatSupport = function(container, options){
        this.init(container, options);
    }

/* ====================================================================== *
        [B] DEFAULTS
 * ====================================================================== */    
    
    WhatsappChatSupport.DEFAULTS = {

        // Options

        popupFx                     :   '1', // The popup effect from 0 till 14
        now                         :   '', // When empty it will use the date and time from the user browser if not you can assign it with PHP maybe (which will be the date of the server) format: YYYY-MM-DD HH:mm:ss (2019-12-30 18:30:00) 
        timezone                    :   'America/Chicago', // When using the date and time from the user browser you can transform it to your current timezone (in case your user is in a different timezone)
        notAvailableMsg             :   'I am not available today', // message when its not an available day or once the available hours have passed
        almostAvailableMsg          :   'I will be available soon', // if today is an available day and before the time starts
        dialogNotAvailableMsg       :   'I am not available today', // message when its not an available day or once the available hours have passed
        dialogAlmostAvailableMsg    :   'I will be available soon', // if today is an available day and before the time starts
        defaultMsg                  :   'Hi, I have some questions about this page: {{url}}!', // default support msg     
        debug                       :   false, // some messages for debug purposes

        // Events

        onPopupOpen          : function(){},
        onPopupClose         : function(){},
        whenGoingToWhatsApp  : function(number, text){},   

    };    

/* ====================================================================== *
        [C] INIT
 * ====================================================================== */    

    WhatsappChatSupport.prototype.init = function(container, options){   
        
    /* ====================================================================== *
            [1] SETUP
     * ====================================================================== */

        /* SETTINGS */
        
        var settings                    = $.extend(true, {}, WhatsappChatSupport.DEFAULTS, options);

        settings.defaultMsg             = settings.defaultMsg.split('{{url}}').join(window.location.href);
        settings.defaultMsg             = settings.defaultMsg.split('[url]').join(window.location.href);

        /* VARS */
        
        var $container                  = $(container); 
        var $button                     = $container.find('.wcs_button');
        var $label                      = $container.find('.wcs_button_label');
        var $popup                      = $container.find('.wcs_popup');

        var popup_input                 = $container.find('.wcs_popup_input');
        var popup_persons               = $container.find('.wcs_popup_person_container');

        /* INIT */

        $container.addClass('wcs-effect-'+settings.popupFx);

        var debug                       = $('<div class="wcs_debug"></div>')

        if(settings.debug){
            $('body').append(debug);
        }

    /* ====================================================================== *
            [2] ON CLICK
     * ====================================================================== */    

        /* OPEN POPUP */

        $button.on('click', function(){

            if($popup[0] != undefined){
                if($container.hasClass('wcs-show')){
                    close_popup();
                }else{
                    open_popup()
                }
            }

        })

        $label.on('click', function(){

            if($popup[0] != undefined){
                if($container.hasClass('wcs-show')){
                    close_popup();
                }else{
                    open_popup()
                }
            }

        })

        /* CLOSE POPUP */

        $popup.find('.wcs_popup_close').on('click', function(){
            close_popup();
        });

        /* BUTTON CLICK WITHOUT POPUP */

        $button.on('click', function(){
            var $this = $(this)

            if($this.attr('data-number') != undefined && !$this.hasClass('wcs_button_person_offline')){
                go_to_whatsapp($this.attr('data-number'), settings.defaultMsg);
            }
        })

        /* POPUP CHAT (SINGLE PERSON) */

        popup_input.on('click', '.fa', function(){
            var $this           = $(this);

            go_to_whatsapp(popup_input.attr('data-number'), popup_input.find('input[type="text"]').val());
        });     

        popup_input.find('input[type="text"]').keypress(function (e) {
            if (e.which == 13) {
                var $this           = $(this);
            
                go_to_whatsapp(popup_input.attr('data-number'), popup_input.find('input[type="text"]').val());
            }
        }); 

        /* CLICK ON A REPRESENTATIVE (MULTIPLE-PERSON) */

        popup_persons.on('click', '.wcs_popup_person', function(){
            var $this = $(this);
            if(!$this.hasClass('wcs_popup_person_offline')){

                var defaultMsg = settings.defaultMsg;
                if($this.attr('data-default-msg') !== undefined){
                    defaultMsg = $this.attr('data-default-msg').split('{{url}}').join(window.location.href);
                }
                go_to_whatsapp($this.attr('data-number'), defaultMsg);

            }
        })

    /* ====================================================================== *
            [3] OPEN / CLOSE
     * ====================================================================== */    
     
        function open_popup(){
            settings.onPopupOpen();
            close_all_popup();
            $label.addClass('wcs_button_label_hide');

            $container.addClass('wcs-show');
            setTimeout(function(){
                $popup.find('input').val(settings.defaultMsg).focus();
            }, 50);
        }

        function close_popup(){
            settings.onPopupClose();
            $label.removeClass('wcs_button_label_hide');

            $container.removeClass('wcs-show');
            $container.find('.wcs_popup_input').find('input[type="text"]').val('');
        }

        function close_all_popup(){
            var all_containers = $('.whatsapp_chat_support');

            all_containers.each(function(){
                var $this = $(this);

                $this.removeClass('wcs-show');
                $this.find('.wcs_popup_input').find('input[type="text"]').val('');
            });
        }

    /* ====================================================================== *
            [4] GO TO WHATSAPP
     * ====================================================================== */     

        function go_to_whatsapp(number, text){
            settings.whenGoingToWhatsApp(number, text);

            close_popup();
            var WhatsAppUrl = 'https://web.whatsapp.com/send';

            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                WhatsAppUrl = 'https://api.whatsapp.com/send'; 
            }

            var url         = WhatsAppUrl+'?phone='+number+'&text='+text;
            console.log(url);
            var win         = window.open(url, '_blank');
            win.focus();
        }

    /* ====================================================================== *
            [5] CHECK AVAILABILITY
     * ====================================================================== */         

        var now         = moment();

        debug.append("<div><strong>Original Date</strong> "+now.format('YYYY-MM-DD HH:mm:ss')+" <br><strong>UTC Offsset</strong> "+(now.utcOffset()/60)+"</div>");

        if(settings.timezone != '' && settings.now == ''){ // set timezone
            now.tz(settings.timezone);

            debug.append("<div><strong>Setting Timezone</strong> "+now.format('YYYY-MM-DD HH:mm:ss')+" <br><strong>UTC Offsset</strong> "+(now.utcOffset()/60)+"</div>");
        }

        if(settings.now != ''){
            now         = moment(settings.now, 'YYYY-MM-DD HH:mm:ss');

            debug.append("<div><strong>Setting Manual Date</strong> "+now.format('YYYY-MM-DD HH:mm:ss')+" <br><strong>UTC Offsset</strong> "+(now.utcOffset()/60)+"</div>");
        }

        /* BUTTON ONLY */

        if($button.attr('data-availability') != undefined){
            var available           = is_available($.parseJSON($button.attr('data-availability')));

            if(available.is_available){
                // all good!
            }else{
                $button.addClass('wcs_button_person_offline');
                $button.find('.wcs_button_person_status').html(available.almost_available ? settings.almostAvailableMsg : settings.notAvailableMsg);
            }
        }

        /* SINGLE PERSON */

        if(popup_input.attr('data-availability') != undefined){
            var available           = is_available($.parseJSON(popup_input.attr('data-availability')));

            if(available.is_available){
                // all good!
            }else{
                popup_input.addClass('wcs_popup_input_offline');
                popup_input.html(available.almost_available ? settings.dialogAlmostAvailableMsg : settings.dialogNotAvailableMsg);
            }
        }

        /* MULTIPLE PERSON */

        popup_persons.find('.wcs_popup_person').each(function(){
            var $this = $(this);

            if($this.attr('data-availability') != undefined){
                var available           = is_available($.parseJSON($this.attr('data-availability')));

                if(available.is_available){
                    // all good!
                }else{
                    $this.addClass('wcs_popup_person_offline');
                    $this.find('.wcs_popup_person_status').html(available.almost_available ? settings.dialogAlmostAvailableMsg : settings.dialogNotAvailableMsg);
                }

            }
        });

        /* CHECK AVAILABILITY */

        function is_available(available){
            var is_available        = false;
            var almost_available    = false;

            for(var key in available) {
                if(available.hasOwnProperty(key)){
                    if(get_day_of_week(key) == now.day()){
                        var start   = moment($.trim(available[key].split('-')[0]), 'HH:mm'); // available[key] is in this format: 8:00-18:33
                        var end     = moment($.trim(available[key].split('-')[1]), 'HH:mm'); // available[key] is in this format: 8:00-18:33

                        if (now.isAfter(start) && now.isBefore(end)) {
                            is_available        = true;
                        }else if(now.isBefore(start)){
                            almost_available    = true;
                        }

                    }
                }
            }

            return {'is_available' : is_available, 'almost_available' : almost_available};
        }

        function get_day_of_week(name){
            name = name.toLowerCase();

            if(name == 'sunday'){
                return 0;
            }else if(name == 'monday'){
                return 1;
            }else if(name == 'tuesday'){
                return 2;
            }else if(name == 'wednesday'){
                return 3;
            }else if(name == 'thursday'){
                return 4;
            }else if(name == 'friday'){
                return 5;
            }else if(name == 'saturday'){
                return 6;
            }
        }
        
    };//END OF INIT   

/* ====================================================================== *
        [D] WHATSAPP CHAT SUPPORT PLUGIN
 * ====================================================================== */

    $.fn.whatsappChatSupport = function(options, content, callback) {

        return this.each(function(key, value){
            var $this   = $(this);
            var data    = $this.data('whatsappChatSupport')
            
            // Initialize plugin
            if (!data && typeof options != 'string'){
                $this.data('whatsappChatSupport', new WhatsappChatSupport(this, options));
            }

            // Call method
            if (data && typeof options == 'string'){
                data[options](content, callback);    
            }
        });

    };      
    
})( window, jQuery );