var activeTab = null; 

// --------------------------------------------------------------- //

function initView() {
    // TODO: look at #tag & load the current page
    // TODO: also, add support for this tag
    home.display()
}

function updateActiveTab(newTab) {
    console.log("newTab:");
    console.log(newTab);
    console.log(activeTab);
    if (activeTab != null && activeTab.ID == newTab.ID) {
        return;
    } else {
        console.log("setting active tab to " + newTab.ID);
        activeTab = newTab;

        for (const child of document.getElementById("view-content").children) {
            child.style.display = "none";
        }
        document.getElementById(activeTab.ID + "-content").style.removeProperty("display");
    }
}

function createViewContent(tab_id) {
    let viewContentChild = document.createElement("div");
    viewContentChild.id = tab_id + "-content";
    viewContentChild.style.display = "none";

    document.getElementById("view-content").appendChild(viewContentChild);
}

function updateContents(tab_id, html) {
    document.getElementById(tab_id + "-content").innerHTML = html;
}
function destroyContents(tab_id) {
    document.getElementById(tab_id + "-content").innerHTML = "";
}

// tab is the tab button
function createTab(tab) {
    let tabList = document.getElementById("tab-list");

    // only create the tab if it doesn't already exist
    if (tabList.querySelector("#" + tab.ID + "-tab") != null)
        return;

    let tabElement = document.createElement("div");
    //<img class="confirm-icon add-new-officer-status" src="/static/icons/circle-question.svg" style="filter: invert(40%); height: 2rem;">

    tabElement.id = tab.ID + "-tab";
    tabElement.classList.add("tab-item");
    tabElement.innerHTML = tab.NAME;
    tabElement.addEventListener("click", _ => { updateActiveTab(tab) });

    let xImg = document.createElement("img");
    xImg.src = "/static/icons/x.svg";
    xImg.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();

        destroyContents(tab.ID);
        tabElement.remove();
        // TODO: does this know what home is?
        updateActiveTab(home);
    });

    tabElement.append(xImg);

    tabList.append(tabElement);
}

// --------------------------------------------------------------- //

class Home {
    constructor() {
        this.ID = "home";
        this.NAME = "⌂";
        createViewContent(this.ID);
    }

    createContents() {
        updateContents(this.ID, "home");
    }
}

class Officers {
    constructor() {
        this.ID = "officers";
        this.NAME = "Officers";
        createViewContent(this.ID);
    }

    createTab() {
        if (activeTab != null && activeTab.ID == this.ID)
            return;
        createTab(this);
        updateActiveTab(this);
    }
}

// TODO: this is way overcomplicated; let's do this differently pls!
class AddNewOfficers {
    constructor() {
        this.ID = "add-new-officers";
        this.NAME = "Add New Officers";
        createViewContent(this.ID);
    }

    createTab() {
        if (document.getElementById(this.ID + "-content").innerHTML == "") {
            createTab(this);
            this.createContents();
        }
        updateActiveTab(this);
    }

    createContents() {
        let widget = `
        <div class="add-new-officer-input-widget-container">
            <div class="add-new-officer-input-widget">
                <div>
                    <label>SFU Computing ID</label>
                    <input type="text" class="add-new-officer-computing-id" maxlength="8" required>
                </div>
                <div>
                    <label>Position</label>
                    <select class="add-new-officer-position">
                        <option value="">--</option>
                        
                        <option value="president">President</option>
                        <option value="vice-president">Vice President</option>
                        <option value="treasurer">Treasurer</option>
                        <option value="director of resources">Director of Resources</option>
                        <option value="director of events">Director of Events</option>

                        <option value="director of educational events">Director of Educational Events</option>
                        <option value="assistant director of events">Assistant Director of Events</option>
                        <option value="director of communications">Director of Communications</option>
                        <!--<option value="director of outreach">Director of Outreach</option>-->
                        <option value="director of multimedia">Director of Multimedia</option>

                        <option value="director of archives">Director of Archives</option>
                        <option value="executive at large">Executive at Large</option>
                        <option value="first year representative">First Year Representative</option>
                        <option value="elections officer">Elections Officer</option>
                        <option value="sfss council representative">SFSS Council Representative</option>

                        <option value="frosh week chair">Frosh Week Chair</option>
                        <option value="system administrator">System Administrator</option>
                        <option value="webmaster">Webmaster</option>
                        <option value="social media manager">Social Media Manager</option>
                    </select>
                </div>
                <div>
                    <label>Start Date</label>
                    <input type="date" class="add-new-officer-start-date" required>
                </div>
                <div style="display: flex; flex-direction: row; align-items: center;">
                    <img class="confirm-icon add-new-officer-status" src="/static/icons/circle-question.svg" style="filter: invert(40%); height: 2rem;">
                    <button class="confirm" onclick="AddNewOfficers.update_checkbox(this)">Confirm</button>
                </div>
            </div>
            <div style="display: flex; flex-direction: row; align-items: center; width: 3rem;">
                <img class="close-icon" src="/static/icons/circle-close.svg" onclick="AddNewOfficers.remove_widget(this)">
            </div>
        </div>
        `;
        let contents = `
        <div>
            <div style="display: inline-block; display: flex; flex-direction: row; align-items: center; margin-top: 0.5rem;">
                <h3 style="margin: 0.5rem 0;">
                    Add New Officer
                </h3>
                <div id="add-new-officer-plus">
                    <img src="/static/icons/circle-plus.svg">
                </div>
            </div>

            <div id="add-new-officer-widget-list">
            ${widget}
            </div>

            <br>
            <div class="add-new-officer-submit">
                <button onclick="AddNewOfficers.onSubmit(this)">Submit</button>
                <p id="add-new-officer-desc-text" style="margin-left: 0.5rem; color: #333;"></p>
            </div>

            <br><br><br>
        </div>
        `;
        updateContents(this.ID, contents);
    
        document.getElementById("add-new-officer-plus").addEventListener("click", e => {
            let widgetElement = document.createElement('div');
            widgetElement.innerHTML = widget;
            document.getElementById("add-new-officer-widget-list").appendChild(widgetElement);
        });
    }

