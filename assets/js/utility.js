function togglepage(tohide,toshow){
    document.getElementsByClassName(tohide)[0].style.display ="none";
    document.getElementsByClassName(toshow)[0].style.display ="block";
}

var statter_element_occupation =[];
var statter_element_industry =[];
var jsonUser = [];

$( document ).ready(function() {
    $('.roles').click(function(){
        $('.check').hide();
        $(this).find('.check').show();
        $('.sign-up>input').removeClass('disabled');
        $('.sign-up>input').removeAttr("disabled");
    })
    $.ajax({
        url: '/data/user.json',
        dataType: 'json',
        success: function(data) {
         //console.log(data)
         jsonUser = data;
         
        },
       statusCode: {
          404: function() {
            alert('There was a problem with the server.  Try again soon!');
          }
        }
     });
    $.each(jsonUser,function(idx,obj){
        if(obj['email'] == $('#log-email').val() && obj['password'] == $('#log-password').val()  )  {
           statter_element_occupation = obj['occupation'] ;
           statter_element_industry = obj['industry'] ;

           $.each(statter_element_occupation,function(occidx,occobj){
            $.each($('.scatter-button.occupation').find('input'),function(idx1,obj1){
                if($(obj1).val() == occobj){
                    $(obj1).addClass('hollow-clicked')
                }
            })
           })
           $.each(statter_element_industry,function(indidx,indobj){
            $.each($('.scatter-button.industry').find('input'),function(idx1,obj1){
                if($(obj1).val() == indobj){
                    $(obj1).addClass('hollow-clicked')
                }
            })
           })
        }
      })

    $('.scatter-button.occupation').click(function(e){
       var statter_elementidx = statter_element_occupation.indexOf(e.target.value)
        if(statter_elementidx==-1){
            statter_element_occupation.push(e.target.value);
            $(e.target).addClass('hollow-clicked')
        }
        else {
            statter_element_occupation.splice(statter_elementidx,1);
            $(e.target).removeClass('hollow-clicked')
        }
    })
    $('.scatter-button.industry').click(function(e){
        var statter_elementidx = statter_element_industry.indexOf(e.target.value)
         if(statter_elementidx==-1){
            statter_element_industry.push(e.target.value);
             $(e.target).addClass('hollow-clicked')
         }
         else {
            statter_element_industry.splice(statter_elementidx,1);
             $(e.target).removeClass('hollow-clicked')
         }
     })
  });
function checkLogin(){
    $.each(jsonUser,function(idx,obj){
        if(obj['email'] == $('#log-email').val() && obj['password'] == $('#log-password').val()  )  {
          togglepage('login','occupation');
        }
      })
}
function addUser(){
    var userExist = false;
    $.each(jsonUser,function(idx,obj){
        if(obj['email'] == $('#sign-email').val() && obj['password'] == $('#sign-password').val()  )  {
            userExist = true;
        }
      })
      if(!userExist){
          var role = '';
          $.each($('.check'),function(idx,obj){
              if($(obj).is(":visible")){
                role = $($(obj).siblings('input')).val();
              }
          })
        jsonUser.push(
            {
                "userfirstName":$('#sign-fname').val(),
                "userlastName":$('#sign-lname').val(),
                "role":role,
                "email":$('#sign-email').val(),
                "password":$('#sign-password').val(),
                "occupation":[],
                "industry":[]
            }
        )
        togglepage('signup','occupation');
      }
      else{
        togglepage('signup','login');
      }
}
function updateUser(){
    $.each(jsonUser,function(idx,obj){
        if(obj['email'] == $('#log-email').val() && obj['password'] == $('#log-password').val() || obj['email'] == $('#sign-email').val() && obj['password'] == $('#sign-password').val()   )  {
          obj['occupation'] = statter_element_occupation;
          obj['industry'] = statter_element_industry;
        }
      })
}