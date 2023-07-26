$(function () {
    $('#go').click(function () {

        function checkcomp(){
            if(iscomplete == false){
                iscomplete = true;
            } else{
                place = 'second';
            }
        }

        var carwidth = $('#car1').width();
        var racetime_1 = Math.floor((Math.random()*5000)+1);
        var racetime_2 = Math.floor((Math.random()*5000)+1);
        var iscomplete = false;
        var place = 'first';

        $('#car1').animate({
            left: '1400px'
        }, racetime_1, function () {
            checkcomp();

            $('#raceinfo1 span').text('Finished in ' + place + ' place and clocked in at ' + racetime_1 + ' milliseconds');
        });

        $('#car2').animate({
            left: '1400px'
        }, racetime_2, function () {
            checkcomp();

            $('#raceinfo2 span').text('Finished in ' + place + ' place and clocked in at ' + racetime_2 + ' milliseconds');
        });

    });

    $('#reset').click(function () {
        $('.car').css('left','0');
        $('.raceinfo').span.text(' ');
    })
});
