const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {
        const res = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await res.text();

        if (result.includes("success")) {
            form.reset();

            // ✅ Show popup
            popup.classList.add("show");

            // Hide after 3 seconds
            setTimeout(() => {
                popup.classList.remove("show");
            }, 3000);

        } else {
            alert("Error sending message");
        }

    } catch {
        alert("Server error");
    }
});