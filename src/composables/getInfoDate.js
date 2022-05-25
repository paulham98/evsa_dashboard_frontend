const getInfoDate = () =>{
  let my_date = new Date();
  let yy = String(my_date.getFullYear());
  let mm = String((my_date.getMonth() + 1) < 10 ? '0' + (my_date.getMonth() + 1) : my_date.getMonth() + 1)
  let dd = String(my_date.getDate() < 10 ? '0' + my_date.getDate() : my_date.getDate())
  let info_date = yy + '-' + mm +'-' + dd;
  return info_date
}
export default getInfoDate()
