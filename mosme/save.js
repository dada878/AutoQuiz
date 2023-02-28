var answerSaver = {};
var questionGroup = document.querySelector(".qTypeGroup");
var questionElements = [...questionGroup.children]
    .filter(item => item.tagName != 'HR')
    .filter(item => !item.classList.contains("panel"));
questionElements = questionElements.slice(1);
for (let i = 0; i < questionElements.length; i+=2) {
    const description = [...questionElements[i].querySelector('span[style*="font-weight"]').innerHTML.split(".")].slice(1).join(".").split("<br")[0].replace(/<img.+>/,"<img>").trim();
    const options = questionElements[i+1].children[0];
    const optionDescription = [...options.children].reduce((val, cur) => {
        return [...val, (cur.innerHTML.slice(4).replace(/<img.+>/,"<img>").split("<span")[0].trim())];
    }, []);
    const textOptions = optionDescription.sort().join(",");
    let answer = [...options.children]
        .filter(opt => opt.style.fontWeight == "bolder")[0].innerHTML
        .slice(4).replace(/<img.+>/,"<img>").split("<span")[0].trim();
    answerSaver[description+textOptions] = answer;
}
answerSaver
