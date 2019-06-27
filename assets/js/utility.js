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
var loggedInUser = {}
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

    _.each($('.for-client,.for-candidate'),function(obj){
        $(obj).hide();
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
function setAttributes(loggedinuser){
    // $.each($('.scatter-button.occupation').find('input'),function(idx1,obj1){
    //     $(obj1).removeClass('hollow-clicked')
    //  })
    //  $.each($('.scatter-button.area').find('input'),function(idx1,obj1){
    //     $(obj1).removeClass('hollow-clicked')
    //  });
     $.each($('.scatter-button').find('input'),function(idx1,obj1){
        $(obj1).removeClass('hollow-clicked')
     });
     _.each($('.for-'+loggedinuser.role),function(obj){
        $(obj).show()
    })
           statter_element_occupation = loggedinuser['occupation'] ;
           statter_element_area = loggedinuser['area'] ;
           statter_element_qualification = loggedinuser['qualification'] ;
           statter_element_experience = loggedinuser['experience'] ;
           statter_element_personalAttribute = loggedinuser['personalAttribute'] ;

           
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
  function checkLogin(){
    $.each(jsonUser,function(idx,obj){
        if(obj['email'] == $('#log-email').val() && obj['password'] == $('#log-password').val()  )  {
            loggedInUser = obj;
            setAttributes(loggedInUser);
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
          var newUser = {
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
        jsonUser.push(newUser)
        loggedInUser = newUser;
        statter_element_occupation =[];
        statter_element_area =[];
        statter_element_qualification =[];
        statter_element_experience =[];
        statter_element_personalAttribute =[];
        setAttributes(loggedInUser);
        setStorage('users', jsonUser)

        togglepage('signup','login');
      }
      else{
        $('#log-email').val($('#sign-email').val())
        $('#log-email').val('');
        togglepage('signup','login');
      }
}
function disableEnableProfile(disableEnable){
    loggedInUser.disabled = !disableEnable;
}
function updateUser(){
    // $.each(jsonUser,function(idx,obj){
    //     if(obj['email'] == $('#log-email').val() && obj['password'] == $('#log-password').val()    )  {
        loggedInUser['occupation'] = statter_element_occupation;
        loggedInUser['area'] = statter_element_area;
        loggedInUser['qualification'] = statter_element_qualification;
        loggedInUser['experience'] = statter_element_experience;
        loggedInUser['personalAttribute'] = statter_element_personalAttribute;
        if(loggedInUser.role == 'client'){
            searchCandidate(loggedInUser)
        }
      //})
    setStorage('users', jsonUser)
}
function searchCandidate(loggedinuser){
    var viableUserList = _.filter(jsonUser,function(obj){
        obj['score'] = 0;
        return obj.role == 'candidate' && obj.disabled == false;
    })
    _.each(loggedinuser.occupation,function(obj){
        _.each(viableUserList,function(usr){
            if(usr.occupation.indexOf(obj)>-1)
            {
                usr['score'] += 20;
            }
        })
    })
    _.each(loggedinuser.area,function(obj){
        _.each(viableUserList,function(usr){
            if(usr.area.indexOf(obj)>-1)
            {
                usr['score'] += 20;
            }
        })
    })
    _.each(loggedinuser.qualification,function(obj){
        _.each(viableUserList,function(usr){
            if(usr.qualification.indexOf(obj)>-1)
            {
                usr['score'] += 2.5;
            }
        })
    })
    _.each(loggedinuser.experience,function(obj){
        _.each(viableUserList,function(usr){
            if(usr.experience.indexOf(obj)>-1)
            {
                usr['score'] += 20;
            }
        })
    })
    _.each(loggedinuser.personalAttribute,function(obj){
        _.each(viableUserList,function(usr){
            if(usr.personalAttribute.indexOf(obj)>-1)
            {
                usr['score'] += 2;
            }
        })
    })
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