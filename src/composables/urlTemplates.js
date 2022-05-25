const hostName = `http://15.165.32.56:30423`;
const apiUrlTemplateMap = {
  'sido':() =>`${hostName}/api/v1/sido`,
  'region':(sido) => `${hostName}/api/v1/sido_filter?sido=${sido}`,
  'subsidy_info': (sido, region, category2, date) => `http://15.165.32.56:30423/api/v1/subsidy_info?category2=${category2}&region=${region}&sido=${sido}&date=${date}`,
  'subsidy_calculator':(importer, model, sido, region) => `${hostName}/api/v1/ev_subsidy_calculator/?importer=${importer}&model=${model}&region=${region}&sido=${sido}`
}
export default apiUrlTemplateMap
