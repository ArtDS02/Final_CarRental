import React, { useState } from 'react';
import '../../../css/recharge.css';
import QRCodeImage from '../../img/QRcode.jpg'; // Thay đường dẫn tới ảnh QR của bạn

const RECHARGE = () => {
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const handleSelectAmount = (amount) => {
        setSelectedAmount(amount);
    };

    const handleSendRequest = () => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 5000);
    };

    return (
        <div className="recharge-container" style={{ backgroundColor: '#222222' }}>
            <div className="recharge-options">
                <h2 style={{ color: 'white' }}>RECHARGE</h2>
                <p style={{ color: 'red', fontSize:"20px" }}>After sending the request, please transfer the money via the QR code provided, with the content following the template 'Amount - RECHARGE'</p>
                <p style={{ color: 'red', fontSize:"20px" }}>Your request will be processed in a few minutes</p>

                <p style={{ color: 'white' }}>Select the amount of money you wish to deposit</p>
                <div className='option-group'>
                    <button
                        type="button"
                        className={`recharge-button ${selectedAmount === 100 ? 'selected' : ''}`}
                        style={{ color: 'white' }}
                        onClick={() => handleSelectAmount(100)}
                    >
                        100
                    </button>
                    <button
                        type="button"
                        className={`recharge-button ${selectedAmount === 200 ? 'selected' : ''}`}
                        style={{ color: 'white' }}
                        onClick={() => handleSelectAmount(200)}
                    >
                        200
                    </button>
                    <button
                        type="button"
                        className={`recharge-button ${selectedAmount === 500 ? 'selected' : ''}`}
                        style={{ color: 'white' }}
                        onClick={() => handleSelectAmount(500)}
                    >
                        500
                    </button>
                </div>
                <button type="button" className="send-request-button" onClick={handleSendRequest}>
                    Gửi yêu cầu
                </button>
            </div>
            <div className="qr-code">
                <img src={QRCodeImage} alt="QR Code" />
            </div>
            {showPopup && (
                <div className="popup">
                    <p>Đã gửi yêu cầu</p>
                </div>
            )}
        </div>
    );
};

export default RECHARGE;
