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
    group: "PSC",
    productionLine: "GOLD 24",
    shelfLife: 24,
    batchSuffix: "C",
    batchId: "batchCodeGold24",
    expiryId: "expirationDateGold24",
    expiryBagId: "expirationDateBagGold24",
    expiryCartonId: "expirationDateCartonGold24",
  },
  {
    group: "PSC",
    productionLine: "SANKO Mes 18",
    shelfLife: 18,
    batchSuffix: "C",
    batchId: "batchCodeMes18",
    expiryId: "expirationDateMes18",
    expiryBagId: "expirationDateBagMes18",
    expiryCartonId: "expirationDateCartonMes18",
  },
  {
    group: "PSC",
    productionLine: "UNI 18",
    shelfLife: 18,
    batchSuffix: "N",
    batchId: "batchCodeUni18",
    expiryId: "expirationDateUni18",
    expiryBagId: "expirationDateBagUni18",
    expiryCartonId: "expirationDateCartonUni18",
  },
  {
    group: "PSC",
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
 * Định dạng đối tượng Date thành chuỗi "DD/MM/YYYY".
 * @param {Date} date - Đối tượng Date cần định dạng.
 * @returns {string} - Chuỗi ngày tháng đã định dạng.
 */
function formatDateWithSlashes(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
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
      const currentTime = new Date().toLocaleTimeString("vi-VN");
      let formattedExpiryDate;

      // Áp dụng định dạng riêng cho nhóm PSC
      if (product.group === "PSC") {
        formattedExpiryDate = formatDateWithSlashes(expiryDate);
        // Định dạng cho PSC: Time rồi đến BatchCode
        expiryBagEl.innerHTML = `${formattedExpiryDate}<br>${currentTime} ${batchCodeText}`;
      } else {
        formattedExpiryDate = formatDate(expiryDate);
        // Định dạng cho các nhóm khác: BatchCode rồi đến Time
        expiryBagEl.innerHTML = `${formattedExpiryDate}<br>${batchCodeText} ${currentTime}`;
      }
    }
    // Cập nhật cho cột mới (Carton)
    if (expiryCartonEl) {
      const expiryDate = addMonths(today, product.shelfLife);

      // Áp dụng định dạng riêng cho nhóm PSC
      if (product.group === "PSC") {
        const formattedFullDate = formatDateWithSlashes(expiryDate);
        const currentTime = new Date().toLocaleTimeString("vi-VN");
        // Định dạng cho PSC: BatchCode Date Time trên một dòng
        expiryCartonEl.innerHTML = `${batchCodeText} ${formattedFullDate} ${currentTime}`;
      } else {
        // Giữ nguyên định dạng cũ cho các nhóm khác
        const formattedShortDate = formatDateShortYear(expiryDate);
        expiryCartonEl.innerHTML = `${batchCodeText}<br>HSD ${formattedShortDate}`;
      }
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

  // Điền các lựa chọn sản phẩm vào dropdown
  populateGroupSelector();
  populateProductSelector(); // Chạy lần đầu để hiển thị dropdown line bị vô hiệu hóa

  // Thêm event listener cho dropdown Group
  const groupSelect = document.getElementById("groupSelect");
  if (groupSelect) {
    groupSelect.addEventListener("change", (event) => {
      populateProductSelector(event.target.value);
    });
  }

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
  const captureBtn = document.getElementById("captureBtn"); // Thêm nút capture
  const ocrStatus = document.getElementById("ocrStatus");

  // Ẩn nút Start, hiện camera feed và nút Capture
  startBtn.style.display = "none";
  cameraFeed.style.display = "block";
  captureBtn.style.display = "block"; // Hiện nút Capture

  ocrStatus.textContent = "Starting camera...";

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: "environment" }, // Ưu tiên camera sau
        width: { ideal: 1280 },
        height: { ideal: 720 },
      },
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

    // Nếu có lỗi, ẩn feed và hiện lại nút Start
    startBtn.style.display = "block";
    cameraFeed.style.display = "none";
    captureBtn.style.display = "none";
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
  const productIndex = document.getElementById("productSelect").value;

  ocrStatus.textContent = "Processing image... Please wait.";
  validationResult.style.display = "none";

  // 1. Chụp ảnh và tiền xử lý ảnh qua Canvas
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // --- BƯỚC 1: TIỀN XỬ LÝ ẢNH ---
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    // Grayscale (Luminosity method)
    const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
    // Thresholding (Binarization) - ngưỡng 128
    const threshold = 128;
    const color = gray < threshold ? 0 : 255;
    data[i] = data[i + 1] = data[i + 2] = color;
  }
  context.putImageData(imageData, 0, 0);
  // Bạn có thể thêm một thẻ <img> vào HTML để hiển thị ảnh đã xử lý nhằm debug
  // document.getElementById('processedImage').src = canvas.toDataURL('image/png');
  const processedImageDataUrl = canvas.toDataURL("image/png");

  // 2. Sử dụng Tesseract.js với cấu hình chuyên dụng
  try {
    // --- BƯỚC 2: CẤU HÌNH TESSERACT.JS ---
    const whitelist = "0123456789/:HSDABCFGJKLMNPUVX "; // Whitelist đã được tối ưu
    const psm = "6"; // Page Segmentation Mode 6: Assume a single uniform block of text.

    const {
      data: { text },
    } = await Tesseract.recognize(processedImageDataUrl, "eng", {
      tessedit_char_whitelist: whitelist,
      tessedit_pageseg_mode: psm,
      logger: (m) => {
        ocrStatus.textContent = `${m.status} (${Math.round(
          m.progress * 100
        )}%)`;
      },
    });

    const detectedText = text.trim().replace(/\s+/g, " ");
    ocrStatus.textContent = `Detected Text: "${detectedText}"`;

    // 3. Lấy định dạng đúng để so sánh
    const today = new Date();
    const product = products[productIndex];
    if (!product) {
      ocrStatus.textContent = "Error: Invalid product selected.";
      return;
    }

    const expiryDate = addMonths(today, product.shelfLife);
    const batchCodeText = formatBatchCode(today, product.batchSuffix);
    let expectedText = ""; // Vẫn tạo để hiển thị cho người dùng

    // --- BƯỚC 3: HẬU XỬ LÝ VÀ VALIDATE BẰNG REGEX ---
    let isValid = false;
    let extractedData = "";

    if (codeType === "stick") {
      expectedText = formatCustomExpiry(expiryDate, today, product.batchSuffix);
      // Regex: DD MM YY SuffixDD_prod
      const regex = /(\d{2})\s(\d{2})\s(\d{2})\s([A-Z]\d{2})/;
      const match = detectedText.match(regex);
      if (match) {
        extractedData = match[0];
        // So sánh các phần đã trích xuất với giá trị mong đợi
        const expectedParts = expectedText.split(" ");
        isValid =
          match[1] === expectedParts[0] && // Day
          match[2] === expectedParts[1] && // Month
          match[3] === expectedParts[2] && // Year
          match[4] === expectedParts[3]; // Suffix + Prod Day
      }
    } else if (codeType === "bag") {
      const expectedDate =
        product.group === "PSC"
          ? formatDateWithSlashes(expiryDate)
          : formatDate(expiryDate);
      expectedText = `${expectedDate} ${batchCodeText}`;
      // Regex: DD.MM.YYYY hoặc DD/MM/YYYY và BatchCode
      const dateRegex =
        product.group === "PSC"
          ? /(\d{2}\/\d{2}\/\d{4})/
          : /(\d{2}\.\d{2}\.\d{4})/;
      const batchRegex = /(\d{8}[A-Z])/;
      const dateMatch = detectedText.match(dateRegex);
      const batchMatch = detectedText.match(batchRegex);

      if (dateMatch && batchMatch) {
        extractedData = `${dateMatch[0]} ${batchMatch[0]}`;
        isValid =
          dateMatch[0] === expectedDate && batchMatch[0] === batchCodeText;
      }
    } else if (codeType === "carton") {
      if (product.group === "PSC") {
        const expectedDate = formatDateWithSlashes(expiryDate);
        expectedText = `${batchCodeText} ${expectedDate}`;
        // Regex: BatchCode và DD/MM/YYYY
        const batchRegex = /(\d{8}[A-Z])/;
        const dateRegex = /(\d{2}\/\d{2}\/\d{4})/;
        const batchMatch = detectedText.match(batchRegex);
        const dateMatch = detectedText.match(dateRegex);
        if (batchMatch && dateMatch) {
          extractedData = `${batchMatch[0]} ${dateMatch[0]}`;
          isValid =
            batchMatch[0] === batchCodeText && dateMatch[0] === expectedDate;
        }
      } else {
        const expectedDate = formatDateShortYear(expiryDate);
        expectedText = `${batchCodeText} HSD ${expectedDate}`;
        // Regex: BatchCode, "HSD", và DD/MM/YY
        const batchRegex = /(\d{8}[A-Z])/;
        const dateRegex = /(\d{2}\/\d{2}\/\d{2})/;
        const batchMatch = detectedText.match(batchRegex);
        const dateMatch = detectedText.match(dateRegex);
        if (batchMatch && dateMatch && detectedText.includes("HSD")) {
          extractedData = `${batchMatch[0]} HSD ${dateMatch[0]}`;
          isValid =
            batchMatch[0] === batchCodeText && dateMatch[0] === expectedDate;
        }
      }
    }

    // 4. Hiển thị kết quả
    if (isValid) {
      validationResult.innerHTML = `<strong>VALIDATION PASSED!</strong><br>Extracted data: "${extractedData}"`;
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
 * Tính toán độ sắc nét của ảnh bằng thuật toán Laplacian.
 * @param {ImageData} imageData - Dữ liệu ảnh từ canvas.
 * @returns {number} - Giá trị variance, càng cao càng nét.
 */
function calculateSharpness(imageData) {
  const { data, width, height } = imageData;
  let laplacianSum = 0;
  let laplacianMean = 0;
  let varianceSum = 0;

  // Chuyển sang ảnh xám và tính toán ma trận Laplacian
  const gray = new Uint8Array(width * height);
  for (let i = 0; i < data.length; i += 4) {
    const grayscale =
      data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
    gray[i / 4] = grayscale;
  }

  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const center = gray[y * width + x];
      const laplacian =
        gray[y * width + (x - 1)] +
        gray[y * width + (x + 1)] +
        gray[(y - 1) * width + x] +
        gray[(y + 1) * width + x] -
        4 * center;
      laplacianSum += laplacian;
    }
  }
  laplacianMean = laplacianSum / (width * height);

  // Tính variance
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const center = gray[y * width + x];
      const laplacian =
        gray[y * width + (x - 1)] +
        gray[y * width + (x + 1)] +
        gray[(y - 1) * width + x] +
        gray[(y + 1) * width + x] -
        4 * center;
      varianceSum += Math.pow(laplacian - laplacianMean, 2);
    }
  }
  return varianceSum / (width * height);
}

