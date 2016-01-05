var App = angular.module('App', []);


function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}


App.controller('PopUpCtrl', function ($scope, $sce) {

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
            shipping_address: $scope.shipping_address,
            indications: $scope.indications,
            model: $scope.selectedOption.name,
            data_uri: $scope.data_uri
        };
        var b64 = btoa(JSON.stringify(obj));
        download('commande.txt', b64);
        window.location.href = "mailto:ndidraty@gmail.com?subject=Commande&body=Veuillez joindre le fichier de la commade que vous avez téléchargé";
    }

});
