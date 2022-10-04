/*На ходим кнопку, инкрементируем значение на 1, выводим в span*/
$(function () {
   $('#readers-plus').mousedown(function () {
      let count = parseInt($(this).attr('data-num'));
      $(this).attr('data-num', ++count);
      $('#num-of-readers').text(`You are ${count} reader now`);
   })
});
