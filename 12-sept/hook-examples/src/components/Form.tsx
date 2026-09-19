import { useEffect, useState } from "react";

export function Form() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
  });

  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const profileFields = [
      profile.name,
      profile.email,
      profile.phone,
      profile.skills,
    ];

    // add validation for name, email, phone for proper completition.
    // logic for validation
    const completedFields = profileFields.filter(
      (field) => field.trim() !== ""
    ).length;

    const perc = (completedFields / profileFields.length) * 100;

    setCompletion(perc);
  }, [profile]);

  return (
    <div>
      <h1>Complete Your Profile</h1>

      <input
        type="text"
        placeholder="Name"
        value={profile.name}
        onChange={(event) =>
          setProfile((currProfile) => {
            return {
              ...currProfile,
              name: event.target.value,
            };
          })
        }
      />

      <input
        type="text"
        placeholder="Email"
        value={profile.email}
        onChange={(event) =>
          setProfile((currProfile) => {
            return {
              ...currProfile,
              email: event.target.value,
            };
          })
        }
      />

      <input
        type="text"
        placeholder="Phone"
        value={profile.phone}
        onChange={(event) =>
          setProfile((currProfile) => {
            return {
              ...currProfile,
              phone: event.target.value,
            };
          })
        }
      />

      <input
        type="text"
        placeholder="Skills"
        value={profile.skills}
        onChange={(event) =>
          setProfile((currProfile) => {
            return {
              ...currProfile,
              skills: event.target.value,
            };
          })
        }
      />

      <h2>Profile Completion: {completion}%</h2>
    </div>
  );
}
