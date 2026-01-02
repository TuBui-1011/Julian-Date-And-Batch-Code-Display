// =================================================================================
// KHU VỰC CẤU HÌNH TRUNG TÂM
// =================================================================================
// Mảng chứa thông tin của tất cả sản phẩm.
// Để thêm/sửa/xóa sản phẩm, chỉ cần chỉnh sửa mảng này.
const products = [
  {
    shelfLife: 12,
    batchSuffix: "X",
    batchId: "batchCode",
    expiryId: "expirationDate",
  },
  {
    shelfLife: 9,
    batchSuffix: "U",
    batchId: "batchCode2",
    expiryId: "expirationDate2",
  },
  {
    shelfLife: 9,
    batchSuffix: "A",
    batchId: "batchCode711",
    expiryId: "expirationDate711",
  },
  {
    shelfLife: 9,
    batchSuffix: "V",
    batchId: "batchCode34",
    expiryId: "expirationDate34",
  },
  {
    shelfLife: 15,
    batchSuffix: "B",
    batchId: "batchCode48",
    expiryId: "expirationDate48",
  },
  {
    shelfLife: 15,
    batchSuffix: "L",
    batchId: "batchCode26",
    expiryId: "expirationDate26",
  },
  {
    shelfLife: 15,
    batchSuffix: "J",
    batchId: "batchCodeMes12",
    expiryId: "expirationDateMes12",
  },
  {
    shelfLife: 15,
    batchSuffix: "N",
    batchId: "batchCodeMes3",
    expiryId: "expirationDateMes3",
  },
  {
    shelfLife: 12,
    batchSuffix: "D",
    batchId: "batchCodeO2",
    expiryId: "expirationDateO2",
  },
  {
    shelfLife: 12,
    batchSuffix: "F",
    batchId: "batchCodeSu52",
    expiryId: "expirationDateSu52",
  },
  {
    shelfLife: 12,
    batchSuffix: "G",
    batchId: "batchCodeNal",
    expiryId: "expirationDateNal",
  },
  {
    shelfLife: 12,
    batchSuffix: "H",
    batchId: "batchCode10",
    expiryId: "expirationDate10",
  },
  {
    shelfLife: 10,
    batchSuffix: "H",
    batchId: "batchCodeMilk10",
    expiryId: "expirationDateMilk10",
  },
  {
    shelfLife: 24,
    batchSuffix: "C",
    batchId: "batchCodeGold24",
    expiryId: "expirationDateGold24",
  },
  {
    shelfLife: 18,
    batchSuffix: "C",
    batchId: "batchCodeMes18",
    expiryId: "expirationDateMes18",
  },
  {
    shelfLife: 18,
    batchSuffix: "N",
    batchId: "batchCodeUni18",
    expiryId: "expirationDateUni18",
  },
  {
    shelfLife: 18,
    batchSuffix: "G",
    batchId: "batchCodeTawo18",
    expiryId: "expirationDateTawo18",
  },
  {
    shelfLife: 18,
    batchSuffix: "L",
    batchId: "batchCodeWolf18",
    expiryId: "expirationDateWolf18",
  },
];

// =================================================================================
// KHU VỰC CÁC HÀM TIỆN ÍCH (UTILITY FUNCTIONS)
// =================================================================================

/**
 * Thêm một số tháng vào một ngày cụ thể.
 * Xử lý trường hợp ngày không tồn tại ở tháng tới (ví dụ: 31/01 + 1 tháng = 28/02).
 * @param {Date} date - Ngày bắt đầu.
 * @param {number} months - Số tháng cần thêm.
 * @returns {Date} - Ngày mới sau khi đã thêm tháng.
 */
function addMonths(date, months) {
  const result = new Date(date);
  const originalDate = date.getDate();
  result.setMonth(result.getMonth() + months);
  // Nếu ngày bị thay đổi (ví dụ từ 31 thành 3), lùi về ngày cuối của tháng trước.
  if (result.getDate() !== originalDate) {
    result.setDate(0);
  }
  return result;
}

/**
 * Định dạng đối tượng Date thành chuỗi "DD.MM.YYYY".
 * @param {Date} date - Đối tượng Date cần định dạng.
 * @returns {string} - Chuỗi ngày tháng đã định dạng.
 */
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

