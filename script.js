// =================================================================================
// KHU VỰC CẤU HÌNH TRUNG TÂM (CENTRAL CONFIGURATION)
// =================================================================================

/**
 * @const {Array<Object>} products
 * Mảng chứa thông tin cấu hình cho tất cả các dây chuyền sản xuất.
 * Đây là nơi duy nhất cần chỉnh sửa để thêm, bớt hoặc thay đổi thông tin sản phẩm.
 *
 * @property {string} group - Nhóm sản phẩm (ví dụ: "2IN1", "3IN1", "PSC").
 * @property {string} productionLine - Tên định danh của dây chuyền sản xuất.
 * @property {number} shelfLife - Hạn sử dụng của sản phẩm (tính bằng tháng).
 * @property {string} batchSuffix - Ký tự hậu tố dùng để tạo Batch Code.
 * @property {string} area - Khu vực sản xuất ("Packing" hoặc "Filling").
 * @property {string} batchId - ID của phần tử HTML để hiển thị Batch Code.
 * @property {string} expiryId - ID của phần tử HTML để hiển thị HSD cho stick.
 * @property {string} expiryBagId - ID của phần tử HTML để hiển thị HSD cho bao.
 * @property {string} expiryCartonId - ID của phần tử HTML để hiển thị HSD cho thùng.
 */
