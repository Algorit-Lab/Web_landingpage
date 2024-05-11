const baseApi = "/apis"; //nginx port
// const baseApi = "http://localhost:3005"; // outter server port
var VisitorAPI = function (t, e, a) { var s = new XMLHttpRequest; s.onreadystatechange = function () { var t; s.readyState === XMLHttpRequest.DONE && (200 === (t = JSON.parse(s.responseText)).status ? e(t.data) : a(t.status, t.result)) }, s.open("GET", "https://api.visitorapi.com/api/?pid=" + t), s.send(null) };

if (!document.cookie.includes('visitorSID')) {
    VisitorAPI("GFS4EBMQxQFg6cQr1mXh", (data) => {
        fetch(`${baseApi}/userdata`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data),
        }).then(response => response.json()).then(data => {
            console.log('Success:', data);
        }).catch((error) => {
            console.error('Error:', error);
        });
    })
    document.cookie = "visitorSID=vsid;";
}
