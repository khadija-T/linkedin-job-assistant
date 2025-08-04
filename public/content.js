// Check if the page is a LinkedIn job posting
if (window.location.href.includes("linkedin.com/jobs/view/")) {
  console.log("Detected LinkedIn job posting page!");

  // Extract job details using the selectors from Task 2
  const jobData = {
    title:
      document
        .querySelector(".job-details-jobs-unified-top-card__job-title")
        ?.textContent?.trim() || "Not found",
    company:
      document
        .querySelector(".job-details-jobs-unified-top-card__company-name")
        ?.textContent?.trim() || "Not found",
    link: window.location.href,
  };

  console.log("Job Data:", jobData);
} else {
  console.log("Not a LinkedIn job posting page.");
}