const products = [
  // =================== PACKING LINES ===================
  {
    area: "Packing",
    group: "2IN1",
    productionLine: "SANKO 14",
    shelfLife: 12,
    batchSuffix: "X",
    batchId: "pack-batchCode",
    expiryBagId: "pack-expirationDateBag",
    expiryCartonId: "pack-expirationDateCarton",
  },
  {
    area: "Packing",
    group: "2IN1",
    productionLine: "SANKO 12",
    shelfLife: 9,
    batchSuffix: "U",
    batchId: "pack-batchCode2",
    expiryBagId: "pack-expirationDateBag2",
    expiryCartonId: "pack-expirationDateCarton2",
  },
  {
    area: "Packing",
    group: "2IN1",
    productionLine: "SANKO 711",
    shelfLife: 9,
    batchSuffix: "A",
    batchId: "pack-batchCode711",
    expiryBagId: "pack-expirationDateBag711",
    expiryCartonId: "pack-expirationDateCarton711",
  },
  {
    area: "Packing",
    group: "2IN1",
    productionLine: "TOPACK 34",
    shelfLife: 9,
    batchSuffix: "V",
    batchId: "pack-batchCode34",
    expiryBagId: "pack-expirationDateBag34",
    expiryCartonId: "pack-expirationDateCarton34",
  },
  {
    area: "Packing",
    group: "3IN1",
    productionLine: "SANKO 48",
    shelfLife: 15,
    batchSuffix: "B",
    batchId: "pack-batchCode48",
    expiryBagId: "pack-expirationDateBag48",
    expiryCartonId: "pack-expirationDateCarton48",
  },
  {
    area: "Packing",
    group: "3IN1",
    productionLine: "SANKO 26",
    shelfLife: 15,
    batchSuffix: "L",
    batchId: "pack-batchCode26",
    expiryBagId: "pack-expirationDateBag26",
    expiryCartonId: "pack-expirationDateCarton26",
  },
  {
    area: "Packing",
    group: "3IN1",
    productionLine: "MESPACK 12",
    shelfLife: 15,
    batchSuffix: "J",
    batchId: "pack-batchCodeMes12",
    expiryBagId: "pack-expirationDateBagMes12",
    expiryCartonId: "pack-expirationDateCartonMes12",
  },
  {
    area: "Packing",
    group: "3IN1",
    productionLine: "MESPACK 3",
    shelfLife: 15,
    batchSuffix: "N",
    batchId: "pack-batchCodeMes3",
    expiryBagId: "pack-expirationDateBagMes3",
    expiryCartonId: "pack-expirationDateCartonMes3",
  },
  {
    area: "Packing",
    group: "MILO",
    productionLine: "OLYMPIA 2",
    shelfLife: 12,
    batchSuffix: "D",
    batchId: "pack-batchCodeO2",
    expiryBagId: "pack-expirationDateBagO2",
    expiryCartonId: "pack-expirationDateCartonO2",
  },
  {
    area: "Packing",
    group: "MILO",
    productionLine: "SU 52",
    shelfLife: 12,
    batchSuffix: "F",
    batchId: "pack-batchCodeSu52",
    expiryBagId: "pack-expirationDateBagSu52",
    expiryCartonId: "pack-expirationDateCartonSu52",
  },
  {
    area: "Packing",
    group: "MILO",
    productionLine: "NALBACH",
    shelfLife: 12,
    batchSuffix: "G",
    batchId: "pack-batchCodeNal",
    expiryBagId: "pack-expirationDateBagNal",
    expiryCartonId: "pack-expirationDateCartonNal",
  },
  {
    area: "Packing",
    group: "MILO",
    productionLine: "SANKO 10",
    shelfLife: 12,
    batchSuffix: "H",
    batchId: "pack-batchCode10",
    expiryBagId: "pack-expirationDateBag10",
    expiryCartonId: "pack-expirationDateCarton10",
  },
  {
    area: "Packing",
    group: "MILO",
    productionLine: "SANKO 10",
    shelfLife: 10,
    batchSuffix: "H",
    batchId: "pack-batchCodeMilk10",
    expiryBagId: "pack-expirationDateBagMilk10",
    expiryCartonId: "pack-expirationDateCartonMilk10",
  },
  {
    area: "Packing",
    group: "PSC",
    productionLine: "MESPACK",
    shelfLife: 24,
    batchSuffix: "C",
    batchId: "pack-batchCodeGold24",
    expiryBagId: "pack-expirationDateBagGold24",
    expiryCartonId: "pack-expirationDateCartonGold24",
  },
  {
    area: "Packing",
    group: "PSC",
    productionLine: "MESPACK",
    shelfLife: 18,
    batchSuffix: "C",
    batchId: "pack-batchCodeMes18",
    expiryBagId: "pack-expirationDateBagMes18",
    expiryCartonId: "pack-expirationDateCartonMes18",
  },
  {
    area: "Packing",
    group: "PSC",
    productionLine: "PSCUNI",
    shelfLife: 18,
    batchSuffix: "N",
    batchId: "pack-batchCodeUni18",
    expiryBagId: "pack-expirationDateBagUni18",
    expiryCartonId: "pack-expirationDateCartonUni18",
  },
  {
    area: "Packing",
    group: "PSC",
    productionLine: "PSCTAWO",
    shelfLife: 18,
    batchSuffix: "G", // This was the packing line suffix
    batchId: "pack-batchCodeTawo18",
    expiryBagId: "pack-expirationDateBagTawo18",
    expiryCartonId: "pack-expirationDateCartonTawo18",
  },
  {
    area: "Packing",
    group: "PSC",
    productionLine: "PSCWOLF",
    shelfLife: 18,
    batchSuffix: "L", // This was the packing line suffix
    batchId: "pack-batchCodeWolf18",
    expiryBagId: "pack-expirationDateBagWolf18",
    expiryCartonId: "pack-expirationDateCartonWolf18",
  },
  // =================== FILLING MACHINES ===================
  {
    area: "Filling",
    group: "2IN1",
    productionLine: "SANKO 14",
    shelfLife: 12,
    batchSuffix: "X",
    batchId: "fill-batchCodeS14",
    expiryId: "fill-expirationDateS14",
  },
  {
    area: "Filling",
    group: "2IN1",
    productionLine: "SANKO 12",
    shelfLife: 9,
    batchSuffix: "U",
    batchId: "fill-batchCodeS12",
    expiryId: "fill-expirationDateS12",
  },
  {
    area: "Filling",
    group: "2IN1",
    productionLine: "SANKO 7 (of 711)",
    shelfLife: 9,
    batchSuffix: "A",
    batchId: "fill-batchCodeS7",
    expiryId: "fill-expirationDateS7",
  },
  {
    area: "Filling",
    group: "2IN1",
    productionLine: "SANKO 11 (of 711)",
    shelfLife: 9,
    batchSuffix: "Y",
    batchId: "fill-batchCodeS11",
    expiryId: "fill-expirationDateS11",
  },
  {
    area: "Filling",
    group: "2IN1",
    productionLine: "TOPACK 3 (of 34)",
    shelfLife: 9,
    batchSuffix: "V",
    batchId: "fill-batchCodeT3",
    expiryId: "fill-expirationDateT3",
  },
  {
    area: "Filling",
    group: "2IN1",
    productionLine: "TOPACK 4 (of 34)",
    shelfLife: 9,
    batchSuffix: "R",
    batchId: "fill-batchCodeT4",
    expiryId: "fill-expirationDateT4",
  },
  {
    area: "Filling",
    group: "3IN1",
    productionLine: "SANKO 4 (of 48)",
    shelfLife: 15,
    batchSuffix: "C",
    batchId: "fill-batchCodeS4",
    expiryId: "fill-expirationDateS4",
  },
  {
    area: "Filling",
    group: "3IN1",
    productionLine: "SANKO 8 (of 48)",
    shelfLife: 15,
    batchSuffix: "B",
    batchId: "fill-batchCodeS8",
    expiryId: "fill-expirationDateS8",
  },
  {
    area: "Filling",
    group: "3IN1",
    productionLine: "SANKO 2 (of 26)",
    shelfLife: 15,
    batchSuffix: "L",
    batchId: "fill-batchCodeS2",
    expiryId: "fill-expirationDateS2",
  },
  {
    area: "Filling",
    group: "3IN1",
    productionLine: "SANKO 6 (of 26)",
    shelfLife: 15,
    batchSuffix: "T",
    batchId: "fill-batchCodeS6",
    expiryId: "fill-expirationDateS6",
  },
  {
    area: "Filling",
    group: "3IN1",
    productionLine: "MESPACK 1 (of 12)",
    shelfLife: 15,
    batchSuffix: "J",
    batchId: "fill-batchCodeM1",
    expiryId: "fill-expirationDateM1",
  },
  {
    area: "Filling",
    group: "3IN1",
    productionLine: "MESPACK 2 (of 12)",
    shelfLife: 15,
    batchSuffix: "K",
    batchId: "fill-batchCodeM2",
    expiryId: "fill-expirationDateM2",
  },
  {
    area: "Filling",
    group: "3IN1",
    productionLine: "MESPACK 3 (of 3)",
    shelfLife: 15,
    batchSuffix: "N",
    batchId: "fill-batchCodeM3",
    expiryId: "fill-expirationDateM3",
  },
  // =================== FILLING MACHINES - PSC ===================
  {
    area: "Filling",
    group: "PSC",
    productionLine: "PSCMES",
    shelfLife: 24,
    batchSuffix: "C",
    batchId: "fill-batchCodePscmes24",
    expiryId: "fill-expirationDatePscmes24",
  },
  {
    area: "Filling",
    group: "PSC",
    productionLine: "PSCMES",
    shelfLife: 18,
    batchSuffix: "C",
    batchId: "fill-batchCodePscmes18",
    expiryId: "fill-expirationDatePscmes18",
  },
  {
    area: "Filling",
    group: "PSC",
    productionLine: "PSCUNI",
    shelfLife: 18,
    batchSuffix: "N",
    batchId: "fill-batchCodePscuni",
    expiryId: "fill-expirationDatePscuni",
  },
  {
    area: "Filling",
    group: "PSC",
    productionLine: "TAM (of TAWO)",
    shelfLife: 18,
    batchSuffix: "H",
    batchId: "fill-batchCodeTam",
    expiryId: "fill-expirationDateTam",
  },
  {
    area: "Filling",
    group: "PSC",
    productionLine: "WOLF 1 (of TAWO)",
    shelfLife: 18,
    batchSuffix: "G",
    batchId: "fill-batchCodeWolf1",
    expiryId: "fill-expirationDateWolf1",
  },
  {
    area: "Filling",
    group: "PSC",
    productionLine: "WOLF 2 (of PSCWOLF)",
    shelfLife: 18,
    batchSuffix: "L",
    batchId: "fill-batchCodeWolf2",
    expiryId: "fill-expirationDateWolf2",
  },
  {
    area: "Filling",
    group: "PSC",
    productionLine: "WOLF 3 (of PSCWOLF)",
    shelfLife: 18,
    batchSuffix: "M",
    batchId: "fill-batchCodeWolf3",
    expiryId: "fill-expirationDateWolf3",
  },
];

// =================================================================================
// KHU VỰC CÁC HÀM TIỆN ÍCH (UTILITY FUNCTIONS)
// =================================================================================

/**
 * Xác định "ngày sản xuất" dựa trên quy tắc: một ngày sản xuất kéo dài từ 6h sáng hôm nay đến 6h sáng hôm sau.
 * Thời điểm chuyển giao được đặt là 5:40 sáng.
 * - Nếu giờ hiện tại < 5:40 sáng, ngày sản xuất được tính là ngày hôm qua.
 * - Nếu giờ hiện tại >= 5:40 sáng, ngày sản xuất được tính là ngày hôm nay.
 * @returns {Date} - Đối tượng Date đại diện cho ngày sản xuất hiện tại.
 */
