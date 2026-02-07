const modelInputs = document.querySelectorAll('input[name="model"]');
const orderSection = document.getElementById('orderSection');
const quantity = document.getElementById('quantity');
const notes = document.getElementById('notes');
const orderBtn = document.getElementById('orderBtn');

let selectedModel = null;

// Enable order section when model selected
modelInputs.forEach(input => {
  input.addEventListener('change', () => {
    selectedModel = input.value;

    orderSection.classList.remove('disabled');
    quantity.disabled = false;
    notes.disabled = false;
    orderBtn.disabled = false;
  });
});

// Send order email
orderBtn.addEventListener('click', () => {
  const qty = quantity.value;
  const noteText = notes.value;

  const subject = `New 3D Print Order - ${selectedModel}`;
  const body = `
Model: ${selectedModel}
Quantity: ${qty}

Notes:
${noteText}
  `;

  const mailtoLink = `mailto:jdmhprints@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
});
