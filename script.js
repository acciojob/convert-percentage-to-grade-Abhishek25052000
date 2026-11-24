function calculateGrade(percentage) {

    // Check for negative or non-numeric input
    if (typeof percentage !== "number" || !Number.isFinite(percentage) || percentage < 0) {
        return "F";
    }

    // Round percentage to nearest integer
    percentage = Math.round(percentage);

    // Calculate grade
    if (percentage >= 90) {
        return "A";
    }
    else if (percentage >= 80) {
        return "B";
    }
    else if (percentage >= 70) {
        return "C";
    }
    else if (percentage >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}