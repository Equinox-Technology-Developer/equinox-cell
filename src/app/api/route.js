import { google } from 'googleapis';

export async function POST(request) {
  const body = await request.json();

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      client_id: process.env.CLIENT_ID,
      private_key: process.env.PRIVATE_KEY,
    },
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file',
    ],
  });
  const sheets = google.sheets({ version: 'v4', auth });

  try {
    const res = await sheets.spreadsheets.values.append({
      spreadsheetId: '1YVCjUunIYs58Bv1XDAkF3jUUT4ASsW-OqzePLnn8m44',
      range: 'Sheet1!A2:G',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            body.name,
            body.email,
            body.phone,
            body.recentEducation,
            body.joinDate,
            body.domicile,
            body.knowAboutEquinox,
            body.portfolio,
          ],
        ],
      },
    });
    return Response.json({ res });
  } catch (error) {
    console.error('Google Sheets API Error:', error);
    return Response.error(new Error('Google Sheets API Error'));
  }
}
