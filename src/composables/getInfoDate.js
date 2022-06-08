const getInfoDate = () =>{
  let my_date = new Date();
  let yy = String(my_date.getFullYear());
  let mm = String((my_date.getMonth() + 1) < 10 ? '0' + (my_date.getMonth() + 1) : my_date.getMonth() + 1)
  let dd = String(my_date.getDate() < 10 ? '0' + my_date.getDate() : my_date.getDate())
  let info_date = yy + '-' + mm +'-' + dd;
  return info_date
}
const getInfoFirstDate = () =>{
  let start_date = new Date();
  start_date.setDate(start_date.getDate() - 14)
  let yy = String(start_date.getFullYear());
  let mm = String((start_date.getMonth() + 1) < 10 ? '0' + (start_date.getMonth() + 1) : start_date.getMonth() + 1)
  let dd = String(start_date.getDate() < 10 ? '0' + start_date.getDate() : start_date.getDate())
  let info_first_date = yy + '-' + mm +'-' + dd;
  return info_first_date
}
export {getInfoDate, getInfoFirstDate}
