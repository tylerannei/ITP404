/*
 *   Tyler Anne Isaman
 *   October 28, 2014
 *   Unit Testing ReviewsReport (A)
 */

describe('Reviews Report', function() {
    var reviews;
    var restaurantReportA;
    var restaurantReportB;

    beforeEach(function() {

        reviews = {};
        reviews.restaurantA = [
            {title: '', stars: 4, cost: 3, description: '' },
            {title: '', stars: 4, cost: 3, description: '' },
            {title: '', stars: 3, cost: 2, description: '' },
            {title: '', stars: 1, cost: 3, description: '' },
            {title: '', stars: 1, cost: 1, description: '' }
        ];
        reviews.restaurantB = [
            {title: '', stars: 4, cost: 4, description: '' },
            {title: '', stars: 4, cost: 3, description: '' },
            {title: '', stars: 1, cost: 2, description: '' },
            {title: '', stars: 1, cost: 3, description: '' },
            {title: '', stars: 1, cost: 1, description: '' }
        ];

        restaurantReportA = new ReviewsReport('Restaurant A 2014', reviews.restaurantA);
        restaurantReportB = new ReviewsReport('Restaurant B 2014', reviews.restaurantB);
    });

    describe('getAverageRating', function() {
        it('should return average rating', function() {

            expect(restaurantReportA.getAverageRating()).toEqual(13/5);
            expect(restaurantReportB.getAverageRating()).toEqual(11/5);
        });
    });

    describe('getAverageCost', function() {
        it('should return average cost', function() {

            expect(restaurantReportA.getAverageCost()).toEqual(12/5);
            expect(restaurantReportB.getAverageCost()).toEqual(13/5);
        });
    });

    describe('convertCostToDollarSign', function() {
        it('should covert cost to dollar sign', function() {

            var restACost = restaurantReportA.convertCostToDollarSign(restaurantReportA.getAverageCost());
            var restBCost = restaurantReportB.convertCostToDollarSign(restaurantReportB.getAverageCost());

            expect(restACost).toEqual('$$');
            expect(restBCost).toEqual('$$$');
        });
    });

    describe('summarize', function() {
        it('should return summary', function() {
            expect(restaurantReportA.summarize()).toEqual({
                name: "Restaurant A 2014",
                averageStarRating: 13/5,
                totalReviews: 5,
                averageCost: {
                    numeric: 12/5,
                    symbol: "$$"
                }
            });

            expect(restaurantReportB.summarize()).toEqual({
                name: "Restaurant B 2014",
                averageStarRating: 11/5,
                totalReviews: 5,
                averageCost: {
                    numeric: 13/5,
                    symbol: "$$$"
                }
            });
        });
    });
});