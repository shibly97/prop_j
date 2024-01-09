
import moment from 'moment';

const monthMapping = {
    'January': 1,
    'February': 2,
    'March': 3,
    'April': 4,
    'May': 5,
    'June': 6,
    'July': 7,
    'August': 8,
    'September': 9,
    'October': 10,
    'November': 11,
    'December': 12
};

export const filterProperties = (properties, criteria) => {
    return properties.filter(property => {
        // Filter by type
        if (criteria.type !== 'any' && property.type !== criteria.type) return false;

        // Filter by price
        if ( criteria.minPrice && property.price < criteria.minPrice ) return false;
        if (criteria.maxPrice && property.price > criteria.maxPrice) return false;

        // Filter by bedrooms
        if (criteria.minBedrooms && property.bedrooms < criteria.minBedrooms) return false;
        if (criteria.maxBedrooms && property.bedrooms > criteria.maxBedrooms) return false;

        const addedDateMoment = moment(`${property.added.year}-${monthMapping[property.added.month]}-${property.added.day}`);
        const startDateMoment = criteria.startDate ? moment(criteria.startDate, "YYYY-MM-DD") : null;
        const endDateMoment = criteria.endDate ? moment(criteria.endDate, "YYYY-MM-DD") : null;

        if ((startDateMoment && addedDateMoment.isBefore(startDateMoment)) || 
            (endDateMoment && addedDateMoment.isAfter(endDateMoment))) {
            return false;
        }

        // Filter by postcode (assuming location starts with postcode)
        if (criteria.postcodeArea && !property.location.startsWith(criteria.postcodeArea)) return false;

        return true;
    });
};

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}