function getProductionDate() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  // Thời điểm chuyển ngày là 5:40 AM (5 * 60 + 40 = 340 phút)
  const cutoffInMinutes = 5 * 60 + 40;
  const nowInMinutes = hours * 60 + minutes;

  if (nowInMinutes < cutoffInMinutes) {
    // Nếu trước 5:40 sáng, lùi lại 1 ngày
    const yesterday = new Date();
    yesterday.setDate(now.getDate() - 1);
    return yesterday;
  }
  // Nếu từ 5:40 sáng trở đi, dùng ngày hiện tại
  return now;
}

/**
 * Thêm một số tháng vào một ngày cụ thể.
 * Hàm này xử lý trường hợp ngày cuối tháng, ví dụ: 31/01 + 1 tháng = 28/02 (năm thường).
 * @param {Date} date - Ngày bắt đầu.
 * @param {number} months - Số tháng cần thêm.
 * @returns {Date} - Ngày mới sau khi đã thêm tháng.
 */
function addMonths(date, months) {
  const d = new Date(date);
  const day = d.getDate();
  d.setMonth(d.getMonth() + months);
  // Nếu ngày bị thay đổi (ví dụ: từ 31 thành 1), quay lại ngày cuối cùng của tháng trước.
  if (d.getDate() !== day) {
    d.setDate(0);
  }
  return d;
}

/**
 * Định dạng đối tượng Date thành chuỗi "DD/MM/YYYY".
 * @param {Date} date - Đối tượng Date cần định dạng.
 * @returns {string} - Chuỗi ngày đã định dạng (ví dụ: "25/01/2026").
 */
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

/**
 * Định dạng đối tượng Date thành chuỗi "DD.MM.YYYY".
 * @param {Date} date - Đối tượng Date cần định dạng.
 * @returns {string} - Chuỗi ngày đã định dạng (ví dụ: "25.01.2026").
 */
