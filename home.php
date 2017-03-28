<div class='container'>
    <div class='well'>
        <h1>Välkommen!</h1>
        <span id='home'></span>
    </div>
</div>
<?php 
class Balls {
    private $ball1 = 5;
    private $looks = 'hairy';
    private $boom = 'hejnhurnmårndu';

    function happy() {
        echo "I have ". $this->ball1 ." balls which are ". $this->looks ."!";
        print_r(explode('n', $this->boom));
    }
}

$ball = new Balls;
 echo $ball->happy();
?>