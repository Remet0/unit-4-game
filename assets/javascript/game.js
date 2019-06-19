//sets the objects to hold character values
let qui = {
            name:     'Qui-Gon',
            health:   120,
            attack:    10,
            counter:    11,
            status: 'alive'    
                            }
let luke = {
            name:   'Luke Skywalker',
            health:   100,
            attack:    8,
            counter:    15,
            status: 'alive'     
                            }
let vader = {
            name:   'Darth Vader',
            health:   200,
            attack:    9,
            counter:    10,
            status: 'alive'     
                           }
let maul = {
            name:   'Darth Maul',
            health:   150,
            attack:    7,
            counter:    20,
            status: 'alive'     
                            }
//sets a player variable that will hold the players info
let player;
let enemy;
let heroChoiceCount = 0;
let playerHP;
let enemyHP;
let playerAttPlus;
let enemyCount = 0;




    $('.heroContainer img').on('click',function(e){
        let character = $(this).data('character');
        if(character === 'quigon' && heroChoiceCount === 0){
            heroChoiceCount++;
            player = qui;
            playerHP = $('.quiHP');
            playerAttPlus = player.attack;
        //moves the player
        $('.player').append($('#qui').parent());
        //moves the enemies
        $('.possibleEnemy').append($('#luke').parent().css({'background-color' : 'red'}));
        $('.possibleEnemy').append($('#vader').parent().css({'background-color' : 'red'}));
        $('.possibleEnemy').append($('#maul').parent().css({'background-color' : 'red'}));

         $('.select-container').html('');
        }else if(character === 'luke'  && heroChoiceCount === 0){
            heroChoiceCount++;
            player = luke;
            playerHP = $('.lukeHP');
            playerAttPlus = player.attack;
        //moves the player
        $('.player').append($('#luke').parent());
        //moves the enemies
        $('.possibleEnemy').append($('#qui').parent().css({'background-color' : 'red'}));
        $('.possibleEnemy').append($('#vader').parent().css({'background-color' : 'red'}));
        $('.possibleEnemy').append($('#maul').parent().css({'background-color' : 'red'}));

         $('.select-container').html('');
        }else if(character === 'vader'  && heroChoiceCount === 0){
            heroChoiceCount++;
            player = vader;
            playerHP = $('.vaderHP');
            playerAttPlus = player.attack;
        //moves the player
        $('.player').append($('#vader').parent());
        //moves the enemies
        $('.possibleEnemy').append($('#qui').parent().css({'background-color' : 'red'}));
        $('.possibleEnemy').append($('#luke').parent().css({'background-color' : 'red'}));
        $('.possibleEnemy').append($('#maul').parent().css({'background-color' : 'red'}));

         $('.select-container').html('');
        }else if(character === 'maul'  && heroChoiceCount === 0){
            heroChoiceCount++;
            player = maul;
            playerHP = $('.maulHP');
            playerAttPlus = player.attack;
        //moves the player
        $('.player').append($('#maul').parent());
        //moves the enemies
        $('.possibleEnemy').append($('#qui').parent().css({'background-color' : 'red'}));
        $('.possibleEnemy').append($('#luke').parent().css({'background-color' : 'red'}));
        $('.possibleEnemy').append($('#vader').parent().css({'background-color' : 'red'}));

         $('.select-container').html('');
        }else if(heroChoiceCount != 0 && character === 'quigon'){
            enemy = qui;
            enemyHP = $('.quiHP');
            $('.enemy').append($('#qui').parent());
        }else if(heroChoiceCount != 0 && character === 'luke'){
            enemy = luke;
            enemyHP = $('.lukeHP');
            $('.enemy').append($('#luke').parent());
        }else if(heroChoiceCount != 0 && character === 'vader'){
            enemy = vader;
            enemyHP = $('.vaderHP');
            $('.enemy').append($('#vader').parent());
        }else if(heroChoiceCount != 0 && character === 'maul'){
            enemy = maul;
            enemyHP = $('.maulHP');
            $('.enemy').append($('#maul').parent());
        }
     })

     $(".attackBtn").on('click', function(){
         if(enemy.status === 'alive'){
         let playerAtt = Math.floor(Math.random() * player.attack);
         let enemyAtt = Math.floor(Math.random() * enemy.counter); 
            player.health -= enemyAtt;
            enemy.health -= playerAtt;
            player.attack += playerAttPlus;
            $('.battleText').html('you attacked ' + enemy.name + ' for ' + playerAtt + ' damage' + '<br>' + enemy.name + ' attacked you back for ' + enemyAtt + ' damage');
            playerHP.html('Health: ' + player.health);
            enemyHP.html('Health: ' + enemy.health);
            if(player.health <= 0){
                $('.battleText').html('You\'ve been defeated, GAME OVER!!!');
                $('.reset').append('Reset').css({'border' : '3px solid white'});
                $('.reset').on('click', function(){
                    location.reload();
                })
            }
        }
            if(enemy.health <= 0 && enemy.status === 'alive'){
                $('.battleText').html('You defeated ' + enemy.name + ' you can choose another opponent.')
                $('.enemy').html('');
                enemy.status = 'dead';
                enemyCount ++;
                player.attack /= 3;
            }
            if(enemyCount === 3){
                $('.possibleEnemy').html('You defeated all enemies. YOU WIN!!!').css({'margin-top' : '100px'});
                $('.battleText').html('');
                $('.reset').append('Play Again?').css({'border' : '3px solid white'});
                $('.reset').on('click', function(){
                    location.reload();
                })
            }
     })




