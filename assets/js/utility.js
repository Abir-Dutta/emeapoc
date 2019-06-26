function togglepage(tohide,toshow){
    document.getElementsByClassName(tohide)[0].style.display ="none";
    document.getElementsByClassName(toshow)[0].style.display ="block";
}

var statter_element_occupation =[];
var statter_element_area =[];
var statter_element_qualification =[];
var statter_element_experience =[];
var statter_element_personalAttribute =[];

var jsonUser = [];
var allAttributes = {}
var allKeys = []
function intialStorage(){
    if(getStorage("attributes") == null)
        localStorage.setItem("attributes", JSON.stringify(attributes));
    if(getStorage("users") == null)
        localStorage.setItem("users", JSON.stringify(users));
}

function setStorage(key,value){
    localStorage.setItem(key,JSON.stringify(value)); 
}
function getStorage(key){
   return JSON.parse(localStorage.getItem(key)); 
}

function generate_attribute_DOMitems(){

}

$( document ).ready(function() {

   
    intialStorage();

    //sign up button enable on click of roles button
    $('.roles').click(function(){
        $('.check').hide();
        $(this).find('.check').show();
        $('.sign-up>input').removeClass('disabled');
        $('.sign-up>input').removeAttr("disabled");
    })
    //get user list from storage
    jsonUser = getStorage("users")
    //get all attributes for rendering
    allAttributes = getStorage('attributes')

    allKeys = Object.keys(allAttributes);
    _.each(allKeys,function(key){
        _.each(allAttributes[key],function(item){
            $('.scatter-button>.'+key).append('<input class="button hollow" type="button" value="'+item+'" />')
        })
       
    })
    _.each($('.scatter-button').find('input'),function(obj){
        $(obj).removeClass('hollow-clicked')
    })
    //  $.each($('.scatter-button.occupation').find('input'),function(idx1,obj1){
    //     $(obj1).removeClass('hollow-clicked')
    //  })
    //  $.each($('.scatter-button.area').find('input'),function(idx1,obj1){
    //     $(obj1).removeClass('hollow-clicked')
    //  });

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
    });
    $('.scatter-button.area').click(function(e){
        var statter_elementidx = statter_element_area.indexOf(e.target.value)
         if(statter_elementidx==-1){
            statter_element_area.push(e.target.value);
             $(e.target).addClass('hollow-clicked')
         }
         else {
            statter_element_area.splice(statter_elementidx,1);
             $(e.target).removeClass('hollow-clicked')
         }
     });
     $('.scatter-button.qualification').click(function(e){
        var statter_elementidx = statter_element_qualification.indexOf(e.target.value)
         if(statter_elementidx==-1){
            statter_element_qualification.push(e.target.value);
             $(e.target).addClass('hollow-clicked')
         }
         else {
            statter_element_qualification.splice(statter_elementidx,1);
             $(e.target).removeClass('hollow-clicked')
         }
     });
     $('.scatter-button.experience').click(function(e){
        var statter_elementidx = statter_element_experience.indexOf(e.target.value)
         if(statter_elementidx==-1){
            statter_element_experience.push(e.target.value);
             $(e.target).addClass('hollow-clicked')
         }
         else {
            statter_element_experience.splice(statter_elementidx,1);
             $(e.target).removeClass('hollow-clicked')
         }
     });
     $('.scatter-button.personalAttribute').click(function(e){
        var statter_elementidx = statter_element_personalAttribute.indexOf(e.target.value)
         if(statter_elementidx==-1){
            statter_element_personalAttribute.push(e.target.value);
             $(e.target).addClass('hollow-clicked')
         }
         else {
            statter_element_personalAttribute.splice(statter_elementidx,1);
             $(e.target).removeClass('hollow-clicked')
         }
     });
  });
