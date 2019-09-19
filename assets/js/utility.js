function togglepage(tohide,toshow){
    // document.getElementsByClassName(tohide)[0].style.display ="none";
    // document.getElementsByClassName(toshow)[0].style.display ="block";
    $(tohide).hide()
    $(toshow).show()
    $("html, body").animate({
        scrollTop: 0
    }, 0);
}
function toggleElement(className){
    $(className).toggle();
}
var allUserAttributes={
    'scatter_element_occupation':[],
    'scatter_element_area':[],
    'scatter_element_qualification':[],
    'scatter_element_experience':[],
    'scatter_element_personalAttribute':[],
}
// var statter_element_occupation =[];
// var statter_element_area =[];
// var statter_element_qualification =[];
// var statter_element_experience =[];
// var statter_element_personalAttribute =[];

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


// $(window).resize(function(){
//     location.reload();
//   });
function checkValidation(){
    if(_.filter($('.sign-up-form>input'),function(obj){ return $(obj).val()==''}).length == 0 && _.filter($('.roles>.check'),function(obj){return $(obj).is(":visible")}).length>0)
    {
        $('.sign-up>input').removeClass('disabled');
        $('.sign-up>input').removeAttr("disabled");
    }
    else{
        $('.sign-up>input').addClass('disabled');
        $('.sign-up>input').attr("disabled","disabled");
    }
}

