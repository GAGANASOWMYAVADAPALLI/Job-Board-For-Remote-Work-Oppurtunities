const jobs = [
    {
      title: "Software Engineer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5B7HkT_vVpF4GwGAfPqHj8w7xmAEMixCHng&usqp=CAU",
      details:
        "Responsible for designing, developing and maintaining software systems and applications.",
      openPositions: "2",
      link: "#",
    },
  
    {
      title: "Data Scientist",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR92hbvxRLgs0YbCq4r54ae885Bt_WhqV0QLw&usqp=CAU",
      details:
        "Responsible for collecting, analyzing and interpreting large data sets to help organizations make better decisions.",
      openPositions: "3",
      link: "#",
    },
  
    {
      title: "Project Manager",
      image: "data:image/png;base64,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",
      details:
        "Responsible for planning, executing and closing projects on time and within budget.",
      openPositions: "1",
      link: "#",
    },
  
    {
      title: "Developer",
      image: "data:image/jpeg;base64,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",
      details:
        "Responsible for managing the entire product life cycle, from ideation to launch and post-launch maintenance.",
      openPositions: "1",
      link: "#",
    },
  
    {
      title: "Data Analyst ",
      image: "data:image/jpeg;base64,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",
      details:
        "Responsible for reaching out to potential customers and closing sales deals.",
      openPositions: "4",
      link: "#",
    },
  
    {
      title: "Software Testing",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrQOgAQZLrbQGHfEQLu8cHnoLhntptgu4ruw&usqp=CAU",
      details:
        "Responsible for creating and executing marketing strategies to promote a company or product.",
      openPositions: "1",
      link: "#",
    },
  ];
  
  const jobsHeading = document.querySelector(".jobs-list-container h2");
  const jobsContainer = document.querySelector(".jobs-list-container .jobs");
  const jobSearch = document.querySelector(".jobs-list-container .job-search");
  
  let searchTerm = "";
  
  if (jobs.length == 1) {
    jobsHeading.innerHTML = `${jobs.length} Job`;
  } else {
    jobsHeading.innerHTML = `${jobs.length} Jobs`;
  }
  
  const createJobListingCards = () => {
    jobsContainer.innerHTML = "";
  
    jobs.forEach((job) => {
      if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        let jobCard = document.createElement("div");
        jobCard.classList.add("job");
  
        let image = document.createElement("img");
        image.src = job.image;
  
        let title = document.createElement("h3");
        title.innerHTML = job.title;
        title.classList.add("job-title");
  
        let details = document.createElement("div");
        details.innerHTML = job.details;
        details.classList.add("details");
  
        let detailsBtn = document.createElement("a");
        detailsBtn.href = job.link;
        detailsBtn.innerHTML = "More Details";
        detailsBtn.classList.add("details-btn");
  
        let openPositions = document.createElement("span");
        openPositions.classList.add("open-positions");
  
        if (job.openPositions == 1) {
          openPositions.innerHTML = `${job.openPositions} open position`;
        } else {
          openPositions.innerHTML = `${job.openPositions} open positions`;
        }
  
        jobCard.appendChild(image);
        jobCard.appendChild(title);
        jobCard.appendChild(details);
        jobCard.appendChild(detailsBtn);
        jobCard.appendChild(openPositions);
  
        jobsContainer.appendChild(jobCard);
      }
    });
  };
  
  createJobListingCards();
  
  jobSearch.addEventListener("input", (e) => {
    searchTerm = e.target.value;
  
    createJobListingCards();
  });