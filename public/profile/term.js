let is_officer = false;
let computing_id = null;
let selected_term = null;

const load = async () => {
  try {
    const params = new URLSearchParams(window.location.search);
    const term_id = parseInt(params.get("term"), 10);
    
    // get user login info
    let req = await fetch("/api/auth/user");
    if (req.status !== 200) {
      throw new Error(req.status);
    }
    let data = await req.json();
    computing_id = data.computing_id;

    // get all terms for the tabs
    req = await fetch("http://localhost:8080/api/officers/terms/" + computing_id + "?include_inactive=true");
    if (req.status !== 200) {
      throw new Error(req.status);
    }
    data = await req.json();

    e_tabs = document.getElementById("tabs");

    const e_profile = document.createElement("a");
    e_profile.href = "/profile";
    e_profile.innerHTML = "profile";
    e_tabs.appendChild(e_profile);

    const e_terms = [];

    // iterate to find the selected term; it should be shown at the bottom of the tabs
    data.forEach((term) => {
      const e_term = document.createElement("a");
      e_term.href = "/profile/term.html?term=" + term.id;
      e_term.innerHTML = `${term.position} (${term.start_date.split("T")[0]})`;

      // check for selected term
      if (term.id === term_id) {
        e_term.classList.add("selected");
        e_tabs.appendChild(e_term);
        selected_term = term;
      } else {
        e_terms.push(e_term);
      }
    });

    if (selected_term === null) {
      // invalid selection
      window.location.href = "/profile";
      return;
    }

    // add the remaining terms
    e_terms.forEach((e_term) => e_tabs.appendChild(e_term));

    document.getElementById("computing_id").value = computing_id;
    document.getElementById("position").value = selected_term.position;
    document.getElementById("start_date").value = selected_term.start_date.split("T")[0];
    document.getElementById("end_date").value =
      selected_term.end_date === null ? "In progress" : selected_term.end_date.split("T")[0];
    document.getElementById("photo_url").value = selected_term.photo_url;
    document.getElementById("photo").src = selected_term.photo_url;
    document.getElementById("nickname").value = selected_term.nickname;
    document.getElementById("favourite_course_0").value = selected_term.favourite_course_0;
    document.getElementById("favourite_course_1").value = selected_term.favourite_course_1;
    document.getElementById("favourite_pl_0").value = selected_term.favourite_pl_0;
    document.getElementById("favourite_pl_1").value = selected_term.favourite_pl_1;
    document.getElementById("biography").value = selected_term.biography;
  } catch (err) {
    console.log(err.toString());
    document.getElementById("error").classList.remove("hidden");
    document.getElementById("error").innerHTML = err.toString();
  }
};

load();

async function user_logout() {
  try {
    await fetch("/api/auth/logout");
    window.location.href = "/";
    window.location.reload();
  } catch (err) {
    console.log(err.toString());
    document.getElementById("error").classList.remove("hidden");
    document.getElementById("error").innerHTML = err.toString();
  }
}

function user_reset() {
  window.location.reload();
}

async function user_submit() {
  try {
    const body = {
      nickname: document.getElementById("nickname").value,
      favourite_course_0: document.getElementById("favourite_course_0").value,
      favourite_course_1: document.getElementById("favourite_course_1").value,
      favourite_pl_0: document.getElementById("favourite_pl_0").value,
      favourite_pl_1: document.getElementById("favourite_pl_1").value,
      biography: document.getElementById("biography").value,
      photo_url: document.getElementById("photo_url").value
    };

    req = await fetch(
      "/api/officers/term/" + selected_term.id,
      {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    );
    if (req.status !== 200) {
      throw new Error(req.status);
    }
    window.location.reload();
  } catch (err) {
    console.log(err.toString());
    document.getElementById("error").classList.remove("hidden");
    document.getElementById("error").innerHTML = err.toString();
  }
}
