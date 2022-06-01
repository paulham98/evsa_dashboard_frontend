const hostName = `http://15.165.32.56:30423`;
const apiUrlTemplateMap = {
  'sido':() =>`${hostName}/api/v1/sido`,
  'region':(sido) => `${hostName}/api/v1/sido_filter?sido=${sido}`,
  'subsidy_info': (sido, region, category2, date) => `http://15.165.32.56:30423/api/v1/subsidy_info?category2=${category2}&region=${region}&sido=${sido}&date=${date}`,
  'subsidy_calculator':(importer, model, sido, region) => `${hostName}/api/v1/ev_subsidy_calculator/?importer=${importer}&model=${model}&region=${region}&sido=${sido}`,
  'subsidy_trend':(category2, region, sido, date1, date2) => `http://15.165.32.56:30423/api/v1/subsidy_trend?category2=${category2}&date1=${date1}&date2=${date2}&region=${region}&sido=${sido}`,
  'subsidy_closing_area':(sido, region, category2, date) => `http://15.165.32.56:30423/api/v1/subsidy_closing_area?sido=${sido}&region=${region}&category2=${category2}&date=${date}`,
  'subsidy_capital':(date) => `http://15.165.32.56:30423/api/v1/subsidy_capital?date=${date}`,
  'car_brand':()=> `http://15.165.32.56:30423/api/v1/car_brand`,
  'car_name':(brand)=> `http://15.165.32.56:30423/api/v1/car_name?category=${brand}`,
  'ev_subsidy_calculator':(sido, region, category, category2, date) =>`${hostName}/api/v1/ev_subsidy_calculator?category=${category}&category2=${category2}&date=${date}&region=${region}&sido=${sido}`
}
export default apiUrlTemplateMap
