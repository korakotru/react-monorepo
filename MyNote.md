## แก้ปัญหา router ไม่เจอ path (404)
 -- Add this to webpack.config.js --
 devServer: {
      historyApiFallback: true
  }

## Extension Desc
- ESlint ช่วยตรวจ syntax ให้เป็นมาตรฐาน และลดข้อผิดพลาด
- Prettier ช่วยจัด format ของ code ให้อ่านง่าย 

## แก้ปัญหารัน nx affected -t test แล้ว error
แก้ที่ nx.json -> "defaultBase"  เปลี่ยนเป็น branch ที่ตรงกับ git ของเราเช่น main