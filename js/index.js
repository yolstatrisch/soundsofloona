$(function(){
    var members = ['heejin', 'hyunjin', 'haseul', 'yeojin', 'vivi', 'kimlip',
                    'jinsoul', 'choerry', 'yves', 'chuu', 'gowon', 'olivia'];

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
                                console.log($(this).attr('id'));
                            });
                        row.append(node);
                    }
                }

                container.append(row);
            }

            return container;
        });
    }

    init();
});
