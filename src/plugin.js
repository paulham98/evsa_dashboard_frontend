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
function get_login_stat(url, token, callback = () =>{}){
  fetch(url, {
    headers: {
      'X-AUTH-TOKEN': token
    }
  }).then(data =>{
    callback(data)
  }).catch(err =>{
    console.log(err)
  })
}
function post_login(url, login_data, callback = () =>{}){
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
function post_excel_file(url, data, callback = () =>{}){
  axios.post(url, data)
    .then((res) =>{
      if(res.status === 200){
        callback(res)
      }
    })
    .catch((err) =>{
      console.log(err)
    })
}
function put_api(url, callback = () =>{}){
  axios.put(url)
    .then((res) =>{
      callback(res)

    })
    .catch((err) =>{
      console.log(err)
    })
}
export {get_login_stat,fetch_api, post_login,post_excel_file, put_api}
