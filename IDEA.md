Ý tưởng cho bài test:
- Layout được xây dựng dựa theo bản thiết kế trên Figma, đảm bảo đúng cấu trúc, khoảng cách và bố cục tổng thể.
- Animation được code dựa theo video demo.
  +  sử dụng IntersectionObserver để kích hoạt hiệu ứng khi người dùng cuộn đến từng phần.
  +  đối với Header đầu tiên (We are on a mission to help you seize opportunities in Asia): kiểm tra xem phần tử này đã hiển thị đủ 50% chiều cao trong khung nhìn (viewport) hay chưa? nếu đủ rồi sẽ hiển thị với hiệu ứng trượt từng dòng lên.
  +  đối với các khối tròn: Khi cuộn đến vị trí của khối đầu tiên (20 - Years experience in Asia.) thì bắt đầu cho hiệu ứng hiển thị các khối theo thứ tự, hiển thị theo hình thức là từ vị trí lệch phải một chút so với khối center (35+),
     từ từ phóng to khối và trượt nội dung của nó vào vị trí đúng.
  +  đối với phần List cuối cùng: sau khi các khối tròn hiển thị hết, các phần tử trong List sẽ tuần tự trượt lên.
