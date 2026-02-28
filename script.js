// Example: Add new website dynamically

function addWebsite(name, description, link) {
    const container = document.getElementById("projectContainer");

    const html = `
    <div class="col-md-4 mb-4">
        <div class="card shadow">
            <div class="card-body text-center">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${description}</p>
                <a href="${link}" target="_blank" class="btn btn-dark">Visit Website</a>
            </div>
        </div>
    </div>
    `;

    container.innerHTML += html;
}

// Example websites (Delete these and add yours)
addWebsite("OfficialLinkPK", "Government Info Portal is a responsive web application designed to deliver government-related information efficiently, offering users quick access to services, updates, and official resources.", "https://muhammad-junaid-khan.github.io/officiallinkpk/index.html");
addWebsite("Blog Website", "Modern Blog Platform", "#");

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before sending.");
        return;
    }

    const subject = "New Contact Message from " + name;
    const body = "Name: " + name + "%0D%0A" +
                 "Email: " + email + "%0D%0A%0D%0A" +
                 "Message:%0D%0A" + message;

    window.location.href = "mailto:junaidkhanldk@gmail.com?subject=" + subject + "&body=" + body;

    document.getElementById("contactForm").reset();
});