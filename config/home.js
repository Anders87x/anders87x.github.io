var Toast;
var table;

var config = {
    apiKey: "AIzaSyDCRX6-evODKIs1ZxKQ2wwsn5rzNnFn6qQ",
    authDomain: "webanderson-17143.firebaseapp.com",
    databaseURL: "https://webanderson-17143.firebaseio.com",
    storageBucket: "webanderson-17143.appspot.com",
};
firebase.initializeApp(config);

$(document).ready(function(){

    Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
    });

    var table = $('#tableprofesional').DataTable({
        "paging": true,
        "lengthChange": false,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": false,
    });

    firebase.database().ref('Profesional').on('child_added',function(snap){
        var dataSet = [[snap.child("nombre").val(),
                        snap.child("porcentaje").val(),
                        snap.child("total").val(),
                        '<button class="btn btn-warning btn-xs" onClick="editar(/'+ snap.getKey() +'/);"  id='+ snap.getKey() +'>Editar</button> <button class="btn btn-danger btn-xs" onClick="eliminar(/'+ snap.getKey() +'/);"  id=/'+ snap.getKey() +'/>Eliminar</button>',
                    ]];

        table.rows.add(dataSet).draw(false);
     
    });

});

$(document).on("click","#btnnuevo", function(){

    $('#OPC').val('NEW');

    Toast.fire({
        type: 'info',
        title: 'Se añadira un Nuevo Registro.'
    });

    $('#new_registro')[0].reset();

    $("#modalprofesional").modal('show');
});

function editar(_id) {

    $('#OPC').val('UPDATE');

    Toast.fire({
        type: 'warning',
        title: 'Se editará el registro seleccionado.'
    });

    var newtext = _id.toString();
    var secondtext = newtext.slice(1, -1);

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) { 
            var entry_id = secondtext;
            if (entry_id) {
                var Entry = firebase.database().ref('Profesional').child(entry_id);
                Entry.once('value', function (r) { 
                    var entry = r.val();
                    $('#entry_id').val(entry_id);
                    $('#nombre').val(entry.nombre);
                    $('#porcentaje').val(entry.porcentaje);
                    $('#total').val(entry.total);
                });
            }else{
                
            }
        }else{
            
        }
    });
    $("#modalprofesional").modal('show');
}

function eliminar(_id) {

    Toast.fire({
        type: 'error',
        title: 'Se elimino registro seleccionado.'
    });

    var newtext = _id.toString();
    var secondtext = newtext.slice(1, -1);

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) { 
            var entry_id = secondtext;
            firebase.database().ref('Profesional').child(entry_id).remove();
        }
    });

}

$(document).on("click","#btnguardar", function(){

    if ($('#OPC').val()=='NEW'){
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                var entry = {};
                entry.nombre = $('#nombre').val();
                entry.porcentaje = $('#porcentaje').val();
                entry.total = $('#total').val();
                
                var Profesional = firebase.database().ref('Profesional');
                
                Profesional.push(entry).then(function(data){
                    
                }).catch(function(error){
                    console.error(error);
                });

            }else{
               
            }
        });
    }else{
        var entry_id = $('#entry_id').val();
        var Entry = firebase.database().ref('Profesional').child(entry_id);

        Entry.transaction(function(entry){     
            entry = entry || {};
            entry.nombre = $('#nombre').val();
            entry.porcentaje = $('#porcentaje').val();
            entry.total = $('#total').val();

            return entry;

        }).then(function(){
            
        }).catch(function(error){
            console.error(error);
        });

    }

    Toast.fire({
        type: 'success',
        title: 'Registro guardado Correctamente.'
    });
                
    $("#modalprofesional").modal('hide');

});