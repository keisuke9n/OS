function calculateMetrics() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const wc = parseFloat(document.getElementById('wc').value);

    // Calculate BMI
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    // Calculate ABSI
    const wcInMeters = wc / 100;
    const absi = wcInMeters / (Math.pow(bmi, 2/3) * Math.pow(heightInMeters, 1/2));

    // Calculate BRI
    const briInnerValue = 1 - Math.pow((wc / (Math.PI * height)), 2);
    const bri = (briInnerValue >= 0) ? (364.2 - 365.5 * Math.sqrt(briInnerValue)) : null;

    // Display results
    document.getElementById('bmi').textContent = `BMI: ${bmi.toFixed(2)}`;
    document.getElementById('absi').textContent = `ABSI: ${absi.toFixed(3)}`;
    document.getElementById('bri').textContent = bri ? `BRI: ${bri.toFixed(2)}` : "BRI: N/A";
    document.getElementById('results').style.display = 'block';
}
