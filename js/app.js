/* =========================================================
   Imo ENTERPRISE OPERATIONS PORTAL
========================================================= */


/* =========================================================
   DEPARTMENT CONFIGURATION

   IMPORTANT:
   link: ""

   kiyala thiyenawanam click kalama
   Coming Soon popup eka enawa.

   System link eka labunama:

   link: "https://..."

   kiyala witharak danna.
========================================================= */

const departments = [

    {
        number: "01",

        name: "Feed Mill Department",

        icon: "factory",

        description:
            "Feed production, inventory, formulations and quality control.",

        color: "#3F9B46",

        softColor: "#EDF8EE",

        link: ""
    },


    {
        number: "02",

        name: "Extension Department",

        icon: "groups",

        description:
            "Farmer support, training programs and field activities.",

        color: "#F28C28",

        softColor: "#FFF3E7",

        link: ""
    },


    {
        number: "03",

        name: "Live Bird Department",

        icon: "egg",

        description:
            "Live bird operations, farms, catching, sales and reporting.",

        color: "#1767B8",

        softColor: "#EAF3FD",

        // LIVE BIRD LINK PASSE METHANATA DANNA
        link: "https://imochicken-mis.github.io/Livebird-department/"
    },


    {
        number: "04",

        name: "Production Department",

        icon: "precision_manufacturing",

        description:
            "Production planning, process monitoring and performance.",

        color: "#8B5CF6",

        softColor: "#F2EDFF",

        link: "https://imochicken-mis.github.io/Production-Dep./login.html"
    },


    {
        number: "05",

        name: "Quality Department",

        icon: "verified_user",

        description:
            "Quality assurance, testing, hygiene and compliance.",

        color: "#079A95",

        softColor: "#E8F8F6",

        link: ""
    },


    {
        number: "06",

        name: "Finished Goods Department",

        icon: "inventory_2",

        description:
            "Finished product inventory, cold storage and dispatch.",

        color: "#EF546A",

        softColor: "#FFF0F3",

        link: "https://script.google.com/macros/s/AKfycbzRzcq9vVUXvIgZGxP77kL3TQh3EUGOCFMrkPk-jXkSqM9tygvw1b9iXOQJp4m228frKQ/exec"
    },


    {
        number: "07",

        name: "Sales Department",

        icon: "shopping_cart",

        description:
            "Sales operations, customers, pricing and collections.",

        color: "#2375D8",

        softColor: "#EAF3FF",

        link: ""
    },


    {
        number: "08",

        name: "HR Department",

        icon: "group",

        description:
            "Employees, attendance, payroll and HR administration.",

        color: "#E5A000",

        softColor: "#FFF6DF",

        link: ""
    },


    {
        number: "09",

        name: "Finance Department",

        icon: "account_balance",

        description:
            "Accounting, budgets, payments and financial reporting.",

        color: "#5F9F47",

        softColor: "#EFF8EA",

        link: ""
    },


    {
        number: "10",

        name: "Internal Audit",

        icon: "plagiarism",

        description:
            "Internal audits, compliance checks and corrective actions.",

        color: "#9A52CC",

        softColor: "#F6EDFC",

        link: ""
    },


    {
        number: "11",

        name: "ERP System",

        icon: "dns",

        description:
            "Enterprise resource planning and integrated business operations.",

        color: "#7558D9",

        softColor: "#F0EDFC",

        link: ""
    },


    {
        number: "12",

        name: "General Stores Department",

        icon: "warehouse",

        description:
            "Store inventory, materials, supplies and stock issuance.",

        color: "#E96D3B",

        softColor: "#FFF0E9",

        link: ""
    },


    {
        number: "13",

        name: "CCTV / GPS",

        icon: "videocam",

        description:
            "CCTV surveillance and GPS tracking of vehicles and assets.",

        color: "#4D90D9",

        softColor: "#ECF5FE",

        link: ""
    },


    {
        number: "14",

        name: "General Admin Department",

        icon: "admin_panel_settings",

        description:
            "General administration, assets and office operations.",

        color: "#169E91",

        softColor: "#E9F8F5",

        link: ""
    },


    {
        number: "15",

        name: "Security Department",

        icon: "security",

        description:
            "Security operations, access control and safety monitoring.",

        color: "#DC3545",

        softColor: "#FDEDEF",

        link: ""
    }

];