/**
 * Bắt đầu quá trình tự động tìm khung hình tốt nhất để chụp.
 */
function startAutoCapture() {
  const video = document.getElementById("videoElement");
  const ocrStatus = document.getElementById("ocrStatus");
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d", { willReadFrequently: true });
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const SHARPNESS_THRESHOLD = 50; // Ngưỡng độ nét, cần tinh chỉnh qua thực tế
  let bestSharpness = 0;

  ocrStatus.textContent = "Move camera to focus on the code...";

  const analysisInterval = setInterval(() => {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const sharpness = calculateSharpness(imageData);

    // Cập nhật trạng thái để người dùng biết
    ocrStatus.textContent = `Analyzing... Sharpness: ${sharpness.toFixed(2)}`;

    if (sharpness > SHARPNESS_THRESHOLD) {
      console.log(`Good frame found! Sharpness: ${sharpness}`);
      clearInterval(analysisInterval); // Dừng phân tích
      captureAndValidate(); // Chụp và validate ngay lập tức
    }
  }, 500); // Phân tích mỗi 500ms
}

// Bạn sẽ cần gọi `startAutoCapture()` sau khi video đã play thành công trong hàm `startCamera`.

/**
 * Điền các lựa chọn Group duy nhất vào dropdown.
 */
function populateGroupSelector() {
  const groupSelect = document.getElementById("groupSelect");
  if (!groupSelect) return;

  // Lấy các group duy nhất từ mảng products
  const groups = [...new Set(products.map((p) => p.group))];

  groupSelect.innerHTML = '<option value="">-- Select Group --</option>'; // Thêm lựa chọn mặc định
  groups.forEach((group) => {
    const option = document.createElement("option");
    option.value = group;
    option.textContent = group;
    groupSelect.appendChild(option);
  });
}

/**
 * Điền các lựa chọn sản phẩm vào dropdown dựa trên group đã chọn.
 * @param {string} selectedGroup - Group đã được chọn.
 */
function populateProductSelector(selectedGroup) {
  const productSelect = document.getElementById("productSelect");
  if (!productSelect) return;

  productSelect.innerHTML = ""; // Xóa các lựa chọn cũ
  productSelect.disabled = true;

  if (!selectedGroup) {
    productSelect.innerHTML = '<option value="">-- Select Line --</option>';
    return;
  }

  // Lọc các sản phẩm thuộc group đã chọn
  products.forEach((product, index) => {
    if (product.group === selectedGroup) {
      const option = document.createElement("option");
      option.value = index; // Vẫn sử dụng index làm value
      option.textContent = `${product.productionLine} (${product.shelfLife}m)`;
      productSelect.appendChild(option);
    }
  });

  productSelect.disabled = false; // Kích hoạt dropdown
}
