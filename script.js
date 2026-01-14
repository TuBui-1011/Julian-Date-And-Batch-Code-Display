// =================================================================================
// KHU VỰC CẤU HÌNH TRUNG TÂM
// =================================================================================
// Mảng chứa thông tin của tất cả sản phẩm.
// Để thêm/sửa/xóa sản phẩm, chỉ cần chỉnh sửa mảng này.
const products = [
  {
    group: "2IN1",
    productionLine: "SANKO 14",
    shelfLife: 12,
    batchSuffix: "X",
    batchId: "batchCode",
    expiryId: "expirationDate",
    expiryBagId: "expirationDateBag",
    expiryCartonId: "expirationDateCarton",
  },
  {
    group: "2IN1",
    productionLine: "SANKO 12",
    shelfLife: 9,
    batchSuffix: "U",
    batchId: "batchCode2",
    expiryId: "expirationDate2",
    expiryBagId: "expirationDateBag2",
    expiryCartonId: "expirationDateCarton2",
  },
  {
    group: "2IN1",
    productionLine: "SANKO 711",
    shelfLife: 9,
    batchSuffix: "A",
    batchId: "batchCode711",
    expiryId: "expirationDate711",
    expiryBagId: "expirationDateBag711",
    expiryCartonId: "expirationDateCarton711",
  },
  {
    group: "2IN1",
    productionLine: "TOPACK 34",
    shelfLife: 9,
    batchSuffix: "V",
    batchId: "batchCode34",
    expiryId: "expirationDate34",
    expiryBagId: "expirationDateBag34",
    expiryCartonId: "expirationDateCarton34",
  },
  {
    group: "3IN1",
    productionLine: "SANKO 48",
    shelfLife: 15,
    batchSuffix: "B",
    batchId: "batchCode48",
    expiryId: "expirationDate48",
    expiryBagId: "expirationDateBag48",
    expiryCartonId: "expirationDateCarton48",
  },
  {
    group: "3IN1",
    productionLine: "SANKO 26",
    shelfLife: 15,
    batchSuffix: "L",
    batchId: "batchCode26",
    expiryId: "expirationDate26",
    expiryBagId: "expirationDateBag26",
    expiryCartonId: "expirationDateCarton26",
  },
  {
    group: "3IN1",
    productionLine: "SANKO Mes 12",
    shelfLife: 15,
    batchSuffix: "J",
    batchId: "batchCodeMes12",
    expiryId: "expirationDateMes12",
    expiryBagId: "expirationDateBagMes12",
    expiryCartonId: "expirationDateCartonMes12",
  },
  {
    group: "3IN1",
    productionLine: "SANKO Mes 3",
    shelfLife: 15,
    batchSuffix: "N",
    batchId: "batchCodeMes3",
    expiryId: "expirationDateMes3",
    expiryBagId: "expirationDateBagMes3",
    expiryCartonId: "expirationDateCartonMes3",
  },
  {
    group: "2IN1",
    productionLine: "SANKO O2",
    shelfLife: 12,
    batchSuffix: "D",
    batchId: "batchCodeO2",
    expiryId: "expirationDateO2",
    expiryBagId: "expirationDateBagO2",
    expiryCartonId: "expirationDateCartonO2",
  },
  {
    group: "2IN1",
    productionLine: "SANKO Su 52",
    shelfLife: 12,
    batchSuffix: "F",
    batchId: "batchCodeSu52",
    expiryId: "expirationDateSu52",
    expiryBagId: "expirationDateBagSu52",
    expiryCartonId: "expirationDateCartonSu52",
  },
  {
    group: "2IN1",
    productionLine: "SANKO Nal",
    shelfLife: 12,
    batchSuffix: "G",
    batchId: "batchCodeNal",
    expiryId: "expirationDateNal",
    expiryBagId: "expirationDateBagNal",
    expiryCartonId: "expirationDateCartonNal",
  },
  {
    group: "2IN1",
    productionLine: "SANKO 10",
    shelfLife: 12,
    batchSuffix: "H",
    batchId: "batchCode10",
    expiryId: "expirationDate10",
    expiryBagId: "expirationDateBag10",
    expiryCartonId: "expirationDateCarton10",
  },
  {
    group: "2IN1",
    productionLine: "SANKO Milk 10",
    shelfLife: 10,
    batchSuffix: "H",
    batchId: "batchCodeMilk10",
    expiryId: "expirationDateMilk10",
    expiryBagId: "expirationDateBagMilk10",
    expiryCartonId: "expirationDateCartonMilk10",
  },
  {
    group: "2IN1",
    productionLine: "GOLD 24",
    shelfLife: 24,
    batchSuffix: "C",
    batchId: "batchCodeGold24",
    expiryId: "expirationDateGold24",
    expiryBagId: "expirationDateBagGold24",
    expiryCartonId: "expirationDateCartonGold24",
  },
  {
    group: "2IN1",
    productionLine: "SANKO Mes 18",
    shelfLife: 18,
    batchSuffix: "C",
    batchId: "batchCodeMes18",
    expiryId: "expirationDateMes18",
    expiryBagId: "expirationDateBagMes18",
    expiryCartonId: "expirationDateCartonMes18",
  },
  {
    group: "2IN1",
    productionLine: "UNI 18",
    shelfLife: 18,
    batchSuffix: "N",
    batchId: "batchCodeUni18",
    expiryId: "expirationDateUni18",
    expiryBagId: "expirationDateBagUni18",
    expiryCartonId: "expirationDateCartonUni18",
  },
  {
    group: "2IN1",
    productionLine: "TAWO 18",
    shelfLife: 18,
    batchSuffix: "G",
    batchId: "batchCodeTawo18",
    expiryId: "expirationDateTawo18",
    expiryBagId: "expirationDateBagTawo18",
    expiryCartonId: "expirationDateCartonTawo18",
  },
  {
    group: "PSC",
    productionLine: "PSCWOLF",
    shelfLife: 18,
    batchSuffix: "L",
    batchId: "batchCodeWolf18",
    expiryId: "expirationDateWolf18",
    expiryBagId: "expirationDateBagWolf18",
    expiryCartonId: "expirationDateCartonWolf18",
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
 * Định dạng đối tượng Date thành chuỗi "DD/MM/YY".
 * @param {Date} date - Đối tượng Date cần định dạng.
 * @returns {string} - Chuỗi ngày tháng đã định dạng.
 */
function formatDateShortYear(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  return `${day}/${month}/${year}`;
}

/**
 * Định dạng ngày hết hạn theo yêu cầu mới: "DD MM YY SuffixDD_prod".
 * @param {Date} expiryDate - Ngày hết hạn.
 * @param {Date} productionDate - Ngày sản xuất.
 * @param {string} suffix - Ký tự hậu tố của sản phẩm (ví dụ: 'L').
 * @returns {string} - Chuỗi ngày hết hạn đã định dạng.
 */
function formatCustomExpiry(expiryDate, productionDate, suffix) {
  const expiryDay = String(expiryDate.getDate()).padStart(2, "0");
  const expiryMonth = String(expiryDate.getMonth() + 1).padStart(2, "0");
  const expiryYear = String(expiryDate.getFullYear()).slice(-2);
  const productionDay = String(productionDate.getDate()).padStart(2, "0");

  return `${expiryDay} ${expiryMonth} ${expiryYear} ${suffix}${productionDay}`;
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
  const dateEl = document.getElementById("currentDateTime");
  if (dateEl) {
    dateEl.textContent = now.toLocaleString("vi-VN");
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
    const expiryDate = addMonths(today, months);
    const expiryEl = document.getElementById(`expiry-${months}`);
    if (expiryEl) {
      // Giữ định dạng cũ cho bảng tóm tắt hoặc đổi nếu muốn
      expiryEl.textContent = formatDate(expiryDate);
    }
  });

  // Cập nhật bảng chi tiết sản phẩm
  products.forEach((product) => {
    const batchEl = document.getElementById(product.batchId);
    const expiryEl = document.getElementById(product.expiryId);
    const expiryBagEl = document.getElementById(product.expiryBagId);
    const expiryCartonEl = document.getElementById(product.expiryCartonId); // Lấy element mới

    const batchCodeText = formatBatchCode(today, product.batchSuffix);
    if (batchEl) {
      batchEl.textContent = batchCodeText;
    }
    if (expiryEl) {
      const expiryDate = addMonths(today, product.shelfLife);
      // Sử dụng hàm định dạng mới cho bảng chi tiết (Stick)
      expiryEl.textContent = formatCustomExpiry(
        expiryDate,
        today,
        product.batchSuffix
      );
    }
    // Cập nhật cho cột mới (Bag)
    if (expiryBagEl) {
      const expiryDate = addMonths(today, product.shelfLife);
      const formattedExpiryDate = formatDate(expiryDate);
      const currentTime = new Date().toLocaleTimeString("vi-VN");
      // Sử dụng innerHTML để thêm thẻ <br> ngắt dòng
      expiryBagEl.innerHTML = `${formattedExpiryDate}<br>${batchCodeText} ${currentTime}`;
    }
    // Cập nhật cho cột mới (Carton)
    if (expiryCartonEl) {
      const expiryDate = addMonths(today, product.shelfLife);
      const formattedShortDate = formatDateShortYear(expiryDate);
      expiryCartonEl.innerHTML = `${batchCodeText}<br>HSD ${formattedShortDate}`;
    }
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

  // Xử lý sự kiện cho tính năng Validate bằng Camera
  const startCameraBtn = document.getElementById("startCameraBtn");
  const captureBtn = document.getElementById("captureBtn");

  if (startCameraBtn) {
    startCameraBtn.addEventListener("click", startCamera);
  }
  if (captureBtn) {
    captureBtn.addEventListener("click", captureAndValidate);
  }

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

// =================================================================================
// KHU VỰC VALIDATE BẰNG CAMERA (CAMERA VALIDATION)
// =================================================================================

/**
 * Khởi động camera và hiển thị video feed.
 */
async function startCamera() {
  const video = document.getElementById("videoElement");
  const cameraFeed = document.getElementById("cameraFeed");
  const startBtn = document.getElementById("startCameraBtn");
  const ocrStatus = document.getElementById("ocrStatus");

  cameraFeed.style.display = "block";
  startBtn.style.display = "none";
  ocrStatus.textContent = "Starting camera...";

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" }, // Ưu tiên camera sau
    });
    video.srcObject = stream;
    video.onloadedmetadata = () => {
      video.play();
      ocrStatus.textContent = "Camera ready. Position the code and capture.";
    };
  } catch (err) {
    console.error("Error accessing camera: ", err);
    ocrStatus.textContent =
      "Error: Could not access camera. Please check permissions.";
    ocrStatus.className = "text-danger";
  }
}

/**
 * Chụp ảnh từ video, nhận dạng văn bản và xác thực.
 */
async function captureAndValidate() {
  const video = document.getElementById("videoElement");
  const ocrStatus = document.getElementById("ocrStatus");
  const validationResult = document.getElementById("validationResult");
  const codeType = document.getElementById("codeTypeSelect").value;
  const productIndex = document.getElementById("productSelect").value; // Lấy index của sản phẩm được chọn

  ocrStatus.textContent = "Processing image... Please wait.";
  validationResult.style.display = "none";

  // 1. Chụp ảnh từ video vào canvas
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const context = canvas.getContext("2d");
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  const imageDataUrl = canvas.toDataURL("image/png");

  // 2. Sử dụng Tesseract.js để nhận dạng văn bản
  try {
    // Thêm whitelist để cải thiện độ chính xác
    const whitelist = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ ./:";

    const {
      data: { text },
    } = await Tesseract.recognize(imageDataUrl, "eng", {
      tessedit_char_whitelist: whitelist, // Thêm tùy chọn whitelist
      logger: (m) => {
        ocrStatus.textContent = `${m.status} (${Math.round(
          m.progress * 100
        )}%)`;
      },
    });

    // Xử lý văn bản nhận dạng được để chuẩn hóa
    const detectedText = text
      .trim()
      .replace(/\s+/g, " ") // Chuẩn hóa khoảng trắng
      .replace(/(\d)\s(\d)/g, "$1$2"); // Gộp các số bị tách ra, ví dụ "B 1 4" -> "B14"

    ocrStatus.textContent = `Detected Text: "${detectedText}"`;

    // 3. Lấy định dạng đúng để so sánh DỰA TRÊN SẢN PHẨM ĐƯỢC CHỌN
    const today = new Date();
    // Lấy đúng sản phẩm từ mảng products dựa trên lựa chọn của người dùng
    const product = products[productIndex];
    if (!product) {
      ocrStatus.textContent = "Error: Invalid product selected.";
      return;
    }

    const expiryDate = addMonths(today, product.shelfLife);
    const batchCodeText = formatBatchCode(today, product.batchSuffix);
    let expectedText = "";

    if (codeType === "stick") {
      expectedText = formatCustomExpiry(expiryDate, today, product.batchSuffix);
    } else if (codeType === "bag") {
      // Chỉ so sánh phần ngày và batch code, bỏ qua time
      expectedText = `${formatDate(expiryDate)} ${batchCodeText}`;
    } else if (codeType === "carton") {
      // So sánh 2 dòng, thay <br> bằng khoảng trắng
      expectedText = `${batchCodeText} HSD ${formatDateShortYear(expiryDate)}`;
    }

    // 4. So sánh và hiển thị kết quả
    let isValid = false;
    if (codeType === "bag") {
      // Đối với 'bag', kiểm tra cả ngày và batch code, bỏ qua thời gian
      const expectedDate = formatDate(expiryDate);
      isValid =
        detectedText.includes(expectedDate) &&
        detectedText.includes(batchCodeText);
    } else if (codeType === "stick") {
      // Đối với 'stick', so sánh từng phần để linh hoạt hơn
      const parts = expectedText.split(" ");
      isValid = parts.every((part) => detectedText.includes(part));
    } else if (codeType === "carton") {
      // Đối với 'carton', kiểm tra batch code và ngày
      const expectedShortDate = formatDateShortYear(expiryDate);
      isValid =
        detectedText.includes(batchCodeText) &&
        detectedText.includes(expectedShortDate);
    } else {
      // Logic cũ cho các loại khác (kiểm tra phần đầu)
      isValid = detectedText.includes(expectedText.split(" ")[0]);
    }

    if (isValid) {
      validationResult.innerHTML = `<strong>VALIDATION PASSED!</strong><br>Detected text matches the expected format.`;
      validationResult.className = "alert alert-success mt-3";
    } else {
      validationResult.innerHTML = `<strong>VALIDATION FAILED!</strong><br>Expected format: "${expectedText}"<br>Detected text: "${detectedText}"`;
      validationResult.className = "alert alert-danger mt-3";
    }
    validationResult.style.display = "block";
  } catch (error) {
    console.error("OCR Error:", error);
    ocrStatus.textContent = "An error occurred during text recognition.";
    ocrStatus.className = "text-danger";
  }
}

/**
 * Điền các lựa chọn sản phẩm vào dropdown.
 */
function populateProductSelector() {
  const productSelect = document.getElementById("productSelect");
  if (productSelect) {
    products.forEach((product, index) => {
      const option = document.createElement("option");
      option.value = index; // Sử dụng index làm value
      option.textContent = `${product.group} - ${product.productionLine} (${product.shelfLife}m)`;
      productSelect.appendChild(option);
    });
  }
}

// Chạy khi toàn bộ DOM đã được tải
document.addEventListener("DOMContentLoaded", function () {
  // Cập nhật lần đầu khi tải trang
  displayCurrentDateTime();
  updateAllProductInfo();

  // Điền các lựa chọn sản phẩm vào dropdown
  populateProductSelector();

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

  // Xử lý sự kiện cho tính năng Validate bằng Camera
  const startCameraBtn = document.getElementById("startCameraBtn");
  const captureBtn = document.getElementById("captureBtn");

  if (startCameraBtn) {
    startCameraBtn.addEventListener("click", startCamera);
  }
  if (captureBtn) {
    captureBtn.addEventListener("click", captureAndValidate);
  }

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

// =================================================================================
// KHU VỰC VALIDATE BẰNG CAMERA (CAMERA VALIDATION)
// =================================================================================

/**
 * Khởi động camera và hiển thị video feed.
 */
async function startCamera() {
  const video = document.getElementById("videoElement");
  const cameraFeed = document.getElementById("cameraFeed");
  const startBtn = document.getElementById("startCameraBtn");
  const ocrStatus = document.getElementById("ocrStatus");

  cameraFeed.style.display = "block";
  startBtn.style.display = "none";
  ocrStatus.textContent = "Starting camera...";

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" }, // Ưu tiên camera sau
    });
    video.srcObject = stream;
    video.onloadedmetadata = () => {
      video.play();
      ocrStatus.textContent = "Camera ready. Position the code and capture.";
    };
  } catch (err) {
    console.error("Error accessing camera: ", err);
    ocrStatus.textContent =
      "Error: Could not access camera. Please check permissions.";
    ocrStatus.className = "text-danger";
  }
}