function formatDateWithDots(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

/**
 * Định dạng ngày theo kiểu DD/MM/YY (năm 2 chữ số).
 * @param {Date} date - Đối tượng Date cần định dạng.
 * @returns {string} - Chuỗi ngày đã định dạng.
 */
function formatDateShortYear(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  return `${day}/${month}/${year}`;
}

/**
 * Định dạng ngày hết hạn cho bao bì stick theo yêu cầu: "DD MM YY SuffixDD_prod".
 * @param {Date} expiryDate - Ngày hết hạn.
 * @param {Date} productionDate - Ngày sản xuất.
 * @param {string} suffix - Ký tự hậu tố của sản phẩm (ví dụ: 'L').
 * @returns {string} - Chuỗi ngày hết hạn đã định dạng cho stick.
 */
function formatCustomExpiry(expiryDate, productionDate, suffix) {
  const day = String(expiryDate.getDate()).padStart(2, "0");
  const month = String(expiryDate.getMonth() + 1).padStart(2, "0");
  const year = String(expiryDate.getFullYear()).slice(-2);
  const prodDay = String(productionDate.getDate()).padStart(2, "0");
  return `${day} ${month} ${year} ${suffix}${prodDay}`;
}

/**
 * Tính ngày Julian (ngày thứ mấy trong năm).
 * @param {Date} date - Ngày cần tính.
 * @returns {number} - Ngày Julian (từ 1 đến 366).
 */
function getJulianDay(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

/**
 * Tạo chuỗi Batch Code theo định dạng: YJJJFS (Y: năm, JJJ: ngày Julian, F: mã nhà máy, S: hậu tố).
 * @param {Date} date - Ngày sản xuất.
 * @param {string} suffix - Ký tự hậu tố của dây chuyền.
 * @returns {string} - Chuỗi Batch Code đã định dạng (ví dụ: "60252131_X").
 */
function formatBatchCode(date, suffix) {
  const year = String(date.getFullYear()).slice(-1); // Lấy số cuối của năm
  const julianDay = String(getJulianDay(date)).padStart(3, "0");
  const plantCode = "2131"; // Mã nhà máy
  return `${year}${julianDay}${plantCode}${suffix}`;
}

/**
 * Định dạng HSD tùy chỉnh cho các sản phẩm không phải PSC.
 * @param {Date} expiryDate - Ngày hết hạn.
 * @param {Date} productionDate - Ngày sản xuất.
 * @param {string} suffix - Ký tự hậu tố của sản phẩm (ví dụ: 'L').
 * @returns {string} - Chuỗi HSD đã định dạng cho bao bì không phải PSC.
 */
function formatCustomExpiryNonPSC(expiryDate, productionDate, suffix) {
  const day = String(expiryDate.getDate()).padStart(2, "0");
  const month = String(expiryDate.getMonth() + 1).padStart(2, "0");
  const year = String(expiryDate.getFullYear()).slice(-2);
  return `${day}/${month}/${year} ${suffix}`;
}

// =================================================================================
// KHU VỰC TÍNH TOÁN NGƯỢC (REVERSE CALCULATION)
// =================================================================================

/**
 * Chuyển đổi từ ngày Julian và năm sang đối tượng Date.
 * @param {number} year - Năm (đầy đủ 4 chữ số).
 * @param {number} julianDay - Ngày Julian (1-366).
 * @returns {Date} - Đối tượng Date tương ứng.
 */
function julianToDate(year, julianDay) {
  const date = new Date(year, 0, 1); // Bắt đầu từ ngày 1 tháng 1
  date.setDate(julianDay); // Thêm số ngày Julian
  return date;
}

/**
 * Trừ một số tháng từ một ngày cụ thể.
 * @param {Date} date - Ngày bắt đầu.
 * @param {number} months - Số tháng cần trừ.
 * @returns {Date} - Ngày mới sau khi đã trừ.
 */
function subtractMonths(date, months) {
  const d = new Date(date);
  d.setMonth(d.getMonth() - months);
  return d;
}

/**
 * Phân tích chuỗi ngày "DD.MM.YYYY" thành đối tượng Date.
 * @param {string} dateString - Chuỗi ngày.
 * @returns {Date|null} - Đối tượng Date hoặc null nếu chuỗi không hợp lệ.
 */
function parseDateString(dateString) {
  const parts = dateString.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  if (!parts) return null;
  // parts[2] - 1 vì tháng trong JS bắt đầu từ 0
  const date = new Date(parts[3], parts[2] - 1, parts[1]);
  // Kiểm tra xem ngày có hợp lệ không (ví dụ: 30.02.2024)
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
 * Cập nhật đồng hồ, ngày Julian và batch code ví dụ trên dashboard.
 * Chạy mỗi giây.
 */
function updateDateTime() {
  const now = new Date();
  // Ngày Julian vẫn tính theo ngày lịch (thay đổi sau 0h)
  const julianDay = getJulianDay(now);

  // Cập nhật ngày giờ hiện tại với định dạng DD/MM/YYYY
  document.getElementById("currentDateTime").textContent =
    `${formatDate(now)} ${now.toLocaleTimeString("en-GB")}`;

  // Cập nhật ngày Julian với định dạng 3 chữ số
  document.getElementById("julianDaily").textContent = String(
    julianDay,
  ).padStart(3, "0");
  // Cập nhật batch code ví dụ (dùng hậu tố 'X' làm ví dụ)
  // Batch code ví dụ cũng cần theo ngày sản xuất
  const productionDateForExample = getProductionDate();
  document.getElementById("currentBatchCode").textContent = formatBatchCode(
    productionDateForExample,
    "", // Thay "X" bằng chuỗi rỗng để chỉ hiển thị dấu gạch dưới
  );
}

/**
 * Tính toán và hiển thị tất cả các mã lô và ngày hết hạn cho các sản phẩm.
 * Hàm này sẽ được gọi khi trang tải và vào lúc 5:40 sáng hàng ngày.
 */
function calculateAndDisplayAll() {
  // Sử dụng getProductionDate() để xác định ngày cho tất cả các tính toán batch/HSD
  const productionDate = getProductionDate();
  const todayForShelfLife = new Date(); // Bảng HSD nhanh vẫn có thể tính theo ngày hiện tại

  // Cập nhật bảng HSD nhanh
  const shelfLives = [9, 10, 12, 15, 18, 24];
  shelfLives.forEach((sl) => {
    const expiryDate = addMonths(todayForShelfLife, sl);
    const element = document.getElementById(`expiry-${sl}`);
    if (element) {
      element.textContent = formatDate(expiryDate);
    }
  });

  // Lặp qua mảng sản phẩm và cập nhật thông tin cho từng dòng
  products.forEach((product) => {
    const expiryDate = addMonths(productionDate, product.shelfLife);
    const batchCode = formatBatchCode(productionDate, product.batchSuffix);

    // Cập nhật Batch Code
    const batchEl = document.getElementById(product.batchId);
    if (batchEl) {
      batchEl.textContent = batchCode;
      batchEl.onclick = () => copyToClipboard(batchEl); // Thêm lại sự kiện click
      batchEl.title = "Click to copy"; // Thêm lại tooltip
    }

    // Cập nhật HSD Stick
    const expiryEl = document.getElementById(product.expiryId);
    if (expiryEl) {
      // Áp dụng định dạng đặc biệt cho Stick của nhóm PSC
      if (product.area === "Filling" && product.group === "PSC") {
        const stickFormat = `${formatDate(expiryDate)}<br>${batchCode}`;
        expiryEl.innerHTML = stickFormat; // Dùng innerHTML để thẻ <br> hoạt động
      } else {
        expiryEl.textContent = formatCustomExpiry(
          expiryDate,
          productionDate, // Sử dụng productionDate ở đây
          product.batchSuffix,
        );
      }
      expiryEl.onclick = () => copyToClipboard(expiryEl); // Thêm lại sự kiện click
      expiryEl.title = "Click to copy"; // Thêm lại tooltip
    }

    // Chỉ cập nhật Bag và Carton cho khu vực Packing
    if (product.area === "Packing") {
      // Cập nhật HSD Bag (tùy nhóm sản phẩm)
      let bagFormat;
      if (product.group === "PSC") {
        const time = productionDate.toTimeString().substring(0, 5); // Lấy HH:MM
        bagFormat = `${formatDate(expiryDate)}<br>${time} ${batchCode}`;
      } else if (product.group === "2IN1" || product.group === "3IN1") {
        // Định dạng mới: HSD xuống hàng rồi đến Batch Code
        bagFormat = `${formatDateWithDots(expiryDate)}<br>${batchCode}`;
      } else if (product.group === "MILO") {
        // Giữ nguyên định dạng cũ cho MILO
        bagFormat = formatDateWithDots(expiryDate);
      } else {
        bagFormat = formatDate(expiryDate);
      }

      const bagEl = document.getElementById(product.expiryBagId);
      if (bagEl) {
        bagEl.innerHTML = bagFormat; // Dùng innerHTML để thẻ <br> hoạt động
        bagEl.onclick = () => copyToClipboard(bagEl); // Thêm lại sự kiện click
        bagEl.title = "Click to copy"; // Thêm lại tooltip
      }

      // Cập nhật HSD Carton (tùy nhóm sản phẩm)
      const cartonFormat =
        product.group === "PSC"
          ? `${batchCode} ${formatDate(expiryDate)} 00:00`
          : `${batchCode} HSD ${formatDateShortYear(expiryDate)}`;
      const cartonEl = document.getElementById(product.expiryCartonId);
      if (cartonEl) {
        cartonEl.textContent = cartonFormat;
        cartonEl.onclick = () => copyToClipboard(cartonEl); // Thêm lại sự kiện click
        cartonEl.title = "Click to copy"; // Thêm lại tooltip
      }
    }
  });
}

/**
 * Thiết lập bộ đếm thời gian để tự động cập nhật dữ liệu vào lúc 5:40 sáng hàng ngày.
 */
function scheduleDailyUpdate() {
  const now = new Date();
  const nextRun = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    5,
    40,
    0,
    0,
  );

  if (now > nextRun) {
    // Nếu bây giờ đã qua 5:40 sáng, đặt lịch cho ngày mai
    nextRun.setDate(nextRun.getDate() + 1);
  }

  const msUntilNextRun = nextRun - now;

  setTimeout(() => {
    calculateAndDisplayAll(); // Chạy lần đầu vào 5:40 sáng
    setInterval(calculateAndDisplayAll, 24 * 60 * 60 * 1000); // Lặp lại mỗi 24 giờ
  }, msUntilNextRun);
}

// =================================================================================
// KHU VỰC XỬ LÝ SỰ KIỆN (EVENT HANDLERS)
// =================================================================================

// Chạy khi toàn bộ DOM đã được tải
document.addEventListener("DOMContentLoaded", function () {
  // Khởi tạo các hàm cập nhật giao diện
  updateDateTime();
  setInterval(updateDateTime, 1000); // Cập nhật đồng hồ mỗi giây
  calculateAndDisplayAll(); // Tính toán và hiển thị dữ liệu lần đầu
  scheduleDailyUpdate(); // Lên lịch cập nhật hàng ngày

  // Gán sự kiện cho các nút trong khu vực tính toán
  const calcFromBatchBtn = document.getElementById("calcFromBatchBtn");
  const calcFromExpiryBtn = document.getElementById("calcFromExpiryBtn");

  if (calcFromBatchBtn) {
    calcFromBatchBtn.addEventListener("click", handleCalcFromBatch);
  }
  if (calcFromExpiryBtn) {
    calcFromExpiryBtn.addEventListener("click", handleCalcFromExpiry);
  }

  // Khởi tạo các dropdown cho khu vực Validator
  populateAreaSelector();
  populateGroupSelector(); // Chạy lần đầu để hiển thị dropdown group bị vô hiệu hóa
  populateProductSelector(); // Chạy lần đầu để hiển thị dropdown line bị vô hiệu hóa

  // Thêm event listener cho các dropdown của validator
  const areaSelect = document.getElementById("areaSelect");
  const groupSelect = document.getElementById("groupSelect");
  const productSelect = document.getElementById("productSelect");
  const startCameraBtn = document.getElementById("startCameraBtn");

  // Hàm kiểm tra và bật/tắt nút "Start Camera"
  function toggleCameraButton() {
    if (areaSelect.value && groupSelect.value && productSelect.value) {
      startCameraBtn.disabled = false;
    } else {
      startCameraBtn.disabled = true;
    }
  }

  if (areaSelect) {
    areaSelect.addEventListener("change", (event) => {
      populateGroupSelector(event.target.value);
      populateProductSelector(); // Reset product selector
      toggleCameraButton();
    });
  }

  if (groupSelect) {
    groupSelect.addEventListener("change", (event) => {
      populateProductSelector(areaSelect.value, event.target.value);
      toggleCameraButton();
    });
  }
  if (productSelect) {
    productSelect.addEventListener("change", toggleCameraButton);
  }

  // Xử lý sự kiện cho tính năng Validate bằng Camera
  const stopCameraBtn = document.getElementById("stopCameraBtn");
  const captureBtn = document.getElementById("captureBtn");

  if (startCameraBtn) {
    startCameraBtn.addEventListener("click", startCamera);
  }
  if (stopCameraBtn) {
    stopCameraBtn.addEventListener("click", stopCamera);
  }
  if (captureBtn) {
    captureBtn.addEventListener("click", captureAndValidate);
  }
});

/**
 * Xử lý sự kiện khi người dùng nhấn nút "Calculate" từ Batch Code.
 */
// Hàm xử lý khi nhấn nút "Calculate" trong phần Batch Code
function handleCalcFromBatch() {
  const batchInput = document.getElementById("batchInput").value.trim(); // biến lưu giá trị nhập vào
  const resultDiv = document.getElementById("calcResult"); // biến lưu phần hiển thị kết quả

  // Regex để trích xuất năm (1 chữ số) và ngày Julian (3 chữ số)
  const match = batchInput.match(/^(\d)(\d{3})/); // biến lưu kết quả regex

  // Điều kiện kiểm tra kết quả regex
  if (match) {
    const yearDigit = parseInt(match[1], 10); // Lấy chữ số năm
    const julianDay = parseInt(match[2], 10); // Lấy ngày Julian

    // Xác định thế kỷ (giả định năm 202x)
    const currentYear = new Date().getFullYear(); // Lấy năm hiện tại
    const currentCentury = Math.floor(currentYear / 10) * 10; // Lấy thế kỷ hiện tại
    const productionYear = currentCentury + yearDigit; // Tính năm sản xuất đầy đủ

    // Tạo ngày sản xuất từ năm và ngày Julian

    const productionDate = julianToDate(productionYear, julianDay); // Tính ngày sản xuất từ năm và ngày Julian
    resultDiv.innerHTML = `<strong>Production Date:</strong> ${formatDate(
      productionDate,
    )}`; // Hiển thị kết quả ngày sản xuất nếu hợp lệ
    resultDiv.className = "alert alert-success mt-4";
    resultDiv.style.display = "block";
    // Nếu không hợp lệ, hiển thị thông báo lỗi
  } else {
    resultDiv.innerHTML =
      "<strong>Invalid Batch Code format.</strong> Expected format: YJJJ...";
    resultDiv.className = "alert alert-danger mt-4";
    resultDiv.style.display = "block";
  }
}

/**
 * Xử lý sự kiện khi người dùng nhấn nút "Calculate" từ Hạn sử dụng.
 */
function handleCalcFromExpiry() {
  const expiryInput = document.getElementById("expiryInput").value.trim();
  const shelfLife = parseInt(
    document.getElementById("shelfLifeSelect").value,
    10,
  );
  const resultDiv = document.getElementById("calcResult");

  const expiryDate = parseDateString(expiryInput);

  if (expiryDate) {
    const productionDate = subtractMonths(expiryDate, shelfLife);
    resultDiv.innerHTML = `<strong>Calculated Production Date:</strong> ${formatDate(
      productionDate,
    )}`;
    resultDiv.className = "alert alert-success mt-4";
    resultDiv.style.display = "block";
  } else {
    resultDiv.innerHTML =
      "<strong>Invalid Date format.</strong> Please use DD.MM.YYYY.";
    resultDiv.className = "alert alert-danger mt-4";
    resultDiv.style.display = "block";
  }
}

// =================================================================================
// KHU VỰC VALIDATE BẰNG CAMERA (CAMERA VALIDATION)
// =================================================================================
// Flow: 1. Chọn Area -> Group -> Product
//       2. Bấm "Start Camera" để kích hoạt camera
//       3. Bấm "Capture & Validate" để chụp ảnh và kiểm tra mã in
//       4. Hiển thị kết quả dưới dạng Overlay trên video
//       5. Bấm "Stop Camera" để tắt camera
// Nguyên tắc tiền xử lý ảnh:
// - Mã in nét liền: Tiền xử lý mặc định (tăng tương phản nhẹ, chuyển ảnh sang nhị phân).
// - Mã in laser/phản quang: Tăng tương phản mạnh để khử lóa.
// - Mã in phun/chấm: Sử dụng phép toán "dilation" để làm dày nét chữ.


let videoStream = null; // Biến toàn cục để lưu stream của camera để dừng sau này

/**
 * Kịch bản tiền xử lý 1: Mặc định (cho mã in nét liền).
 * @param {CanvasRenderingContext2D} context - Context của canvas chứa ảnh.
 * @param {number} width - Chiều rộng canvas.
 * @param {number} height - Chiều cao canvas.
 */
function preprocessScenario_Default(context, width, height) {
  const imageData = context.getImageData(0, 0, width, height);
  const data = imageData.data;
  // Tăng tương phản nhẹ và chuyển sang ảnh nhị phân (đen/trắng)
  const contrast = 1.2; // 20%
  const intercept = 128 * (1 - contrast);
  for (let i = 0; i < data.length; i += 4) {
    let r = data[i] * contrast + intercept;
    let g = data[i + 1] * contrast + intercept;
    let b = data[i + 2] * contrast + intercept;
    const gray = r * 0.21 + g * 0.72 + b * 0.07;
    const color = gray > 128 ? 255 : 0; // Thresholding
    data[i] = data[i + 1] = data[i + 2] = color;
  }
  context.putImageData(imageData, 0, 0);
}

/**
 * Kịch bản tiền xử lý 2: Tương phản cao (cho mã in laser/phản quang).
 * @param {CanvasRenderingContext2D} context - Context của canvas chứa ảnh.
 * @param {number} width - Chiều rộng canvas.
 * @param {number} height - Chiều cao canvas.
 */
function preprocessScenario_HighContrast(context, width, height) {
  const imageData = context.getImageData(0, 0, width, height);
  const data = imageData.data;
  // Tăng tương phản rất mạnh để khử lóa
  const contrast = 2.5; // 150%
  const intercept = 128 * (1 - contrast);
  for (let i = 0; i < data.length; i += 4) {
    let r = data[i] * contrast + intercept;
    let g = data[i + 1] * contrast + intercept;
    let b = data[i + 2] * contrast + intercept;
    // Chuyển sang thang xám sau khi tăng tương phản
    const gray = r * 0.299 + g * 0.587 + b * 0.114;
    const color = gray > 110 ? 255 : 0; // Giảm ngưỡng threshold một chút
    data[i] = data[i + 1] = data[i + 2] = color;
  }
  context.putImageData(imageData, 0, 0);
}

/**
 * Kịch bản tiền xử lý 3: Làm dày nét (cho mã in phun/chấm).
 * Sử dụng phép toán "dilation" để kết nối các điểm rời rạc.
 * @param {CanvasRenderingContext2D} context - Context của canvas chứa ảnh.
 * @param {number} width - Chiều rộng canvas.
 * @param {number} height - Chiều cao canvas.
 */
function preprocessScenario_Dilation(context, width, height) {
  // Bước 1: Chuyển sang ảnh nhị phân như mặc định
  preprocessScenario_Default(context, width, height);

  // Bước 2: Áp dụng Dilation để làm dày các pixel đen (nét chữ)
      // Dilation là một phép toán hình thái học giúp mở rộng các vùng sáng (ở đây là pixel đen)
      // trong ảnh nhị phân. Chúng ta sẽ kiểm tra vùng 3x3 xung quanh mỗi pixel.
      // Nếu có bất kỳ pixel nào trong vùng đó là đen, pixel hiện tại cũng sẽ trở thành đen.
  const originalImageData = context.getImageData(0, 0, width, height);
  const originalData = originalImageData.data;
  const newImageData = context.createImageData(width, height);
  const newData = newImageData.data;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const index = (y * width + x) * 4;
      let isBlack = false;
      // Kiểm tra vùng 3x3 xung quanh pixel hiện tại
      for (let j = -1; j <= 1; j++) {
        for (let i = -1; i <= 1; i++) {
          const newX = x + i;
          const newY = y + j;
          if (newX >= 0 && newX < width && newY >= 0 && newY < height) {
            const neighborIndex = (newY * width + newX) * 4;
            // Nếu có một pixel đen trong vùng lân cận
            if (originalData[neighborIndex] === 0) {
              isBlack = true;
              break;
            }
          }
        }
        if (isBlack) break;
      }
      // Nếu có lân cận đen, pixel hiện tại cũng trở thành đen
      if (isBlack) {
        newData[index] = newData[index + 1] = newData[index + 2] = 0;
      } else {
        newData[index] = newData[index + 1] = newData[index + 2] = 255;
      }
      newData[index + 3] = 255; // Alpha
    }
  }
  context.putImageData(newImageData, 0, 0);
}

