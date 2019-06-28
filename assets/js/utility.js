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
var isNewUser = false;
var allAttributes = {}
var allKeys = []

var searchCandidateList= [];

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
     $.each($('.scatter-button').find('input'),function(idx1,obj1){
        $(obj1).removeClass('hollow-clicked')
     });
     _.each($('.for-'+loggedinuser.role),function(obj){
        $(obj).show()
    })
    if(isNewUser){
        $('.for-'+loggedinuser.role+'.create').show();
        $('.for-'+loggedinuser.role+'.update').hide();
    }
    else{
        $('.for-'+loggedinuser.role+'.create').hide();
        $('.for-'+loggedinuser.role+'.update').show();
    }
      
           statter_element_occupation = loggedinuser['occupation'] ;
           statter_element_area = loggedinuser['area'] ;
           statter_element_qualification = loggedinuser['qualification'] ;
           statter_element_experience = loggedinuser['experience'] ;
           statter_element_personalAttribute = loggedinuser['personalAttribute'] ;

           _.each(allKeys,function(key){
            $.each(loggedinuser[key],function(occidx,occobj){
                $.each($('.scatter-button.'+key).find('input'),function(idx1,obj1){
                    if($(obj1).val() == occobj){
                        $(obj1).addClass('hollow-clicked')
                    }
                })
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

    isNewUser =true;

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
    isNewUser =false;
    setAttributes(loggedInUser)
}
function searchCandidate(loggedinuser){
    var viableUserList = _.filter(jsonUser,function(obj){
        obj['score'] = 0;
        return obj.role == 'candidate' && obj.disabled == false;
    })
    _.each(viableUserList,function(usr){
        _.each(allKeys,function(key){
            var commonMatch = _.intersection(loggedinuser[key],usr[key])
            if(commonMatch.length == usr[key].length && usr[key].length!=0){
                usr['score'] += 20;
            }
            else{
                if(loggedinuser[key].length != 0)
                    usr['score'] += Math.floor((20/loggedinuser[key].length)*commonMatch.length)
            }
        })
        usr['score'] =  usr['score'] >100 ? 100: usr['score']
    })
    var searchResult = _.orderBy(_.filter(jsonUser,function(obj){return obj.score>0;}),'score').reverse()

    var getSearchResultFromCache = getStorage('searchResult');
    if (getSearchResultFromCache == null) 
        getSearchResultFromCache = [];

    if(_.filter(getSearchResultFromCache,function(obj){return obj[loggedInUser.email] != null}).length == 0 )
        getSearchResultFromCache.push( {[loggedInUser.email]:{searchResult}});
    else
        _.filter(getSearchResultFromCache,function(obj){return obj[loggedInUser.email] != null})[0][loggedInUser.email] = searchResult;
    
    searchCandidateList = searchResult
    $('.search-result-button').val(searchCandidateList.length);

    setStorage('searchResult', getSearchResultFromCache)
}
function showCandidate(from,size){
    $('.search-list').empty()
    _.each(searchCandidateList.slice(from,from+size),function(obj){
        $('.search-list').append(`<div class="search-profile-info">
        <div class="search-result-user-logo padT5percent">
            <span class="search-result-user-logo-border glyphicon  glyphicon-user" aria-hidden="true"></span>
        </div>
        <div class="search-name-button">
            <div class="label-header"> `+obj.forename+` `+obj.surname+`</div>
            <div class="candidate-result">
                <input class="button" type="button" value="View Profile" onclick="showCandidateDetails('`+obj.email+`');togglepage('searchResult','`+obj.forename+`')"/>
            </div>
        </div>
        <div class="match-percent padT8percent">
            <button disabled class="match-percent-button button">`+obj.score+`%</br>Match </button>
        </div>
    </div>`)
    })
}
function showCandidateDetails (candidate){
    var candidateDetail = _.first(_.filter(searchCandidateList,function(obj){
        return candidate == obj.email
    }))
    $('.show-candidate-details').remove();
    $('.body-container').append(
    `<div class="pages show-candidate-details `+candidateDetail.forename+`" style="display:none" >
   
    <div class="header"> `+candidateDetail.forename+` `+candidateDetail.surname+`</div>
    

    <div class="user-logo padT5percent">
         <span class=" user-logo-border glyphicon  glyphicon-user" aria-hidden="true"></span>
    </div>
    <div class="sub-header padT5percent">`+candidateDetail.forename+` is a</div>
    <div class="label-header occupation">`+(candidateDetail.occupation.length>0?candidateDetail.occupation.join(', '):`N/A`)+`</div> 
    <div class="sub-header padT5percent">specialising in</div> 
    <div class="label-header area">`+(candidateDetail.area.length>0?candidateDetail.area.join(', '):`N/A`)+`</div> 
    <div class="sub-header padT5percent">with the following qualifications</div> 
    <div class="label-header qualification">`+(candidateDetail.qualification.length>0?candidateDetail.qualification.join(', '):`N/A`)+`</div> 
    <div class="sub-header padT5percent">with the following experience</div> 
    <div class="label-header experience">`+(candidateDetail.experience.length>0?candidateDetail.experience.join(', '):`N/A`)+`</div> 
    <div class="sub-header padT5percent">and have following attributes</div> 
    <div class="label-header personalAttribute">`+(candidateDetail.personalAttribute.length>0?candidateDetail.personalAttribute.join(', '):`N/A`)+`</div> 
    <div class="contact-candidate-button">
        <input class="button" type="button" value="Contact candidate" />
    </div>

    <div class="navigation">
        <div class="left-nav">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true" onclick="togglepage('`+candidateDetail.forename+`','searchResult')"></span>
        </div>
       <!--<div class="right-nav ">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true" onclick="updateUser();togglepage('personalAttribute','homepage')"></span>
        </div> -->
    </div>
</div>`)
}
function populateUserProfile(){
    _.each(jsonUser,function(obj){
        if(obj['email'] == $('#log-email').val() && obj['password'] == $('#log-password').val()    )  {
            _.each(allKeys,function(key){
                $('.profile>.'+key).empty()
                $('.profile>.'+key).append(obj[key].length>0? obj[key].join(', '):'N/A')
            })
        }
      })
}