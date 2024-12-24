var _a;
(_a = document.getElementById("buildResume")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    if (!name || !email || !phone || !experience || !skills) {
        alert("Please fill out all fields!");
        return;
    }
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        experience: experience,
        skills: skills,
    };
    displayResume(resumeData);
});
function displayResume(data) {
    var resumeOutput = document.getElementById("resumeOutput");
    if (!resumeOutput)
        return;
    resumeOutput.innerHTML = "\n        <h2>Your Resume</h2>\n        <p><strong>Name:</strong> ".concat(data.name, "</p>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n        <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n        <h3>Experience</h3>\n        <p>").concat(data.experience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(data.skills, "</p>\n    ");
}
