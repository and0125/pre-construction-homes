const fs = require("fs");
const path = require("path");

// Paths
const changelogPath = path.join(__dirname, "CHANGELOG.md");
const readmePath = path.join(__dirname, "README.md");

// Function to update the README with changelog content
function updateReadme() {
  // Check if both files exist
  if (!fs.existsSync(changelogPath)) {
    console.error("❌ Error: CHANGELOG.md not found");
    return;
  }

  if (!fs.existsSync(readmePath)) {
    console.error("❌ Error: README.md not found");
    return;
  }

  // Read the content of both files
  const changelogContent = fs.readFileSync(changelogPath, "utf8");
  let readmeContent = fs.readFileSync(readmePath, "utf8");

  // Extract the latest changelog entry (everything up to the second ## heading)
  const latestChangelogMatch = changelogContent.match(/^#.*?(?=\n## |$)/s);

  if (!latestChangelogMatch) {
    console.error("❌ Error: Could not extract latest changelog entry");
    return;
  }

  const latestChangelog = latestChangelogMatch[0].trim();

  // Check for placeholder
  const placeholder = "<!-- INCLUDE_CHANGELOG -->";
  const hasPlaceholder = readmeContent.includes(placeholder);

  // Check for existing changelog section
  const changelogSectionRegex = /## Changelog\s+([\s\S]*?)(?=\n## |\n# |$)/;
  const existingChangelogMatch = readmeContent.match(changelogSectionRegex);

  if (hasPlaceholder) {
    // Replace placeholder with changelog section
    readmeContent = readmeContent.replace(
      placeholder,
      `${latestChangelog}\n\n[View full changelog](./CHANGELOG.md)`
    );
    console.log("✅ Changelog added to README.md using placeholder");
  } else if (existingChangelogMatch) {
    // Update existing changelog section
    readmeContent = readmeContent.replace(
      changelogSectionRegex,
      `${latestChangelog}\n\n[View full changelog](./CHANGELOG.md)\n\n`
    );
    console.log("✅ Existing changelog section updated in README.md");
  } else {
    // No placeholder or existing section found
    console.error(
      '❌ Error: Neither placeholder "<!-- INCLUDE_CHANGELOG -->" nor existing changelog section found in README.md'
    );
    console.log(
      'Add <!-- INCLUDE_CHANGELOG --> where you want the changelog to appear, or create a "## Changelog" section'
    );
    return;
  }

  // Write the updated content back to README.md
  fs.writeFileSync(readmePath, readmeContent);
}

// Execute the function
updateReadme();
