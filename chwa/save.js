var topics = document.querySelectorAll('li[ng-repeat="q in qt.qlist"]');
var answer = {};
for (let topic of topics) {
    const description = topic.querySelector('p[ng-bind-html="q.q | trustedHtml"]');
    const answerOptions = topic.querySelectorAll('.rightOption');
    answer[description.innerHTML] = [];
    for (let opts of answerOptions) {
        answer[description.innerHTML].push(opts.innerHTML);
    }
}
