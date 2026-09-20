export function ApplyJob() {
  return (
    <div>
      <h1>Apply for Job</h1>

      <form action="">
        {/* full name */}
        <div>
          <label>Full Name</label>

          <input type="text" name="name" placeholder="Enter full name" />
        </div>

        {/* email */}
        <div>
          <label>Email</label>

          <input type="email" name="email" placeholder="you@example.com" />
        </div>

        {/* phone */}
        <div>
          <label>Phone</label>

          <input type="text" name="phone" placeholder="8987654332" />
        </div>

        {/* exp */}
        <div>
          <label>Year of Experience</label>

          <input type="number" name="experience" />
        </div>

        {/* current company */}
        <div>
          <label>Current Company</label>

          <input type="text" name="currentCompany" />
        </div>

        {/* expected salary */}
        <div>
          <label>Expected Salary</label>

          <input type="number" name="expectedSalary" />
        </div>

        {/* skills */}
        <div>
          <label>Skills</label>

          <input
            type="text"
            name="skills"
            placeholder="React, Node js, SQL....."
          />
        </div>

        {/* location preference -> (Remote, Hybrid, On-site) */}
        <div>
          <label>Work Location Preference</label>

          <select name="location">
            <option value="">Select Preference</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
            <option value="onsite">On-site</option>
          </select>
        </div>

        {/* coverletter -> textarea */}
        <div>
          <label>Cover Letter</label>

          <textarea
            name="coverLetter"
            rows="7"
            placeholder="Tell us why you are a good fit..."
          ></textarea>
        </div>

        {/* resume */}
        <div>
          <label>Resume</label>

          <input type="file" accept=".pdf,.doc,.docx" />
        </div>

        <div>
          <label>
            <input type="checkbox" name="terms" /> I agree to the terms
          </label>
        </div>

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}
