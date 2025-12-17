// Create holographic sphere from particles
function createParticleSphere() {
    const sphere = document.getElementById('particleSphere');
    const radius = 175;
    const particleCount = 300;

    // Create sphere layers
    for (let i = 0; i < 6; i++) {
        const layer = document.createElement('div');
        layer.className = 'sphere-layer';
        sphere.appendChild(layer);
    }

    // Create particles on sphere surface
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = Math.random() > 0.9 ? 'particle-dot bright' : 'particle-dot';
        
        // Distribute particles evenly on sphere (Fibonacci algorithm)
        const phi = Math.acos(-1 + (2 * i) / particleCount);
        const theta = Math.sqrt(particleCount * Math.PI) * phi;
        
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);
        
        particle.style.left = '50%';
        particle.style.top = '50%';
        particle.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
        
        sphere.appendChild(particle);
    }
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', createParticleSphere);

// Open modal function
function openModal(type) {
    const modalId = type + 'Modal';
    document.getElementById(modalId).classList.add('active');
}

// Close modal function
function closeModal(type) {
    const modalId = type + 'Modal';
    document.getElementById(modalId).classList.remove('active');
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
}

// Close modal on ESC key press
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('active');
        });
    }
});
