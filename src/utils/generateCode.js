export function generateCode(length = 10) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
  
    const charset = letters + numbers;
  
    let code = "";
  
    for (let i = 0; i < length; i++) {
      code += charset.charAt(Math.floor(Math.random() * charset.length));
    }
  
    return code;
  }
  