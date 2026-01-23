# Google Apps Script Setup for Careers Page

## Step 1: Create Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "EEPL Job Openings"
3. Set up the following columns in Row 1:

| Column A | Column B | Column C | Column D | Column E | Column F | Column G | Column H | Column I | Column J |
|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| id | title | department | location | type | description | requirements | salary | postedDate | applyLink | active |

## Step 2: Add Sample Data

Add some sample job entries in the rows below:

| id | title | department | location | type | description | requirements | salary | postedDate | applyLink | active |
|----|--------|------------|----------|------|-------------|--------------|--------|------------|-----------|--------|
| 1 | Senior Environmental Engineer | Engineering | Bangalore | Full-time | Lead environmental impact assessments | B.Tech in Environmental Engineering, 5+ years | ₹8-12 LPA | 2024-12-20 | mailto:hr@ecologicengineering.co.in?subject=Application for Senior Environmental Engineer | TRUE |
| 2 | Water Treatment Specialist | Engineering | Mumbai | Full-time | Design water treatment systems | B.Tech in Chemical Engineering, 3+ years | ₹6-10 LPA | 2024-12-18 | mailto:hr@ecologicengineering.co.in?subject=Application for Water Treatment Specialist | TRUE |

## Step 3: Create Google Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete the default code and paste this script:

```javascript
function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    const rows = data.slice(1);
    
    const jobs = rows.map((row, index) => {
      const job = {};
      headers.forEach((header, colIndex) => {
        job[header] = row[colIndex];
      });
      return job;
    });
    
    return ContentService
      .createTextOutput(JSON.stringify(jobs))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 4: Deploy the Script

1. Click **Deploy > New Deployment**
2. Choose **Web app** as the type
3. Set **Execute as**: Me
4. Set **Who has access**: Anyone
5. Click **Deploy**
6. Copy the **Web app URL** - this is your API endpoint

## Step 5: Update the Careers Page

1. Open `carrers.html`
2. Find the line: `const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';`
3. Replace `YOUR_SCRIPT_ID` with your actual script ID from the URL

## Step 6: HR Instructions

### Adding New Jobs:
1. Open the Google Sheet
2. Add a new row with job details
3. Set `active` to `TRUE` for active jobs, `FALSE` for closed positions
4. The website will automatically update within a few minutes

### Job Fields Explained:
- **id**: Unique number (auto-increment)
- **title**: Job title
- **department**: Engineering, Management, Consulting, etc.
- **location**: City name
- **type**: Full-time, Part-time, Contract, Internship
- **description**: Brief job description
- **requirements**: Required qualifications and experience
- **salary**: Salary range or "Competitive"
- **postedDate**: Date in YYYY-MM-DD format
- **applyLink**: Email link or application URL
- **active**: TRUE/FALSE to show/hide job

## Step 7: Advanced Features (Optional)

### Auto-Email Notifications:
Add this function to your Apps Script to send email notifications when new jobs are added:

```javascript
function onEdit(e) {
  const range = e.range;
  const sheet = e.source.getActiveSheet();
  
  // Check if a new row was added
  if (range.getRow() > 1 && range.getColumn() === 1) {
    const rowData = sheet.getRange(range.getRow(), 1, 1, 10).getValues()[0];
    
    // Send notification email
    MailApp.sendEmail({
      to: 'hr@ecologicengineering.co.in',
      subject: 'New Job Posted: ' + rowData[1],
      body: 'A new job has been posted: ' + rowData[1] + ' in ' + rowData[3]
    });
  }
}
```

### Application Form Integration:
You can also create a Google Form for applications and link it to the spreadsheet for automatic application tracking.

## Troubleshooting

1. **Script not working**: Make sure the script is deployed as a web app with "Anyone" access
2. **Data not updating**: Check if the sheet is shared and the script has permission
3. **CORS errors**: The script should handle CORS automatically, but if issues persist, check the deployment settings

## Security Notes

- The spreadsheet should be shared only with HR team members
- The web app URL should be kept private
- Consider adding authentication if needed for sensitive data