/**
 * Tăng độ tương phản của ảnh trên canvas.
 * @param {ImageData} imageData - Dữ liệu ảnh từ canvas.
 * @param {number} contrast - Mức độ tương phản (100 là không thay đổi).
 */
function applyContrast(imageData, contrast) {
  const data = imageData.data;
  contrast = contrast / 100 + 1; // convert to factor
  const intercept = 128 * (1 - contrast);
  for (let i = 0; i < data.length; i += 4) {
    data[i] = data[i] * contrast + intercept;
    data[i + 1] = data[i + 1] * contrast + intercept;
    data[i + 2] = data[i + 2] * contrast + intercept;
  }
}

/**
 * Tìm đường viền lớn nhất trong ảnh đã được nhị phân hóa.
 * Đây là bước cốt lõi để tự động xác định vùng chứa văn bản.
 * @param {ImageData} imageData - Dữ liệu ảnh đã được xử lý.
 * @returns {object|null} - Bounding box { x, y, width, height } của vùng văn bản hoặc null.
 */
function findTextBoundingBox(imageData) {
  const { data, width, height } = imageData;
  const visited = new Uint8Array(width * height);
  let maxArea = 0;
  let bestBox = null;
  // Duyệt qua từng pixel trong ảnh
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const index = y * width + x;
      // Chỉ bắt đầu tìm kiếm từ pixel đen (văn bản) chưa được duyệt
      if (data[index * 4] === 0 && !visited[index]) {
        const points = [];
        const stack = [[x, y]];
        visited[index] = 1;
        let minX = x,
          maxX = x,
          minY = y,
          maxY = y;
        // Sử dụng thuật toán DFS để tìm tất cả các pixel kết nối
        while (stack.length > 0) {
          const [cx, cy] = stack.pop();
          points.push([cx, cy]);
          minX = Math.min(minX, cx);
          maxX = Math.max(maxX, cx);
          minY = Math.min(minY, cy);
          maxY = Math.max(maxY, cy);

          // Kiểm tra 8 pixel xung quanh
          for (let ny = cy - 1; ny <= cy + 1; ny++) {
            for (let nx = cx - 1; nx <= cx + 1; nx++) {
              if (
                nx >= 0 &&
                nx < width &&
                ny >= 0 &&
                ny < height &&
                !visited[ny * width + nx] &&
                data[(ny * width + nx) * 4] === 0
              ) {
                visited[ny * width + nx] = 1;
                stack.push([nx, ny]);
              }
            }
          }
        }

        const area = (maxX - minX + 1) * (maxY - minY + 1);
        if (area > maxArea) {
          maxArea = area;
          bestBox = {
            x: minX,
            y: minY,
            width: maxX - minX + 1,
            height: maxY - minY + 1,
          };
        }
      }
    }
  }
  return bestBox;
}

