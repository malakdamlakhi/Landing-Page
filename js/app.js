document.addEventListener("DOMContentLoaded", function() {
    const navbarList = document.getElementById("navbar__list");

    // تأكد من أن القائمة فارغة قبل البناء
    navbarList.innerHTML = '';

    // الحصول على جميع الأقسام
    const sections = document.querySelectorAll("section");

    // بناء قائمة التنقل الديناميكية
    sections.forEach(section => {
        const sectionId = section.getAttribute("id");
        const sectionName = section.getAttribute("data-nav");

        const listItem = document.createElement("li");
        const link = document.createElement("a");

        link.href = `#${sectionId}`;
        link.textContent = sectionName;

        listItem.appendChild(link);
        navbarList.appendChild(listItem);
    });
});



