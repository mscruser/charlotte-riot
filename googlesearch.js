var url=
"https://push.superfeedr.com/?hub.mode=retrieve&hub.topic=http%3A%2F%2Fwww.charlotteobserver.com%2Fnews%2Flocal%2F%3FwidgetName%3Drssfeed%26widgetContentId%3D8167599%26getXmlFeed%3Dtrue&count=20&format=json&authorization=cHNlZWxpbmdlcjozOWFjNDk4YzllMWUyODVkZmU2YTA1ZmM3MWQzYzRkZg%3D%3D&";

$.ajax({
  type: "GET",
  url: url,
  dataType: 'json',
  success: parseData
});

function parseData(json){
  console.log(json);
  var html = "";

  $.each(json.items,function(i,data){

            var datePub = moment(data.published * 1000).format("DD-MM-YYYY HH:mm:ss");
            var dateUpdate = moment(data.updated * 1000).format("DD-MM-YYYY HH:mm:ss");


            html += '<div class="article-div">';
            html += '<a href="' + data.id + '">' + '<p>' + data.title + '</p></a>';
            html += '<p> Published: ' + datePub + '</p>';
            html += '<p> Updated: ' + dateUpdate + '</p>';
            html += '</div>';
  });
$("#feed").append(html);
}
