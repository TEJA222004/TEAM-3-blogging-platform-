document.addEventListener("DOMContentLoaded", function() {
    console.log("YoursBlog Loaded!");

    // ✅ Sidebar Active Link Handling
    const navLinks = document.querySelectorAll(".sidebar nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // ✅ Smooth Scroll for Internal Links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // ✅ Blog Page: Like, Share, and Comment
    document.querySelectorAll(".like-btn").forEach(button => {
        button.addEventListener("click", function() {
            let count = this.nextElementSibling;
            let likes = parseInt(count.innerText);
            likes++;
            count.innerText = likes;
            this.classList.add("liked");
        });
    });

    document.querySelectorAll(".share-btn").forEach(button => {
        button.addEventListener("click", function() {
            alert("Blog shared successfully!");
        });
    });

    document.querySelectorAll(".comment-btn").forEach(button => {
        button.addEventListener("click", function() {
            let commentBox = this.parentElement.querySelector(".comment-box");
            commentBox.classList.toggle("show");
        });
    });

    document.querySelectorAll(".submit-comment").forEach(button => {
        button.addEventListener("click", function() {
            let input = this.previousElementSibling;
            let commentText = input.value.trim();
            if (commentText !== "") {
                let newComment = document.createElement("p");
                newComment.innerText = commentText;
                this.parentElement.querySelector(".comments-list").appendChild(newComment);
                input.value = "";
            }
        });
    });

    // ✅ Search Page: Dynamic Search Functionality
    function searchBlogs() {
        let input = document.getElementById("searchInput").value.toLowerCase();
        let blogPosts = document.querySelectorAll(".blog-posts article");

        blogPosts.forEach(post => {
            let title = post.querySelector("h2").innerText.toLowerCase();
            if (title.includes(input)) {
                post.style.display = "block";
            } else {
                post.style.display = "none";
            }
        });
    }

    if (document.getElementById("searchInput")) {
        document.getElementById("searchInput").addEventListener("keyup", searchBlogs);
    }

    // ✅ Post Page: Upload and Preview Image
    if (document.getElementById("postImageInput")) {
        document.getElementById("postImageInput").addEventListener("change", function(event) {
            let file = event.target.files[0];
            if (file) {
                let reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById("postImagePreview").src = e.target.result;
                    document.getElementById("postImagePreview").style.display = "block";
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // ✅ Profile Page: Load User Data
    if (document.querySelector(".profile-info h2")) {
        let userName = "John Doe";  // Example, replace with actual user data
        document.querySelector(".profile-info h2").innerText = userName;
    }

    // ✅ General: Blog Cards Hover Effect
    document.querySelectorAll(".blog-card").forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.boxShadow = "0px 6px 15px rgba(0, 0, 0, 0.3)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
        });
    });

});
