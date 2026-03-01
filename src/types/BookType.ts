export type ReviewType = {
    id: string;
    rating: number;
    comment: string;
};

export type BookType = {
    name: string;
    authorName: string;
    genre: string;
    numOfPages: number;
    reviews: ReviewType[];
};