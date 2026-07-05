const form = document.querySelector("#brief-form");
const output = document.querySelector("#brief-output");

const recommendations = {
  "book more calls": [
    "Lead with a short promise, a proof strip, and a calendar call-to-action above the fold.",
    "Use the AI assistant to ask budget, timeline, and project fit before offering a booking link.",
    "Send a same-day summary email with the visitor's answers and the best next step."
  ],
  "sell a digital offer": [
    "Structure the page around pain, outcome, curriculum, social proof, and checkout confidence.",
    "Use the AI assistant as a guided selector that recommends the right offer tier.",
    "Trigger abandoned-checkout follow-ups with the visitor's goal and selected package."
  ],
  "answer customer questions": [
    "Create a searchable knowledge layer from your FAQs, policies, and onboarding material.",
    "Let the AI assistant resolve common questions while escalating high-value requests.",
    "Track unanswered questions weekly so the website improves from real visitor friction."
  ],
  "collect qualified leads": [
    "Replace generic contact forms with a short diagnostic flow that feels conversational.",
    "Score leads by urgency, fit, budget, and requested service before sending them to your inbox.",
    "Route qualified leads into CRM stages with a plain-English summary for fast follow-up."
  ]
};

function sentenceCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function createBrief(event) {
  event.preventDefault();

  const businessType = document.querySelector("#business-type").value;
  const mainGoal = document.querySelector("#main-goal").value;
  const brandTone = document.querySelector("#brand-tone").value;
  const plan = recommendations[mainGoal];

  output.innerHTML = `
    <span class="output-label">AI site brief</span>
    <h3>${sentenceCase(businessType)} website for ${mainGoal}</h3>
    <p>
      Build a ${brandTone} site that explains the offer quickly, removes buying friction, and uses
      AI to keep every visitor moving toward the next useful action.
    </p>
    <ul>
      ${plan.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

form.addEventListener("submit", createBrief);