/**
 * Chụp ảnh từ video, nhận dạng văn bản và xác thực.
 */
async function captureAndValidate() {
  const video = document.getElementById("videoElement");
  const ocrStatus = document.getElementById("ocrStatus");
  const validationResult = document.getElementById("validationResult");
  const codeType = document.getElementById("codeTypeSelect").value;
  const productIndex = document.getElementById("productSelect").value; // Lấy index của sản phẩm được chọn

  ocrStatus.textContent = "Processing image... Please wait.";
  validationResult.style.display = "none";

  // 1. Chụp ảnh từ video vào canvas
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const context = canvas.getContext("2d");
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  const imageDataUrl = canvas.toDataURL("image/png");

  // 2. Sử dụng Tesseract.js để nhận dạng văn bản
  try {
    // Thêm whitelist để cải thiện độ chính xác
    const whitelist = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ ./:";

    const {
      data: { text },
    } = await Tesseract.recognize(imageDataUrl, "eng", {
      tessedit_char_whitelist: whitelist, // Thêm tùy chọn whitelist
      logger: (m) => {
        ocrStatus.textContent = `${m.status} (${Math.round(
          m.progress * 100
        )}%)`;
      },
    });

    // Xử lý văn bản nhận dạng được để chuẩn hóa
    const detectedText = text
      .trim()
      .replace(/\s+/g, " ") // Chuẩn hóa khoảng trắng
      .replace(/(\d)\s(\d)/g, "$1$2"); // Gộp các số bị tách ra, ví dụ "B 1 4" -> "B14"

    ocrStatus.textContent = `Detected Text: "${detectedText}"`;

    // 3. Lấy định dạng đúng để so sánh DỰA TRÊN SẢN PHẨM ĐƯỢC CHỌN
    const today = new Date();
    // Lấy đúng sản phẩm từ mảng products dựa trên lựa chọn của người dùng
    const product = products[productIndex];
    if (!product) {
      ocrStatus.textContent = "Error: Invalid product selected.";
      return;
    }

    const expiryDate = addMonths(today, product.shelfLife);
    const batchCodeText = formatBatchCode(today, product.batchSuffix);
    let expectedText = "";

    if (codeType === "stick") {
      expectedText = formatCustomExpiry(expiryDate, today, product.batchSuffix);
    } else if (codeType === "bag") {
      // Chỉ so sánh phần ngày và batch code, bỏ qua time
      expectedText = `${formatDate(expiryDate)} ${batchCodeText}`;
    } else if (codeType === "carton") {
      // So sánh 2 dòng, thay <br> bằng khoảng trắng
      expectedText = `${batchCodeText} HSD ${formatDateShortYear(expiryDate)}`;
    }

    // 4. So sánh và hiển thị kết quả
    let isValid = false;
    if (codeType === "bag") {
      // Đối với 'bag', kiểm tra cả ngày và batch code, bỏ qua thời gian
      const expectedDate = formatDate(expiryDate);
      isValid =
        detectedText.includes(expectedDate) &&
        detectedText.includes(batchCodeText);
    } else if (codeType === "stick") {
      // Đối với 'stick', so sánh từng phần để linh hoạt hơn
      const parts = expectedText.split(" ");
      isValid = parts.every((part) => detectedText.includes(part));
    } else if (codeType === "carton") {
      // Đối với 'carton', kiểm tra batch code và ngày
      const expectedShortDate = formatDateShortYear(expiryDate);
      isValid =
        detectedText.includes(batchCodeText) &&
        detectedText.includes(expectedShortDate);
    } else {
      // Logic cũ cho các loại khác (kiểm tra phần đầu)
      isValid = detectedText.includes(expectedText.split(" ")[0]);
    }

    if (isValid) {
      validationResult.innerHTML = `<strong>VALIDATION PASSED!</strong><br>Detected text matches the expected format.`;
      validationResult.className = "alert alert-success mt-3";
    } else {
      validationResult.innerHTML = `<strong>VALIDATION FAILED!</strong><br>Expected format: "${expectedText}"<br>Detected text: "${detectedText}"`;
      validationResult.className = "alert alert-danger mt-3";
    }
    validationResult.style.display = "block";
  } catch (error) {
    console.error("OCR Error:", error);
    ocrStatus.textContent = "An error occurred during text recognition.";
    ocrStatus.className = "text-danger";
  }
}
