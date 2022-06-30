const hostName = `http://15.165.32.56:30423`;
const apiUrlTemplateMap = {
  'sido':() =>`${hostName}/api/v1/sido`,
  'region':(sido) => `${hostName}/api/v1/sido_filter?sido=${sido}`,
  'subsidy_info': (sido, region, category2, date) => `http://15.165.32.56:30423/api/v1/subsidy_info?category2=${category2}&region=${region}&sido=${sido}&date=${date}`,
  'subsidy_calculator':(importer, model, sido, region) => `${hostName}/api/v1/ev_subsidy_calculator/?importer=${importer}&model=${model}&region=${region}&sido=${sido}`,
  'subsidy_trend':(category2, region, sido, date1, date2) => `http://15.165.32.56:30423/api/v1/subsidy_trend?category2=${category2}&date1=${date1}&date2=${date2}&region=${region}&sido=${sido}`,
  'subsidy_closing_area':(sido, region, category2, date) => `http://15.165.32.56:30423/api/v1/subsidy_closing_area?sido=${sido}&region=${region}&category2=${category2}&date=${date}`,
  'car_brand':()=> `http://15.165.32.56:30423/api/v1/car_brand`,
  'subsidy_capital':(date) => `http://15.165.32.56:30423/api/v1/subsidy_capital?date=${date}`,
  'car_name':(brand)=> `http://15.165.32.56:30423/api/v1/car_name?category=${brand}`,
  'ev_subsidy_calculator':(sido, region, category, category2, date) =>`${hostName}/api/v1/ev_subsidy_calculator?category=${category}&category2=${category2}&date=${date}&region=${region}&sido=${sido}`,
  'login':() => `${hostName}/api/v1/login/`,
  'upload_excel_file':() =>`${hostName}/api/v1/uploadExcel`,
  'admin_subsidy_capital_page':(page, size) => `${hostName}/api/v1/admin/subsidy_capital/page?page=${page}&size=${size}`,
  'admin_car_name': (page, size) =>`${hostName}/api/v1/admin/car_name/?page=${page}&size=${size}`,
  'admin_predict': () => `${hostName}/api/v1/admin/subsidy/predict`,
  'admin_predict_toggle': () => `${hostName}/api/v1/admin/subsidy/predict/toggle`
}
export default apiUrlTemplateMap
