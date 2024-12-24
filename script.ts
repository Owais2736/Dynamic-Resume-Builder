interface ResumeData {
    name: string;
    email: string;
    phone: string;
    experience: string;
    skills: string;
}

document.getElementById("buildResume")?.addEventListener("click", () => {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    if (!name || !email || !phone || !experience || !skills) {
        alert("Please fill out all fields!");
        return;
    }

    const resumeData: ResumeData = {
        name,
        email,
        phone,
        experience,
        skills,
    };

    displayResume(resumeData);
});

function displayResume(data: ResumeData): void {
    const resumeOutput = document.getElementById("resumeOutput");
    if (!resumeOutput) return;

    resumeOutput.innerHTML = `
        <h2>Your Resume</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <h3>Experience</h3>
        <p>${data.experience}</p>
        <h3>Skills</h3>
        <p>${data.skills}</p>
    `;
}
