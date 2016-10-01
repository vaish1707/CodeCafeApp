
var app = angular.module('codeApp', []);

function add() {
    console.log("inside add");

    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || { READ_WRITE: "readwrite" }; // This line should only be needed if it is needed to support the object's constants for older browsers
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

    if (!window.indexedDB) {
        window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
    }
    var submissions = [
        {
            "id": "1234A",
            "title": "Quick Sort",
            "source": "import java",
            "rating": 5,
            "level": "Medium",
            "status": "Accepted",
            "language": "Java",
            "users_attempted": 5
        },
        {
            "id": "1RT65",
            "title": "Bubble Sort",
            "source": "import java",
            "rating": 4,
            "level": "Easy",
            "status": "WrongAnswer",
            "language": "Java",
            "users_attempted": 7
        },
        {
            "id": "1L023",
            "title": "Swaggers",
            "source": "import java",
            "rating": 3,
            "level": "Easy",
            "status": "Memory/TimeLimitExceeded",
            "language": "Java",
            "users_attempted": 9
        },
        {
            "id": "1B872",
            "title": "Factorial",
            "source": "import java",
            "rating": 5,
            "level": "Hard",
            "status": "Accepted",
            "language": "C#",
            "users_attempted": 3
        },
        {
            "id": "12A98",
            "title": "Fibonacci",
            "source": "Using",
            "rating": 5,
            "level": "Medium",
            "status": "Accepted",
            "language": "C#",
            "users_attempted": 8
        },
        {
            "id": "1731M",
            "title": "Linked list",
            "source": "Using",
            "rating": 5,
            "level": "Medium",
            "status": "WrongAnswer",
            "language": "C#",
            "users_attempted": 10
        },
        {
            "id": "1094X",
            "title": "closures",
            "source": "import java",
            "rating": 4,
            "level": "Hard",
            "status": "skipped",
            "language": "JavaScript",
            "users_attempted": 34
        },
        {
            "id": "9814C",
            "title": "Prototypes",
            "source": "Script src",
            "rating": 5,
            "level": "Hard",
            "status": "Accepted",
            "language": "JavaScript",
            "users_attempted": 55
        },
        {
            "id": "2987A",
            "title": "Scopes",
            "source": "require",
            "rating": 5,
            "level": "Easy",
            "status": "Accepted",
            "language": "JavaScript",
            "users_attempted": 50
        },
        {
            "id": "1438B",
            "title": "Functions",
            "source": "define",
            "rating": 3,
            "level": "Medium",
            "status": "Runtime/CompilationError",
            "language": "JavaScript",
            "users_attempted": 53
        }
    ]
    const dbName = "codemanager";

    var request = indexedDB.open(dbName, 2);

    request.onerror = function (event) {

    };
    request.onupgradeneeded = function (event) {
        var db = event.target.result;


        var objectStore = db.createObjectStore("coderecord", { keyPath: "id" });


        objectStore.createIndex("title", "title", { unique: false });


        objectStore.createIndex("level", "level", { unique: false });

        objectStore.createIndex("language", "language", { unique: false });

        objectStore.transaction.oncomplete = function (event) {


            var customerObjectStore = db.transaction("coderecord", "readwrite").objectStore("coderecord");
            for (var i in submissions) {
                console.log("inside forloop");
                customerObjectStore.add(submissions[i]);


            }


        };
    };

}

app.controller('detailCtrl', function ($scope) {

    console.log("inside controller");


    $scope.doadd = function () {
        add();
    }


});