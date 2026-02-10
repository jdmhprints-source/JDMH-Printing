const modelInputs = document.querySelectorAll('input[name="model"]');
const orderSection = document.getElementById('orderSection');
const quantity = document.getElementById('quantity');
const notes = document.getElementById('notes');
const orderBtn = document.getElementById('orderBtn');
const selectedModelInput = document.getElementById('selectedModel');

modelInputs.forEach(input => {
  input.addEventListener('change', () => {
    // Set selected model value
    selectedModelInput.value = input.value;

    // Enable order section
    orderSection.classList.remove('disabled');
    quantity.disabled = false;
    notes.disabled = false;
    orderBtn.disabled = false;
  });
});
