$(document).ready(function () {
    $('#table-mahasiswa').DataTable({
        processing: true,
        serverside: true,
        ajax: {
            url: '{{ route("mahasiswa.index") }}',
            type: 'GET'
        },
        columns: [{
                data: 'id',
                name: 'id'
            },
            {
                data: 'nama_mahasiswa',
                name: 'nama_mahasiswa'
            },
            {
                data: 'kelas',
                name: 'kelas'
            },
            {
                data: 'umur',
                name: 'umur'
            },
            {
                data: 'alamat',
                name: 'alamat'
            },
        ],
        order: [
            [0, 'asc']
        ]
    });
});


/* Custom filtering function which will search data in column four between two values */
$.fn.dataTable.ext.search.push(
    function (settings, data, dataIndex) {
        var min = parseInt($('#min').val(), 10);
        var max = parseInt($('#max').val(), 10);
        var age = parseFloat(data[3]) || 0; // use data for the age column

        if ((isNaN(min) && isNaN(max)) ||
            (isNaN(min) && age <= max) ||
            (min <= age && isNaN(max)) ||
            (min <= age && age <= max)) {
            return true;
        }
        return false;
    }
);

$(document).ready(function () {
    var table = $('#table-mahasiswa').DataTable();

    // Event listener to the two range filtering inputs to redraw on input
    $('#min, #max').keyup(function () {
        table.draw();
    });
});
