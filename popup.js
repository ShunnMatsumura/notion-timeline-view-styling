// Get DOM elements
const colorPicker = document.getElementById('colorPicker');
const opacitySlider = document.getElementById('opacitySlider');
const opacityValue = document.getElementById('opacityValue');
const preview = document.getElementById('preview');

// Initialize with default values
colorPicker.value = '#6495ED'; // Default to cornflower blue

// Update preview
function updatePreview() {
  const color = colorPicker.value;
  const opacity = opacitySlider.value;
  const rgba = hexToRGBA(color, opacity);
  preview.style.backgroundColor = rgba;
  opacityValue.textContent = opacity;
  
  // Save to storage
  chrome.storage.sync.set({
    timelineColor: color,
    timelineOpacity: opacity
  });
}

// Convert hex color to RGBA
function hexToRGBA(hex, opacity) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

// Load saved settings
chrome.storage.sync.get(['timelineColor', 'timelineOpacity'], (result) => {
  if (result.timelineColor) {
    colorPicker.value = result.timelineColor;
  }
  if (result.timelineOpacity) {
    opacitySlider.value = result.timelineOpacity;
    opacityValue.textContent = result.timelineOpacity;
  }
  updatePreview();
});

// Add event listeners
colorPicker.addEventListener('input', updatePreview);
opacitySlider.addEventListener('input', updatePreview);
