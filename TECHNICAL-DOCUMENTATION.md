# Tài liệu kỹ thuật — Outlet Live

## Cấu trúc mã nguồn

| Tệp | Trách nhiệm |
| --- | --- |
| `index.html` | Khung HTML và nạp tài nguyên |
| `styles.css` | Responsive layout, palette, thành phần UI |
| `app.js` | State, mock data, router phía client và thao tác commerce |
| `README.md` | Tổng quan và cách chạy |
| `USER-GUIDE.md` | Hướng dẫn dành cho người dùng |
| `SRS.md` | Đặc tả yêu cầu phần mềm |

## Kiến trúc prototype

Ứng dụng là single-page application không có framework. Hàm `render()` dựng lại giao diện từ `state`; `go()` đổi route; `add()`, `remove()` và `placeOrder()` xử lý giỏ/đơn. `localStorage` lưu hai khoá `outlet-cart` và `outlet-orders` để giữ trạng thái sau khi tải lại.

## Dữ liệu mock

`products` và `lives` trong `app.js` là nguồn dữ liệu tĩnh. Các URL ảnh là ảnh minh hoạ từ Unsplash. Không có catalogue hoặc dữ liệu thương mại thật.

## Lộ trình backend đề xuất

1. Tạo REST/GraphQL API cho auth, catalogue, cart, orders và roles.
2. Chuyển `localStorage` sang database quan hệ; thêm object storage cho invoice/evidence.
3. Tích hợp cổng thanh toán với webhook idempotent; tuyệt đối không xử lý số thẻ ở frontend.
4. Tích hợp nhà cung cấp live video và chat realtime qua token ngắn hạn.
5. Bổ sung kiểm thử E2E cho luồng: login → live → cart → deposit → order tracking.

## Bảo mật tối thiểu khi production

- Hash mật khẩu bằng Argon2/bcrypt; cookie `HttpOnly`, `Secure`, `SameSite`.
- Kiểm tra quyền shopper/admin tại API, không chỉ ẩn UI.
- Xác thực giá/tồn kho phía server khi tạo đơn; lưu audit log mọi thay đổi.
- Bảo vệ upload bằng malware scan, signed URL và hạn chế định dạng/kích thước.
