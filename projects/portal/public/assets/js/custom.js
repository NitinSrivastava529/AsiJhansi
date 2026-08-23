$(document).ready(function () {
    $('a[routerLink]').on('click', function () {
        //$('.navbar-toggler').trigger('click')
        window.location.reload()
    })
});