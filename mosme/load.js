var answerSaver = {}; // enter something here...
var questions = document.querySelectorAll(".question");
for (let question of questions) {
    const description = question.querySelector(".question-desc").innerHTML.split("<br")[0].replace(/<img.+>/,"<img>").trim();
    const options = question.querySelector(".options");
    const optionDescription = [...options.children].reduce((val, cur) => {
        return [...val, cur.querySelector(".odesc").innerHTML.trim().replace(/<img.+>/,"<img>")];
    }, []);
    const textOptions = optionDescription.sort().join(",");
    const answer = answerSaver[description+textOptions];
    let flag = false;
    for (const opt of options.children) {
        const optionDescription = opt.querySelector(".odesc").innerHTML.trim();
        if (optionDescription == answer) {
          flag = true;
          opt.querySelector(".option-button").click();
        }
    }
    if (!flag) options.children[Math.floor(Math.random()*(3-0+1))+0].querySelector(".option-button").click();
}
