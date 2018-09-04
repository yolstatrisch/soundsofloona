$(function(){
    var members = ['heejin', 'hyunjin', 'haseul', 'yeojin', 'vivi', 'kimlip',
                    'jinsoul', 'choerry', 'yves', 'chuu', 'gowon', 'olivia'];

    is_playing = false;

    init = function init(){
        $('#main-container').append(function(){
            var count = 6;
            var container = $('<div></div>');

            for(var i = 0; i < count; i++){
                var row = $('<div></div>').addClass('row');

                for(var j = 0; j < 2; j++){
                    for(var k = 0; k < 3; k++){
                        var node = $('<div></div>').addClass('button')
                            .addClass(members[i * 2 + j])
                            .attr('id', (i * 2 + j) * 3 + k)
                            .on('click', function(){
                                play($(this).attr('id'));
                            });
                        row.append(node);
                    }
                }

                container.append(row);
            }

            return container;
        });
    }

    play = function play(id){
        if(!is_playing){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'media/' + id + '.mp3');
            audioElement.play();

            audioElement.addEventListener("canplay",function(){
                is_playing = true;
                $('#' + id).addClass('active');
            });

            audioElement.addEventListener('ended', function() {
                is_playing = false;
                $('#' + id).removeClass('active');
            }, true);
        }
    }

    init();
});
