function volume_sphere(event) {
  event.preventDefault(); // Prevent form from reloading the page

  const radiusInput = document.getElementById('radius').value;
  const volumeField = document.getElementById('volume');
  const radius = parseFloat(radiusInput);

  // Validate radius
  if (isNaN(radius) || radius < 0) {
    volumeField.value = "NaN";
    return;
  }

  // Volume formula: (4/3) × π × r³
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Show rounded volume
  volumeField.value = volume.toFixed(4);
}

window.onload = function () {
  document.getElementById('MyForm').onsubmit = volume_sphere;
};
