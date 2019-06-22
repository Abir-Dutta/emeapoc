function togglepage(tohide,toshow){
    document.getElementsByClassName(tohide)[0].style.display ="none";
    document.getElementsByClassName(toshow)[0].style.display ="block";
}

var statter_element =[];
$( document ).ready(function() {
    $('.roles').click(function(){
        $('.check').hide();
        $(this).find('.check').show();
        $('.sign-up>input').removeClass('disabled');
        $('.sign-up>input').removeAttr("disabled");
    })

    $('.scatter-button').click(function(e){
       var statter_elementidx = statter_element.indexOf(e.target.value)
        if(statter_elementidx==-1){
            statter_element.push(e.target.value);
            $(e.target).addClass('hollow-clicked')
        }
        else {
            statter_element.splice(statter_elementidx,1);
            $(e.target).removeClass('hollow-clicked')
        }
    })
  });

