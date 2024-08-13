
function routeView() {
    if (window.location.hash == "#execs") {
        enterExecs();
    } else if (window.location.hash == "#logs") {
        enterLogs();
    }
}
window.onload = routeView;
window.onhashchange = routeView;

function enterExecs() {
    console.log("#execs");

    // TODO: get this data from the endpoint
    response = {
        "president": [
            {
                "is_current_officer": true,
                "position": "president",
                "start_date": "2024-07-25T04:38:16.307842",
                "end_date": "2025-07-25T04:38:16.307844",
                "legal_name": "Person C",
                "nickname": "CC",
                "discord_name": null,
                "discord_nickname": null,
                "favourite_course_0": "CMPT 999",
                "favourite_course_1": "CMPT 354",
                "favourite_language_0": "C++",
                "favourite_language_1": "C",
                "csss_email": "csss-president-current@sfu.ca",
                "biography": "I'm person C...",
                "photo_url": null,
                "private_data": null
            }
        ],
        "president2": [
            {
                "is_current_officer": true,
                "position": "president",
                "start_date": "2024-07-25T04:38:16.307842",
                "end_date": "2025-07-25T04:38:16.307844",
                "legal_name": "Person C",
                "nickname": "CC",
                "discord_name": null,
                "discord_nickname": null,
                "favourite_course_0": "CMPT 999",
                "favourite_course_1": "CMPT 354",
                "favourite_language_0": "C++",
                "favourite_language_1": "C",
                "csss_email": "csss-president-current@sfu.ca",
                "biography": "I'm person C...",
                "photo_url": null,
                "private_data": null
            }
        ],
        "president3": [
            {
                "is_current_officer": true,
                "position": "president",
                "start_date": "2024-07-25T04:38:16.307842",
                "end_date": "2025-07-25T04:38:16.307844",
                "legal_name": "Person C",
                "nickname": "CC",
                "discord_name": null,
                "discord_nickname": null,
                "favourite_course_0": "CMPT 999",
                "favourite_course_1": "CMPT 354",
                "favourite_language_0": "C++",
                "favourite_language_1": "C",
                "csss_email": "csss-president-current@sfu.ca",
                "biography": "I'm person C...",
                "photo_url": null,
                "private_data": null
            }
        ]
    };

    console.log(response);

    // document.getElementById("content").style.overflowX = "scroll";

    let table = document.createElement("table");
    table.id = "enterExecsTable";
    table.style.height = "auto";
    table.style.fontSize = "10px";

    let thead = document.createElement("thead");
    let row = document.createElement("tr");
    for (let key in Object.values(response)[0][0]) {
        cell = document.createElement("th");
        cell.style.padding = "0 1ch 0 1ch";
        cell.innerHTML = key;
        row.appendChild(cell);
    }
    thead.appendChild(row);
    table.appendChild(thead);

    let tbody = document.createElement("tbody");
    tbody.style.color = "white";
    let runningIndex = 0;
    for (let i in Object.values(response)) {

        let positionInfoList = Object.values(response)[i];
        for (let j in positionInfoList) {

            row = document.createElement("tr");
            row.style.backgroundColor = (runningIndex % 2 == 0) ? "midnightblue" : "#111";
            runningIndex += 1;

            let positionInfo = positionInfoList[j];
            for (let key in positionInfo) {
                cell = document.createElement("td");
                cell.innerHTML = positionInfo[key];
                cell.style.padding = "0 1ch 0 1ch";
                row.appendChild(cell);
            }

            tbody.appendChild(row);
        }
    }

    table.appendChild(tbody);
    document.getElementById("content").innerHTML = '';
    document.getElementById("content").appendChild(table);
}

function enterLogs() {
    // TODO: flex center content
    document.getElementById("content").innerHTML = 'nothing...';
}