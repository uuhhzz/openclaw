function showDemo() {
  const modal = document.getElementById('demoModal');
  modal.classList.add('active');
}

function closeDemo() {
  const modal = document.getElementById('demoModal');
  modal.classList.remove('active');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeDemo();
  }
});

document.getElementById('demoModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    closeDemo();
  }
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.feature-card').forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
  observer.observe(card);
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.style.background = 'rgba(10, 10, 15, 0.95)';
  } else {
    header.style.background = 'rgba(10, 10, 15, 0.8)';
  }
});