/**
 * Tính ngày Julian (ngày thứ mấy trong năm).
 * @param {Date} date - Ngày cần tính.
 * @returns {number} - Ngày Julian.
 */
function getJulianDay(date) {
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

/**
 * Tạo chuỗi Batch Code theo định dạng.
 * @param {Date} date - Ngày sản xuất.
 * @param {string} suffix - Ký tự cuối của batch code.
 * @returns {string} - Chuỗi Batch Code hoàn chỉnh.
 */
function formatBatchCode(date, suffix) {
  const yearLastDigit = date.getFullYear().toString().slice(-1); // Lấy số cuối của năm
  const julianDay = getJulianDay(date).toString().padStart(3, "0");
  return `${yearLastDigit}${julianDay}2131${suffix}`;
}

// =================================================================================
// KHU VỰC CẬP NHẬT GIAO DIỆN (UI UPDATE FUNCTIONS)
// =================================================================================

/**
 * Hiển thị thời gian và ngày tháng hiện tại, cập nhật mỗi giây.
 */
function displayCurrentDateTime() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const dateTimeString = `Today: ${day}/${month}/${year} --- Time: ${hours}:${minutes}:${seconds}`;
  const element = document.getElementById("currentDateTime");
  if (element) {
    element.textContent = dateTimeString;
  }
}

/**
 * Cập nhật toàn bộ bảng thông tin sản phẩm.
 */
function updateAllProductInfo() {
  const today = new Date();

  // Cập nhật các thẻ thông tin chung
  const julianDay = getJulianDay(today).toString().padStart(3, "0");
  const julianDailyEl = document.getElementById("julianDaily");
  if (julianDailyEl) {
    julianDailyEl.textContent = `Julian Date: ${julianDay}`;
  }

  const currentBatchCodeEl = document.getElementById("currentBatchCode");
  if (currentBatchCodeEl) {
    currentBatchCodeEl.textContent = formatBatchCode(today, "_"); // Ví dụ với suffix '_'
  }

  // Cập nhật bảng hạn sử dụng tóm tắt
  const shelfLives = [9, 10, 12, 15, 18, 24];
  shelfLives.forEach((months) => {
    const expiryEl = document.getElementById(`expiry-${months}`);
    if (expiryEl) {
      expiryEl.textContent = formatDate(addMonths(today, months));
    }
  });

  // Cập nhật bảng chi tiết sản phẩm
  products.forEach((product) => {
    const batchCode = formatBatchCode(today, product.batchSuffix);
    const expirationDate = formatDate(addMonths(today, product.shelfLife));

    const batchEl = document.getElementById(product.batchId);
    const expiryEl = document.getElementById(product.expiryId);

    if (batchEl) batchEl.textContent = batchCode;
    if (expiryEl) expiryEl.textContent = expirationDate;
  });
}

// =================================================================================
// KHU VỰC KHỞI TẠO VÀ LÊN LỊCH (INITIALIZATION & SCHEDULING)
// =================================================================================

/**
 * Lên lịch cập nhật dữ liệu vào lúc nửa đêm mỗi ngày.
 */
function scheduleDailyUpdate() {
  const now = new Date();
  const midnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    0,
    0,
    0
  );
  const timeToMidnight = midnight - now;

  setTimeout(() => {
    updateAllProductInfo(); // Cập nhật ngay lúc nửa đêm
    setInterval(updateAllProductInfo, 24 * 60 * 60 * 1000); // Lặp lại mỗi 24 giờ
  }, timeToMidnight);
}

// Chạy khi toàn bộ DOM đã được tải
document.addEventListener("DOMContentLoaded", function () {
  // Cập nhật lần đầu khi tải trang
  displayCurrentDateTime();
  updateAllProductInfo();

  // Bắt đầu đồng hồ
  setInterval(displayCurrentDateTime, 1000);

  // Lên lịch cập nhật hàng ngày
  scheduleDailyUpdate();

  // Tối ưu hóa hiệu suất (lazy loading, debouncing)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("loaded");
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll(".lazy-load").forEach((element) => {
    observer.observe(element);
  });
});