/**
 * Khởi động camera và hiển thị video feed.
 */
async function startCamera() {
  const video = document.getElementById("videoElement");
  const cameraFeed = document.getElementById("cameraFeed");
  const startBtn = document.getElementById("startCameraBtn");
  const stopBtn = document.getElementById("stopCameraBtn");
  const captureBtn = document.getElementById("captureBtn");
  const ocrStatus = document.getElementById("ocrStatus");

  // Ẩn nút Start, hiện các nút điều khiển camera
  startBtn.style.display = "none";
  stopBtn.style.display = "inline-block";
  cameraFeed.style.display = "block";
  captureBtn.style.display = "block";

  ocrStatus.textContent = "Starting camera...";

  try {
    // Yêu cầu truy cập camera sau của thiết bị với độ phân giải cao hơn
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "environment", // Ưu tiên camera sau
        width: { ideal: 1920 }, // Tăng độ phân giải để có ảnh nét hơn
        height: { ideal: 1080 },
      },
    });
    videoStream = stream; // Lưu stream lại để có thể dừng sau này
    video.srcObject = stream;
    video.onloadedmetadata = () => {
      video.play();
      ocrStatus.textContent = "Camera ready. Position the code in the box.";
    };
  } catch (err) {
    console.error("Error accessing camera: ", err);
    ocrStatus.textContent =
      "Error: Could not access camera. Please check permissions.";
    ocrStatus.className = "text-danger";
    stopCamera(); // Gọi hàm stop để reset giao diện
  }
}

