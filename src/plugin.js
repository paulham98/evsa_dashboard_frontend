import axios from 'axios'

// const get_hostname = () => {
//   window.location.hostname;
//   if (process.env.NODE_ENV === 'local'){
//     return 'http://www.auction-price.co.kr:8088'
//   } else if(process.env.NODE_ENV === 'dev'){
//     return 'http://www.auction-price.co.kr:8088'
//   } else {
//     return 'http://www.auction-price.co.kr:8088'      // Else, return the original string.
//   }
// };
// const config = {
//   hostname: get_hostname()
// };
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

function post_login(url, login_data,callback = () => {}){
  console.log('들어가긴 함')
  axios.post(url, JSON.stringify(login_data), {
      headers: {
        "Content-Type": 'application/json',
      },
    })
    .then((res) =>{
      if(res.status === 200){
        callback(res)
        console.log(res)
      }
    })
    .catch(err =>{
      console.log(err)
    });

}

export {fetch_api, post_login}
