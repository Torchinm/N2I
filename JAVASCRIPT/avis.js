const slider = document.getElementById("slider");
        const sliderValue = document.getElementById("sliderValue");
        const glitchText = document.getElementById("glitchText");
        const errorMsg = document.getElementById("errorMsg");
        slider.addEventListener('input', function() {
            let value = slider.value;
            sliderValue.textContent = value;
            if (Math.random() < 0.2) {
                glitchText.style.visibility = 'visible';
                setTimeout(() => {
                    glitchText.style.visibility = 'hidden';
                }, 1000);
            }
            if (Math.random() < 0.1) {
                errorMsg.style.display = 'block';
                setTimeout(() => {
                    errorMsg.style.display = 'none';
                    slider.value = 0;
                    sliderValue.textContent = '0';
                }, 3000);
            }
        });
        slider.addEventListener('mousedown', function() {
            document.body.style.backgroundColor = '#222';
        });
        slider.addEventListener('mouseup', function() {
            document.body.style.backgroundColor = '#111';
        });

        
const captchaSlider = document.getElementById('captchaSlider');
const captchaImage = document.getElementById('captchaImage');
const submitButton = document.getElementById('submitButton');

captchaSlider.addEventListener('input', function() {
    if (captchaSlider.value == 100) {
        captchaImage.style.display = 'block';
        submitButton.disabled = false;
    } else {
        captchaImage.style.display = 'none';
        submitButton.disabled = true;
    }
});
