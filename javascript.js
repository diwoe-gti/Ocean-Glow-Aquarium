// หัวข้อ
document.addEventListener('DOMContentLoaded', () => {
    // 1. ดึงองค์ประกอบของปุ่มและเมนู
    const menuToggle = document.getElementById('menu-toggle');
    const menuList = document.getElementById('menu-list');

    if (menuToggle && menuList) {
        // 2. เพิ่ม Event Listener เมื่อคลิกปุ่ม
        menuToggle.addEventListener('click', () => {
            // สลับ (Toggle) คลาส 'active'
            menuList.classList.toggle('active'); 
        });
        
        // (ทางเลือก) ปิดเมนูเมื่อคลิกที่ลิงก์
        const menuLinks = menuList.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuList.classList.remove('active');
            });
        });
    }
    
});

// สิ้นสุดหัวข้อ
// โซนสัตว์น้ำ

function showText(id) {
  const target = document.getElementById(`${id}-text`);
  if (!target) {
    console.warn('ไม่พบ element id:', `${id}-text`);
    return;
  }

  // ถ้าแสดงอยู่ => ซ่อนทั้งหมด / ถ้าไม่แสดง => ซ่อนอันอื่นแล้วแสดงอันนี้
  if (!target.classList.contains('hidden')) {
    target.classList.add('hidden');
  } else {
    document.querySelectorAll('.gallery article').forEach(a => a.classList.add('hidden'));
    target.classList.remove('hidden');
  }
}
// สิ้นสุดโซนสัตว์
// จองตั๋ว
function bookTicket() {
      const name = document.getElementById('fullname').value;
      const date = document.getElementById('date').value;
      const count = parseInt(document.getElementById('ticketCount').value);
      const type = document.getElementById('ticketType').value;
      const resultBox = document.getElementById('result');
      const form = document.getElementById('ticketForm');

      if (!name || !date || !count) {
        alert("⚠️ กรุณากรอกข้อมูลให้ครบถ้วน");
        return;
      }

      let price = type === "ผู้ใหญ่" ? 100 : 50;
      let total = price * count;

      resultBox.style.display = 'block';
      resultBox.innerHTML = `
        <h3>📢 รายละเอียดการจอง</h3>
        <p>ชื่อผู้จอง: ${name}</p>
        <p>วันที่เข้าชม: ${date}</p>
        <p>จำนวนตั๋ว: ${count} ใบ (${type})</p>
        <p>ราคารวม: ${total} บาท</p>
        <p>✅ กรุณาชำระเงินที่เคาน์เตอร์ในวันเข้าชม</p>
      `;

      // แสดงป๊อปอัป
      document.getElementById('successModal').style.display = 'flex';

      // รีเซ็ตฟอร์ม
      form.reset();
    }

    function closeModal() {
      // ปิดป๊อปอัป
      document.getElementById('successModal').style.display = 'none';

      // ซ่อนรายละเอียดการจอง
      document.getElementById('result').style.display = 'none';
    }
//สิ้นสุดการจองตั๋ว



