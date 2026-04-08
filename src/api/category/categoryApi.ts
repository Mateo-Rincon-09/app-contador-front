import { CategoryInterface } from "../../interface/category.interface";
import { categoryEndpoint } from "../endpoints";
import fetchApi from "../fetchApi";

export interface CategoryRequest {
    name: string;
}

export interface CategoryResponse {
    category: CategoryInterface;
}

export const newCategory = ( request: CategoryRequest): Promise <CategoryResponse> => {
    return fetchApi.post(categoryEndpoint.post.create, request).then((res) => res.data);
}