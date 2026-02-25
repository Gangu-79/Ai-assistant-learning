async function callAI(prompt) {
  try {
    const response = await fetch("http://localhost:5000/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();

    if (data.error) {
      return "Error: " + data.error;
    }

    return data.answer;

  } catch (error) {
    return "Server connection failed!";
  }
}

async function summarize() {
  const text = document.getElementById("documentInput").value;
  const output = document.getElementById("output");

  output.innerText = "Loading...";

  const result = await callAI("Summarize this:\n" + text);
  output.innerText = result;
}

async function generateQuiz() {
  const text = document.getElementById("documentInput").value;
  const output = document.getElementById("output");

  output.innerText = "Loading...";

  const result = await callAI("Generate 5 quiz questions:\n" + text);
  output.innerText = result;
}

async function askQuestion() {
  const text = document.getElementById("documentInput").value;
  const question = document.getElementById("questionInput").value;
  const output = document.getElementById("output");

  output.innerText = "Loading...";

  const result = await callAI(
    "Based on this content:\n" + text + "\nAnswer this question:\n" + question
  );

  output.innerText = result;
}