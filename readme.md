# Julian Date & Batch Code Validator

## Giới thiệu

**Julian Date & Batch Code Validator** là một ứng dụng web chuyên dụng được thiết kế để hỗ trợ các hoạt động trong môi trường sản xuất. Công cụ này cung cấp một giao diện tập trung để hiển thị, tính toán và xác thực mã lô (batch code) và ngày hết hạn (expiration date) cho nhiều dây chuyền sản xuất khác nhau, dựa trên ngày Julian và các quy tắc định dạng riêng biệt.

Ứng dụng được xây dựng với mục tiêu tối ưu hóa quy trình kiểm tra chất lượng, giảm thiểu sai sót do con người và cung cấp thông tin sản xuất một cách nhanh chóng, chính xác.

---

## Các tính năng chính

### 1. Bảng điều khiển (Dashboard) trực quan

- **Thông tin thời gian thực:** Hiển thị ngày & giờ hiện tại, và tự động tính toán **ngày Julian** tương ứng (ngày thứ mấy trong năm).
- **Mã lô mẫu:** Cung cấp một ví dụ về định dạng mã lô (batch code) của ngày hiện tại.
- **Bảng HSD nhanh:** Một bảng tóm tắt các ngày hết hạn tương ứng với các hạn sử dụng phổ biến (9, 10, 12, 15 tháng...), giúp người dùng tham khảo nhanh mà không cần tính toán.

### 2. Bảng thông tin sản xuất chi tiết

- **Tự động cập nhật:** Toàn bộ thông tin trên bảng được tính toán và cập nhật tự động hàng ngày vào lúc nửa đêm.
- **Hiển thị đa định dạng:** Đối với mỗi dây chuyền sản xuất, ứng dụng hiển thị:
  - **Mã Lô (Batch Code):** Được tạo theo công thức `[Số cuối của năm][Ngày Julian][Mã nhà máy][Hậu tố]`.
  - **Ngày hết hạn (Expiry Date):** Được hiển thị theo nhiều định dạng khác nhau để phù hợp với từng loại bao bì:
    - **Stick:** `DD MM YY [Hậu tố][Ngày sản xuất]` (ví dụ: `15 01 27 L15`)
    - **Bag:** `DD.MM.YYYY` hoặc `DD/MM/YYYY` tùy theo nhóm sản phẩm.
    - **Carton:** `[Mã Lô] HSD DD/MM/YY` hoặc `[Mã Lô] DD/MM/YYYY [Thời gian]` tùy nhóm sản phẩm.

### 3. Công cụ tính toán sản xuất

Đây là một tiện ích hai chiều mạnh mẽ giúp truy ngược thông tin sản xuất.

- **Tính từ Mã Lô (Batch Code):**
  - Người dùng nhập một mã lô bất kỳ.
  - Ứng dụng sẽ phân tích mã, trích xuất năm sản xuất và ngày Julian để tìm ra **ngày sản xuất** chính xác.
- **Tính từ Hạn sử dụng (Expiry Date):**
  - Người dùng nhập ngày hết hạn (theo định dạng `DD.MM.YYYY`) và chọn hạn sử dụng tương ứng.
  - Ứng dụng sẽ tính ngược lại để tìm ra **ngày sản xuất** của lô hàng đó.

### 4. Xác thực Mã bằng Camera (OCR)

Đây là tính năng nâng cao và hữu ích nhất của dự án, cho phép xác thực mã in trên sản phẩm thực tế.

- **Sử dụng Camera sau:** Ứng dụng ưu tiên sử dụng camera sau của thiết bị (`facingMode: "environment"`) để quét mã.
- **Tiền xử lý ảnh thông minh:**
  - **Grayscale (Thang độ xám):** Chuyển đổi hình ảnh màu sang ảnh xám để loại bỏ nhiễu màu từ bao bì.
  - **Thresholding (Nhị phân hóa):** Chuyển ảnh xám thành ảnh đen trắng. Kỹ thuật này cực kỳ hiệu quả trong việc **loại bỏ các vùng bị lóa sáng (glare)** và các chi tiết nền không mong muốn, giúp ký tự trở nên rõ nét.
- **Cấu hình Tesseract.js chuyên dụng:**
  - **Whitelist:** Giới hạn các ký tự mà Tesseract được phép nhận dạng (`0123456789/:.HSD...`). Điều này ngăn AI "đoán" ra các ký tự không liên quan, tăng độ chính xác.
  - **Page Segmentation Mode (PSM):** Sử dụng chế độ `PSM 6`, báo cho Tesseract rằng nó đang xử lý một khối văn bản duy nhất, rất phù hợp với định dạng mã in phun.
- **Xác thực bằng Regex (Biểu thức chính quy):**
  - Thay vì so sánh chuỗi một cách tuyệt đối, ứng dụng sử dụng Regex để **trích xuất** các mẫu dữ liệu (ngày tháng, mã lô) từ chuỗi văn bản lộn xộn mà OCR trả về.
  - Chỉ khi trích xuất thành công và dữ liệu khớp với giá trị mong đợi, kết quả mới được tính là **HỢP LỆ (PASSED)**.

---

## Cấu trúc và Khả năng mở rộng

Dự án được thiết kế với khả năng mở rộng cao. Toàn bộ thông tin về các dây chuyền sản xuất được quản lý tập trung trong mảng `products` ở đầu tệp `script.js`.

Để **thêm, sửa hoặc xóa một sản phẩm/dây chuyền**, bạn chỉ cần chỉnh sửa các đối tượng trong mảng này mà không cần can thiệp vào logic phức tạp của ứng dụng.

```javascript
// Ví dụ về cấu trúc một sản phẩm
{
  group: "2IN1", // Nhóm sản phẩm
  productionLine: "SANKO 14", // Tên dây chuyền
  shelfLife: 12, // Hạn sử dụng (tháng)
  batchSuffix: "X", // Ký tự hậu tố cho mã lô
  // ... các ID của element trong HTML để cập nhật giao diện
}
```

---

## Công nghệ sử dụng

- **HTML5**
- **CSS3** (với sự hỗ trợ của **Bootstrap 4.5** cho giao diện responsive)
- **JavaScript (ES6+)**
- **Tesseract.js:** Thư viện OCR để nhận dạng ký tự từ hình ảnh.
- **Font Awesome:** Cho các biểu tượng (icons).
