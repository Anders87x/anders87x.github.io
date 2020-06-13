var config = {
  apiKey: "AIzaSyDCRX6-evODKIs1ZxKQ2wwsn5rzNnFn6qQ",
  authDomain: "webanderson-17143.firebaseapp.com",
  databaseURL: "https://webanderson-17143.firebaseio.com",
  storageBucket: "webanderson-17143.appspot.com",
};
firebase.initializeApp(config);

var Personal = firebase.database().ref('Personal');
Personal.on('value', function (r) {
$('#divpersonal').html('Loading...');
  var html = '';
  r.forEach(function (item) {
    entry = item.val();

    html = 
    '<div class="skillbar" data-percent="'+ entry.porcentaje +'">'+
      '<div class="skillbar-title"><span>'+ entry.nombre +'</span></div>'+
        '<div class="skillbar-bar" style="width: '+ entry.porcentaje +'; visibility: visible;  -webkit-transform: scale(1); opacity: 1;transform: scale(1); opacity: 1;-webkit-transition: -webkit-transform 1.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.3s, opacity 1.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.3s; transition: transform 1.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.3s, opacity 1.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.3s; " data-sr-id="61"></div>'+
      '<div class="skill-bar-percent">'+ entry.total +'%</div>'+
    '</div>'+ html ;

    $('#divpersonal').html(html);

  });

});


var Profesional = firebase.database().ref('Profesional');
Profesional.on('value', function (r) {
$('#divprofesional').html('Loading...');
  var html = '';
  r.forEach(function (item) {
    entry = item.val();

    html = 
    '<div class="skillbar" data-percent="'+ entry.porcentaje +'">'+
      '<div class="skillbar-title"><span>'+ entry.nombre +'</span></div>'+
        '<div class="skillbar-bar" style="width: '+ entry.porcentaje +'; visibility: visible;  -webkit-transform: scale(1); opacity: 1;transform: scale(1); opacity: 1;-webkit-transition: -webkit-transform 1.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.3s, opacity 1.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.3s; transition: transform 1.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.3s, opacity 1.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.3s; " data-sr-id="61"></div>'+
      '<div class="skill-bar-percent">'+ entry.total +'%</div>'+
    '</div>'+ html ;

    $('#divprofesional').html(html);

  });

});
