var activeTab = null; 

// --------------------------------------------------------------- //

function initView() {
    // TODO: look at #tag & load the current page
    // TODO: also, add support for this tag
    home.display()
}

function updateActiveTab(newTab) {
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

function createTab(tab) {
    let tabList = document.getElementById("tab-list");

    // only create the tab if it doesn't already exist
    if (tabList.querySelector("#" + tab.ID + "-tab") != null)
        return;

    let tabElement = document.createElement("div");
    tabElement.id = tab.ID + "-tab";
    tabElement.classList.add("tab-item");
    tabElement.innerHTML = tab.NAME;
    tabElement.addEventListener("click", _ => { updateActiveTab(tab) });

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
        createTab(this);
        updateActiveTab(this);
    }
}

class AddNewOfficers {
    constructor() {
        this.ID = "add-new-officers";
        this.NAME = "Add New Officers";
        createViewContent(this.ID);
    }

    createTab() {
        createTab(this);
        this.createContents();
        updateActiveTab(this);
    }

    createContents() {
        let contents = `
        <h3 style="margin: 0.5rem 0;">Add New Officer</h3>
        <div class="add-new-officer-input-widget">
            <div>
                <label for="legal-name">Legal Name</label>
                <input type="text" name="legal-name">
            </div>
            <div>
                <label for="computing-id">SFU Computing ID</label>
                <input type="text" name="computing-id" maxlength="8">
            </div>
            <div>
                <label for="position">Position</label>
                <input type="text" name="position">
            </div>
            <div>
                <label for="end-date">End Date</label>
                <input type="text" name="end-date">
            </div>
            <div>
                <span>?</span>
                <button class="confirm">Confirm</button>
            </div>
        </div>
        
        <div class="add-new-officer-plus">
            <button>+</button>
        </div>

        <div class="add-new-officer-submit">
            <button>Submit</button>
        </div>

        `;
        updateContents(this.ID, contents);
    }

    destroyContents() {

    }
}

class Device {
    constructor() {
        this.ID = "device";
        this.NAME = "Device";
        createViewContent(this.ID);
    }

    createTab() {
        createTab(this);
        this.display();
    }
}

class Admin {
    constructor() {
        this.ID = "admin";
        this.NAME = "Admin";
        createViewContent(this.ID);
    }

    createTab() {
        createTab(this);
        this.display();
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
