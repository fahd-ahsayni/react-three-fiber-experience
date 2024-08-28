function easeOutQuad(x) {
  return 1 - (1 - x) * (1 - x);
}

export let controls = {};

// Event listeners for keyboard controls
window.addEventListener("keydown", (e) => {
  controls[e.key.toLowerCase()] = true;
});
window.addEventListener("keyup", (e) => {
  controls[e.key.toLowerCase()] = false;
});

// Function to setup button controls
const setupButtonControls = () => {
  const buttons = [
    { id: "left", key: "arrowleft" },
    { id: "right", key: "arrowright" },
    { id: "top", key: "arrowup" },
    { id: "bottom", key: "arrowdown" },
    { id: "turbo_speed", key: " " },
  ];

  buttons.forEach((button) => {
    const element = document.getElementById(button.id);
    element?.addEventListener("mousedown", () => (controls[button.key] = true));
    element?.addEventListener("mouseup", () => (controls[button.key] = false));
    element?.addEventListener(
      "touchstart",
      (e) => {
        e.preventDefault();
        controls[button.key] = true;
      },
      { passive: false }
    );
    element?.addEventListener("touchend", () => (controls[button.key] = false));
  });
};

// Initialize button controls when the DOM is fully loaded
window.addEventListener("DOMContentLoaded", setupButtonControls);

let maxVelocity = 0.04;
let jawVelocity = 0;
let pitchVelocity = 0;
let planeSpeed = 0.006;
export let turbo = 0;

export function updatePlaneAxis(x, y, z, planePosition, camera) {
  // Damping factors for velocities
  jawVelocity *= 0.95;
  pitchVelocity *= 0.95;

  // Clamping the velocities to maxVelocity
  if (Math.abs(jawVelocity) > maxVelocity)
    jawVelocity = Math.sign(jawVelocity) * maxVelocity;

  if (Math.abs(pitchVelocity) > maxVelocity)
    pitchVelocity = Math.sign(pitchVelocity) * maxVelocity;

  // Adjust yaw and pitch based on user input
  if (controls["arrowleft"]) {
    jawVelocity += 0.0008;
  }
  if (controls["arrowright"]) {
    jawVelocity -= 0.0008;
  }
  if (controls["arrowup"]) {
    pitchVelocity += 0.0008;
  }
  if (controls["arrowdown"]) {
    pitchVelocity -= 0.0008;
  }

  // Update orientation and position
  x.applyAxisAngle(z, jawVelocity);
  y.applyAxisAngle(z, jawVelocity);
  y.applyAxisAngle(x, pitchVelocity);
  z.applyAxisAngle(x, pitchVelocity);

  x.normalize();
  y.normalize();
  z.normalize();

  // Handle turbo speed and camera FOV
  if (controls[" "]) {
    turbo += 0.025;
  } else {
    turbo *= 0.95;
  }
  turbo = Math.min(Math.max(turbo, 0), 1);

  let turboSpeed = easeOutQuad(turbo) * 0.02;
  camera.fov = 45 + turboSpeed * 900; // smoothly updates FOV based on turbo
  camera.updateProjectionMatrix();

  planePosition.add(z.clone().multiplyScalar(-planeSpeed - turboSpeed));
}
