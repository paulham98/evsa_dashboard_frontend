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
function fetch_api(url  ,callback = () =>{}){
  //let api = `${config.hostname}/api/v1/subsidy_info/0?param1=1123`;
  //console.log(url);
  // console.log(callback)
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

function post_login(url, login_data, callback = () =>{}){
  // const option = {
  //   method: 'POST',
  //   header:{
  //     'Accept': 'application/json',
  //     'Content-Type' : 'application/json'
  //   },
  //   data: login_data
  // }
  // let option = {
  //   "loginInfo": login_data
  // }
  console.log(login_data)
  axios
    .post(url, login_data)
    .then((res) =>{
      if(res.status === 200){
        // console.log(res)
        callback(res)
      }
    })
    .catch((err) =>{
      console.log(err)
    });

}

export {fetch_api, post_login}
