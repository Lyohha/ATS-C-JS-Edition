'use strict';

$(document).ready(function() {

    window.mainController = {
        task: null,
        setTask: function(task) {

            window.mainController.task = task;
            window.mainController.init();

            task.setTemplate($('.task'));
            $('header').html(task.getName());
        },
        checkButton: function(event) {
            event.preventDefault();

            let $this = $(this);

            let answers = window.mainController.task.getAnswers();

            let keys = Object.keys(answers);

            for(let i = 0; i < keys.length; i++) {
                let $line = $('[js-answer=' + i + ']');
                let $input = $line.find('input');
                let $result = $line.find('.answers-result');

                if(answers[i].toString() == $input.val().trim()) {
                    $result.html('вірно');
                    $result.removeClass('answers-result-red').removeClass('answers-result-white').addClass('answers-result-green');
                }
                else {
                    $result.html('невірно');
                    $result.removeClass('answers-result-green').removeClass('answers-result-white').addClass('answers-result-red');
                    break;
                }
            }
        },
        rightAnswersButton: function(event) {
            event.preventDefault();

            let $this = $(this);

            let answers = window.mainController.task.getAnswers();

            let keys = Object.keys(answers);

            for(let i = 0; i < keys.length; i++) {
                let $line = $('[js-answer=' + i + ']');
                let $result = $line.find('.answers-result');
                $result.html(answers[i]);
                $result.removeClass('answers-result-red').removeClass('answers-result-green').addClass('answers-result-white');
            }

            $('[js-check]').addClass('disable');
        },
        initAnswersLines: function() {
            let answers = window.mainController.task.getAnswers();

            let keys = Object.keys(answers);

            for(let i = 0; i < keys.length; i++) {
                let line = $('<div class="answers-line"><input class="aswers-input"/><div class="answers-result"></div></div>');
                line.attr('js-answer', i);
                $('.answers').append(line);
            }
        },
        init: function() {
            $('[js-check]').click(window.mainController.checkButton);
            $('[js-right-answers]').click(window.mainController.rightAnswersButton);
            $('[js-next]').click(function(event) {
                event.preventDefault();
                window.location.reload();
            });
            window.mainController.initAnswersLines();
        },
    };

    let script = document.createElement('script');
    script.setAttribute('src', 'main.js');

    document.head.appendChild(script);

});