let is_officer = false;
let computing_id = null;

const load = async () => {
  try {
    // get user login info
    let req = await fetch("/api/auth/user");
    if (req.status !== 200) {
      throw new Error(req.status);
    }
    let data = await req.json();

    // auto doggo for blank pfps
    if (!data.profile_picture_url) {
      do {
        req = await fetch("https://random.dog/woof.json");
        const dog_data = await req.json();
        data.profile_picture_url = dog_data.url;
      } while (data.profile_picture_url.endsWith(".mp4"));
    }

    // update input fields
    document.getElementById("computing_id").value = data.computing_id;
    document.getElementById("first_logged_in").value = data.first_logged_in.split('T')[0];
    document.getElementById("last_logged_in").value = data.last_logged_in.split('T')[0];
    document.getElementById("profile_picture_url").value = data.profile_picture_url;
    document.getElementById("profile_picture").src = data.profile_picture_url;

    computing_id = data.computing_id;
    req = await fetch("/api/officers/info/" + computing_id);
    if (req.status !== 200) {
      console.log("Not an officer.");
      return;
    }
    data = await req.json();
    is_officer = true;

    const e_legal_name = document.getElementById("legal_name");
    const e_phone_number = document.getElementById("phone_number");
    const e_discord_name = document.getElementById("discord_name");
    const e_github_username = document.getElementById("github_username");
    const e_google_drive_email = document.getElementById("google_drive_email");

    e_legal_name.value = data.legal_name;
    e_phone_number.value = data.phone_number;
    e_discord_name.value = data.discord_name;
    e_github_username.value = data.github_username;
    e_google_drive_email.value = data.google_drive_email;

    e_legal_name.removeAttribute("disabled");
    e_phone_number.removeAttribute("disabled");
    e_discord_name.removeAttribute("disabled");
    e_github_username.removeAttribute("disabled");
    e_google_drive_email.removeAttribute("disabled");

    e_legal_name.setAttribute("placeholder", "First Last");
    e_phone_number.setAttribute("placeholder", "6040001111");
    e_discord_name.setAttribute("placeholder", "discorduser");
    e_github_username.setAttribute("placeholder", "ghuser");
    e_google_drive_email.setAttribute("placeholder", "officer123@gmail.com");

    // prompt officer to fill in their info
    if (!data.is_filled_in) {
      e_phone_number.focus();
    }

    req = await fetch("http://localhost:8080/api/officers/terms/" + computing_id + "?include_inactive=true");
    if (req.status !== 200) {
      throw new Error(req.status);
    }
    data = await req.json();

    e_tabs = document.getElementById("tabs");
    data.forEach((term) => {
      const e_term = document.createElement("a");
      e_term.href = "/profile/term.html?term=" + term.id;
      e_term.innerHTML = `${term.position} (${term.start_date.split("T")[0]})`;
      e_tabs.appendChild(e_term);
    });
  } catch (err) {
    const root = document.getElementById("root");
    const loginUrl = "https://cas.sfu.ca/cas/login?service=" +
      encodeURIComponent(`${window.location.origin}/api/auth/login?redirect_path=${window.location.pathname}&redirect_fragment=`);
    root.innerHTML = `<p class="px-4 py-2">
        You are not logged in.<br />
        <a class="login" href=${loginUrl}>Log in with SFU CAS</a><br />
        <span id="error" class="text-xs text-zinc-500 py-2"></span>
      </p>`;
    console.log(err.toString());
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
    // set site user information
    const e_profile_picture_url = document.getElementById("profile_picture_url");
    let req = await fetch(
      "/api/auth/user?profile_picture_url=" + encodeURIComponent(e_profile_picture_url.value),
      { method: 'PATCH' }
    );
    if (req.status !== 200) {
      throw new Error(req.status);
    }

    // set officer info
    if (is_officer) {
      const body = {
        legal_name: document.getElementById("legal_name").value,
        phone_number: document.getElementById("phone_number").value,
        discord_name: document.getElementById("discord_name").value,
        github_username: document.getElementById("github_username").value,
        google_drive_email: document.getElementById("google_drive_email").value
      };

      req = await fetch(
        "/api/officers/info/" + computing_id,
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
    }
    window.location.reload();
  } catch (err) {
    console.log(err.toString());
    document.getElementById("error").classList.remove("hidden");
    document.getElementById("error").innerHTML = err.toString();
  }
}
