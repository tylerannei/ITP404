/*
*   Tyler Anne Isaman
*   October 28, 2014
*   Unit Testing ReviewsReport (A)
*/

function ReviewsReport(name, data) {
	this.name = name;
	this.data = data;
}

///////////////// Create findWithLowestRating()

ReviewsReport.prototype.findWithLowestRating = function(ratingNum) {
    var ratings = [];

    this.data.forEach(function(review) {
        if (review.stars >= ratingNum) {
            ratings.push(review);
        }
    });

    return ratings;
};

///////////////// Use For Each

ReviewsReport.prototype.getAverageRating = function() {
    var rating  = 0;

    this.data.forEach(function(review) {
        rating += review.stars;
    });

    rating = rating/this.data.length;
    return rating;
};

ReviewsReport.prototype.getAverageCost = function() {
    var cost  = 0;

    this.data.forEach(function(review) {
        cost += review.cost;
    });

    cost = cost/this.data.length;
    return cost;
};

///////////////// No changes below

ReviewsReport.prototype.convertCostToDollarSign = function(averageCost) {
	if (averageCost < 1.5) {
		return '$';
	}
	else if (averageCost >= 1.5 && averageCost < 2.5) {
		return '$$';
	}
	else if (averageCost >= 2.5 && averageCost < 3.5) {
		return '$$$';
	}
	else {
		return '$$$$';
	}
};

ReviewsReport.prototype.summarize = function() {
	var averageCost = this.getAverageCost();
	var averageCostSymbol = this.convertCostToDollarSign(averageCost);

	return {
		name: this.name,
		averageStarRating: this.getAverageRating(),
		totalReviews: this.data.length,
		averageCost: {
			numeric: averageCost,
			symbol: averageCostSymbol
		}
	};
};