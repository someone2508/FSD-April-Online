const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({
  dest: "uploads/",
});

const jobs = [
  {
    id: 101,
    title: "Software Engineer",
    company: "TechCorp",
    location: "Bengaluru",
    experience: "2-4 years",
    salary: "₹12-18 LPA",
    description: "Build scalable backend services and APIs using Node.js.",
  },
  {
    id: 102,
    title: "Frontend Engineer",
    company: "StartupX",
    location: "Remote",
    experience: "1-3 years",
    salary: "₹10-16 LPA",
    description: "Build modern React applications using React and JavaScript.",
  },
  {
    id: 103,
    title: "Full Stack Developer",
    company: "FinTech Labs",
    location: "Mumbai",
    experience: "2-5 years",
    salary: "₹15-22 LPA",
    description: "Work across React, Node.js and database systems.",
  },
];

const applications = [];

app.get("/api/jobs", (req, res) => {
  res.json(jobs);
});

app.get("/api/jobs/:id", (req, res) => {
  const id = Number(req.params.id);

  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return res.status(404).json({
      message: "Job not found",
    });
  }

  res.json(job);
});

app.post("/api/applications", upload.single("resume"), (req, res) => {
  try {
    const {
      jobId,
      name,
      email,
      phone,
      experience,
      currentCompany,
      expectedSalary,
      skills,
      location,
      coverLetter,
      terms,
    } = req.body;

    if (!jobId || !name || !email) {
      return res.status(400).json({
        message: "Required information is missing",
      });
    }

    const application = {
      id: applications.length + 1,

      jobId: Number(jobId),

      applicant: {
        name,
        email,
        phone,
        experience,
        currentCompany,
        expectedSalary,
        skills,
        location,
        coverLetter,
      },

      resume: req.file
        ? {
            originalName: req.file.originalname,
            filename: req.file.filename,
          }
        : null,

      terms: terms === "true",

      createdAt: new Date().toISOString(),
    };

    applications.push(application);

    console.log("New application:");
    console.log(application);

    res.status(201).json({
      message: "Application submitted successfully",
      application,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
