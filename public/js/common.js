

$(function () {

  const label = document.querySelectorAll('.label');
  label.forEach(function(lb){
    // 이벤드 바인딩 vue로 모두 옮겨야함.
    lb.addEventListener('click', e => {
      let optionList = lb.nextElementSibling;
      let optionItems = optionList.querySelectorAll('.item');
      clickLabel(lb, optionItems);
    })
  });
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

});
