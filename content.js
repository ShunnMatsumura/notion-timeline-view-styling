// Default values
let currentColor = '#6495ED';
let currentOpacity = 0.3;

// Convert hex color to RGBA
function hexToRGBA(hex, opacity) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

// Function to style timeline items
function styleTimelineItems() {
  const items = document.querySelectorAll('.notion-timeline-item');
  const backgroundColor = hexToRGBA(currentColor, currentOpacity);
  
  items.forEach(item => {
    item.style.backgroundColor = backgroundColor;
    item.style.borderRadius = '4px';
  });
}

// Load saved settings and apply them
function loadAndApplySettings() {
  chrome.storage.sync.get(['timelineColor', 'timelineOpacity'], (result) => {
    if (result.timelineColor) {
      currentColor = result.timelineColor;
    }
    if (result.timelineOpacity) {
      currentOpacity = result.timelineOpacity;
    }
    styleTimelineItems();
  });
}

// Listen for changes in storage
chrome.storage.onChanged.addListener((changes) => {
  if (changes.timelineColor) {
    currentColor = changes.timelineColor.newValue;
  }
  if (changes.timelineOpacity) {
    currentOpacity = changes.timelineOpacity.newValue;
  }
  styleTimelineItems();
});

// Initial load and setup
loadAndApplySettings();

// Run periodically to catch dynamically loaded items
setInterval(styleTimelineItems, 2000);
