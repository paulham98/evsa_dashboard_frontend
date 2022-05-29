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
function fetch_api(url ,callback = () =>{}){
  //let api = `${config.hostname}/api/v1/subsidy_info/0?param1=1123`;
  //console.log(url);
  fetch(url)
    .then(res => {
      if(res.ok){
        return res.json()
      } else {
        throw new Error('error has occurred')
      }
    })
    .then(data => {
      callback(data);
      //console.log(data)
    })
    .catch( err => {
      console.log(err)
    });

}

async function get_api(){
  console.log(1)
  let api = `${config.hostname}/api/v1/subsidy_info/0?param1=1123`;
  let api_response = await axios.get(api)
    .then(res=>res)
    .then(data=>data)
    .catch(err=>console.log(err));
  console.log("api response check",api_response);
  let result = await new Promise ((resolve)=>{
    resolve(api_response)
  }).then(resolveData=>{
    console.log('at plugin ',resolveData);
    return resolveData
  });
  return result
}
async function callback_api(){
  return await get_api().then(resolveData=>{
    console.log(resolveData);
    return(resolveData)
  });
}

export {fetch_api, get_api, callback_api}
