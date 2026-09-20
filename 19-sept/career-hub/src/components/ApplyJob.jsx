import { useState } from "react";
import { useParams } from "react-router-dom";

export function ApplyJob() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    currentCompany: "",
    expectedSalary: "",
    skills: "",
    location: "",
    coverLetter: "",
    terms: false,
  });

  const [resume, setResume] = useState(null);

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    let newValue = type === "checkbox" ? checked : value;

    setFormData((prevObj) => {
      return {
        ...prevObj,
        [name]: newValue,
      };
    });
  };

  const handleResumeChange = (event) => {
    const file = event.target.files[0];

    setResume(file);
  };

  const validateForm = () => {
    const newErrors = {};

    // name
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    // email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email) ==
      false
    ) {
      newErrors.email = "Enter a valid email address";
    }

    // phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (/^[6-9]\d{9}$/.test(formData.phone) == false) {
      newErrors.phone = "Phone should valid with 10 digits";
    }

    // experience
    if (formData.experience === "") {
      newErrors.experience = "Experience is required";
    } else if (Number(formData.experience) < 0) {
      newErrors.experience = "Experience cannot be negative";
    }

    // skills
    if (!formData.skills.trim()) {
      newErrors.skills = "Skills is required";
    }

    // location
    if (!formData.location.trim()) {
      newErrors.location = "Select a work preference";
    }

    // coverletter
    if (!formData.coverLetter.trim()) {
      newErrors.coverLetter = "Cover letter is required";
    } else if (formData.coverLetter.length < 50) {
      newErrors.coverLetter = "Cover letter must be at least 50 characters";
    }

    // resume
    if (!resume) {
      newErrors.resume = "Please upload your resume";
    }

    // terms
    if (!formData.terms) {
      newErrors.terms = "You must accpet the terms";
    }

    return newErrors;
  };

  const { id } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // data validation
    const validationErrors = validateForm();
    // error handling

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // make an api call to my backend to submit this application.
    try {
      const data = new FormData();

      data.append("jobId", id);
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("experience", formData.experience);
      data.append("currentCompany", formData.currentCompany);
      data.append("expectedSalary", formData.expectedSalary);
      data.append("skills", formData.skills);
      data.append("location", formData.location);
      data.append("coverLetter", formData.coverLetter);
      data.append("terms", String(formData.terms));
      data.append("resume", resume);

      const response = await fetch("http://localhost:5000/api/applications", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      console.log(result);
    } catch (error) {
      console.log("Api error");
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Apply for Job</h1>

      <form onSubmit={handleSubmit}>
        {/* full name */}
        <div>
          <label>Full Name</label>

          <input
            type="text"
            name="name"
            placeholder="Enter full name"
            value={formData.name}
            onChange={handleChange}
          />

          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        {/* email */}
        <div>
          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        {/* phone */}
        <div>
          <label>Phone</label>

          <input
            type="text"
            name="phone"
            placeholder="8987654332"
            value={formData.phone}
            onChange={handleChange}
          />

          {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
        </div>

        {/* exp */}
        <div>
          <label>Year of Experience</label>

          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          />

          {errors.experience && (
            <p style={{ color: "red" }}>{errors.experience}</p>
          )}
        </div>

        {/* current company */}
        <div>
          <label>Current Company</label>

          <input
            type="text"
            name="currentCompany"
            value={formData.currentCompany}
            onChange={handleChange}
          />

          {errors.currentCompany && (
            <p style={{ color: "red" }}>{errors.currentCompany}</p>
          )}
        </div>

        {/* expected salary */}
        <div>
          <label>Expected Salary</label>

          <input
            type="number"
            name="expectedSalary"
            value={formData.expectedSalary}
            onChange={handleChange}
          />

          {errors.expectedSalary && (
            <p style={{ color: "red" }}>{errors.expectedSalary}</p>
          )}
        </div>

        {/* skills */}
        <div>
          <label>Skills</label>

          <input
            type="text"
            name="skills"
            placeholder="React, Node js, SQL....."
            value={formData.skills}
            onChange={handleChange}
          />

          {errors.skills && <p style={{ color: "red" }}>{errors.skills}</p>}
        </div>

        {/* location preference -> (Remote, Hybrid, On-site) */}
        <div>
          <label>Work Location Preference</label>

          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
          >
            <option value="">Select Preference</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
            <option value="onsite">On-site</option>
          </select>

          {errors.location && <p style={{ color: "red" }}>{errors.location}</p>}
        </div>

        {/* coverletter -> textarea */}
        <div>
          <label>Cover Letter</label>

          <textarea
            name="coverLetter"
            rows="7"
            placeholder="Tell us why you are a good fit..."
            value={formData.coverLetter}
            onChange={handleChange}
          ></textarea>

          {errors.coverLetter && (
            <p style={{ color: "red" }}>{errors.coverLetter}</p>
          )}
        </div>

        {/* resume */}
        <div>
          <label>Resume</label>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeChange}
          />

          {errors.resume && <p style={{ color: "red" }}>{errors.resume}</p>}
        </div>

        <div>
          <label>
            <input type="checkbox" name="terms" onChange={handleChange} /> I
            agree to the terms
          </label>

          {errors.terms && <p style={{ color: "red" }}>{errors.terms}</p>}
        </div>

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}
