/**
 * Google Apps Script — gắn vào Google Sheet
 *
 * Hướng dẫn triển khai:
 * 1. Mở Sheet: https://docs.google.com/spreadsheets/d/13HqioIU-wurJxUc0c_3XwX6K2N0kuy8rWKcUQoWpxxo/edit
 * 2. Extensions → Apps Script
 * 3. Xóa code mặc định, dán toàn bộ file này
 * 4. Deploy → New deployment → Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy Web app URL → thêm vào Vercel: GOOGLE_SCRIPT_URL=<url>
 * 6. Deploy lại website trên Vercel
 */

const SPREADSHEET_ID = "13HqioIU-wurJxUc0c_3XwX6K2N0kuy8rWKcUQoWpxxo";
const SHEET_NAME = "Câu trả lời biểu mẫu 1";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);

    if (!sheet) {
      throw new Error('Không tìm thấy tab "' + SHEET_NAME + '"');
    }

    const dob = formatDob_(data.studentDob);

    sheet.appendRow([
      new Date(),
      String(data.studentName || "").trim(),
      dob,
      String(data.parentName || "").trim(),
      String(data.phone || "").trim(),
      String(data.course || "").trim(),
      String(data.email || "").trim(),
    ]);

    return jsonResponse_({ success: true });
  } catch (err) {
    return jsonResponse_({
      success: false,
      error: err && err.message ? err.message : String(err),
    });
  }
}

function doGet() {
  return jsonResponse_({ status: "ok", sheet: SHEET_NAME });
}

function formatDob_(value) {
  if (!value) return "";

  var str = String(value).trim();

  // yyyy-mm-dd (input type="date")
  var iso = str.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (iso) {
    return iso[3] + "/" + iso[2] + "/" + iso[1];
  }

  // dd/mm/yyyy
  var vn = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (vn) {
    var d = ("0" + vn[1]).slice(-2);
    var m = ("0" + vn[2]).slice(-2);
    return d + "/" + m + "/" + vn[3];
  }

  return str;
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