$( document ).ready(function() {
    
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        $('body').empty();
        $('body').append('<div class="center-div">Mobile Device only. Not supported in desktop.</div>')
       
    }
    $('body,html').show()
    intialStorage();
    //getDateTime();
    //setInterval(getDateTime, 1000); 
    //sign up button enable on click of roles button
    $('.roles').click(function(){
        $('.check').hide();
        $(this).find('.check').show();
        checkValidation()
    })
    
    $('.sign-up-form>input').on('blur',function(){
        checkValidation()
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

    _.each(allKeys,function(key){
        $('.scatter-button.'+key).click(function(e){
            if(e.target.value){
                var statter_elementidx = allUserAttributes['scatter_element_'+key].indexOf(e.target.value)
                if(statter_elementidx==-1){
                    allUserAttributes['scatter_element_'+key].push(e.target.value);
                    $(e.target).addClass('hollow-clicked')
                }
                else {
                    allUserAttributes['scatter_element_'+key].splice(statter_elementidx,1);
                    $(e.target).removeClass('hollow-clicked')
                }
            }
         });
    })
    $('.percentage-input>input').on('keyup',function(){
        if ($(this).val() > 100)
        {
            $(this).val($(this).val().slice(0,2))
        }
    });
    toggleElement('.instant-search input, .instant-search .instant-search-control');
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
      
        //    statter_element_occupation = loggedinuser['occupation'] ;
        //    statter_element_area = loggedinuser['area'] ;
        //    statter_element_qualification = loggedinuser['qualification'] ;
        //    statter_element_experience = loggedinuser['experience'] ;
        //    statter_element_personalAttribute = loggedinuser['personalAttribute'] ;

           _.each(allKeys,function(key){
            allUserAttributes['scatter_element_'+key] = loggedinuser[key];

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
      if($('#log-email').val()!='' && $('#log-password').val() !=''){
            var foundUser = false
            $.each(jsonUser,function(idx,obj){
                if(obj['email'] == $('#log-email').val() && obj['password'] == $('#log-password').val()  )  {
                    loggedInUser = obj;
                    foundUser = true
                    setAttributes(loggedInUser);
                    togglepage('.pages.login','.pages.occupation');
                }
            })
            if(!foundUser){
                alert('Bad password or user don\'t exist!')
            }
            $('#log-email').val('');
            $('#log-password').val('');
            $('.percentage-input>input').val('')

      }
}
function addUser(){
    if($('#sign-email').val()!='' && $('#sign-password').val()!=''){
    var userExist = false;
    $.each(jsonUser,function(idx,obj){
        if(obj['email'] == $('#sign-email').val() && obj['password'] == $('#sign-password').val()  )  {
            userExist = true;
        }
      })
      if(!userExist){
          var role = '';
          $.each($('.roles>.check'),function(idx,obj){
              if($(obj).is(":visible")){
                role = $($(obj).siblings('input')).val();
              }
          })
          var newUser = {
            forename:$('#sign-fname').val(),
            surname:$('#sign-lname').val(),
            email:$('#sign-email').val(),
            password:$('#sign-password').val(),
            role:role.toLowerCase(),
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
        // statter_element_occupation =[];
        // statter_element_area =[];
        // statter_element_qualification =[];
        // statter_element_experience =[];
        // statter_element_personalAttribute =[];
        _.each(allKeys,function(key){
            allUserAttributes['scatter_element_'+key] = [];
       })

    isNewUser =true;

        setAttributes(loggedInUser);
        setStorage('users', jsonUser)
        clearFields();


        togglepage('.pages.signup','.pages.login');
      }
      else{
        clearFields();
        alert("User already exists!")
        togglepage('.pages.signup','.pages.login');
      }
    }
}
function clearFields(){
    $('#log-email').val($('#sign-email').val())
    $('#sign-fname').val('');
    $('#sign-lname').val('') ;
    $('#sign-email').val('');
    $('#sign-password').val('');
    $('.check').hide();
    $('.sign-up>input').addClass('disabled');
    $('.sign-up>input').attr("disabled","disabled");
    $('.percentage-input>input').val('')
}
function disableEnableProfile(disableEnable){
    $('.activate-profile').click(function(){
        $('.check').hide();
        $(this).find('.check').show();
    })
    loggedInUser.disabled = !disableEnable;
    updateUser();
}
function updateUser(){
    // $.each(jsonUser,function(idx,obj){
    //     if(obj['email'] == $('#log-email').val() && obj['password'] == $('#log-password').val()    )  {
        // loggedInUser['occupation'] = statter_element_occupation;
        // loggedInUser['area'] = statter_element_area;
        // loggedInUser['qualification'] = statter_element_qualification;
        // loggedInUser['experience'] = statter_element_experience;
        // loggedInUser['personalAttribute'] = statter_element_personalAttribute;

        _.each(allKeys,function(key){
            loggedInUser[key] =allUserAttributes['scatter_element_'+key];
        })
        if(loggedInUser.role.toLowerCase() == 'client'){
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
        return obj.role.toLowerCase() == 'candidate' && obj.disabled == false;
    })
    var constrainedFilter = ['occupation','area','experience']
    _.each(viableUserList,function(usr){
        _.each(allKeys,function(key){
            if(loggedinuser[key].length == 0){
                usr['score'] += 20;
            }
            else{
                var commonMatch = _.intersection(loggedinuser[key],usr[key])
                if(commonMatch.length == usr[key].length && usr[key].length!=0){
                    if(constrainedFilter.indexOf(key)>=0)
                        usr['score'] += 20;
                    else
                        usr['score'] += Math.round((20/loggedinuser[key].length)*commonMatch.length)
                }
                else{
                    if(usr[key].length!=0)
                        usr['score'] += Math.round((20/loggedinuser[key].length)*(commonMatch.length/usr[key].length))
                }
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
       
    var userSetPercent = $('.percentage-input>input').val();
    if(userSetPercent != ""){
        searchCandidateList = _.filter(searchResult,function(obj){
            return obj.score >= userSetPercent;
        })
    }
    else
        searchCandidateList = searchResult
    $('.search-result-button').val(searchCandidateList.length);
    $('.search-result-button').html(searchCandidateList.length>=5?5:searchCandidateList.length);
    if(searchCandidateList.length>5)
        $('.candidate-result').show()
    else
        $('.candidate-result').hide()
    if(searchCandidateList.length == 0)
        alert('No Match found')
    setStorage('searchResult', getSearchResultFromCache)
}
function showCandidate(from,size){
    $("html, body").animate({
        scrollTop: 0
    }, 0);
    $('.search-list').empty()
    
    _.each(searchCandidateList.slice(from,from+size),function(obj){
        $('.search-list').append(`<div class="search-profile-info">
        <div class="search-result-user-logo padT5percent">
            <span class="search-result-user-logo-border glyphicon  glyphicon-user" aria-hidden="true"></span>
        </div>
        <div class="search-name-button">
            <div class="label-header"> `+obj.forename+` `+obj.surname+`</div>
            <div class="candidate-result">
                <input class="button" type="button" value="View Profile" onclick="showCandidateDetails('`+obj.email+`');togglepage('.pages.searchResult','.pages.`+obj.forename+`')"/>
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
    <div class="top-banner">
                <span class="time">10:00</span>
                <div class="app-name">
                    <div style="height: 210px;"><img src="./assets/images/logo3.png" style="width: 300px;"></div>
                    <div style="text-align: center;"><span>HireSpace</span></div>
                </div>
                <span class="date">04/08/2019</span>
            </div>  
    <div class="header padT5percent"> `+candidateDetail.forename+` `+candidateDetail.surname+`</div>
    

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
            <span  onclick="togglepage('.pages.`+candidateDetail.forename+`','.pages.searchResult')">Previous</span>
        </div>
       <!--<div class="right-nav ">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true" onclick="updateUser();togglepage('.pages.personalAttribute','.pages.homepage')"></span>
        </div> -->
    </div>
</div>`)
}
function populateUserProfile(){
    $('.activate-profile>.check').hide()
   if(loggedInUser.disabled){
       $('.deactive-candidate>.check').show()
   }
   else{
       $('.active-candidate>.check').show()
   }
    _.each(allKeys,function(key){
        $('.profile>.'+key).empty()
        $('.profile>.'+key).append(loggedInUser[key].length>0? loggedInUser[key].join(', '):'N/A')
    })
}

// function getDateTime() {
//     var newDate = new Date();
//     var hour = newDate.getHours()<10?"0"+newDate.getHours():newDate.getHours();
//     var mins = newDate.getMinutes()<10?"0"+newDate.getMinutes():newDate.getMinutes();
//     var month = (newDate.getMonth()+1)<10?"0"+(newDate.getMonth()+1):(newDate.getMonth()+1);
//     var date = newDate.getDate()<10?"0"+newDate.getDate():newDate.getDate();
//     var year = newDate.getFullYear();
//     var time = hour+":"+mins;
//     var date = month+"/"+ date+"/"+year;
//     _.each($('.top-banner>.date'),function(obj){
//         $(obj).text(date);
//     })
//     _.each($('.top-banner>.time'),function(obj){
//         $(obj).text(time);
//     })
//}