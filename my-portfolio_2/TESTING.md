# TestSprite Testing Guide

This document provides instructions for testing this portfolio project with TestSprite.

## Prerequisites

1. **Install TestSprite MCP Server**: Ensure the TestSprite Model Context Protocol (MCP) Server is installed and configured in your IDE.

2. **Start the Development Server**: 
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## Project Overview

This is a React portfolio website built with Vite, featuring the following components:
- **Header**: Contact information and social links
- **Summary**: Professional summary
- **Skills**: Technical skills and tools
- **Education**: Educational background
- **Projects**: Project showcase with links
- **Contact**: Contact section

## Testing with TestSprite

### Step 1: Start the Application
Make sure your development server is running:
```bash
cd my-portfolio
npm run dev
```

### Step 2: Configure TestSprite
1. Open your IDE's chat interface
2. Enter: `Can you test this project with TestSprite?`
3. A configuration page will open in your browser

### Step 3: Test Configuration
When the configuration page opens, provide:
- **Testing Type**: Frontend (UI)
- **Application URL**: `http://localhost:5173`
- **Test Account Credentials**: Not required (no authentication)
- **Project Path**: `my-portfolio`

### Step 4: Test Execution
TestSprite will automatically:
- Analyze the codebase structure
- Generate a comprehensive test plan
- Execute tests in a cloud environment
- Provide detailed test reports

## Test Scenarios

The following test scenarios are configured in `testsprite.config.json`:

1. **Header Rendering**: Verify header displays all contact information correctly
2. **Navigation Sections**: Verify all sections are accessible and render properly
3. **Links Functionality**: Verify all external links work correctly
4. **Responsive Design**: Verify portfolio is responsive across screen sizes
5. **Content Display**: Verify all content sections render with correct information

## Expected Test Coverage

- Component rendering
- Link functionality (GitHub, LinkedIn, project links)
- Responsive design
- Content accuracy
- UI/UX validation

## Troubleshooting

If TestSprite MCP server is not available:
1. Check if TestSprite MCP Server is installed
2. Verify MCP server configuration in your IDE settings
3. Refer to [TestSprite Documentation](https://docs.testsprite.com/) for setup instructions

## Manual Testing Checklist

While waiting for TestSprite setup, you can manually test:
- [ ] All sections render correctly
- [ ] Header information is accurate
- [ ] All links open in new tabs
- [ ] Portfolio is responsive on mobile/tablet/desktop
- [ ] No console errors
- [ ] All images/assets load correctly

