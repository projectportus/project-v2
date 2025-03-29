export interface Product{
    id: Number;
    title: String;
    price: Number;
    description: String;
    category: {
        id: Number;
        name: String;
        image: String;
    };
    images: string[];
}