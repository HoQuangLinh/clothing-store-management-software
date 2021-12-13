export default function validatePassWord(user) {
  let errors = {};

  if (!user.currentPassword) {
    errors.currentPassword = "Bạn chưa nhập mật khẩu";
  }

  if (user.newPassword.length < 6) {
    errors.newPassword = "Mật khẩu tối thiểu là 6 ký tự";
  }
  if (user.newPassword === user.currentPassword) {
    errors.newPassword = "Bạn đang nhập mật khẩu cũ";
    errors.confirmPassword = "Bạn đang nhập mật khẩu cũ";
  }
  if (user.confirmPassword !== user.newPassword) {
    errors.confirmPassword = "Mật khẩu bạn nhập không khớp";
  }
  return errors;
}
