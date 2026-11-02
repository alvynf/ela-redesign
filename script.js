function submitPresensi() {
  const passcode = document.getElementById("passcode").value;
  const attendanceBox = document.getElementById("attendance-box");
  const successBox = document.getElementById("success-box");

  if (passcode.trim() === "") {
    alert("Silakan masukkan passcode presensi terlebih dahulu!");
    return;
  }

  // Simulasi submit presensi berhasil
  attendanceBox.style.display = "none";
  successBox.classList.remove("hidden");
}
