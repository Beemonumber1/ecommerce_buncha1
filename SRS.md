# Software Requirements Specification — Outlet Live

## 1. Mục tiêu và phạm vi

Outlet Live là webapp kết nối người mua tại Việt Nam với shopper tại các outlet châu Âu qua phiên livestream. Người dùng khám phá phiên live, chọn sản phẩm, nhận ước tính chi phí minh bạch, đặt cọc và theo dõi đơn. Phiên bản hiện tại là prototype frontend.

## 2. Vai trò

| Vai trò | Quyền chính |
| --- | --- |
| Khách/Người mua | Duyệt hàng, xem live, quản lý giỏ và đặt đơn |
| Shopper | Mở phiên live, ghim món, xác minh giá/tồn và cập nhật bằng chứng |
| Quản trị viên | Duyệt shopper, điều phối đơn, quản lý catalogue và xử lý khiếu nại |

## 3. Yêu cầu chức năng

| ID | Yêu cầu | Ưu tiên |
| --- | --- | --- |
| FR-01 | Người dùng đăng nhập/đăng ký, đặt lại mật khẩu | Must |
| FR-02 | Người dùng duyệt/tìm kiếm/lọc sản phẩm và thương hiệu | Must |
| FR-03 | Hiển thị danh sách và phòng livestream với trạng thái live, shopper, người xem, chat và món ghim | Must |
| FR-04 | Shopper ghim sản phẩm, cập nhật giá/tồn và trả lời chat | Must |
| FR-05 | Hệ thống tính giá outlet, phí dịch vụ, vận chuyển/thuế dự kiến và tổng tạm tính | Must |
| FR-06 | Người dùng quản lý giỏ, địa chỉ và tạo yêu cầu đặt cọc | Must |
| FR-07 | Quản lý trạng thái đơn: chờ xác minh, chờ cọc, đã mua, vận chuyển, hoàn tất/hủy | Must |
| FR-08 | Lưu bằng chứng mua hàng và gửi thông báo trạng thái | Should |
| FR-09 | Danh sách yêu thích, yêu cầu săn món và đánh giá shopper | Could |

## 4. Yêu cầu phi chức năng

- Giao diện responsive từ 360px; hỗ trợ Chrome, Edge, Safari và Firefox phiên bản gần đây.
- Mọi khoản chi phí phải có nhãn “ước tính” hoặc “đã xác nhận” và thời điểm cập nhật.
- Mật khẩu phải băm; phiên đăng nhập bảo mật; phân quyền theo vai trò.
- Video dùng HLS/WebRTC qua CDN; mục tiêu tải trang chính dưới 3 giây trên mạng 4G tốt.
- Tuân thủ bảo vệ dữ liệu cá nhân, có chính sách hoàn/hủy và lưu vết thay đổi đơn.

## 5. Dữ liệu cốt lõi

`User`, `ShopperProfile`, `LiveSession`, `Product`, `Cart`, `Order`, `OrderItem`, `Payment`, `Shipment`, `Evidence`, `ChatMessage`, `Notification`.

Một `Order` gồm nhiều `OrderItem`; từng item lưu giá outlet, tỷ giá, phí dịch vụ, logistics/thuế ước tính và bằng chứng riêng. `LiveSession` thuộc một shopper và chứa nhiều sản phẩm ghim.

## 6. Luồng nghiệp vụ chính

1. Shopper phát live tại outlet và ghim sản phẩm.
2. Người mua xem chi tiết thực tế, chọn món vào giỏ.
3. Người mua xác nhận địa chỉ và đặt cọc theo chính sách.
4. Shopper xác minh tồn kho/giá, mua hàng và tải hoá đơn/bằng chứng.
5. Ops cập nhật vận chuyển; người mua nhận thông báo đến khi giao thành công.

## 7. Tích hợp đề xuất

- Identity: OAuth/email/password; Payment: cổng thanh toán nội địa; video: Mux, AWS IVS hoặc Agora.
- Notification: FCM/APNs, email; logistics: API đối tác vận chuyển; storage: S3-compatible object storage.

## 8. Tiêu chí nghiệm thu prototype

- Người dùng có thể hoàn thành toàn bộ luồng từ login đến tạo đơn demo.
- Tổng tiền thay đổi theo giỏ và phí dịch vụ tối thiểu 300.000 ₫.
- Đơn mới vẫn hiện sau khi tải lại trang nhờ localStorage.
