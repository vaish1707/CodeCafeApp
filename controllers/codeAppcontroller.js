var app = angular.module('codeAppmodule', []);



app.controller('statusController', function ($scope, $http) {
    $http.get('status.json').success(function (data) {
        $scope.allStatus = data.status_result;
    })
});

app.controller('codeController', function ($scope, $http) {
    $http.get('codeJson.json').success(function (data) {
        $scope.codeValue = data.code_result;
    })
});

app.controller('analysisController', function ($scope, $http) {
    $http.get('analysis.json').success(function (data) {
        $scope.analysisValue = data.submissions;
    })
});

app.controller('levelController', function ($scope, $http) {
    $http.get('level_details.json').success(function (data) {
        $scope.levelValues = data.level_result;
    })
});

app.controller('submissionController', function ($scope, $http) {
    $http.get('submission.json').success(function (data) {
        $scope.submissionValue = data.sub_result;
    })
});

