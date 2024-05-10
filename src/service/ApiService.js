import { API_BASE_URL } from "../api-config";

export function call(api, num, method, req){
    let options = {
        headers: new Headers({
            "Content-type": "application/json"
        }),
        url: API_BASE_URL + api + "?num=" + num,
        method: method
    };

    if(req){
        options.body = JSON.stringify(req);
    }

    
    return fetch(options.url, options)
            .then((res) => { // fetch의 return 타입이 프로미스 라는 것인데 그것의 메소드
                if(res.status === 200){
                    return res.json();
                }
            }).catch((error) => {
                console.log(error);
            });
}