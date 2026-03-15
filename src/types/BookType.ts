export type ReviewType = {
    id: string;
    rating: number;
    comment: string;
};

export type BookType = {
    id?: number;
    name: string;
    authorName?: string;
    genre?: string;
    numOfPages: number;
    reviews?: ReviewType[];
    price?: number;
    image?: string;
    //короче так нельзя делать, проблема в том что я не могу сюда передать функцию, предется писать отдельно
    // onDelete?: (id: number) => void;
}; 