/**
 * Dừng camera và reset giao diện về trạng thái ban đầu.
 */
function stopCamera() {
  const video = document.getElementById("videoElement");
  const cameraFeed = document.getElementById("cameraFeed");
  const startBtn = document.getElementById("startCameraBtn");
  const stopBtn = document.getElementById("stopCameraBtn");
  const captureBtn = document.getElementById("captureBtn");
  const ocrStatus = document.getElementById("ocrStatus");
  const validationResult = document.getElementById("validationResult");

  // Dừng tất cả các track trong stream
  if (videoStream) {
    videoStream.getTracks().forEach((track) => track.stop());
    videoStream = null;
  }

  // Reset các thành phần giao diện
  video.srcObject = null;
  startBtn.style.display = "inline-block";
  stopBtn.style.display = "none";
  cameraFeed.style.display = "none";
  captureBtn.style.display = "none";
  ocrStatus.textContent = "";
  validationResult.style.display = "none";
}

/**
 * Chụp ảnh từ video, thử nhiều kịch bản xử lý, nhận dạng và xác thực.
 */
async function captureAndValidate() {
  const video = document.getElementById("videoElement");
  const viewfinder = document.getElementById("viewfinder");
  const ocrStatus = document.getElementById("ocrStatus");
  const validationResult = document.getElementById("validationResult");
  const printTypeSelect = document.getElementById("printTypeSelect");

  ocrStatus.textContent = "Capturing & processing image...";
  validationResult.style.display = "none";

  // --- BƯỚC 1: CHỤP VÀ CẮT ẢNH TỪ VIDEO FEED ---
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d", { willReadFrequently: true });

  const videoWidth = video.videoWidth;
  const videoHeight = video.videoHeight;
  const box = viewfinder.getBoundingClientRect();
  const videoBox = video.getBoundingClientRect();

  const scaleX = videoWidth / videoBox.width;
  const scaleY = videoHeight / videoBox.height;

  const cropX = (box.left - videoBox.left) * scaleX;
  const cropY = (box.top - videoBox.top) * scaleY;
  const cropWidth = box.width * scaleX;
  const cropHeight = box.height * scaleY;

  canvas.width = cropWidth;
  canvas.height = cropHeight;

  context.drawImage(
    video,
    cropX,
    cropY,
    cropWidth,
    cropHeight,
    0,
    0,
    cropWidth,
    cropHeight,
  );

  // --- BƯỚC 2: XÁC ĐỊNH KỊCH BẢN CẦN CHẠY ---
  const allScenarios = {
    solid: { name: "Default (Solid)", process: preprocessScenario_Default },
    laser: {
      name: "High Contrast (Laser)",
      process: preprocessScenario_HighContrast,
    },
    inkjet: { name: "Dilation (Inkjet)", process: preprocessScenario_Dilation },
  };

  let scenariosToRun = [];
  const selectedPrintType = printTypeSelect.value;

  if (selectedPrintType === "auto") {
    // Chạy tất cả các kịch bản nếu chọn Auto-Detect
    scenariosToRun = [
      allScenarios.solid,
      allScenarios.laser,
      allScenarios.inkjet,
    ];
  } else if (allScenarios[selectedPrintType]) {
    // Chỉ chạy kịch bản đã chọn
    scenariosToRun.push(allScenarios[selectedPrintType]);
  }

  let ocrResultText = "";

  for (let i = 0; i < scenariosToRun.length; i++) {
    const scenario = scenariosToRun[i];
    const scenarioProgress =
      scenariosToRun.length > 1 ? `${i + 1}/${scenariosToRun.length}: ` : "";
    ocrStatus.textContent = `Analyzing with Scenario ${scenarioProgress}${scenario.name}...`;

    // Tạo một canvas tạm để xử lý, không ảnh hưởng đến ảnh gốc của vòng lặp
    const tempCanvas = document.createElement("canvas");
    const tempContext = tempCanvas.getContext("2d", {
      willReadFrequently: true,
    });
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    tempContext.drawImage(canvas, 0, 0);

    // Áp dụng kịch bản tiền xử lý
    scenario.process(tempContext, tempCanvas.width, tempCanvas.height);

    let finalCanvas = tempCanvas; // Mặc định dùng canvas đã xử lý

    // Tự động cắt vùng văn bản sau khi tiền xử lý
    const boundingBox = findTextBoundingBox(
      tempContext.getImageData(0, 0, tempCanvas.width, tempCanvas.height),
    );

    // CHỈ CẮT NẾU TÌM THẤY BOUNDING BOX HỢP LÝ
    if (boundingBox && boundingBox.width > 10 && boundingBox.height > 5) {
      console.log(`Scenario ${scenario.name}: Found text box, cropping...`);
      // Tạo canvas cuối cùng chỉ chứa vùng văn bản
      const croppedCanvas = document.createElement("canvas");
      const croppedContext = croppedCanvas.getContext("2d");
      const padding = 15; // Tăng padding để tránh cắt sát ký tự
      croppedCanvas.width = boundingBox.width + padding * 2;
      croppedCanvas.height = boundingBox.height + padding * 2;
      croppedContext.fillStyle = "white";
      croppedContext.fillRect(0, 0, croppedCanvas.width, croppedCanvas.height);
      croppedContext.drawImage(
        tempCanvas,
        boundingBox.x,
        boundingBox.y,
        boundingBox.width,
        boundingBox.height,
        padding,
        padding,
        boundingBox.width,
        boundingBox.height,
      );
      finalCanvas = croppedCanvas; // Dùng canvas đã được cắt
    } else {
      console.log(
        `Scenario ${scenario.name}: No significant text box found. Using full preprocessed image.`,
      );
      // Nếu không tìm thấy, vẫn tiếp tục với ảnh đã xử lý toàn bộ
    }

    const processedImageDataUrl = finalCanvas.toDataURL("image/png");

    // --- NHẬN DẠNG KÝ TỰ ---
    try {
      const {
        data: { text },
      } = await Tesseract.recognize(processedImageDataUrl, "eng", {
        logger: (m) => {
          if (m.status === "recognizing text") {
            ocrStatus.textContent = `Recognizing with ${scenario.name}... ${Math.round(m.progress * 100)}%`;
          }
        },
        tessedit_char_whitelist: "0123456789./:HSD ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        tessedit_pageseg_mode: Tesseract.PSM.PSM_SINGLE_LINE,
      });

      const cleanedText = text.trim();
      console.log(`Scenario ${scenario.name} OCR result: "${cleanedText}"`);

      // Điều kiện để chấp nhận kết quả: có ít nhất 3 ký tự và chứa ít nhất 1 chữ số
      if (cleanedText.length >= 3 && /\d/.test(cleanedText)) {
        ocrResultText = cleanedText;
        ocrStatus.textContent = `OCR Result (from ${scenario.name}): "${ocrResultText}"`;
        break; // Kết quả tốt, thoát khỏi vòng lặp
      }
    } catch (error) {
      console.error(`Tesseract Error on scenario ${scenario.name}:`, error);
    }
  }

  // --- BƯỚC 3: XÁC THỰC KẾT QUẢ CUỐI CÙNG ---
  if (ocrResultText) {
    validateOcrResult(ocrResultText);
  } else {
    ocrStatus.textContent =
      "Failed to recognize text after trying all scenarios.";
    validationResult.innerHTML =
      "<strong>Validation Failed:</strong> Could not recognize text clearly. Please try again.";
    validationResult.className = "alert alert-danger mt-3";
    validationResult.style.display = "block";
  }
}

