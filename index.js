// Header blur on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== RESERVATION MODAL FUNCTIONALITY =====
const rooms = document.querySelectorAll('.room');
const modal = document.getElementById('reservationModal');
const closeModal = document.getElementById('closeModal');
const roomTypeInput = document.getElementById('roomType');

// Open modal when a room is clicked
rooms.forEach(room => {
  room.addEventListener('click', () => {
    const roomName = room.querySelector('h3').innerText;
    roomTypeInput.value = roomName;
    modal.style.display = 'flex';
  });
});

// Close modal when clicking the close button
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Handle form submission
document.getElementById('reservationForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert(`✅ Reservation confirmed for ${roomTypeInput.value}!`);
  modal.style.display = 'none';
});
