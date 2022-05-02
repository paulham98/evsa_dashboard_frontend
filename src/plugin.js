import axios from 'axios'

const get_hostname = () => {
  window.location.hostname;
  if (process.env.NODE_ENV === 'local'){
    return 'http://www.auction-price.co.kr:8088'
  } else if(process.env.NODE_ENV === 'dev'){
    return 'http://www.auction-price.co.kr:8088'
  } else {
    return 'http://www.auction-price.co.kr:8088'      // Else, return the original string.
  }
};
const config = {
  hostname: get_hostname()
};
function fetch_api(){
  let api = `${config.hostname}//api/v1/subsidy_info/0?param1=1123`;
  console.log(api);
  return axios.get(api)
    .then(res => res.json())
    .then(data =>data.data)
    .catch();

}




export {fetch_api}