/**
 * Xác thực văn bản được OCR trả về so với dữ liệu mong đợi.
 * @param {string} ocrText - Văn bản đã được nhận dạng.
 */
function validateOcrResult(ocrText) {
  const productSelect = document.getElementById("productSelect");
  const codeTypeSelect = document.getElementById("codeTypeSelect");
  const validationResult = document.getElementById("validationResult");

  const selectedProductId = productSelect.value;
  const selectedCodeType = codeTypeSelect.value;
  const product = products.find((p) => p.batchId === selectedProductId);

  if (!product) {
    validationResult.innerHTML = "<strong>Error:</strong> Product not found.";
    validationResult.className = "alert alert-warning mt-3";
    validationResult.style.display = "block";
    return;
  }

  // Lấy giá trị đúng từ bảng hiển thị (dùng innerHTML vì có thể chứa <br>)
  const expectedValueHTML = document.getElementById(
    product[
      selectedCodeType === "stick"
        ? "expiryId"
        : selectedCodeType === "bag"
          ? "expiryBagId"
          : "expiryCartonId"
    ],
  ).innerHTML;

  // Chuyển <br> thành khoảng trắng và loại bỏ các thẻ HTML khác để so sánh
  const expectedValue = expectedValueHTML
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]*>/g, "");

  // Chuẩn hóa cả 2 chuỗi: xóa khoảng trắng, ký tự đặc biệt không mong muốn
  const cleanOcr = ocrText.replace(/[^A-Z0-9/.:]/gi, "");
  const cleanExpected = expectedValue.replace(/[^A-Z0-9/.:]/gi, "");

  // Tạo Regex từ chuỗi mong đợi đã được làm sạch
  // Điều này giúp tìm kiếm chính xác hơn, bỏ qua các lỗi nhận dạng nhỏ
  const regex = new RegExp(cleanExpected.split("").join(".*"), "i");

  if (regex.test(cleanOcr)) {
    validationResult.innerHTML = `<strong><i class="fas fa-check-circle"></i> PASSED</strong><br>Expected: ${expectedValue}<br>Found: ${ocrText}`;
    validationResult.className = "alert alert-success mt-3";
  } else {
    validationResult.innerHTML = `<strong><i class="fas fa-times-circle"></i> FAILED</strong><br>Expected: ${expectedValue}<br>Found: ${ocrText}`;
    validationResult.className = "alert alert-danger mt-3";
  }
  validationResult.style.display = "block";
}

/**
 * Đổ dữ liệu các khu vực (duy nhất) vào dropdown.
 */
function populateAreaSelector() {
  const areaSelect = document.getElementById("areaSelect");
  if (!areaSelect) return;

  const areas = [...new Set(products.map((p) => p.area))];
  areaSelect.innerHTML = '<option value="">-- Select Area --</option>';
  areas.forEach((area) => {
    const option = document.createElement("option");
    option.value = area;
    option.textContent = area;
    areaSelect.appendChild(option);
  });
}

/**
 * Đổ dữ liệu các nhóm sản phẩm (duy nhất) vào dropdown dựa trên khu vực đã chọn.
 * @param {string} selectedArea - Khu vực được người dùng chọn.
 */
function populateGroupSelector(selectedArea) {
  const groupSelect = document.getElementById("groupSelect");
  if (!groupSelect) return;

  groupSelect.innerHTML = '<option value="">-- Select Group --</option>';
  groupSelect.disabled = true;

  if (!selectedArea) return;

  // Lấy danh sách các nhóm duy nhất từ khu vực đã chọn
  const groups = [
    ...new Set(
      products.filter((p) => p.area === selectedArea).map((p) => p.group),
    ),
  ];

  groups.forEach((group) => {
    const option = document.createElement("option");
    option.value = group;
    option.textContent = group;
    groupSelect.appendChild(option);
  });
  groupSelect.disabled = false;
}

/**
 * Đổ dữ liệu các dây chuyền sản xuất vào dropdown dựa trên nhóm đã chọn.
 * @param {string} selectedArea - Khu vực được người dùng chọn.
 * @param {string} selectedGroup - Nhóm sản phẩm được người dùng chọn.
 */
function populateProductSelector(selectedArea, selectedGroup) {
  const productSelect = document.getElementById("productSelect");
  const startCameraBtn = document.getElementById("startCameraBtn");
  if (!productSelect) return;

  productSelect.innerHTML = '<option value="">-- Select Line --</option>';
  productSelect.disabled = true;
  if (startCameraBtn) startCameraBtn.disabled = true;

  if (!selectedArea || !selectedGroup) {
    return;
  }

  // Lọc các sản phẩm thuộc khu vực và nhóm đã chọn
  const filteredProducts = products.filter(
    (p) => p.area === selectedArea && p.group === selectedGroup,
  );

  filteredProducts.forEach((product) => {
    const option = document.createElement("option");
    // Sử dụng batchId làm value vì nó là duy nhất
    option.value = product.batchId;
    option.textContent = `${product.productionLine} (${product.shelfLife}m)`;
    productSelect.appendChild(option);
  });

  productSelect.disabled = false;
}
