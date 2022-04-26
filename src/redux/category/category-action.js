
import categoryActionType from './category-types';

export const getAllCategories = (item) => ({
    type:categoryActionType.GET_ALL_CATEGORY,
    payload: item
})