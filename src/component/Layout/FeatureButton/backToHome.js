import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import '../../../css/layout.css'

function BackToHome() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Thêm một lắng nghe sự kiện cuộn
    window.addEventListener('scroll', handleScroll);

    // Dọn dẹp lắng nghe sự kiện khi thành phần bị unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Mảng phụ thuộc trống có nghĩa là hiệu ứng chạy một lần sau khi render ban đầu

  const handleScroll = () => {
    // Kiểm tra vị trí cuộn và cập nhật trạng thái showButton
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="App">
      {showButton && (
        <div className="back-to-home" onClick={scrollToTop}>
          <i className="fa-solid fa-arrow-up-long"></i>
        </div>
      )}
    </div>
  );
}

export default BackToHome;