    destroyContents() {
        destroyContents(this.ID);
    }

    static update_checkbox(element) {
        let confirmIconElement = element.parentElement.getElementsByClassName("confirm-icon")[0];
        let closeElement = element.parentElement.parentElement.parentElement.getElementsByClassName("close-icon")[0];

        function makeDefault() {
            confirmIconElement.src = "/static/icons/circle-question.svg";
            confirmIconElement.setAttribute("data-checked", false);
            confirmIconElement.style.filter = "invert(40%)";
            element.style.borderColor = "#ccc";
            element.style.backgroundColor = "#dbf4e000";
            closeElement.style.filter = "";
            closeElement.style.cursor = "pointer";
        }

        function makeGreen() {
            confirmIconElement.src = "/static/icons/circle-check.svg";
            confirmIconElement.setAttribute("data-checked", true);
            confirmIconElement.style.filter = "brightness(0) saturate(100%) invert(80%) sepia(19%) saturate(1059%) hue-rotate(92deg) brightness(90%) contrast(88%)";
            element.style.borderColor = "#94dd94";
            element.style.backgroundColor = "#dbf4e0";
            closeElement.style.filter = "invert(80%)";
            closeElement.style.cursor = "default";
        }

        function makeYellow() {
            confirmIconElement.src = "/static/icons/circle-question.svg";
            confirmIconElement.style.filter = "brightness(0) saturate(100%) invert(80%) sepia(19%) saturate(2159%) hue-rotate(352deg) brightness(90%) contrast(88%)";
            element.style.borderColor = "rgb(210 169 79)";
            element.style.backgroundColor = "#f6d998";
        }

        let computingIdElement = element.parentElement.parentElement.getElementsByClassName("add-new-officer-computing-id")[0];
        let positionElement = element.parentElement.parentElement.getElementsByClassName("add-new-officer-position")[0];
        let startDateElement = element.parentElement.parentElement.getElementsByClassName("add-new-officer-start-date")[0];

        // check that the data is well formed
        if (confirmIconElement.getAttribute("data-checked") != "true") {
            let name = computingIdElement.value;
            let position = positionElement.value;
            let startDate = startDateElement.value;

            if (position == "" || name == "" || startDate == "") {
                makeYellow();
                return;
            }
        }

        if (confirmIconElement.getAttribute("data-checked") == "true") {
            makeDefault();

            computingIdElement.readOnly = false; 
            // TODO: this setAttribute for input is a hacky workaround; fix it!
            positionElement.removeAttribute("readonly");
            startDateElement.readOnly = false;
        } else {
            makeGreen();

            computingIdElement.readOnly = true; 
            positionElement.setAttribute("readonly", true);
            startDateElement.readOnly = true;
        }
    }

    static remove_widget(element) {
        let confirmIconElement = element.parentElement.parentElement.getElementsByClassName("confirm-icon")[0];
        if (confirmIconElement.getAttribute("data-checked") != "true") {
            element.parentElement.parentElement.remove();
        }
    }

    static async onSubmit(element) {
        let mainContainer = element.parentElement.parentElement;
        let widgetList = mainContainer.getElementsByClassName("add-new-officer-input-widget-container");
        let descText = document.getElementById("add-new-officer-desc-text");

        let bodyObjectList = [];
        for (let widget of widgetList) {
            let status = widget.getElementsByClassName("add-new-officer-status")[0];
            if (status.getAttribute("data-checked") != "true") {
                descText.innerHTML = "must confirm all new officer info";
                return;
            }

            let computingId = widget.getElementsByClassName("add-new-officer-computing-id")[0].value;
            let position = widget.getElementsByClassName("add-new-officer-position")[0].value;
            let startDate = widget.getElementsByClassName("add-new-officer-start-date")[0].value;
            bodyObjectList.push(
                {
                    computing_id: computingId,
                    position: position,
                    start_date: startDate,
                }
            );
        }

        descText.innerHTML = "uploading ...";

        let response = await fetch("/api/officers/new_term", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodyObjectList),
        });

        if (response.status == 500 || response.status == 422) {
            descText.innerHTML = "failed to upload data, with http error " + response.status;
        } else if (response.status != 200) {
            descText.innerHTML = "failed to upload data, with error (http " + response.status + "): " + (await response.json()).detail;
        } else {
            descText.innerHTML = "success!";
        }
    }
}

class Device {
    constructor() {
        this.ID = "device";
        this.NAME = "Device";
        createViewContent(this.ID);
    }

    createTab() {
        if (document.getElementById(this.ID + "-content").innerHTML == "") {
            createTab(this);
            //this.createContents();
        }
        updateActiveTab(this);
    }
}

class Admin {
    constructor() {
        this.ID = "admin";
        this.NAME = "Admin";
        createViewContent(this.ID);
    }

    createTab() {
        if (document.getElementById(this.ID + "-content").innerHTML == "") {
            createTab(this);
            //this.createContents();
        }
        updateActiveTab(this);
    }
}

// --------------------------------------------------------------- //

const home = new Home();

const officers = new Officers();
const addNewOfficers = new AddNewOfficers();

const device = new Device();
const admin = new Admin();

updateActiveTab(home);
home.createContents();
