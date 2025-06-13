function formatDate(date) {
	return new Date(date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

const formatPriceWithDollar = (num) => {
    return "$" + parseFloat(num).toFixed(2);
};

function formatDateTime(dateString) {
    const date = new Date(dateString)
    const day = date.getUTCDate(); // Use UTC to prevent timezone shifts
    const month = date.getUTCMonth() + 1; // getUTCMonth() is zero-based
    const year = date.getUTCFullYear();

    return `${day}/${month}/${year}`;
}

function formatTime(num) {
    return num.toString().padStart(2, "0");
}

function formattedRunTime(minutes) {
    const second = minutes * 60;
    const hours = Math.floor(second / 3600);
    const minutesRemaining = Math.floor((second % 3600) / 60);

    return `${hours > 0 ? `${hours}h ${minutesRemaining.toString().padStart(2, '0')}m` : `${minutesRemaining}m`}`;
}

export {
    formatDate,
    formattedRunTime,
    formatDateTime,
    formatTime,
    formatPriceWithDollar
}