var topics = document.querySelectorAll('li[ng-repeat="q in qt.qlist"]');
var answer = {};
for (let topic of topics) {
    const description = topic.querySelector('p[ng-bind-html="q.q | trustedHtml"]');
    const answerOption = topic.querySelector('.rightOption');
    answer[description.innerHTML] = answerOption.innerHTML;
}
