
function showLoginForm() {
  document.getElementById("loginModal").style.display = "flex";
}
function hideLoginForm() {
  document.getElementById("loginModal").style.display = "none";
}
function showRegisterForm() {
  hideLoginForm();
  document.getElementById("registerModal").style.display = "flex";
}
function hideRegisterForm() {
  document.getElementById("registerModal").style.display = "none";
}


const mainImage = document.getElementById('mainImage');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function switchPhoto(thumbnail) {
  mainImage.src = thumbnail.src;
}



// Also hide lightbox if "×" is clicked
document.querySelector('.lightbox-close').addEventListener('click', function (event) {
  event.stopPropagation(); // prevent click bubbling
  hideLightbox();
});






function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.style.display = "none";
  }
}




function showPreview(input) {
  const preview = document.getElementById("imagePreview");
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = "block";
    };
    reader.readAsDataURL(input.files[0]);
  }
}





document.getElementById("formAnnonce").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    id: Date.now(),
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
    city: document.getElementById("city").value,
    type: document.getElementById("type").value,
    email: document.getElementById("email").value
  };

  let annonces = JSON.parse(localStorage.getItem("annonces") || "[]");
  annonces.push(data);
  localStorage.setItem("annonces", JSON.stringify(annonces));

  window.location.href = "/account";  // Flask route
});










document.querySelector(".form-clear-btn").addEventListener("click", () => {
  document.querySelector("input[name='ville']").value = "";
});




function validateDates() {
  const depart = new Date(document.getElementById("date_depart").value);
  const retour = new Date(document.getElementById("date_retour").value);

  if (!depart || !retour || isNaN(depart) || isNaN(retour)) return true;

  const diffTime = retour.getTime() - depart.getTime();
  const diffDays = diffTime / (1000 * 3600 * 24);

  if (diffDays > 20) {
    alert("La durée maximale autorisée est de 20 jours.");
    return false;
  }

  if (diffDays < 0) {
    alert("La date de retour doit être après la date de départ.");
    return false;
  }

  return true;
}



function validateMonthlyDates() {
  const depart = new Date(document.getElementById("date_depart2").value);
  const retour = new Date(document.getElementById("date_retour2").value);

  if (!depart || !retour || isNaN(depart) || isNaN(retour)) return true;

  const diffTime = retour.getTime() - depart.getTime();
  const diffDays = diffTime / (1000 * 3600 * 24);

  if (diffDays < 28) {
    alert("La durée minimale pour une location mensuelle est de 1 mois (au moins 28 jours).");
    return false;
  }

  return true;
}