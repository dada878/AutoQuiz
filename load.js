var topics = document.querySelectorAll('li[ng-repeat="q in qt.qlist"]');
for (let topic of topics) {
    const description = topic.querySelector('p[ng-bind-html="q.q | trustedHtml"]');
    const options = topic.querySelectorAll('span[ng-click="qt124Sel(option.value)"]');
    for (let opt of options) {
        try {
            for (let ansOpt of answer[description.innerHTML]) {
                if (ansOpt == opt.innerHTML) {
                    opt.click();
                }
            }
        } catch {}

    }
}
