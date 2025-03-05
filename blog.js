document.addEventListener("DOMContentLoaded", () => {
    const blogContainer = document.querySelector(".blog-container");
    const blogDetails = document.querySelector(".blog-details");
    const postTitle = document.getElementById("post-title");
    const postImage = document.getElementById("post-image");
    const postContent = document.getElementById("post-content");
    const backBtn = document.getElementById("back-btn");

    const blogPosts = [
        {
            title: "Understanding Vaccination for Dogs",
            image: "images/dog.jfif",
            content:    <p>Ensuring your dog receives the right vaccinations at the right time is crucial for their health. Below is a recommended vaccination schedule:</p>
            <table>
                <tr>
                    <th>Age</th>
                    <th>Core Vaccines</th>
                    <th>Non-Core Vaccines (Optional)</th>
                    <th>Notes</th>
                </tr>
                <tr>
                    <td>6-8 weeks</td>
                    <td>DHPP (Distemper, Hepatitis, Parvovirus, Parainfluenza)</td>
                    <td>Bordetella (Kennel Cough)</td>
                    <td>Start core vaccinations</td>
                </tr>
                <tr>
                    <td>10-12 weeks</td>
                    <td>DHPP (2nd dose)</td>
                    <td>Leptospirosis, Bordetella, Lyme</td>
                    <td>Optional vaccines based on risk</td>
                </tr>
                <tr>
                    <td>14-16 weeks</td>
                    <td>DHPP (3rd dose), Rabies</td>
                    <td>Leptospirosis, Canine Influenza</td>
                    <td>Rabies required by law in most areas</td>
                </tr>
                <tr>
                    <td>1 year</td>
                    <td>DHPP Booster, Rabies Booster</td>
                    <td>Bordetella, Leptospirosis, Lyme</td>
                    <td>Boosters to maintain immunity</td>
                </tr>
                <tr>
                    <td>Every 1-3 years</td>
                    <td>DHPP Booster, Rabies Booster</td>
                    <td>Leptospirosis, Bordetella, Lyme</td>
                    <td>As recommended by vet</td>
                </tr>
            </table>
            <p>Consult your veterinarian to determine the best vaccination plan for your dog's needs.</p>
        `,
    },
        {
            title: "Cattle Vaccination Guide",
            image: "images/cattle.jfif",
            content: "A detailed guide on vaccination schemes for cattle to prevent common diseases."
        },
        {
            title: "Poultry Immunization Best Practices",
            image: "images/poultry.png",
            content: "Discover the best immunization schedules for your poultry to ensure disease resistance."
        }
    ];

    function displayBlogPosts() {
        blogContainer.innerHTML = "";
        blogPosts.forEach((post, index) => {
            const postElement = document.createElement("div");
            postElement.classList.add("blog-post");
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <img src="${post.image}" alt="${post.title}">
                <p>${post.content.substring(0, 50)}...</p>
                <button onclick="viewPost(${index})">Read More</button>
            `;
            blogContainer.appendChild(postElement);
        });
    }

    window.viewPost = (index) => {
        const post = blogPosts[index];
        postTitle.textContent = post.title;
        postImage.src = post.image;
        postImage.alt = post.title;
        postContent.textContent = post.content;
        blogContainer.style.display = "none";
        blogDetails.style.display = "block";
    };

    backBtn.addEventListener("click", () => {
        blogContainer.style.display = "block";
        blogDetails.style.display = "none";
    });

    displayBlogPosts();
});
