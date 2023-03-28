"use strict";
var txt ;
var C_ID=0;












$.chatCtrl = function (element, chat) {
  var chat = $.extend({
    position: 'chat-right',
    text: '',
    time: moment(new Date().toISOString()).format('hh:mm:ss'),
    picture: '',
    type: 'text', // or typing
    timeout: 0,
    onShow: function () { }
  }, chat);

  var target = $(element),
    element = '<div class="chat-item ' + chat.position + '" style="display:none">' +
      '<img src="' + chat.picture + '">' +
      '<div class="chat-details">' +
      '<div class="chat-text"><h6>' + chat.text + '</h6></div>' + 
      '<div class="chat-time">' + chat.time + '</div>' +
      '</div>' +
      '</div>',
    typing_element = '<div class="chat-item chat-left chat-typing" style="display:none">' +
      '<img src="' + chat.picture + '">' +
      '<div class="chat-details">' +
      '<div class="chat-text"></div>' +
      '</div>' +
      '</div>';

  var append_element = element;
  if (chat.type == 'typing') {
    append_element = typing_element;
  }

  if (chat.timeout > 0) {
    setTimeout(function () {
      target.find('.chat-content').append($(append_element).fadeIn());
    }, chat.timeout);
  } else {
    target.find('.chat-content').append($(append_element).fadeIn());
  }

  var target_height = 0;
  target.find('.chat-content .chat-item').each(function () {
    target_height += $(this).outerHeight();
  });
  setTimeout(function () {
    target.find('.chat-content').scrollTop(target_height, -1);
  }, 100);
  chat.onShow.call(this, append_element);
}



$.chatCtrlAI = function (element, chat) {
  var chat = $.extend({
    position: 'chat-right',
    text: '',
    time: moment(new Date().toISOString()).format('hh:mm:ss'),
    picture: '',
    type: 'text', // or typing
    timeout: 0,
    onShow: function () { }
  }, chat);

  var target = $(element),
    element = '<div class="chat-item ' + chat.position + '" style="display:none">' +
      '<img src="' + chat.picture + '">' +
      '<div class="chat-details">' +
      '<div class="chat-text" ><h6 id="chat_'+C_ID+'">' + chat.text + '</h6></div>' + 
      '<div class="chat-time">' + chat.time + '</div>' +
      '</div>' +
      '</div>',
    typing_element = '<div class="chat-item chat-left chat-typing" style="display:none">' +
      '<img src="' + chat.picture + '">' +
      '<div class="chat-details">' +
      '<div class="chat-text"></div>' +
      '</div>' +
      '</div>';

  var append_element = element;
  if (chat.type == 'typing') {
    append_element = typing_element;
  }

  if (chat.timeout > 0) {
    setTimeout(function () {
      target.find('.chat-content').append($(append_element).fadeIn());
    }, chat.timeout);
  } else {
    target.find('.chat-content').append($(append_element).fadeIn());
  }

  var target_height = 0;
  target.find('.chat-content .chat-item').each(function () {
    target_height += $(this).outerHeight();
  });
  setTimeout(function () {
    target.find('.chat-content').scrollTop(target_height, -1);
  }, 100);
  chat.onShow.call(this, append_element);
  var ChID= 'chat_'+C_ID;
  typeWriter(ChID,target);
  C_ID++;
}











if ($("#chat-scroll").length) {
  $("#chat-scroll").css({
    height: 450
  }).niceScroll();
}

if ($(".chat-content").length) {
  $(".chat-content").niceScroll({
    cursoropacitymin: .3,
    cursoropacitymax: .8,
  });
  $('.chat-content').getNiceScroll(0).doScrollTop($('.chat-content').height());
  
}
var chats = [
  {
    text: "Hi there! I'm Fairy, an AI writing assistant that helps you create original and plagiarism-free content. I'm here to help you write high-quality blog posts, essays, emails, poems, and more. My goal is to provide you with the perfect content that meets all of your needs and expectations. I'm always up-to-date with the latest trends and technologies in the writing space, so you can trust me to produce top-notch work. Thanks for allowing me to serve you - I look forward to working together!",
    position: 'left'
  }
];


for (var i = 0; i < chats.length; i++) {
  var type = 'text';
  if (chats[i].typing != undefined) type = 'typing';
  $.chatCtrl('#mychatbox', {
    text: (chats[i].text != undefined ? chats[i].text : ''),
    picture: (chats[i].position == 'left' ? 'assets/img/users/user-5.png' : 'assets/img/users/user-1.png'),
    position: 'chat-' + chats[i].position,
    type: type
  });
}




function ChatGPT(datatext) {
    
    

    
     $('#editmodal2').modal('show');
    
    
    
    var dta = datatext;
    
const settings = {
  async: true,
  crossDomain: true,
  url: 'https://api.writesonic.com/v2/business/content/chatsonic?engine=premium',
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    'X-API-KEY': '6e9acbee-ab9a-4b20-864b-1516fdf8b917'       //'73ca7bb4-d0a0-4d47-9fd4-c326d3f56347'
  },
  processData: false,
  data: '{"enable_google_results":"true","enable_memory":false,"input_text":"'+dta+'"}'
};

$.ajax(settings).done(function (response) {
  
 // var json = $.parseJSON(response);
  
 
  // obj = JSON.parse(response);
   txt = response.message; 
   console.log(txt);
    $('#editmodal2').modal('hide');
    
     $.chatCtrlAI('#mychatbox', {
      text: txt,
      picture: 'assets/img/users/user-5.png',
       position: 'left',
    });
   
  
});


}






function typeWriter(el,target) {
    console.log(el);
    
      const element = document.getElementById(el);
    
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letter, i) =>
        setTimeout(() => (element.innerHTML += letter), 50 * i)
         
  
        //element.scrollIntoView(),
       // element.scrollIntoView({behavior: "smooth"})
    );
    
    
  var target_height = 0;
  target.find('.chat-content .chat-item').each(function () {
    target_height += $(this).outerHeight();
  });
  setTimeout(function () {
    target.find('.chat-content').scrollTop(target_height, -1);
  }, 100);
          console.log("hi");
    


   // setInterval(() => typeWriter(el), 8000);
}
// var da='chat_0';
// typeWriter(da);








 


$("#chat-form").submit(function () {
  var me = $(this);

  if (me.find('input').val().trim().length > 0) {
    $.chatCtrlAI('#mychatbox', {
      text: me.find('input').val(),
      picture: 'assets/User/shah.jpeg',
    });
    ChatGPT(me.find('input').val());
    me.find('input').val('');
  }
  return false;
});
