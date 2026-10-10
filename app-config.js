/**
 * ====================================================================
 * UNIVERSAL CLASSROOM APP CONFIGURATION (ไฟล์ตั้งค่าศูนย์กลางของระบบ)
 * ====================================================================
 * คุณครูสามารถเปลี่ยนข้อมูลในเทอมใหม่/วิชาใหม่ได้ที่นี่ที่เดียว
 * เช่น เปลี่ยนชื่อโรงเรียน, ชื่อครู, ภาคเรียน และวิชาที่สอน
 */

const APP_CONFIG = {
  // 1. ข้อมูลทั่วไปของโรงเรียนและผู้สอน
  schoolName: "โรงเรียนสนมวิทยาคาร",
  teacherName: "ครูณัฐพล สุขยานุดิษฐ",
  department: "กลุ่มสาระการเรียนรู้วิทยาศาสตร์และเทคโนโลยี",
  academicYear: "ปีการศึกษา 2569 (ภาคเรียนที่ 2)",
  teacherPassword: "physics2569", // รหัสผ่านล็อกอินเข้าหน้าแดชบอร์ดครูผู้สอน

  // 2. การเชื่อมต่อฐานข้อมูล Google Sheets (Google Apps Script Web App URL)
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbyHNwis_FVEYcpP17cpCjEh0muj8GQKpUR3IHU98DF9KYtQg5Xb3rvzR6OIwV5X8YHF/exec",

  // 3. การเชื่อมต่อ Firebase (สำหรับระบบโพลสด Exit Ticket และแชทสดในห้อง)
  firebase: {
    apiKey: "AIzaSyBg6PQHuldDCDFritxryxvw3m0I9E-aBBk",
    authDomain: "physics-classroom-cab2b.firebaseapp.com",
    projectId: "physics-classroom-cab2b",
    storageBucket: "physics-classroom-cab2b.firebasestorage.app",
    messagingSenderId: "942217956980",
    appId: "1:942217956980:web:81356e9e6f7cd0738d821"
  },

  // 4. รายชื่อวิชาที่เปิดสอนในเทอมนี้
  subjects: ["ฟิสิกส์ 4", "ฟิสิกส์ 6"],
  // รายชื่อห้องแบบไม่ระบุตัวนักเรียน สำหรับเมนูโพลและ Exit Ticket
  classes: ["5-1", "5-2", "5-3", "6-1", "6-2", "6-3"],

  // 5. ลิงก์เอกสาร/สื่อการเรียนรู้ที่น่าสนใจ (แยกตามรายวิชา) แสดงในหน้านักเรียนและเครื่องมือสอน
  learningResources: {
    'ฟิสิกส์ 4': [
      { title: '📘 เอกสารประกอบการเรียน บทที่ 1 งานและพลังงาน (PDF)', url: 'https://drive.google.com', desc: 'ไฟล์สรุปเนื้อหาและแบบฝึกหัดประจำบท' },
      { title: '🎥 คลิปสรุปบทเรียน: กฎการเคลื่อนที่ของนิวตัน', url: 'https://youtube.com', desc: 'วิดีโออธิบายแนวคิดและโจทย์ตัวอย่าง 15 นาที' },
      { title: '📝 สรุปสูตรและแนวข้อสอบ ฟิสิกส์ 3', url: 'https://drive.google.com', desc: 'ใบสรุปสูตรกระชับสำหรับทบทวนก่อนสอบ' }
    ],
    'ฟิสิกส์ 6': [
      { title: '📘 เอกสารประกอบการเรียน: ไฟฟ้าสถิตและสนามไฟฟ้า', url: 'https://drive.google.com', desc: 'เอกสารสรุปทฤษฎีและตัวอย่างการคำนวณ' },
      { title: '💻 สื่อการทดลองจำลอง Interactive Physics (PhET)', url: 'https://phet.colorado.edu', desc: 'โปรแกรมจำลองทัศนวิสัยสนามไฟฟ้าและประจุ' },
      { title: '📝 สรุปสูตรและแนวข้อสอบ ฟิสิกส์ 5', url: 'https://drive.google.com', desc: 'รวมสูตรสำคัญและแนวข้อสอบกลางภาค' }
    ]
  },

  // (คงไว้เพื่อรองรับระบบเก่าสูตรคณิต/วิทย์)
  formulas: {
    'ฟิสิกส์ 4': [
      { s: 'F = ma', d: 'กฎข้อที่ 2 ของนิวตัน' },
      { s: 'W = Fs cosθ', d: 'งาน (Work)' },
      { s: 'KE = ½mv²', d: 'พลังงานจลน์' },
      { s: 'PE = mgh', d: 'พลังงานศักย์โน้มถ่วง' },
      { s: 'P = W/t', d: 'กำลัง (Power)' },
      { s: 'p = mv', d: 'โมเมนตัม' },
      { s: 'J = FΔt = Δp', d: 'แรงดล' },
      { s: 'v² = u² + 2as', d: 'สมการการเคลื่อนที่' },
      { s: 'g = 9.8 m/s²', d: 'ค่าความเร่งโน้มถ่วง' },
      { s: 'T = 2π√(L/g)', d: 'คาบการแกว่งลูกตุ้ม' }
    ],
    'ฟิสิกส์ 6': [
      { s: 'F = kQ₁Q₂/r²', d: 'กฎของคูลอมบ์' },
      { s: 'E = F/q', d: 'สนามไฟฟ้า' },
      { s: 'V = kQ/r', d: 'ศักย์ไฟฟ้า' },
      { s: 'C = Q/V', d: 'ความจุไฟฟ้า' },
      { s: 'I = Q/t', d: 'กระแสไฟฟ้า' },
      { s: 'V = IR', d: 'กฎของโอห์ม' },
      { s: 'P = IV = I²R', d: 'กำลังไฟฟ้า' },
      { s: 'F = qvB sinθ', d: 'แรงแม่เหล็กกระทำต่อประจุ' },
      { s: 'ε = -ΔΦ/Δt', d: 'กฎการเหนี่ยวนำของฟาราเดย์' },
      { s: 'k = 9×10⁹ N·m²/C²', d: 'ค่าคงที่คูลอมบ์' }
    ]
  },

  // 6. ดึงรายการห้องเรียนทั้งหมดแบบรวมอัตโนมัติ (สำหรับระบบโพลและ Exit Ticket)
  getClassList: function() {
    const classSet = new Set(this.classes || []);
    Object.values(this.students || {}).forEach(rooms => {
      Object.keys(rooms).forEach(room => {
        // แปลงรูปแบบ เช่น "ม.5/1" -> "5-1"
        const formatted = room.replace(/ม\./g, '').replace(/\//g, '-').trim();
        if (formatted) classSet.add(formatted);
      });
    });
    return Array.from(classSet).sort();
  }
};

// ส่งออกให้รองรับทั้ง Browser global (window) และ ES Module
if (typeof window !== 'undefined') {
  window.APP_CONFIG = APP_CONFIG;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = APP_CONFIG;
}
