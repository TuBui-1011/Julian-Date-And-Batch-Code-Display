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
// KHU VỰC TÍNH TOÁN NGƯỢC (REVERSE CALCULATION)
// =================================================================================

/**
 * Chuyển đổi từ ngày Julian sang đối tượng Date.
 * @param {number} year - Năm (đầy đủ 4 chữ số).
 * @param {number} julianDay - Ngày Julian (1-366).
 * @returns {Date} - Đối tượng Date tương ứng.
 */
function julianToDate(year, julianDay) {
  const date = new Date(year, 0, julianDay); // Tháng 0 là tháng 1, ngày 1 là ngày đầu tiên
  return date;
}

/**
 * Trừ một số tháng từ một ngày cụ thể.
 * @param {Date} date - Ngày bắt đầu.
 * @param {number} months - Số tháng cần trừ.
 * @returns {Date} - Ngày mới sau khi đã trừ.
 */
function subtractMonths(date, months) {
  const result = new Date(date);
  result.setMonth(result.getMonth() - months);
  return result;
}

/**
 * Phân tích chuỗi ngày "DD.MM.YYYY" thành đối tượng Date.
 * @param {string} dateString - Chuỗi ngày.
 * @returns {Date|null} - Đối tượng Date hoặc null nếu không hợp lệ.
 */
function parseDateString(dateString) {
  const parts = dateString.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  if (!parts) return null;
  // parts[1] = DD, parts[2] = MM, parts[3] = YYYY
  const date = new Date(parts[3], parts[2] - 1, parts[1]);
  // Kiểm tra xem ngày có hợp lệ không (ví dụ: 30.02.2024 là không hợp lệ)
  if (
    date.getFullYear() == parts[3] &&
    date.getMonth() == parts[2] - 1 &&
    date.getDate() == parts[1]
  ) {
    return date;
  }
  return null;
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

  // Xử lý sự kiện cho công cụ tính toán
  const batchInput = document.getElementById("batchInput");
  const calcFromBatchBtn = document.getElementById("calcFromBatchBtn");
  const expiryInput = document.getElementById("expiryInput");
  const shelfLifeSelect = document.getElementById("shelfLifeSelect");
  const calcFromExpiryBtn = document.getElementById("calcFromExpiryBtn");
  const calcResult = document.getElementById("calcResult");

  // Tính từ Batch Code
  calcFromBatchBtn.addEventListener("click", () => {
    const batchCode = batchInput.value.trim();
    if (batchCode.length < 4) {
      calcResult.textContent = "Lỗi: Batch code không hợp lệ.";
      calcResult.className = "alert alert-danger mt-4";
      calcResult.style.display = "block";
      return;
    }

    const yearDigit = parseInt(batchCode[0], 10);
    const julianDay = parseInt(batchCode.substring(1, 4), 10);

    // Suy luận năm (giả định năm thuộc thập kỷ hiện tại hoặc trước đó)
    const currentYear = new Date().getFullYear();
    const currentDecade = Math.floor(currentYear / 10) * 10;
    let productionYear = currentDecade + yearDigit;
    if (productionYear > currentYear) {
      productionYear -= 10;
    }

    const productionDate = julianToDate(productionYear, julianDay);
    calcResult.innerHTML = `<strong>Ngày sản xuất tính từ Batch Code:</strong> ${formatDate(
      productionDate
    )}`;
    calcResult.className = "alert alert-success mt-4";
    calcResult.style.display = "block";
  });

  // Tính từ Hạn sử dụng
  calcFromExpiryBtn.addEventListener("click", () => {
    const expiryDateStr = expiryInput.value.trim();
    const shelfLife = parseInt(shelfLifeSelect.value, 10);

    const expiryDate = parseDateString(expiryDateStr);

    if (!expiryDate) {
      calcResult.textContent =
        "Lỗi: Định dạng ngày hết hạn không hợp lệ. Vui lòng dùng DD.MM.YYYY.";
      calcResult.className = "alert alert-danger mt-4";
      calcResult.style.display = "block";
      return;
    }

    const productionDate = subtractMonths(expiryDate, shelfLife);
    calcResult.innerHTML = `<strong>Ngày sản xuất tính từ Hạn sử dụng:</strong> ${formatDate(
      productionDate
    )}`;
    calcResult.className = "alert alert-success mt-4";
    calcResult.style.display = "block";
  });

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
