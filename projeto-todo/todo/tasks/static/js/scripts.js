$(document).ready(function() {

    var baseUrl = 'http://localhost:8000/';
    var deleteBtn = $('.delete-btn');
    var searchBtn = $('#delete-btn');
    var searchForm = $('#search-form');
    var filter = $('#filter');

    $(deleteBtn).on('click', function(e) {

        e.preventDefault();

        var delLink = $(this).attr('href');
        var result = confirm('Quer deletar essa tarefa?');

        if (result) {
            window.location.href = delLink;
        }

    });

    $(deleteBtn).on('click', function() {
        searchForm.submit();
    });

    $(filter).change(function(){
        var filter = $(this).val();
        window.location.href = baseUrl + '?filter=' + filter;
    });

});