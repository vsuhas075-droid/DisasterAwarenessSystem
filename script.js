function showSafety(disaster) {
    const safetyInfo = document.getElementById("safetyInfo");
    let tips = "";

    if (disaster === "flood") {
        tips = `
            <div class="info-icon">🌊</div>
            <div>
                <h3>Flood Safety Tips</h3>
                <p><strong>Before:</strong> Prepare an emergency kit and follow weather warnings.</p>
                <p><strong>During:</strong> Move to higher ground and stay away from floodwater.</p>
                <p><strong>After:</strong> Avoid contaminated water and damaged buildings.</p>
            </div>`;
    }
    else if (disaster === "fire") {
        tips = `
            <div class="info-icon">🔥</div>
            <div>
                <h3>Fire Safety Tips</h3>
                <p><strong>Before:</strong> Keep exits clear and check smoke alarms.</p>
                <p><strong>During:</strong> Raise the alarm and evacuate using stairs.</p>
                <p><strong>After:</strong> Do not re-enter until authorities say it is safe.</p>
            </div>`;
    }
    else if (disaster === "earthquake") {
        tips = `
            <div class="info-icon">🏚️</div>
            <div>
                <h3>Earthquake Safety Tips</h3>
                <p><strong>Before:</strong> Secure heavy objects and prepare an emergency kit.</p>
                <p><strong>During:</strong> Drop, Cover and Hold On. Protect your head and neck.</p>
                <p><strong>After:</strong> Watch for aftershocks and avoid damaged buildings.</p>
            </div>`;
    }
    else {
        tips = `
            <div>
                <h3>Safety Information</h3>
                <p>Please select a valid disaster.</p>
            </div>`;
    }

    safetyInfo.innerHTML = tips;
}

function checkItems() {
    const items = document.querySelectorAll(".kitItem");
    const progressText = document.getElementById("progressText");
    const progressFill = document.getElementById("progressFill");
    const result = document.getElementById("result");

    let count = 0;

    for (let i = 0; i < items.length; i++) {
        if (items[i].checked) {
            count = count + 1;
        }
    }

    const total = items.length;
    const percentage = total > 0 ? (count / total) * 100 : 0;

    progressText.textContent =
        count + " of " + total + " items prepared";

    progressFill.style.width = percentage + "%";

    if (count === total) {
        result.textContent =
            "Excellent! All checklist items are selected.";
    }
    else if (count >= 3) {
        result.textContent =
            "Good progress! Keep preparing the remaining items.";
    }
    else {
        result.textContent =
            "Keep preparing! Every item helps you get ready.";
    }
}

/* Update progress whenever a checkbox changes */
const checklistItems = document.querySelectorAll(".kitItem");

for (let i = 0; i < checklistItems.length; i++) {
    checklistItems[i].addEventListener("change", checkItems);
}
