const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

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
            successMsg.style.display = "block";  // show message
            form.reset(); // clear form
        } else {
            alert("Error sending message");
        }

    } catch (error) {
        console.log(error);
        alert("Server error");
    }
});