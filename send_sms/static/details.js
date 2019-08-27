$(document).ready(function() {


    $(document).on('click', '#btnSubmit', function(e){
        number = $("#sms_number").val().split(';')
        message = $("#message").val()
        console.log(number)
        console.log(message)
        var url = '/getInfo/'
        $.ajax({
            type : "POST", 
            url : url, 
            data:{
                'value[]': {},
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
            },
            success : function(data) {
                    
              },
        });

    });

    $(document).on('click', '#btnBulkSubmit', function(e){
        numbers = $("#bulk_sms_numbers").val().split(';')
        message = $("#bulk_message").val()
        console.log(numbers)
        console.log(message)
        var url = '/getInfo/'
        $.ajax({
            type : "POST", 
            url : url, 
            data:{
                'value[]': {},
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
            },
            success : function(data) {
                    
              },
        });

    });

});