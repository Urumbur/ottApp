export const fetchTokenAPI = () => fetch("https://thebetter.bsgroup.eu/Authorization/SignIn", {
    method: 'POST',
    body: JSON.stringify({}),
    headers: {
        'Content-Type': 'application/json',
    }
    })
    .then(response => response.json())
    .then(result => result.AuthorizationToken.Token)
    .catch(error => console.log('error', error));

const mediaBody = {
    "MediaListId":2,
    "IncludeCategories":false,
    "IncludeImages":true,
    "IncludeMedia":false,
    "PageNumber":1,
    "PageSize":15
}

export const fetchMediaList = (token: string) => fetch("https://thebetter.bsgroup.eu/Media/GetMediaList", {
    method: 'POST',
    body: JSON.stringify(mediaBody),
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    })
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));

export const fetchFilmPlayer = (id: number, token: string) => fetch("https://thebetter.bsgroup.eu/Media/GetMediaPlayInfo", {
    method: 'POST',
    body: JSON.stringify({
        "MediaId": id,
        "StreamType": "TRIAL"
    }),
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    })
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));


export const descriptionLength = (text: any) => {
    if(text.length > 200) return `${text.substring(0,200)} ...`;
    return text;
}
