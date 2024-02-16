document.addEventListener("DOMContentLoaded", function() {
    const addCourseForm = document.getElementById("addCourseForm");
    const coursesList = document.getElementById("coursesList");

    addCourseForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const courseName = document.getElementById("courseName").value;
        const instructor = document.getElementById("instructor").value;
        const duration = document.getElementById("duration").value;

        // Create new course element
        const courseElement = document.createElement("div");
        courseElement.classList.add("course");
        courseElement.innerHTML = `
            <h2 class="course-title">${courseName}</h2>
            <p class="course-details">Instructor: ${instructor}</p>
            <p class="course-details">Duration: ${duration}</p>
        `;

        // Append new course element to courses list
        coursesList.appendChild(courseElement);

        // Reset form
        addCourseForm.reset();
    });
});

