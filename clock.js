//Open connection and inserting all those datas of world clock api
function clock(){
    let getClock = ["http://worldclockapi.com/api/json/est/now", "http://worldclockapi.com/api/json/utc/now", "http://worldclockapi.com/api/jsonp/cet/now?callback=mycallback"];
    let i = 0;
    let proxy = 'https://cors-anywhere.herokuapp.com/';

    for(i = 0; i <= getClock.length; i++){
        let request = new XMLHttpRequest();

        request.open("GET", proxy + getClock[i]);
        
        //Access request data
        request.onload = ()=> {
            if(request.status === 200){
                //Convert from Object To Json
                let replacedResultJSON = request.response;
                replacedResultJSON = replacedResultJSON.replace('mycallback(', '');
                replacedResultJSON = replacedResultJSON.replace(');', '');
                var JsonResponse = JSON.parse(replacedResultJSON)
                //Inserting on html those datas from json
                var html = 'Current data time: ' + JsonResponse.currentDateTime + '<br>'
                html += 'Current file time: ' + JsonResponse.currentFileTime + '<br>'
                html += 'Day of the week: ' + JsonResponse.dayOfTheWeek + '<br>'
                html += 'Is daylight savings time: ' + JsonResponse.isDayLightSavingsTime + '<br>'
                html += 'Ordinal date: ' + JsonResponse.ordinalDate + '<br>'
                html += 'Time zone name: ' + JsonResponse.timeZoneName + '<br> <br> <br>'

                
                document.write(html)
            } else if (i < 3) {
                document.write('Connection failed')
            }
        }

        request.send();

    }

}
