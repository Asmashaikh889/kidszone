document.addEventListener('DOMContentLoaded', function() {
    const correctOtp = generateOtp();
    alert(`Your OTP is: ${correctOtp}`);

    document.getElementById('otpForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const userOtp = document.getElementById('otp').value;
        const message = document.getElementById('message');

        if (userOtp === correctOtp) {
            alert('OTP is correct! Redirecting to success page.');
            window.location.href = 'succes.html'; // Replace with your success page
        } else {
            message.textContent = 'Invalid OTP. Please try again.';
        }
    });

    function generateOtp() {
        // Generate a 6-digit OTP
        return Math.floor(100000 + Math.random() * 900000).toString();
    }
});