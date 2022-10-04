/*применение класса ACTIVE и AJAX запрос на событии  MOUSEOVER
* т.к. пр клике срабатывает преход на другую страниу*/

$(function (){
    let currentUrl,bookDiv;
    $('.container div a').mouseover(function () {
        console.log($(this).attr('href')+'.json')
        currentUrl = $(this).attr('href')+'.json';
        $('.container div a').removeClass('active');
        $(this).addClass('active');
        $.ajax({
            url: currentUrl,
            dataType: "json",
        }).done(function (data) {

            $.each(data.works, function (index, bookInfo) {
                console.log(bookInfo);
                if (bookInfo.authors.length == 1)
                    var authorsInfo = `Author: <a href="https://openlibrary.org/${bookInfo.authors[0].key}/">${bookInfo.authors[0].name}</a>`;
                else {
                    var authorsInfo = 'Authors: ';
                    $.each(bookInfo.authors, function (i, author) {
                        authorsInfo += `<a href="https://openlibrary.org/${author.key}/">${author.name}</a>, `;
                    });
                    authorsInfo = authorsInfo.slice(0, -2);
                }
                bookDiv += `<div class="book">
                <div class="book-title">${bookInfo.title.length < 50 ? bookInfo.title : bookInfo.title.slice(0, 60) + '...'}</div>
                <div class="book-author">${authorsInfo}</div>
                <div class="book-cover"><img src="https://covers.openlibrary.org/b/id/${bookInfo.cover_id}-M.jpg"></div>
                <div class="book-hidden">
				    <a href="https://openlibrary.org${bookInfo.key}" class="btn btn-info" target="_blank">More Info</a>
				    ${bookInfo.availability.is_readable ? `<a href="https://openlibrary.org/borrow/ia/${bookInfo.ia}?ref=ol" class="btn btn-read" target="_blank">Read Book</a>` : ''}
                    </div>
                </div>`;
            })

            $('.row.books').html(bookDiv);

        }).fail(function (){
            console.log('fail to get data')
        })

    });


})

