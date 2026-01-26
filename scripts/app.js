(function (angular) {
  "use strict";

  var paaApp = angular.module("paaApp", []);

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  paaApp.directive("mathjaxBind", function () {
    return {
      restrict: "A",
      scope: {
        text: "@mathjaxBind",
      },
      controller: [
        "$scope",
        "$element",
        "$attrs",
        function ($scope, $element, $attrs) {
          $scope.$watch("text", function (value) {
            var $script = angular
              .element("<script type='math/tex'>")
              .html(value == undefined ? "" : value);
            $element.html("");
            $element.append($script);
            MathJax.Hub.Queue(["Reprocess", MathJax.Hub, $element[0]]);
          });
        },
      ],
    };
  });

  paaApp.directive("dynamic", function ($compile) {
    return {
      restrict: "A",
      replace: true,
      link: function (scope, ele, attrs) {
        scope.$watch(attrs.dynamic, function (html) {
          html = html.replace(
            /\$\$([^$]+)\$\$/g,
            '<span class="blue" mathjax-bind="$1"></span>'
          );
          html = html.replace(
            /\$([^$]+)\$/g,
            '<span class="red" mathjax-bind="$1"></span>'
          );
          ele.html(html);
          $compile(ele.contents())(scope);
        });
      },
    };
  });

  paaApp.controller("NewsController", [
    "$scope",
    "$document",
    function ($scope, $document) {
      $scope.selection = [];
      $scope.userText = "";
      $scope.totalErrors = 0;
      $scope.totalOK = 0;
      var tmpQQ;

      var OTAZKY;

      $scope.reset = function () {
        $scope.userText = "";
      };

      $scope.setQuestions = function (questions) {
        tmpQQ = questions;

        var fin = [];
        var iter = 1;
        $scope.question = [];
        $scope.textAnswer = "";

        $scope.questionText = questions.otazka;

        if (questions.note) {
          $scope.note = questions.note;
        } else {
          $scope.note = "";
        }

        if (questions.explanation) {
          $scope.explanation = questions.explanation;
        } else {
          $scope.explanation = "";
        }

        // Track if question is AI-generated
        $scope.isAiGenerated = questions.ai === true;

        angular.forEach(questions.odpovedi, function (value, key) {
          fin.push({
            text: value,
            isCorrect: questions.spravne[iter] === 1,
          });

          iter++;
        });

        // Shuffle the answers so they appear in random order
        fin = shuffleArray(fin);

        if (questions.odpoved) {
          $scope.textAnswer = questions.odpoved;
        }

        $scope.question = fin;
        $scope.total = OTAZKY.length;
      };

      $scope.solve = function (questions) {
        if ($scope.textAnswer) {
          $scope.ss = true;
          return;
        }

        var f = false;

        angular.forEach($scope.question, function (oo) {
          if ($scope.isCorrect(oo) === false) {
            f = true;
          }
        });

        if (f === true) {
          $scope.totalErrors++;

          OTAZKY.push(tmpQQ);
          OTAZKY = shuffleArray(OTAZKY);
        } else {
          $scope.totalOK++;
        }

        $scope.ss = true;
      };

      (function () {
        OTAZKY = shuffleArray(INITIAL_QUESTIONS);
        $scope.setQuestions(OTAZKY.pop());
      })();

      $scope.nextOK = function () {
        $scope.totalOK++;
        $scope.next();
      };

      $scope.nextWrong = function () {
        OTAZKY.push(tmpQQ);
        OTAZKY = shuffleArray(OTAZKY);

        $scope.totalErrors++;
        $scope.next();
      };

      $scope.next = function () {
        $scope.questionText = "";
        $scope.note = "";
        $scope.explanation = "";

        $scope.ss = false;
        $scope.selection = [];
        $scope.setQuestions(OTAZKY.pop());
        $scope.reset();
      };

      $scope.isCorrect = function (que) {
        var isSelected = $scope.selection.indexOf(que) > -1;
        var shouldBechecked = que.isCorrect;

        if (isSelected == shouldBechecked) {
          return true;
        } else {
          return false;
        }
      };

      // Toggle selection for a given answer
      $scope.toggleSelection = function toggleSelection(answer) {
        var idx = $scope.selection.indexOf(answer);

        if (idx > -1) {
          // Currently selected - remove it
          $scope.selection.splice(idx, 1);
        } else {
          // Newly selected - add it
          $scope.selection.push(answer);
        }
      };

      // Keyboard shortcuts
      $document.on("keydown", function (e) {
        // Ignore if user is typing in an input or textarea
        if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
          // Allow Ctrl+Enter or Meta+Enter to solve/continue even from textarea
          if (!((e.ctrlKey || e.metaKey) && e.key === "Enter")) {
            return;
          }
        }

        var key = e.key;

        // Space or Enter to solve/continue
        if (key === " " || key === "Enter") {
          // Don't prevent default for Enter if we are in textarea (handled by early return above,
          // but if we are here it's either not textarea or it's Ctrl+Enter)
          if (key === " ") e.preventDefault();

          $scope.$apply(function () {
            if (!$scope.ss) {
              $scope.solve();
            } else {
              if ($scope.textAnswer) {
                // If it's a text answer, we default to OK for "continue"
                $scope.nextOK();
              } else {
                $scope.next();
              }
            }
          });
        }

        // 1-9 for toggling options
        if (key >= "1" && key <= "9") {
          var index = parseInt(key) - 1;
          if (index < $scope.question.length && !$scope.ss) {
            $scope.$apply(function () {
              $scope.toggleSelection($scope.question[index]);
            });
          }
        }
      });

      $scope.$on("$destroy", function () {
        $document.off("keydown");
      });
    },
  ]);
})(angular);

