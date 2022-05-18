

$(function () {
  $(window).resize(function () {
  });

//   const label = document.querySelectorAll('.label');
// label.forEach(function(lb){
//     lb.addEventListener('click', e => {
//         let optionList = lb.nextElementSibling;
//         let optionItems = optionList.querySelectorAll('.item');
//         clickLabel(lb, optionItems);
//     })
// });
const clickLabel = (lb, optionItems) => {
    if(lb.parentNode.classList.contains('active')) {
        lb.parentNode.classList.remove('active');
        optionItems.forEach((opt) => {
            opt.removeEventListener('click', () => {
                handleSelect(lb, opt)
            })
        })
    } else {
        lb.parentNode.classList.add('active');
        optionItems.forEach((opt) => {
            opt.addEventListener('click', () => {
                handleSelect(lb, opt)
            })
        })
    }
}
const handleSelect = (label, item) => {
    label.innerHTML = item.textContent;
    label.parentNode.classList.remove('active');
}

$(".select").each(function(){ 
  if($(this).find(".option li").length > 5){
    $(this).find(".option").css("overflow-y","scroll");
  }
})

$(window).load(function(){
  $(".grp .line_grp").each(function(){ 
    $(this).find(".line1").css("width",$(this).find(".line1").attr("data-percent")+"%")
    $(this).find(".wrap").addClass("active");
    $(this).find(".wrap").children("span").css("width",100-$(this).find(".line1").attr("data-percent")+"%")
  })
})




});