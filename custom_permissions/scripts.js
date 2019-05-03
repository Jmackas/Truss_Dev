adminInterface();
readOnly();

function adminInterface() {
    // Detect the username
    let userName = document.querySelector(".profile-name").innerText;

    // Arrays with all the course advisors
    let CourseAdvisor = ["JAMES MACKAY", "LINUS HOGAN"];

    for (let i = 1; i < CourseAdvisor; i++) {
        if (userName == CourseAdvisor[i]) {
            readOnly();
        }
    }

}

function readOnly() {
    let hello = document.querySelectorAll('[value="submit"]');

    for (i = 0; i < hello.length; i++) {
        hello[i].disabled = true;
    }
}
