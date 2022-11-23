var topics = document.querySelectorAll('li[ng-repeat="q in qt.qlist"]');
for (let topic of topics) {
    const description = topic.querySelector('p[ng-bind-html="q.q | trustedHtml"]');
    const options = topic.querySelectorAll('span[ng-click="qt124Sel(option.value)"]');
    options[Math.floor(Math.random()*(3-0+1))+0].click();
}
