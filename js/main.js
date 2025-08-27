document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('download-btn');
    const pkgUrlInput = document.getElementById('pkg-url');

    downloadBtn.addEventListener('click', () => {
        const pkgUrl = pkgUrlInput.value.trim();

        if (pkgUrl) {
            // For PS4, a direct redirection might be more reliable
            window.location.href = pkgUrl;
        } else {
            alert('Please enter a PKG file URL.');
        }
    });
});