/* =========================================================
   PAGE LOAD
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeHeroToggle();

        renderDepartments();

        initializeComingSoonModal();

        updateDateTime();

        setInterval(
            updateDateTime,
            1000
        );

    }
);



/* =========================================================
   RENDER DEPARTMENT CARDS
========================================================= */

function renderDepartments() {

    const grid =
        document.getElementById(
            "departmentGrid"
        );


    if (!grid) {
        return;
    }


    grid.innerHTML = "";


    departments.forEach(
        (department) => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "department-card";


            card.style.setProperty(
                "--card-color",
                department.color
            );


            card.style.setProperty(
                "--soft-color",
                department.softColor
            );


            card.innerHTML = `

                <div class="department-number">
                    ${department.number}
                </div>

                ${department.link && department.link.trim() !== ""
                    ? `
                        <div
                            class="system-online-dot"
                            title="System Available"
                        ></div>
                    `
                    : ""
                }


                <div class="department-icon">

                    <span class="material-icons">
                        ${department.icon}
                    </span>

                </div>


                <h3>
                    ${department.name}
                </h3>


                <p>
                    ${department.description}
                </p>


                <div class="department-open-btn">

                    Open System

                    <span class="material-icons">
                        arrow_forward
                    </span>

                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    openDepartment(
                        department
                    );

                }
            );


            grid.appendChild(
                card
            );

        }
    );

}



/* =========================================================
   OPEN DEPARTMENT
========================================================= */

function openDepartment(
    department
) {

    const link =
        department.link?.trim();


    // LINK EXISTS
    if (link) {

        window.open(
            link,
            "_blank",
            "noopener,noreferrer"
        );

        return;
    }


    // NO LINK
    showComingSoon(
        department.name
    );

}



/* =========================================================
   COMING SOON
========================================================= */

function showComingSoon(
    departmentName
) {

    const modal =
        document.getElementById(
            "comingSoonModal"
        );


    const title =
        document.getElementById(
            "comingSoonTitle"
        );


    if (
        !modal ||
        !title
    ) {
        return;
    }


    title.textContent =
        departmentName;


    modal.classList.add(
        "show"
    );

}



/* =========================================================
   MODAL EVENTS
========================================================= */

function initializeComingSoonModal() {

    const modal =
        document.getElementById(
            "comingSoonModal"
        );


    const closeBtn =
        document.getElementById(
            "closeComingSoon"
        );


    if (
        !modal ||
        !closeBtn
    ) {
        return;
    }


    closeBtn.addEventListener(
        "click",
        () => {

            modal.classList.remove(
                "show"
            );

        }
    );


    modal.addEventListener(
        "click",
        (event) => {

            if (
                event.target === modal
            ) {

                modal.classList.remove(
                    "show"
                );

            }

        }
    );


    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape"
            ) {

                modal.classList.remove(
                    "show"
                );

            }

        }
    );

}



/* =========================================================
   DATE & TIME
========================================================= */

function updateDateTime() {

    const now =
        new Date();


    const dateElement =
        document.getElementById(
            "currentDate"
        );


    const dayElement =
        document.getElementById(
            "currentDay"
        );


    const timeElement =
        document.getElementById(
            "currentTime"
        );


    if (dateElement) {

        dateElement.textContent =
            now.toLocaleDateString(
                "en-GB",
                {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                }
            );

    }


    if (dayElement) {

        dayElement.textContent =
            now.toLocaleDateString(
                "en-US",
                {
                    weekday: "long"
                }
            );

    }


    if (timeElement) {

        timeElement.textContent =
            now.toLocaleTimeString(
                "en-US",
                {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true
                }
            );

    }

}
function initializeHeroToggle() {

    const hero =
        document.querySelector(".portal-hero");

    const btn =
        document.getElementById("heroToggleBtn");

    const text =
        document.getElementById("heroToggleText");

    const icon =
        btn?.querySelector(".material-icons");


    if (!hero || !btn) {
        return;
    }


    btn.addEventListener("click", () => {

        const collapsed =
            hero.classList.toggle("collapsed");


        if (collapsed) {

            text.textContent =
                "Show Header";

            icon.textContent =
                "expand_more";

        } else {

            text.textContent =
                "Hide Header";

            icon.textContent =
                "expand_less";
        }

    });

}