export interface Post {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  author: {
    _ref: string;
    _type: string;
  };
  body: [Object];
  categories: [Object];
  mainImage: { _type: string; asset: [Object] };
  slug: { _type: string; current: string };
  title: string;
}
