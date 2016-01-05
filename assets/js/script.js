var App = angular.module('App', []);


$('#openModal').click(function (e) {
    e.preventDefault();
    $('.popup').show();
});

$('.closeModal').click(function (e) {
    $('.popup').hide();
})


App.controller('PopUpCtrl', function ($scope, $http) {

var all = {
    'Nikon': {
        img: "images/nikondoc.jpg",
        products: [
        {
            code: 'HC',
            name: 'HC (Hard Coat)',
            options: [
                {name:'HC - indice 1.5', price: 100},
                {name:'HC - indice 1.56', price:100},
                {name:'HC - indice 1.59', price: 100},
                {name:'HC - indice 1.6', price: 100}
            ]
        },
        {
            code: 'HCC',
            name: 'HCC (Hard Clear Coat)',
            options: [
                {name:'HCC - indice 1.5', price: 100},
                {name:'HCC - indice 1.5 - Transitions', price: 100},
                {name:'HCC - indice 1.56', price:100},
                {name:'HCC - indice 1.56 - Transitions', price:100},
                {name:'HCC - indice 1.59', price: 100},
                {name:'HCC - indice 1.59 - Transitions', price: 100},
                {name:'HCC - indice 1.6', price: 100},
                {name:'HCC - indice 1.6 - Transitions', price: 100}
            ]
        },
        {
            code: 'ECC',
            name: 'ECC (Easy Clean Coat)',
            options: [
                {name:'ECC - indice 1.5', price: 100},
                {name:'ECC - indice 1.56', price:100},
                {name:'ECC - indice 1.59', price: 100},
                {name:'ECC - indice 1.6', price: 100}
            ]
        },
        {
            code: 'SCUV',
            name: 'SeeCoat UV',
            options: [
                {name:'SCUV - indice 1.5', price: 100},
                {name:'SCUV - indice 1.56', price:100},
                {name:'SCUV - indice 1.59', price: 100},
                {name:'SCUV - indice 1.6', price: 100}
            ]
        },
        {
            code: 'SCBUV',
            name: 'SeeCoat BLUE UV',
            options: [
                {name:'SCBUV - indice 1.5', price: 100},
                {name:'SCBUV - indice 1.56', price:100},
                {name:'SCBUV - indice 1.59', price: 100},
                {name:'SCBUV - indice 1.6', price: 100}
            ]
        },
        {
            code: 'SUN',
            name: 'SUN',
            options: [
                {name:'SUN - indice 1.5', price: 100},
                {name:'SUN - indice 1.56', price:100},
                {name:'SUN - indice 1.59', price: 100},
                {name:'SUN - indice 1.6', price: 100}
            ]
        },
        {
            code: 'SUNHCC',
            name: 'SUNHCC',
            options: [
                {name:'SUNHCC - indice 1.5', price: 100},
                {name:'SUNHCC - indice 1.56', price:100},
                {name:'SUNHCC - indice 1.59', price: 100},
                {name:'SUNHCC - indice 1.6', price: 100}
            ]
        }
    ]},
    'Essilor': {
        img: "images/essilordoc.jpg",
        products: [
        {
            code: 'CAUV',
            name: 'Crizal Alizé UV',
            options: [
                {name:'CAUV - indice 1.5', price: 100},
                {name:'CAUV - indice 1.5 - Transitions', price: 100},
                {name:'CAUV - indice 1.56', price:100},
                {name:'CAUV - indice 1.56 - Transitions', price:100},
                {name:'CAUV - indice 1.59', price: 100},
                {name:'CAUV - indice 1.59 - Transitions', price: 100},
                {name:'CAUV - indice 1.6', price: 100},
                {name:'CAUV - indice 1.6 - Transitions', price: 100}
            ]
        },
        {
            code: 'CFUV',
            name: 'Crizal Forte UV',
            options: [
                {name:'CFUV - indice 1.5', price: 100},
                {name:'CFUV - indice 1.5 - Transitions', price: 100},
                {name:'CFUV - indice 1.56', price:100},
                {name:'CFUV - indice 1.56 - Transitions', price:100},
                {name:'CFUV - indice 1.59', price: 100},
                {name:'CFUV - indice 1.59 - Transitions', price: 100},
                {name:'CFUV - indice 1.6', price: 100},
                {name:'CFUV - indice 1.6 - Transitions', price: 100}
            ]
        },
        {
            code: 'CPUV',
            name: 'Crizal Prevencia UV',
            options: [
                {name:'CPUV - indice 1.5', price: 100},
                {name:'CPUV - indice 1.5 - Transitions', price: 100},
                {name:'CPUV - indice 1.56', price:100},
                {name:'CPUV - indice 1.56 - Transitions', price:100},
                {name:'CPUV - indice 1.59', price: 100},
                {name:'CPUV - indice 1.59 - Transitions', price: 100},
                {name:'CPUV - indice 1.6', price: 100},
                {name:'CPUV - indice 1.6 - Transitions', price: 100}
            ]
        },
    ]}
};
    
    $scope.page = "brands";

    $scope.setBrand = function (brand) {
        $scope.brand = brand;
        $scope.selectedBrand = all[brand];
        $scope.page = "products";
    }

    $scope.close = function () {
        $scope.brand = null;
        $scope.selectedBrand = null;
        $scope.page = "brands";
        $scope.first_name = null;
        $scope.last_name = null;
        $scope.phone = null;
        $scope.shipping_address = null;
        $scope.indications = null;
        $scope.data_uri = null;
        $scope.selectedProduct = null;
        $scope.selectedOption = null;
        $('.popup').hide();
    }

    $scope.toCheckout = function () {
        $('.popup-body').scrollTop(0);
        $scope.page = "checkout";
        Webcam.set({
            width: 320,
            height: 240,
            dest_width: 640,
            dest_height: 480,
            image_format: 'jpeg',
            jpeg_quality: 90,
            force_flash: false,
            flip_horiz: true,
            fps: 45
        });
        Webcam.attach('#my_camera');
    }

    $scope.snap = function  () {
        Webcam.snap( function(data_uri) {
            document.getElementById('my_result').innerHTML = '<img src="'+data_uri+'"/>';
            $scope.data_uri = data_uri;
        });
    }

    $scope.resnap = function  () {
        $scope.data_uri = null;
    }

    $scope.confirm = function  () {
        var obj = {
            first_name: $scope.first_name,
            last_name: $scope.last_name,
            phone: $scope.phone,
            indications: $scope.indications,
            shipping_address: $scope.shipping_address,
            indications: $scope.indications,
            model: $scope.selectedOption.name,
            data_uri: $scope.data_uri
        };

        $.post('http://www.dropticien.com/ndidraty/ndidraty.php', obj, function () {
            $scope.close();
            $scope.$apply();
            window.alert("Commande envoyée");
        }).fail(function() {
            window.alert("Erreur, veuillez réessayer");
        });
    }

});
