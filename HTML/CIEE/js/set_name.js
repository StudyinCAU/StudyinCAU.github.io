// set_name.js

function adjustFontSize(element, maxFontSize, minFontSize) {
    let fontSize = maxFontSize;
    element.style.fontSize = fontSize + 'px';

    while (element.scrollWidth > element.offsetWidth && fontSize > minFontSize) {
        fontSize -= 1;
        element.style.fontSize = fontSize + 'px';
    }
}

function adjustFontSizeForDynamicElements() {
    const dynamicElements = document.querySelectorAll('.dynamic-font');
    dynamicElements.forEach(element => {
        adjustFontSize(element, 20, 10);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    adjustFontSizeForDynamicElements();
});

window.addEventListener("resize", function() {
    adjustFontSizeForDynamicElements();
});

// // 分类过滤功能
// document.addEventListener("DOMContentLoaded", function() {
//     const filterLinks = document.querySelectorAll(".cate_a");
//     filterLinks.forEach(link => {
//         link.addEventListener("click", function(event) {
//             event.preventDefault();
//             const category = link.getAttribute("data-category");
//             filterDevices(category);
//         });
//     });
//
//     // 初始加载全部设备
//     filterDevices("全部");
// });
//
// function filterDevices(category) {
//     const lists = document.querySelectorAll(".list");
//     lists.forEach(list => {
//         const categories = list.getAttribute("data-category").split(' ');
//         if (category === "全部" || categories.includes(category)) {
//             list.style.display = "flex";
//         } else {
//             list.style.display = "none";
//         }
//     });
// }

