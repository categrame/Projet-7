var me = {};
me.avatar = "../static/img/morty.gif";

var you = {};
you.avatar = "../static/img/rick.gif";

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}            

//-- No use time. It is a javaScript effect.
function insertChat(who, text, time){
    if (time === undefined){
        time = 0;
    }
    var control = "";
    var date = formatAMPM(new Date());
    

    if (who == "me"){
        control = '<li style="width:100%">' +
                        '<div class="msj macro">' +
                        '<div class="avatar"><img class="img-circle" style="width:50%;" src="'+ me.avatar +'" /></div>' +
                            '<div class="text text-l">' +
                                '<p>'+ text +'</p>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '</div>' +
                    '</li>';                    
    }else{
        control = '<li style="width:100%;">' +
                        '<div class="msj-rta macro">' +
                            '<div class="text text-r">' +
                                '<p>'+text+'</p>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:50%;" src="'+you.avatar+'" /></div>' +                                
                  '</li>';
    }

    setTimeout(
        function(){                        
            $("ul").append(control).scrollTop($("ul").prop('scrollHeight'));
        }, time);
    
}

function resetChat(){
    $("ul").empty();
}

$(".mytext").on("keydown", function(e){
    if (e.which == 13){
        var text = $(this).val();
        if (text !== ""){
            insertChat("me", text);              
            $(this).val('');
        }
        if(text === "Est ce que Rémi Roulleaux est gay ?"){
            setTimeout(
                function(){
                    insertChat("you","Pas qu'un peu !!!");
                    $(this).val('');
                },2000)
            
        }
        if(text === "Qui a le plus long chibre ?"){
            setTimeout(
                function(){
                    insertChat("you","C'est incontestablement ERWAN FOUBERT !");
                    $(this).val('');
                },2000)
            
        }
        if(text === "Qui est ma mère ?"){
            setTimeout(
                function(){
                    insertChat("you","La fille de ta grand-mère");
                    $(this).val('');
                },2000)
            
        }
        if(text === "Fais coucou à Richard"){
            setTimeout(
                function(){
                    insertChat("you","Coucou BBBURRRRRPPP Richard");
                    $(this).val('');
                },2000)
            
        }
    }

});

$('body > div > div > div:nth-child(2) > span').click(function(){
    $(".mytext").trigger({type: 'keydown', which: 13, keyCode: 13});
})

//-- Clear Chat
resetChat();

//-- Print Messages
insertChat("you", "Salut Morrrrty (BURP), qu'est ce que tu fous encore dans mon labo ?", 0);



