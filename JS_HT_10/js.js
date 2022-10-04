$(()=>{
    /*на все заголови стиль*/
    $(':header').css({
        'text-align': 'center',
        'margin': '5px'
    });
    let page = 1;
    /*обработчик на клик поиск
    * фомируем AJAX запрос, создаем элементы,
    *  заполняем инормацией из запроса*/
    $('#searchBtn').click(function (){
        if ($('.filmList').length!=0) $('.filmList').empty();
        /*показываем лоадер*/
        $('section').css('display', 'block');
        $.ajax({
            url: `http://www.omdbapi.com/?s=${$('#title').val()}&plot=full&page=${page}&apikey=ffc1ffb7`,
            dataType: 'json',
        }).done(function (data) {
            $('.loader').css('display', 'block');
            console.log(data.Response);
            if (data.Response =='False'){
                alert('Nothing was find, try harder!')
                return;
            }
            $.each(data.Search, function (index, movieInfo) {
                console.log(movieInfo);
                let parent = $('.filmList');
                parent.append(
                    $('<div/>')
                        .addClass('filmBlock')
                        .append(
                            $('<img/>')
                                .addClass('poster')
                                .attr('src', `${movieInfo.Poster}`)
                        )
                        .append(
                            $('<p/>')
                                .text(`${movieInfo.Title}`)
                                .css({
                                    'font-weight': 'bold',
                                    'font-size': '12px'
                                })
                        )
                        .append(
                            $('<a/>')
                                .text(`${movieInfo.Year}`)
                                .css({
                                    'font-size': '12px'
                                })
                        )
                        .append(
                            $('<button/>')
                                .text('Details')
                                .attr('name', 'details')
                                .attr('id', `id_${movieInfo.imdbID}`)
                        )
                )
                /*скрываем лоадер*/
                $('.loader').css('display', 'none');
            })
            ModalHandler();
        }).fail(function () {
            console.log('Something goes wrong!')
        })
    });
    /*следующие 10 результатов запроса*/
    $('#more').click(function () {
        $.ajax({
            url: `http://www.omdbapi.com/?s=${$('#title').val()}&plot=full&page=${++page}&apikey=ffc1ffb7`,
            dataType: 'json',
        }).done(function (data) {
            /*            console.log(data);*/
            $.each(data.Search, function (index, movieInfo) {
/*                console.log(movieInfo);*/
                let parent = $('.filmList');
                parent.append(
                    $('<div/>')
                        .addClass('filmBlock')
                        .append(
                            $('<img/>')
                                .addClass('poster')
                                .attr('src', `${movieInfo.Poster}`)
                        )
                        .append(
                            $('<p/>')
                                .text(`${movieInfo.Title}`)
                                .css({
                                    'font-weight': 'bold',
                                    'font-size': '12px'
                                })
                        )
                        .append(
                            $('<a/>')
                                .text(`${movieInfo.Year}`)
                                .css({
                                    'font-size': '12px'
                                })
                        )
                        .append(
                            $('<button/>')
                                .text('Details')
                                .attr('name', 'details')
                                .attr('id', `id_${movieInfo.imdbID}`)
                        )
                )
            })
            ModalHandler();
        }).fail(function () {
            console.log('Something goes wrong!')
        })
    })

})
/*обработчик на модальное окно*/
function ModalHandler() {
    let modal = $('#myModal')[0];
    $('button[name="details"]').click(function() {
        modal.style.display = "block";
        FullDataHandler($(this).attr('id').split('_')[1]);
    });
    $('.close').click(function() { modal.style.display = "none"; });
    $(window).click(function(e) {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    })
}
/*заполнение модального окна информацией по запросу*/
function FullDataHandler(movieId) {
    console.log(movieId);

    $.ajax({
        url: `http://www.omdbapi.com/?i=${movieId}&plot=full&apikey=ffc1ffb7`,
        dataType: 'json'
    })
        .done(function (data) {
            console.log(data);
            let tableRows = $('.col2');
            tableRows[0].textContent = data.Title;
            tableRows[1].textContent = data.Released;
            tableRows[2].textContent = data.Genre;
            tableRows[3].textContent = data.Country;
            tableRows[4].textContent = data.Director;
            tableRows[5].textContent = data.Writer;
            tableRows[6].textContent = data.Actors;
            tableRows[7].textContent = data.Awards;
            $('#fullPoster').attr('src', `${data.Poster}`)
        })
}
