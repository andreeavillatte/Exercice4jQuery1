$(document).ready(function () {
    //si je clique sur le bouton qui a le id=changerCouleur
    $('#changerCouleur').click(function () {
        //je change la couleur de tous mes li
        $('li').css('color', 'red');
    });
});