// جلب العناصر من الـ DOM
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-link a');

// عند الضغط على الـ Hamburger Menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('show');
});

// إغلاق القائمة عند الضغط على أي عنصر منها
navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('show');
    });
});

// عرض الصورة في الـ Modal عند الضغط عليها
function openModal(image) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = image.src;
    captionText.innerHTML = image.alt;
}

// إغلاق الـ Modal عند الضغط على الـ × أو خارج الصورة
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// إغلاق الـ Modal عند الضغط خارج الصورة
window.onclick = function (event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
