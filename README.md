Bài 2: Sửa lỗi sao chép và truy cập thuộc tính
1. Phân tích lỗi
- bookingReservation.priceKey tìm thuộc tính có tên priceKey, không phải roomPrice. Sửa thành bookingReservation[priceKey].
- Gán bookingReservation.discountCode = undefined vẫn giữ key trong object. Dùng delete bookingReservation.discountCode để xóa hẳn thuộc tính.
- Trong vòng lặp, bookingReservation.key tìm thuộc tính có tên key. Sửa thành bookingReservation[key] để lấy giá trị theo biến.
2. Test Cases
Trường hợp kiểm thử	Dữ liệu đầu vào	Kết quả sai thực tế	Kết quả đúng mong đợi
TC01: Tính tiền và hiển thị thông tin	Giá phòng 1.500.000đ, giờ nhận phòng 9	Giá cơ sở là undefined, tổng tiền là NaN, giá trị thuộc tính in ra undefined	Phụ thu 450.000đ, tổng tiền 1.950.000đ, hiển thị đúng giá trị từng thuộc tính
TC02: Voucher không hợp lệ	isVoucherValid = false, mã SUMMER10	Gán undefined nhưng key discountCode vẫn tồn tại	Xóa bằng delete; biểu thức 'discountCode' in bookingReservation trả về false


3. Kiểm tra
Sau khi chạy solution_ex2.js, dòng kiểm tra cuối cùng phải in:
'discountCode' in bookingReservation: false
