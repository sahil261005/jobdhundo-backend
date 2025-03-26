document.addEventListener("DOMContentLoaded", function () {
  const domainSelect = document.getElementById("domainSelect");
  const jobList = document.getElementById("jobList");

  // Array of job objects updated to reflect India-based locations
  const jobs = [
    {
      title: "Frontend Developer",
      company: "Meta",
      location: "Bengaluru, India",
      domain: "Web Development",
    },
    {
      title: "Backend Developer",
      company: "TCS",
      location: "Mumbai, India",
      domain: "Web Development",
    },
    {
      title: "Full Stack Developer",
      company: "Wipro",
      location: "Hyderabad, India",
      domain: "Web Development",
    },
    {
      title: "Data Analyst",
      company: "Capgemini",
      location: "Chennai, India",
      domain: "Data Science",
    },
    {
      title: "Data Scientist",
      company: "Accenture",
      location: "Pune, India",
      domain: "Data Science",
    },
    {
      title: "Machine Learning Engineer",
      company: "IBM India",
      location: "Gurugram, India",
      domain: "Data Science",
    },
    {
      title: "AI Engineer",
      company: "HCL",
      location: "Noida, India",
      domain: "Artificial Intelligence",
    },
    {
      title: "Cognitive Computing Specialist",
      company: "Tech Mahindra",
      location: "Kolkata, India",
      domain: "Artificial Intelligence",
    },
    {
      title: "Cyber Security Analyst",
      company: "L&T Infotech",
      location: "Pune, India",
      domain: "Cyber Security",
    },
    {
      title: "Ethical Hacker",
      company: "Mahindra Satyam",
      location: "Chandigarh, India",
      domain: "Cyber Security",
    },
    {
      title: "Cloud Engineer",
      company: "Reliance Jio",
      location: "Mumbai, India",
      domain: "Cloud Computing",
    },
    {
      title: "AWS Solutions Architect",
      company: "Amazon India",
      location: "Bengaluru, India",
      domain: "Cloud Computing",
    },
    {
      title: "DevOps Engineer",
      company: "Zoho",
      location: "Chennai, India",
      domain: "Cloud Computing",
    },
    {
      title: "Blockchain Developer",
      company: "Infosys",
      location: "Pune, India",
      domain: "Blockchain",
    },
    {
      title: "Smart Contract Developer",
      company: "Wipro",
      location: "Hyderabad, India",
      domain: "Blockchain",
    },
    {
      title: "Embedded Systems Engineer",
      company: "Tata Motors",
      location: "Jamshedpur, India",
      domain: "Embedded Systems",
    },
    {
      title: "IoT Engineer",
      company: "Bosch India",
      location: "Bengaluru, India",
      domain: "Embedded Systems",
    },
    {
      title: "Game Developer",
      company: "Nazara Technologies",
      location: "Mumbai, India",
      domain: "Game Development",
    },
    {
      title: "Unity Developer",
      company: "Zynga India",
      location: "Hyderabad, India",
      domain: "Game Development",
    },
    {
      title: "Software Engineer",
      company: "Adobe India",
      location: "Noida, India",
      domain: "Software Development",
    },
    {
      title: "Mobile App Developer",
      company: "Flipkart",
      location: "Bengaluru, India",
      domain: "Software Development",
    },
  ];

  // Function to display jobs based on selected domain
  function displayJobs(selectedDomain) {
    jobList.innerHTML = ""; // Clear previous list

    // Filter jobs if a specific domain is selected
    const filteredJobs =
      selectedDomain === "All"
        ? jobs
        : jobs.filter((job) => job.domain === selectedDomain);

    // If no jobs found, display a message
    if (filteredJobs.length === 0) {
      jobList.innerHTML = `<p>No jobs found for this domain.</p>`;
      return;
    }

    // Display each job
    filteredJobs.forEach((job) => {
      const jobItem = document.createElement("li");
      jobItem.innerHTML = `
          <h3>${job.title}</h3>
          <p><strong>Company:</strong> ${job.company}</p>
          <p><strong>Location:</strong> ${job.location}</p>
          <p><strong>Domain:</strong> ${job.domain}</p>
        `;
      jobList.appendChild(jobItem);
    });
  }

  // When the dropdown value changes, display the corresponding jobs
  domainSelect.addEventListener("change", function () {
    displayJobs(domainSelect.value);
  });

  // On page load, display all jobs
  displayJobs("All");
});
