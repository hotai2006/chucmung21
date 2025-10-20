class ShootingStar {
    constructor() {
        this.star = document.createElement('div');
        this.star.classList.add('heart');
        this.setStyles();
    }

    setStyles() {
        // --- CÁC BIẾN NÀY ĐƯỢC DÙNG TRONG CSS CỦA BẠN ---

        // Đặt kích thước ngẫu nhiên (từ 0.5 đến 1.5)
        this.setNewStyleVar('--size', Math.random() + 0.5);

        // Đặt thời gian bay ngẫu nhiên (từ 5 đến 11 giây)
        this.setNewStyleVar('--duration', Math.random() * 6 + 5 + 's');

        // Đặt độ trễ ngẫu nhiên (từ 0 đến 5 giây)
        this.setNewStyleVar('--delay', Math.random() * 5 + 's');

        // Vị trí bắt đầu ngẫu nhiên (từ -30% đến 70% trên màn hình)
        this.setNewStyleVar('--top', (Math.random() * 100 - 30) + '%');
        this.setNewStyleVar('--left', (Math.random() * 100 - 30) + '%');
        
        // Thêm biến --travel còn thiếu. CSS của bạn cần nó để di chuyển
        this.setNewStyleVar('--travel', '100vw');

        // --- CÁC BIẾN CŨ (BỊ XÓA VÌ CSS KHÔNG DÙNG) ---
        // this.setNewStyleVar('--angle', ...);
        // this.setNewStyleVar('--start-x', ...);
        // this.setNewStyleVar('--start-y', ...);
    }

    setNewStyleVar(styleName, styleValue) {
        this.star.style.setProperty(styleName, styleValue);
    }

    getStar() {
        return this.star;
    }
}

class NightSky {
    constructor() {
        this.nightSky = document.getElementById('night-sky');

        // --- SỬA LỖI Ở ĐÂY ---
        // Chỉ cần gán trực tiếp số lượng sao bạn muốn
        this.numberOfStars = 50; // <-- THAY ĐỔI SỐ LƯỢNG SAO Ở ĐÂY

        this.addStars(this.numberOfStars);
    }

    addStars(numberOfStars) {
        for (let i = 0; i < numberOfStars; i++) {
            this.nightSky.appendChild(new ShootingStar().getStar());
        }
    }
}

// Chạy code để tạo sao băng
new NightSky();