$(document).ready(function() {


    $(document).on('click', '#btnSubmit', function(e){
        number = '91'+$("#sms_number").val().split(';')
        message = $("#message").val()
        console.log(number)
        console.log(message)
        var url = '/gateway/publish/send/mType/1/contactNum/'+number
        $.ajax({
            type : "POST", 
            url : url, 
            data:{
                'value[]': {
                    'messageId': 1,
                    'messageType':1,
                    'message': message,
                    'contactNumber': number,
                    },
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
            },
            success : function(data) {
                    
              },
        });

    });

    $(document).on('click', '#btnBulkSubmit', function(e){
        numbers = '91'+$("#bulk_sms_numbers").val().split(';')
        message = $("#bulk_message").val()
        console.log(numbers)
        console.log(message)
        var url = '/gateway/publish/send/mType/1/contactNum/'+number
        $.ajax({
            type : "POST", 
            url : url, 
            data:{
                'value[]': {
                    'messageId': 1,
                    'messageType':1,
                    'message': message,
                    'contactNumber': number,
                    },
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
            },
            success : function(data) {
                    
              },
        });

    });

});