const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'page.tsx');
const fileContent = fs.readFileSync(filePath, 'utf8');

function runTest() {
  let passed = true;

  // Test 1: Check for absence of "Learn more about Next.js" button
  if (fileContent.includes('Learn more about Next.js')) {
    console.error('Test Failed: "Learn more about Next.js" button found.');
    passed = false;
  } else {
    console.log('Test Passed: "Learn more about Next.js" button not found.');
  }

  // Test 2: Check for absence of "Interactive UI" card
  if (fileContent.includes('Interactive UI')) {
    console.error('Test Failed: "Interactive UI" card found.');
    passed = false;
  } else {
    console.log('Test Passed: "Interactive UI" card not found.');
  }

  // Test 3: Check for absence of "Theme Customization" card
  if (fileContent.includes('Theme Customization')) {
    console.error('Test Failed: "Theme Customization" card found.');
    passed = false;
  } else {
    console.log('Test Passed: "Theme Customization" card not found.');
  }

  // Test 4: Check for absence of "Responsive Design" card
  if (fileContent.includes('Responsive Design')) {
    console.error('Test Failed: "Responsive Design" card found.');
    passed = false;
  } else {
    console.log('Test Passed: "Responsive Design" card not found.');
  }

  if (passed) {
    console.log('All tests passed!');
  } else {
    console.error('Some tests failed.');
    process.exit(1);
  }
}

runTest();