function setAttributes(email,password){
    // $.each($('.scatter-button.occupation').find('input'),function(idx1,obj1){
    //     $(obj1).removeClass('hollow-clicked')
    //  })
    //  $.each($('.scatter-button.area').find('input'),function(idx1,obj1){
    //     $(obj1).removeClass('hollow-clicked')
    //  });
     $.each($('.scatter-button').find('input'),function(idx1,obj1){
        $(obj1).removeClass('hollow-clicked')
     });

    $.each(jsonUser,function(idx,obj){
        if(obj['email'] == email && obj['password'] == password  )  {

           statter_element_occupation = obj['occupation'] ;
           statter_element_area = obj['area'] ;
           statter_element_qualification = obj['qualification'] ;
           statter_element_experience = obj['experience'] ;
           statter_element_personalAttribute = obj['personalAttribute'] ;

           $.each(statter_element_occupation,function(occidx,occobj){
            $.each($('.scatter-button.occupation').find('input'),function(idx1,obj1){
                if($(obj1).val() == occobj){
                    $(obj1).addClass('hollow-clicked')
                }
            })
           })
           $.each(statter_element_area,function(indidx,indobj){
            $.each($('.scatter-button.area').find('input'),function(idx1,obj1){
                if($(obj1).val() == indobj){
                    $(obj1).addClass('hollow-clicked')
                }
            })
           })
           $.each(statter_element_qualification,function(occidx,occobj){
            $.each($('.scatter-button.qualification').find('input'),function(idx1,obj1){
                if($(obj1).val() == occobj){
                    $(obj1).addClass('hollow-clicked')
                }
            })
           })
           $.each(statter_element_experience,function(indidx,indobj){
            $.each($('.scatter-button.experience').find('input'),function(idx1,obj1){
                if($(obj1).val() == indobj){
                    $(obj1).addClass('hollow-clicked')
                }
            })
           })
           $.each(statter_element_personalAttribute,function(occidx,occobj){
            $.each($('.scatter-button.personalAttribute').find('input'),function(idx1,obj1){
                if($(obj1).val() == occobj){
                    $(obj1).addClass('hollow-clicked')
                }
            })
           })
        }
      })
}
  function checkLogin(){
    $.each(jsonUser,function(idx,obj){
        if(obj['email'] == $('#log-email').val() && obj['password'] == $('#log-password').val()  )  {
            setAttributes($('#log-email').val(), $('#log-password').val());
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
                forename:$('#sign-fname').val(),
                surname:$('#sign-lname').val(),
                email:$('#sign-email').val(),
                password:$('#sign-password').val(),
                role:role,
                disabled:false,
                occupation:[],
                area:[],
                qualification:[],
                experience:[],
                personalAttribute:[],
                bio:"",
                linkedinURL:""
            }
        )
        statter_element_occupation =[];
        statter_element_area =[];
        statter_element_qualification =[];
        statter_element_experience =[];
        statter_element_personalAttribute =[];
        setAttributes($('#sign-email').val() ,$('#sign-password').val() );

        togglepage('signup','login');
      }
      else{
        $('#log-email').val($('#sign-email').val())
        $('#log-email').val('');
        togglepage('signup','login');
      }
}
function updateUser(){
    $.each(jsonUser,function(idx,obj){
        if(obj['email'] == $('#log-email').val() && obj['password'] == $('#log-password').val()    )  {
          obj['occupation'] = statter_element_occupation;
          obj['area'] = statter_element_area;
          obj['qualification'] = statter_element_qualification;
          obj['experience'] = statter_element_experience;
          obj['personalAttribute'] = statter_element_personalAttribute;
        }
      })
    setStorage('users', jsonUser)
}
function populateUserProfile(){
    _.each(jsonUser,function(obj){
        if(obj['email'] == $('#log-email').val() && obj['password'] == $('#log-password').val()    )  {
            _.each(allKeys,function(key){
                $('.profile>.'+key).append(obj[key].join(', '))
            })
        }
      })
}